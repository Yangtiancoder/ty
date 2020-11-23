<template>
    <div class="search">
        <p class="title">跨库搜索</p>
        <div class="serach-com-wrapper">
            <el-input v-model="input" placeholder="请输入内容" style="width: 60%"></el-input>
            <div class="button-group">
                 <el-button type="success" @click="$router.push('/search-result?n1=1&n3=6')">关键词搜索</el-button>
                 <el-button type="warning">SQL语句搜索</el-button>
            </div>
        </div>

        <div class="database-container">
                <DatasetButton :src="require('@/assets/临床.png')" title="临床数据库"/>
                <DatasetButton :src="require('@/assets/医学影像.png')" title="医学影像库"/>
                <DatasetButton :src="require('@/assets/组学.png')" title="组学数据库"/>
                <DatasetButton :src="require('@/assets/text.png')" title="文档库"/>
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
    font-size: 25px;
    font-weight: 600;
  }
  .serach-com-wrapper{
      margin: 0 auto;
      width: 60%;
      display: flex;
      justify-content: space-around;
  }
  .el-button-group{
      width: 20%;
      display: flex;
      justify-content: space-around;

  }
  .database-container{
      margin: 90px auto;
      display: flex;
      width: 70%;
      justify-content: space-around;
  }
}
</style>