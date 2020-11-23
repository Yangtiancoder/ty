<template>
  <el-card class="main-container">
    <div class="content">
      <img :src="src" class="image" />
      <div class="right">
        <div class="right-title">{{ title }}</div>
        <div class="right-desc">{{ desc || 111 }}</div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ["currentDate", "src", "title", "desc"],
  data() {
    return {
      activate: true,
    };
  },
  computed: {
    bodyStyle() {
      const activateClass = this.activate
        ? {
            border: "2px solid lightgreen",
          }
        : {};
      return {
        padding: "20px",
        width: "200px",
        height: "305px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        ...activateClass,
      };
    },
  },
  methods: {
    handleChoose() {
      this.activate = !this.activate;
    },
  },
};
</script>

<style lang="less">
.main-container {
  width: 47%;
  margin: 10px 0;
  padding: 15px 5px 10px 5px;

  .content{
    display: flex;
    text-align: left;

    .right{
      margin-left: 20px;
    }
    .right-title{
      color: #000;
      font-size: 20px;
      font-weight: 900;
    }
    .right-desc{
      margin-top: 3px;
      color: #666;
      text-indent: 1em;
    }
  }

  .image {
    width: 85px;
    height: 85px;
  }
}
</style>