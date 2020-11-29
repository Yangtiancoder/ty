<template>
  <div class="detail-results">
    <div style="width: 80%; textAlign: left">
      <el-button type="primary" @click="$router.go(-1)" size="medium"
        >Back</el-button
      >
    </div>
    <p class="title">
      Find:
      <span style="color: orange">
        {{ query }}
      </span>

      <el-select
      style="margin: 5px 20px;"
      v-model="value"
      placeholder="Choose A column"
      size="mini"
      v-if="dataset == 2">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </p>
    <p class="en-title">totally {{ tableData.length }} results</p>

    <div v-if="dataset == 2">

      <DataTable :data="tableData" :query="query" />

    </div>

     <div v-if="dataset == 3">

       <DataTablecp :data="tableData" :query="query" />

        </div>

    <div class="post-outer-container" v-else>
      <Post
        v-for="(post, index) in tableData"
        :key="index"
        :data="post"
        :query="query"
      >
      </Post>
    </div>
  </div>
</template>

<script>
import { dataset1, dataset3, dataset4, dataset5 } from "@/assets/data.js";
import Post from "@/components/Post";
import DataTable from "@/components/DataTable";
import DataTablecp from "@/components/DataTablecp";

export default {
  data() {
    return {
      query: this.$route.query.query || "error",
      dataset: this.$route.query.dataset || "null",
      value: null,
    };
  },
  computed: {
    tableData() {
      const resultData = [dataset1, dataset5, dataset3, dataset4][
        this.dataset - 1
      ];
      return resultData.filter((post) => {
        for (let para of post) {
          const { type, content } = para;
          if (
            type === "text" &&
            JSON.stringify(content).indexOf(this.query) > 0
          ) {
            return true;
          }
        }
        return false;
      });
    },
    options(){
      return [
        { value: null, label: 'All Column'},
        { value: 'patientid', label: 'patient id'},
        { value: 'sex', label: 'sex'},
        { value: 'age', label: 'age'},
        { value: 'finding', label: 'finding'},
        { value: 'clinical_notes', label: 'clinical notes'},
      ]
    }
  },
  components: {
    Post,
    DataTable,
    DataTablecp,
  },

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
.post-outer-container {
  height: 600px;
  overflow-y: auto;
}
</style>

<style lang="less">
.el-table .cell {
  line-height: 34px;
}
</style>
