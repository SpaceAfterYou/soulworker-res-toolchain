<template>
  <div class="count">Items: {{ table.count }}</div>
  <section class="table" :style="tableStyle">
    <template v-for="row of values()" :key="row.id">
      <div class="cell" v-for="item in row" :key="item" v-html="item" />
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",

  data() {
    return {};
  },

  methods: {
    values() {
      const values = this.table.rows.slice(0, 100);

      return values;
    },
  },

  setup(props) {
    const keys = Object.keys(props.table.rows[0]);

    const tableStyle = {
      gridTemplateColumns: `repeat(${keys.length}, min-content)`,
    };

    return { keys, tableStyle };
  },

  props: ["table"],
});
</script>

<style lang="scss" scoped>
.count {
  padding: 40px 0;
}

.table {
  display: grid;
  gap: 10px 40px;
}

.cell {
  white-space: nowrap;
}
</style>
