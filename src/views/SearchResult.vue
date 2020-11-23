<template>
  <div class="search-result">
      <div style="width:80%;textAlign: left"><el-button @click="$router.push('/search')">返回</el-button></div>

    <p class="title">跨库搜索结果</p>
    <p class="en-title">Crossing Database Searching Results</p>
    <div class="result-container">
      <el-table :data="tableData" style="width: 100%" class="table">
        <el-table-column prop="数据库" label="数据库" width="500" align="center"></el-table-column>

        <el-table-column :label="`共查找到 ${total} 条结果`" align="center">
          <template slot-scope="scope">
            <p>
                <span class="em">{{scope.row.resultNum}}</span>
                条结果
                <a class="link" @click="$router.push('/detail-results')">
                  点击查看
                </a>
            </p>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    const dealWithQuery = (prop, defaultNum = 0) => {
        let resultNum = parseInt(this.$route.query[prop])
        if(isNaN(resultNum)) resultNum = defaultNum
        return resultNum
    }
    return {
      dataset1: dealWithQuery('n1'),
      dataset2: dealWithQuery('n2'),
      dataset3: dealWithQuery('n3'),
    };
  },
  computed: {
    total() {
      return this.dataset1 + this.dataset2 + this.dataset3+4;
    },
    tableData() {
      return [
        { 数据库: "医学影像库", resultNum: this.dataset1 },
        { 数据库: "组学数据库", resultNum: this.dataset2 },
        { 数据库: "临床数据库", resultNum: this.dataset3 },
        { 数据库: "文档数据库", resultNum: 4 },
      ];
    },
    resultNums(){
        return this.$route.query
    }
  },
};
</script>

<style lang="less" scoped>
.search-result {
  margin: 0 auto;
  width: 100%;
  //   border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 25px;
    font-weight: 600;
  }
  .en-title {
  color: blue;
    font-size: 20px;
    font-weight: 200;
    margin-bottom: 20px;
  }

  .result-container {
    width: 80%;
    display: flex;
    .table{
        border-top: 5px solid black;
        border-bottom: 5px solid black;
        font-size: 30px;
    }
     .em {
        color: #f40;
        margin: 0 2px;
      }
      .link{
          font-size: 0.8em;
          color: blue;
          text-decoration: underline;
          cursor: pointer;
          margin: 0 40px;
      }
  }
}
</style>

<style lang="less">
.el-table td, .el-table th{
    height: 50px;
    .cell{
        overflow: initial;
    }
}
</style>
