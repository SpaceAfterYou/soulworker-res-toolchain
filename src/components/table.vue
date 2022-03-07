<template>
  <div class="pages" v-if="pages > 1">
    <span v-for="(index, key) in Math.ceil(table.count / limit)" :class="['page', { 'selected-page': key == offset }]" :key="key" @click="pageChange(key)">
      {{ index }}
    </span>
  </div>

  <section class="table" :style="tableStyle">
    <div class="cell key" v-for="key of keys" :key="key">{{ key }}</div>
    <template v-for="row of values()" :key="row.id">
      <div class="cell" v-for="item in row" :key="item" v-html="item" />
    </template>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ResTable } from "../types/res-table";

type Props = {
  table: ResTable;
};

const { table } = defineProps<Props>();

const offset = ref(0);
const limit = 300;
const keys = Object.keys(table.rows[0]);

const tableStyle = {
  gridTemplateColumns: `repeat(${keys.length}, min-content)`,
};

const pages = Math.ceil(table.count / limit);

function values() {
  const o = offset.value * limit;
  return table.rows.slice(o, o + limit);
}

function pageChange(value: number) {
  offset.value = value;
}
</script>

<style lang="scss" scoped>
.count {
  padding: 40px 0;
}

.pages {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
}

.page {
  text-align: center;
  flex-basis: 40px;
  padding: 10px;
  cursor: pointer;

  background-color: rgba(255, 0, 85, 0.4);

  &:hover {
    background-color: rgba(255, 0, 85, 0.7);
  }
}

.selected-page {
  cursor: default;
  transition: unset;
  background-color: var(--pink-color);
  pointer-events: none;
}

.table {
  display: grid;
  gap: 10px 20px;
}

.cell {
  white-space: nowrap;
  padding: 10px;
}

.key {
  background-color: rgba(255, 0, 85, 0.4);
  text-transform: uppercase;
}
</style>
