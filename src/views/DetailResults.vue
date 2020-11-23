<template>
  <div class="detail-results">
    <div style="width: 80%; textAlign: left">
      <el-button type="primary" @click="$router.go(-1)" size="medium">Back</el-button>
    </div>
    <p class="title">数据库搜索结果: <span style="color: orange">
      {{query}}
      </span></p>
    <p class="en-title">共搜索出 {{tableData.length}} 条结果</p>
    <div class="post-outer-container">
        <Post v-for="(post,index) in tableData" :key="index" :data="post" :query="query">
          
        </Post>
    </div>
    
    
  </div>
</template>

<script>
import { dataset1, dataset2, dataset3, dataset4 } from "@/assets/data.js";
import Post from '@/components/Post'

export default {
  data(){
    return {
      query: this.$route.query.query || 'error',
      dataset: this.$route.query.dataset || 'null' 
    }
  },
  computed: {
    tableData() {
      const resultData = ([dataset1, dataset2, dataset3, dataset4])[this.dataset - 1]
      return resultData.filter(post => {
        for(let para of post){
          const { type, content } = para
          if(type === 'text' && JSON.stringify(content).indexOf(this.query) > 0){
            return true
          }
        }
        return false
      });
    }
  },
  components:{
    Post
  }
};
</script>


<style lang="less" scoped>
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
.detail-results {
  width: 80%;
  margin: 0 auto;
  //   padding: 50px 0;
}
.post-outer-container{
  height: 600px;
  overflow-y: auto;
}

</style>

<style lang="less">
.el-table .cell {
  line-height: 34px;
}
</style>
