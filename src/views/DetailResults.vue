<template>
  <div class="detail-results">
    <div style="width: 80%; textAlign: left">
      <el-button @click="$router.push('/search-result')">返回</el-button>
    </div>
    <p class="title">临床数据库搜索结果</p>
    <p class="en-title">Crossing Database Searching Results</p>

    <el-table :data="tableData" style="width: 100%" class="table">
      <el-table-column prop="data" label="结果" align="center">
        <template slot-scope="scope">
         <div class="text-container">
             {{scope.row.data}}
         </div>

        </template>
      </el-table-column>
    </el-table>
    --完--
  </div>
</template>

<script>
import resultData from "@/assets/data.js";

export default {
  computed: {
    tableData() {
      return resultData.map((item) => ({ data: JSON.stringify(item) }));
    },
  },
};
</script>


<style lang="less" scoped>
.title {
  font-size: 25px;
  font-weight: 600;
}
.en-title {
  font-size: 20px;
  font-weight: 200;
  margin-bottom: 20px;
}
.detail-results {
  width: 80%;
  margin: 0 auto;
  //   padding: 50px 0;
}
.table {
  //   margin: 70px 0;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  font-size: 30px;
}
.text-container{
    height: 150px;
    font-size: 18px;
    overflow: auto;
    padding: 5px 0;
    border: 1px solid grey;
}
</style>

<style lang="less">
.el-table .cell {
  line-height: 34px;
}
</style>
