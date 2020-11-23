<template>
  <div class="post-container">
    <div class="para" v-for="(item, i) in data" :key="i">

      <p v-if="item.type === 'text'" v-html="convert(item.content)">
        {{convert(item.content)}}
      </p>
      <div style="textAlign: center" v-else>
        <img
          class="img"
          :src="require(`../assets/meidcalimage/IM-0214-0001.jpeg`)"
        />
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: ["data", "query"],
  methods:{
      convert(content){
          content = JSON.stringify(content)
          content = content.split(this.query).join(`<span style="color:orange;fontWeight: 900;">${this.query}</span>`)
        return `<p>${content}</p>`
      }
  }
};
</script>

<style lang="less" scoped>
.post-container {
  color: #fff;
  width: 95%;
  min-height: 100px;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 10px;
  margin: 10px auto;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  text-indent: 1em;
  
  p{
      word-break:break-all;
  }

  .img {
    text-align: center;
    height: 150px;
    margin: 5px 0;
  }
}
</style>