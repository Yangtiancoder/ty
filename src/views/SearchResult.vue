<template>
  <div class="search-result">
      <div style="width:80%;textAlign: left">
        <el-button type="primary" @click="$router.push('/search')" size="medium">Back</el-button>
      </div>

    <p class="title">Crossing Database Searching Results: <span style="color: orange">
      {{query}}
      </span>
    </p>

    <div class="result-container">
      <el-table :data="tableData" style="width: 100%" class="table" >
        <el-table-column prop="id" label="num" width="90" align="center"></el-table-column>
        <el-table-column prop="数据库" label="DataBase" width="500" align="center"></el-table-column>

        <el-table-column :label="`totally find ${total} results`" align="left">
          <template slot-scope="scope">
            <p>
                <span class="em">{{scope.row.resultNum}}</span>
                results
                <a class="link" v-if="scope.row.resultNum > 0" @click="$router.push(`/detail-results?dataset=${scope.row.id}&query=${query}`)">
                  ref
                </a>
            </p>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { dataset1, dataset2, dataset3, dataset4 } from '@/assets/data.js'

export default {

  data() {
    const query = this.$route.query.query || 'error'
    const [num1, num2, num3, num4] =([dataset1, dataset2, dataset3, dataset4]).map(dataset => {
      return dataset.reduce((prePost, post) => {
      return prePost + post.reduce((pre, para)=>{
        if(para.type === 'text'){
          const contentString = JSON.stringify(para.content)
          return contentString.indexOf(query) >= 0 ? pre + 1 : pre
        }
        return pre
      }, 0)
    }, 0)
    })


    return {
      dataset1: num1,
      dataset2: num2,
      dataset3: num3,
      dataset4: num4,
      total: num1 + num2 + num3 + num4,
      query
    };
  },
  computed: {
    tableData() {
      return [
        { id: 1, 数据库: "Clinical Medical", resultNum: this.dataset1 },
        { id: 2, 数据库: "Medical Image", resultNum: this.dataset2 },
        { id: 3, 数据库: "Omics", resultNum: this.dataset3 },
        { id: 4, 数据库: "BioMedical Knowledge", resultNum: this.dataset4 },
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
    font-size: 30px;
    color: #fff;
    font-weight: 600;
  }
  .en-title {
    color: #999;
    font-size: 25px;
    font-weight: 200;
    margin-bottom: 20px;
  }

  .result-container {
    width: 80%;
    display: flex;
    .table {
        font-size: 30px;
        background-color: rgba(255,255,255, 0.1);
        border-radius: 5px;
        padding: 20px 10px;
        color: #fff;
    }
     .em {
        color: #f40;
        margin: 0 2px;
      }
      .link{
          font-size: 0.8em;
          color: orangered;
          text-decoration: underline;
          cursor: pointer;
          margin: 0 40px;
      }
  }
}
</style>

<style lang="less">
.el-table td, .el-table th{
    height: 90px;

    .cell{
        overflow: initial;
    }
}

.el-table thead{
  color: #fff;
}
.el-table--enable-row-hover .el-table__body tr:hover>td{
  background-color: rgba(0,0,0,0.1);
}
.el-table th, .el-table tr{
  background-color: transparent;
}

</style>
