<template>
  <div class="home">
    <h1>GameReview</h1>
    <el-table :data="list" border stripe class="home-table">
      <el-table-column prop="title" label="Name" width="180" />
      <el-table-column prop="developer" label="Developer" />
      <el-table-column prop="platform" label="Platform" />
    </el-table>
  </div>

</template>


<script lang="ts">
import { getGameList } from "@/api/game.ts";
import { List } from "lodash";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      count: 1,
      list: [],
    };
  },
  mounted() {
    getGameList().then((res: Object) => {
      console.log("res", res);
      this.list = res.data;
    });
  },
  methods: {
    addCount() {
      console.log("this.count", typeof this.count);
      this.count += 1;
    },
  },
});
</script>

<style lang="scss">
.home {
  padding: 20px;
  box-sizing: border-box;
  .home-table {
    margin: 10px;
  }
}
</style>



