<template>
    <div class="search">
        <p class="title">Cross Database Retrieval</p>
        <div class="serach-com-wrapper">
            <el-input v-model="input" placeholder="请输入内容" style="width: 60%"></el-input>
            <div class="button-group">
                 <el-button type="primary" @click="$router.push('/search-result?n1=1&n3=6')">search by keywords</el-button>
                 <!-- <el-button type="warning">SQL语句搜索</el-button> -->
            </div>
        </div>

        <div class="database-container">
                <DatasetButton :src="require('@/assets/医学影像.png')" title="Medical Image" desc="The novel coronavirus pneumonia medical imaging data, novel coronavirus pneumonia CT image and other CT images of pneumonia or normal patients."/>
                <DatasetButton :src="require('@/assets/组学.png')" title="Omics" desc="The novel coronavirus pneumonia data include 2019 novel coronavirus, SARS and MERS nucleotide sequence." />
                <DatasetButton :src="require('@/assets/临床.png')" title="Clinical Medicil" desc="The novel coronavirus pneumonia clinical data include novel coronavirus pneumonia patients' clinical data management."/>
                <DatasetButton :src="require('@/assets/text.png')" title="BioMedical Knowledge" desc="The novel coronavirus pneumonia related biomedical knowledge novel coronavirus pneumonia related subjects are English and biomedical knowledge."/>
            </div>
    </div>
</template>

<script>
import DatasetButton from '@/components/DatasetButton.vue'

export default {
    data(){ return {
        input: '',

    }},
    components:{
        DatasetButton
    }
}
</script>


<style lang="less" scoped>
.search {
    .title {
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    margin: 15px 0;
  }
  .serach-com-wrapper{
      margin: 0 auto;
      width: 90%;
      display: flex;
      justify-content: center;
  }
  .el-button-group{
      width: 30%;
      display: flex;
      justify-content: space-around;

  }
  .database-container{
      margin: 40px auto;
      display: flex;
      flex-wrap: wrap;
      width: 70%;
      justify-content: space-around;
  }
}
</style>