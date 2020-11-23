<template>
  <div class="predict">
    <p class="title">基于深度学习的新冠肺炎医学影像预测</p>
    <p class="en-title">Prediction Covid-19 in CT based on DeepLearning</p>
    <el-upload
      class="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-change="handleUpdate"
      list-type="picture"
      :auto-upload="false"
      :show-file-list="showFileList"
      multiple
    >
      <el-button size="small" type="primary" >批量上传</el-button>
      <el-button size="small" type="success" @click.stop="doPredict" :disabled="localFileList.length===0">预测</el-button>
    </el-upload>

    <div class="report-list" v-if="!showFileList">
      <p class="title">报告结果</p>
      <el-table :data="tableData" stripe style="width: 90%" border v-loading="loading">
        <el-table-column prop="index" label="序列" align="center"></el-table-column>
        <el-table-column prop="name" label="名称" align="center"></el-table-column>
        <el-table-column label="预览" width="400" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.url" style="height: 90px">
          </template>
        </el-table-column>
        <el-table-column label="新冠肺炎结果" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.isCovid19" style="color:red">阳性</span>
            <span v-else>阴性</span>
          </template>
        </el-table-column>
      </el-table>
      <p style="color:#888; marginTop:30px">报告结果-结束</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      localFileList: [],
      showFileList: true,
      loading: true,
    };
  },
  computed: {
    tableData() {
      return this.loading ? [] : this.localFileList.map((file, index) => ({
        index: index + 1,
        name: file.name.split(".")[0],
        url: file.url,
        isCovid19: Math.random() <= 0.3,
      }));
    },
  },
  methods: {
    handlePreview(file, fileList) {
      console.log(fileList);
      window.open(file?.url, "_blank");
    },
    handleRemove(file) {
      this.localFileList = this.localFileList.filter(
        (fL) => file.url !== fL.url
      );
    },
    handleUpdate(file) {
      this.showFileList = true
      this.localFileList.push(file);
    },
    doPredict(){
      this.showFileList = false
      this.loading = true
      setTimeout(()=>{
        this.loading=false
      },1000)
        
    }
  },
};
</script>

<style lang="less" scoped>
.predict {
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
  .en-title{
      font-size: 20px;
      font-weight: 200;
      margin-bottom: 60px;
  }
}
.report-list {
  width: 70%;
  border: 3px solid black;
  background-color: #fff;
  border-radius: 10px;
  margin: 40px 0;
//   min-height: 600px;
  padding: 10px 50px 10px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style lang="less">
.el-upload-list {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  width: 70vw;
//   border: 1px solid green;
  min-height: 200px;

  .el-upload-list__item {
    margin: 10px 20px!important;
    width: 300px !important;
  }
}

</style>