<template>
  <el-card :body-style="bodyStyle">
    <img
      :src="src"
      class="image"
    />
    <div style="padding: 14px">
      <span>{{title}}</span>
      <div class="bottom clearfix">
        <time class="time">{{ currentDate }}</time>
      </div>
      <p>
          {{ activate ? '已选择' : '未选择' }}
      </p>
      <el-button :type="activate ? 'warning' : 'success'" @click="handleChoose">
           {{ activate ? '取消' : '选择' }}
      </el-button>
    </div>
    
  </el-card>
</template>

<script>
export default {
    props:['currentDate', 'src', 'title'],
    data(){ return {
       activate: true 
    }},
    computed:{
        bodyStyle(){
            const activateClass = this.activate ? { 
                border: '2px solid lightgreen',
            } : { }
            return {
                padding: '20px',
                width: '200px',
                height: '305px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                ...activateClass
            }
        }
    },
    methods:{
        handleChoose(){
            this.activate = !this.activate
        }
    }
}
</script>

<style lang="less">

</style>