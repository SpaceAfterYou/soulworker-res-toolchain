<template>
  <aside class="sidebar">
    <div class="upload-button">
      <label class="upload-res" for="upload-res"> Import RES file </label>
      <input type="file" accept=".res" id="upload-res" @change="onSelectFile" />
    </div>

    <div class="client-type sidebar-block">
      <div class="client-type-active">
        <span class="client-type-active-caption"> Active client: </span>
        <span class="client-type-active-name-wrapper">
          <span class="red"> {{ clientName[activeClient.token] }} </span>
          <div class="client-type-available-list">
            <div class="client-type-available-item" v-for="(client, token) of clients" :key="`clients-${token}`" @click="changeActiveClient(client)">
              {{ clientName[token] }}
            </div>
          </div>
        </span>
      </div>
      <div class="client-type-help">To change active client, hover mouse on their name.</div>
    </div>

    <template v-if="file">
      <div class="convert-to-csv" @click="convertToCSV">Export CSV file</div>
      <a target="_blank" class="how-to" href="https://digitalreadymarketing.com/open-chinese-japanese-encoding-gwmt-csv-file/">How To: correct open japanese files in excel</a>
    </template>
    <div class="sidebar-block">
      <h3>Supports files</h3>
      <div class="supports-name" v-for="(parser, name) of activeClient.parsers" :key="`supported-files-${name}`">
        <span class="red"> [{{ parser.tested }}] </span>
        {{ name }}
      </div>
    </div>
  </aside>

  <main class="main">
    <TableComponent :table="file.parsed" v-if="file !== null" />
  </main>
</template>

<script lang="ts">
import { Parser } from "binary-parser";
import { defineAsyncComponent, defineComponent, ref } from "vue";

import Korean_tb_UI_String from "./restypes/client/kr/tb_UI_String";
import Korean_tb_Option_String from "./restypes/client/kr/tb_Option_String";
import Korean_tb_item_model from "./restypes/client/kr/tb_item_model";
import Korean_tb_item from "./restypes/client/kr/tb_item";
import Korean_tb_Appearance from "./restypes/client/kr/tb_Appearance";
import Korean_tb_Create_Cloth from "./restypes/client/kr/tb_Create_Cloth";
import Korean_tb_CreateOption from "./restypes/client/kr/tb_CreateOption";
import Korean_tb_Customize_Info from "./restypes/client/kr/tb_Customize_Info";
import Korean_tb_Customize_Eyes from "./restypes/client/kr/tb_Customize_Eyes";
import Korean_tb_Customize_Hair from "./restypes/client/kr/tb_Customize_Hair";
import Korean_tb_Customize_Skin from "./restypes/client/kr/tb_Customize_Skin";
import Korean_tb_Customize_View_Ani from "./restypes/client/kr/tb_Customize_View_Ani";
import Korean_tb_Customize_View_Costume from "./restypes/client/kr/tb_Customize_View_Costume";
import Korean_tb_Customize_View_Sound from "./restypes/client/kr/tb_Customize_View_Sound";
import Korean_tb_Customize_View_Weapon from "./restypes/client/kr/tb_Customize_View_Weapon";
import Korean_tb_Event_Condition from "./restypes/client/kr/tb_Event_Condition";
import Korean_tb_District from "./restypes/client/kr/tb_District";
import Korean_tb_Npc from "./restypes/client/kr/tb_Npc";

import Japanese_tb_CashBilling_Info from "./restypes/client/jp/tb_CashBilling_Info";
import Japanese_tb_CashShop from "./restypes/client/jp/tb_CashShop";
import Japanese_tb_NPC from "./restypes/client/jp/tb_NPC";
import Japanese_tb_Akashic_Records from "./restypes/client/jp/tb_Akashic_Records";
import Japanese_tb_Random_Option from "./restypes/client/jp/tb_Random_Option";
import Japanese_tb_Social_Item from "./restypes/client/jp/tb_Social_Item";

