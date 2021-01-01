<template>
  <aside class="sidebar">
    <div class="upload-button">
      <label class="upload-res" for="upload-res">Import RES file</label>
      <input type="file" accept=".res" id="upload-res" @change="onSelectFile" />
    </div>

    <div class="convert-to-csv" @click="convertToCSV" v-if="file">Export CSV file</div>

    <div class="supports">
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

import tb_UI_String from "./restypes/client/tb_UI_String";
import tb_Option_String from "./restypes/client/tb_Option_String";

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
      const csvContent = `data:text/csv;charset=utf-8,${header}\n${body}`;

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");

      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `${this.file!.filename}.csv`);

      link.click();
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
          basename(file.name, ".res"),
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
      this.parsers[name] = (new Parser()
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
  grid-template-columns: 200px 1fr;
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
}
</style>

<style lang="scss" scoped>
.supports {
  padding: 10px;
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
</style>
