<template>
  <aside class="sidebar">
    <div class="upload-button">
      <label class="upload-res" for="upload-res">Import RES file</label>
      <input type="file" accept=".res" id="upload-res" @change="onSelectFile" />
    </div>

    <div class="sidebar-block">Tested on KR files ver <span class="red">1.7.50.11</span></div>

    <template v-if="file">
      <div class="convert-to-csv" @click="convertToCSV">Export CSV file</div>
      <a
        target="_blank"
        class="how-to"
        href="https://digitalreadymarketing.com/open-chinese-japanese-encoding-gwmt-csv-file/"
      >
        How To: correct open japanese files in excel
      </a>
    </template>
    <div class="sidebar-block">
      <h3>Supports files</h3>
      <div class="supports-name" v-for="(_, name) in parsers" :key="name">
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
import { defineAsyncComponent, defineComponent } from "vue";

import tb_UI_String from "./restypes/client/kr/tb_UI_String";
import tb_Option_String from "./restypes/client/kr/tb_Option_String";
import tb_item_model from "./restypes/client/kr/tb_item_model";
import tb_item from "./restypes/client/kr/tb_item";
import tb_Appearance from "./restypes/client/kr/tb_Appearance";
import tb_Create_Cloth from "./restypes/client/kr/tb_Create_Cloth";
import tb_CreateOption from "./restypes/client/kr/tb_CreateOption";
import tb_Customize_Info from "./restypes/client/kr/tb_Customize_Info";
import tb_Customize_Eyes from "./restypes/client/kr/tb_Customize_Eyes";
import tb_Customize_Hair from "./restypes/client/kr/tb_Customize_Hair";
import tb_Customize_Skin from "./restypes/client/kr/tb_Customize_Skin";
import tb_Customize_View_Ani from "./restypes/client/kr/tb_Customize_View_Ani";
import tb_Customize_View_Costume from "./restypes/client/kr/tb_Customize_View_Costume";
import tb_Customize_View_Sound from "./restypes/client/kr/tb_Customize_View_Sound";
import tb_Customize_View_Weapon from "./restypes/client/kr/tb_Customize_View_Weapon";
import tb_Event_Condition from "./restypes/client/kr/tb_Event_Condition";

import tb_CashBilling_Info from "./restypes/client/jp/tb_CashBilling_Info";
import tb_CashShop from "./restypes/client/jp/tb_CashShop";
import tb_NPC from "./restypes/client/kr/tb_NPC";

import { basename } from "path";

type ResTable = { count: number; rows: { [key: string]: any }[] };

type ResFile = {
  filename: string;
  parsed: ResTable;
};

export default defineComponent({
  name: "app",

  methods: {
    convertToCSV() {
      const header = Object.keys(this.file!.parsed.rows[0]).join();
      const body = this.file!.parsed.rows.map((c) => Object.values(c).join()).join("\n");

      this.downloadFile(`${header}\n${body}`, `${this.file!.filename}.csv`);
    },

    downloadFile(data: string, fileName: string) {
      var csvData = data;
      var blob = new Blob([csvData], {
        type: "application/csv;charset=utf-16;",
      });

      var link = document.createElement("a");
      var csvUrl = URL.createObjectURL(blob);
      link.href = csvUrl;
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

      fileReader.onload = (ev) =>
        (this.file = this.resParse(
          basename(file.name.toLowerCase(), ".res"),
          Buffer.from(ev.target!.result as Uint8Array),
        ));

      fileReader.readAsArrayBuffer(file);
    },

    resParse(name: string, array: Buffer): ResFile | null {
      if (!(name in this.parsers)) {
        return null;
      }

      const parser = this.parsers[name];
      return { filename: name, parsed: parser.parse(array) as ResTable };
    },

    resRegisterParser(name: string, func: (parser: Parser) => any) {
      const fixedName = name.toLowerCase();

      this.parsers[fixedName] = (new Parser()
        .endianess("little")
        .uint32("count")
        .array("rows", {
          length: "count",
          type: func(new Parser()),
        })
        .uint16("crcLen")
        .string("crc", { length: "crcLen" }) as unknown) as Parser;
    },
  },

  data() {
    return {
      parsers: {} as { [key: string]: Parser },
      file: null as ResFile | null,
    };
  },

  async created() {
    this.resRegisterParser("tb_UI_String", tb_UI_String);
    this.resRegisterParser("tb_Option_String", tb_Option_String);
    this.resRegisterParser("tb_item_model", tb_item_model);
    this.resRegisterParser("tb_item", tb_item);
    this.resRegisterParser("tb_Appearance", tb_Appearance);
    this.resRegisterParser("tb_Create_Cloth", tb_Create_Cloth);
    this.resRegisterParser("tb_CreateOption", tb_CreateOption);
    this.resRegisterParser("tb_Customize_Info", tb_Customize_Info);
    this.resRegisterParser("tb_Customize_Eyes", tb_Customize_Eyes);
    this.resRegisterParser("tb_Customize_Hair", tb_Customize_Hair);
    this.resRegisterParser("tb_Customize_Skin", tb_Customize_Skin);
    this.resRegisterParser("tb_Customize_View_Ani", tb_Customize_View_Ani);
    this.resRegisterParser("tb_Customize_View_Ani", tb_Customize_View_Ani);
    this.resRegisterParser("tb_Customize_View_Costume", tb_Customize_View_Costume);
    this.resRegisterParser("tb_Customize_View_Sound", tb_Customize_View_Sound);
    this.resRegisterParser("tb_Customize_View_Weapon", tb_Customize_View_Weapon);
    this.resRegisterParser("tb_Event_Condition", tb_Event_Condition);
    this.resRegisterParser("tb_CashBilling_Info", tb_CashBilling_Info);
    this.resRegisterParser("tb_CashShop", tb_CashShop);
    this.resRegisterParser("tb_NPC", tb_NPC);
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

.red {
  color: rgb(110, 223, 252);
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