// import Japanese_tb_Echelon from "./restypes/client/jp/tb_Echelon";
import Japanese_tb_Title_Info from "./restypes/client/jp/tb_Title_Info";
import Japanese_tb_Title_Reward from "./restypes/client/jp/tb_Title_Reward";
// import Japanese_tb_Title_String from "./restypes/client/jp/tb_Title_String";
import Japanese_tb_Buff from "./restypes/client/jp/tb_Buff";

import { basename } from "path";

type ResTable = { count: number; rows: { [key: string]: any }[] };

type ResFile = {
  filename: string;
  parsed: ResTable;
};

const enum GameToken {
  kr,
  jp,
}

type ClientInfo = {
  token: GameToken;
  parsers: {
    [key: string]: {
      parser: Parser;
      tested: string;
    };
  };
};

type ClientInfos = Record<GameToken.kr | GameToken.jp, ClientInfo>;

export default defineComponent({
  name: "app",
  methods: {
    changeActiveClient(client: ClientInfo) {
      this.activeClient = client;
      console.log(this.activeClient);
    },

    convertToCSV() {
      const header = Object.keys(this.file!.parsed.rows[0]).join();
      const body = this.file!.parsed.rows.map((c) => Object.values(c).join()).join("\n");

      this.downloadFile(`${header}\n${body}`, `${this.file!.filename}.csv`);
    },

    downloadFile(data: string, fileName: string) {
      const csvData = data;
      const blob = new Blob([csvData], { type: "application/csv;charset=utf-16;" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.style.visibility = "hidden";
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },

    onSelectFile(ev: Event) {
      const target = ev.target as HTMLInputElement;
      if (target.files!.length < 1) {
        return;
      }

      this.file = null;

      const file = target.files![0];
      const fileReader = new FileReader();

      fileReader.onload = (ev) => (this.file = this.resParse(basename(file.name.toLowerCase(), ".res"), Buffer.from(ev.target!.result as Uint8Array)));

      fileReader.readAsArrayBuffer(file);
    },

    resParse(name: string, array: Buffer): ResFile | null {
      console.log(this.activeClient.parsers);

      if (!(name in this.activeClient.parsers)) {
        return null;
      }

      const parser = this.activeClient.parsers[name].parser;
      return { filename: name, parsed: parser.parse(array) as ResTable };
    },
  },

  data() {
    return {
      file: null as ResFile | null,
      clientName: {
        [GameToken.kr]: "[OnStove] Korean",

        [GameToken.jp]: "[WeMade] Japanese",
      },
    };
  },

  setup() {
    const clients: ClientInfos = {
      [GameToken.kr]: {
        token: GameToken.kr,
        parsers: {},
      },
      [GameToken.jp]: {
        token: GameToken.jp,
        parsers: {},
      },
    };

    const activeClient = ref(clients[GameToken.kr]);

    const resRegisterParser = (gameToken: GameToken, tested: string, name: string, func: (parser: Parser) => any) => {
      const fixedName = name.toLowerCase();

      const parser = new Parser()
        .endianess("little")
        .uint32("count")
        .array("rows", { length: "count", type: func(new Parser()) })
        .uint16("crcLen")
        .string("crc", { length: "crcLen" }) as unknown as Parser;

      clients[gameToken].parsers[fixedName] = { tested, parser };
    };

    const registerKorean = () => {
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_UI_String", Korean_tb_UI_String);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_Option_String", Korean_tb_Option_String);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_item_model", Korean_tb_item_model);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_item", Korean_tb_item);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_Appearance", Korean_tb_Appearance);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_Create_Cloth", Korean_tb_Create_Cloth);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_CreateOption", Korean_tb_CreateOption);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_Customize_Info", Korean_tb_Customize_Info);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_Customize_Eyes", Korean_tb_Customize_Eyes);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_Customize_Hair", Korean_tb_Customize_Hair);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_Customize_Skin", Korean_tb_Customize_Skin);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_Customize_View_Ani", Korean_tb_Customize_View_Ani);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_Customize_View_Ani", Korean_tb_Customize_View_Ani);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_Customize_View_Costume", Korean_tb_Customize_View_Costume);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_Customize_View_Sound", Korean_tb_Customize_View_Sound);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_Customize_View_Weapon", Korean_tb_Customize_View_Weapon);
      resRegisterParser(GameToken.kr, "1.7.50.11", "tb_Event_Condition", Korean_tb_Event_Condition);
      resRegisterParser(GameToken.kr, "1.7.66.13", "tb_District", Korean_tb_District);
      resRegisterParser(GameToken.kr, "1.7.66.13", "tb_Npc", Korean_tb_Npc);
    };

    const registerJapanese = () => {
      resRegisterParser(GameToken.jp, "1.11.11.7 (kr-1.7.50.11)", "tb_UI_String", Korean_tb_UI_String);
      resRegisterParser(GameToken.jp, "1.11.11.7", "tb_CashBilling_Info", Japanese_tb_CashBilling_Info);
      resRegisterParser(GameToken.jp, "1.11.11.7", "tb_CashShop", Japanese_tb_CashShop);
      resRegisterParser(GameToken.jp, "1.11.11.7", "tb_NPC", Japanese_tb_NPC);
      resRegisterParser(GameToken.jp, "1.11.11.7", "tb_Akashic_Records", Japanese_tb_Akashic_Records);
      resRegisterParser(GameToken.jp, "1.11.11.7", "tb_Random_Option", Japanese_tb_Random_Option);
      resRegisterParser(GameToken.jp, "1.11.11.7", "tb_Social_Item", Japanese_tb_Social_Item);

      // resRegisterParser(GameToken.jp, "1.11.9.3", "tb_Echelon", Japanese_tb_Echelon);
      resRegisterParser(GameToken.jp, "1.11.9.3", "tb_Title_Info", Japanese_tb_Title_Info);
      resRegisterParser(GameToken.jp, "1.11.9.3", "tb_Title_Reward", Japanese_tb_Title_Reward);
      // resRegisterParser(GameToken.jp, "1.11.9.3", "tb_Title_String", Japanese_tb_Title_String);
      resRegisterParser(GameToken.jp, "1.11.9.3", "tb_Buff", Japanese_tb_Buff);
    };

    registerKorean();
    registerJapanese();

    return {
      activeClient,
      clients,
    };
  },

  components: {
    TableComponent: defineAsyncComponent(() => import("./components/table.vue")),
  },
});
</script>

