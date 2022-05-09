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
          <span class="red"> {{ clientNames[activeClient.token] }} </span>
          <div class="client-type-available-list">
            <div class="client-type-available-item" v-for="(client, token) of clients" :key="`clients-${token}`" @click="changeActiveClient(client)">
              {{ clientNames[token] }}
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

<script setup lang="ts">
import { ref } from "vue";

import TableComponent from "./components/table.vue";

import { basename } from "node:path";
import { Buffer } from "node:buffer";
import { GameToken } from "./types/game-token";
import type { ResTable } from "./types/res-table";
import type { ResFile } from "./types/res-file";
import type { ClientInfo } from "./types/client-info";
import { ParsersBuilder } from "./core/parsers-builder";
import { registerGlobal } from "./core/register/global";
import { registerKorean } from "./core/register/korean";
import { registerJapanese } from "./core/register/japanese";

const file = ref<ResFile | null>(null);
const clientNames = {
  [GameToken.gb]: "[Steam] Global/Taiwan",
  [GameToken.kr]: "[OnStove] Korean",
  [GameToken.jp]: "[WeMade] Japanese",
};

const parsers = new ParsersBuilder();

registerGlobal(parsers);
registerKorean(parsers);
registerJapanese(parsers);

const clients = parsers.build();
const activeClient = ref(clients[GameToken.gb]);

function changeActiveClient(client: ClientInfo) {
  activeClient.value = client;
}

function convertToCSV() {
  if (file.value === null) {
    console.warn("file is null?");
    return;
  }

  const header = Object.keys(file.value.parsed.rows[0]).join();
  const body = file.value.parsed.rows.map((c) => Object.values(c).join()).join("\n");

  downloadFile(`${header}\n${body}`, `${file.value.filename}.csv`);
}

function downloadFile(data: string, fileName: string) {
  const csvData = data;
  const blob = new Blob([csvData], { type: "application/csv;charset=utf-16;" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.style.visibility = "hidden";
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function onSelectFile(ev: Event) {
  const target = ev.target as HTMLInputElement;
  if (target.files!.length < 1) {
    return;
  }

  file.value = null;

  const usedFile = target.files![0];
  const fileReader = new FileReader();

  fileReader.onload = (e) => {
    if (!(e.target instanceof FileReader)) return;

    const { result } = e.target;
    if (!(result instanceof ArrayBuffer)) return;

    const buffer = Buffer.from(result);
    const name = basename(usedFile.name.toLowerCase(), ".res");

    file.value = resParse(name, buffer);
  };

  fileReader.readAsArrayBuffer(usedFile);
}

function resParse(name: string, array: Buffer): ResFile | null {
  if (!(name in activeClient.value.parsers)) {
    console.warn(`${name} bad file`);
    return null;
  }

  const parser = activeClient.value.parsers[name].parser;
  return { filename: name, parsed: parser.parse(array) as ResTable };
}
</script>

<style lang="scss">
@use "./styles/reset.scss";
@use "./styles/typography.scss";

#app {
  background-color: rgb(29, 29, 29);
  color: #ebebeb;
  display: grid;
  grid-template-columns: min-content 1fr;
  min-height: 100%;
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
