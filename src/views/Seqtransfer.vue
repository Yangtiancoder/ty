<template>
  <div class="seq-transfer">
    <p class="title">DNA与RNA序列转换处理工具</p>
    <!-- <p class="en-title">Tools for the DNA and RNA Sequence</p> -->
    <div class="content">
      <p>
        请在下方输入需要被转换的
        <el-select
          style="width:5em;margin: 0 5px"
          size="small"
          v-model="selectValue"
          placeholder="请选择"
        >
          <el-option
            v-for="item in selectOptions"
            :key="item.value"
            :label="item.value"
            :value="item.value"
          ></el-option>
        </el-select>序列（支持
        <span style="color:red">同时转换多条</span>
        Fasta格式序列）
      </p>

      <el-input
        type="textarea"
        class="textarea"
        :placeholder="`需要被转换的${selectValue}序列`"
        v-model="textarea1"
        :rows="8"
      ></el-input>

      <div class="button-group" style="textAlign:left">
        <div class="left">
          <el-button
            class="button"
            type="primary"
            size="small"
            @click="changeType()"
          >转换为{{selectValue === "DNA" ? "RNA" : "DNA"}}</el-button>
          <el-button class="button" size="small" @click="transferData('REVERSE')">反向序列</el-button>
          <el-button class="button" size="small" @click="transferData('MER')">互补序列</el-button>
          <el-button class="button" size="small" @click="transferData('REVERSE_MER')">反向互补</el-button>
        </div>
        <div class="right">
          <el-button class="button" type="warning" size="small" @click="() => textarea2=''">清空结果</el-button>
          <el-button class="button" type="warning" size="small" @click="expData">示例数据</el-button>
        </div>
      </div>
      <p style="textAlign: left; margin: 10px 0 5px 0">
        当前状态：
        <span style="color: green">{{statu || '未转换'}}</span>
      </p>
      <el-input type="textarea" class="textarea" v-model="textarea2" :rows="8"></el-input>
    </div>
  </div>
</template>

<script>
import { DNA_SEQ, RNA_SEQ, DNA_REVERSE, RNA_REVERSE, DNA_MER, RNA_MER, DNA_REVERSE_MER, RNA_REVERSE_MER } from './sq'

export default {
  data() {
    return {
      selectValue: "DNA",
      textarea1: "",
      statu: "",
      textarea2: "",
    };
  },
  computed: {
    selectOptions() {
      return [{ value: "DNA" }, { value: "RNA" }];
    },
  },
  methods: {
    expData() {
      this.textarea1 = this.selectValue === 'DNA' ? DNA_SEQ : RNA_SEQ
    },
    changeType() {
      if(!this.textarea1){
          this.$message.error('请先输入序列')
          return
      }
      this.selectValue  = this.selectValue === "RNA" ? "DNA" : "RNA";
      this.textarea1 = this.selectValue === "DNA" ? DNA_SEQ : RNA_SEQ
    },
    transferData(type){
        if(type === 'REVERSE'){
            this.statu = this.selectValue === "DNA" ? "DNA反向序列" : "RNA反向序列"
            this.textarea2 = this.selectValue === "DNA" ? DNA_REVERSE : RNA_REVERSE
        }else if( type === 'MER'){
            this.statu = this.selectValue === "DNA" ? "DNA互补序列" : "RNA互补序列"
            this.textarea2 = this.selectValue === "DNA" ? DNA_MER : RNA_MER
        }else if(type ==="REVERSE_MER"){
            this.statu = this.selectValue === "DNA" ? "DNA反向互补" : "RNA反向互补"
            this.textarea2 = this.selectValue === "DNA" ? DNA_REVERSE_MER : RNA_REVERSE_MER
        }
    }
  },
};
</script>

<style lang="less" scoped>
.seq-transfer {
  margin: 0 auto;
  width: 100%;
  //   border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 25px;
    font-weight: 600;
    color: #fff;

  }
  .en-title {
    font-size: 20px;
    font-weight: 200;
    margin-bottom: 60px;
    color: #fff;

  }
}

.content {
//   border: 1px solid red;
    color: #fff;

  .button-group {
    display: flex;
    justify-content: space-around;
  }
}
.textarea {
  margin: 10px 0;
}
</style>