<style lang="scss">
@use "@/styles/reset.scss";
@use "@/styles/typography.scss";

#app {
  background-color: rgb(29, 29, 29);
  color: #ebebeb;
  display: grid;
  grid-template-columns: min-content 1fr;
}

h3 {
  font-size: 24rem;
  padding: 40px 10px 20px 10px;
}
</style>

<style lang="scss" scoped>
.sidebar {
  background-color: rgb(19, 19, 19);
}

.main {
  overflow: auto;
  padding: 40px;
  max-width: 100%;
}
</style>

<style lang="scss" scoped>
.sidebar-block {
  padding: 10px;
}

.supports-name,
.client-type {
  white-space: nowrap;
}

.red {
  color: rgb(110, 223, 252);
}
</style>

<style lang="scss" scoped>
.client-type-active-name-wrapper {
  position: relative;

  &:hover {
    .client-type-available-list {
      visibility: unset;
    }
  }
}

.client-type-available-item {
  cursor: pointer;
  padding: 4px 10px;
  background-color: rgba(255, 0, 85, 0.4);

  &:hover {
    background-color: rgba(255, 0, 85, 0.7);
  }
}

.client-type-available-list {
  visibility: hidden;
  position: absolute;
  top: 100%;
  left: 0;
}

.client-type-help {
  white-space: initial;
  font-style: italic;
  color: rgb(160, 160, 160);
}
</style>

<style lang="scss" scoped>
label {
  display: block;
  padding: 40px 0;
  text-align: center;
  cursor: pointer;
}

#upload-res {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.upload-res {
  background-color: rgba(255, 0, 85, 0.4);

  &:hover {
    background-color: rgba(255, 0, 85, 0.7);
  }
}

.convert-to-csv {
  padding: 10px;
  background-color: rgba(0, 183, 255, 0.4);

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 183, 255, 0.7);
  }
}

.how-to {
  display: block;
  padding: 10px;
  background-color: rgba(0, 255, 55, 0.4);

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 255, 55, 0.7);
  }
}
</style>
