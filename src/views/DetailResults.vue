<template>
  <div class="detail-results">
    <div style="width: 80%; textAlign: left">
      <el-button type="primary" @click="$router.go(-1)" size="medium"
        >Back</el-button
      >
    </div>
    <div v-if="dataset == 2">
    <span style="color: #fff; fontWeight: bold; fontSize:18px">Modality:</span>
          <el-select
          style="margin: 10px 40px;"
          v-model="value"
          placeholder="Choose A column"
          size="medium"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
         <span style="color: #fff; fontWeight: bold; fontSize:18px">Datasource:</span>
        <el-select
        style="margin: 10px 40px;"
        v-model="value2"
        placeholder="Choose A column"
        size="medium"
       >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-button type="primary" style="width:150px">Search <i class="el-icon-search"></i></el-button>

</div>


    <div v-if="dataset == 1">
    <span style="color: #fff; fontWeight: bold; fontSize:18px">Age:</span>
          <el-select
          style="margin: 10px 40px;"
          v-model="value"
          placeholder="Choose A column"
          size="medium"
          >
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
         <span style="color: #fff; fontWeight: bold; fontSize:18px">Sex:</span>
        <el-select
        style="margin: 10px 40px;"
        v-model="value2"
        placeholder="Choose A column"
        size="medium"
      >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

         <span style="color: #fff; fontWeight: bold; fontSize:18px">DataSource:</span>
                <el-select
                style="margin: 10px 40px;"
                v-model="value3"
                placeholder="Choose A column"
                size="medium"
              >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
        <el-button type="primary" style="width:150px">Search <i class="el-icon-search"></i></el-button>

</div>

    <div v-if="dataset == 3">
         <span style="color: #fff; fontWeight: bold; fontSize:18px">DataSource:</span>
        <el-select
        style="margin: 10px 40px;"
        v-model="value2"
        placeholder="Choose A column"
        size="medium"
       >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-button type="primary" style="width:150px">Search <i class="el-icon-search"></i></el-button>

</div>

    <p class="title">
      Find:
      <span style="color: orange">
        {{ query }}
      </span>
    </p>
<!--
<p class="en-title" v-if="dataset == 1" >totally 372 results</p>
<p class="en-title" v-if="dataset == 2" >totally 1364 results</p>
<p class="en-title" v-if="dataset == 3" >totally 205 results</p>
<p class="en-title" v-if="dataset == 4" >totally 469 results</p>
-->
<p class="en-title" >totally {{tableData.length}} results</p>

    <div v-if="dataset == 2">

      <DataTable :data="tableData" :query="query" />

    </div>

     <div v-else-if="dataset == 3">

       <DataTablecp :data="tableData" :query="query" />

     </div>

     <div v-else-if="dataset == 1">

            <DataTablecpp :data="tableData" :query="query" />

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
// import { dataset1, dataset2, dataset3, dataset4 } from "@/assets/data.js";
import Post from "@/components/Post";
import DataTable from "@/components/DataTable";
import DataTablecp from "@/components/DataTablecp";
import DataTablecpp from "@/components/DataTablecpp";
import axios from 'axios'

export default {
  data() {
    return {
      query: this.$route.query.query || "error",
      dataset: this.$route.query.dataset || "null",
      value: null,
      value2: null,
      value3: null,
      remoteDataset: [],
    };
  },
  mounted(){ console.log('mmm')
    let url = 'http://127.0.0.1:8888/'
    if(this.dataset === '1') url += 'clinical'
    else if(this.dataset === '2') url += 'image'
    else if(this.dataset === '3') url += 'medicine'
    else url += 'doc'

    axios.get(url)
        .then(response => {
            const { data } = response
            this.remoteDataset = data
        })
  },
  computed: {
    tableData() {
      const resultData = this.remoteDataset.map(options => {
        return [{ type: 'text', content: JSON.stringify(options) }]
      });


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
        { value: null, label: 'All'},
        { value: 'patientid', label: 'M'},
        { value: 'sex', label: 'covid-chestxray-dataset'},
        { value: 'age', label: 'xray'},
        { value: 'finding', label: 'NGDC-ncov'},
        { value: 'clinical_notes', label: 'clinical notes'},
      ]
    },
    options1(){
          return [
            { value: null, label: 'All'},
            { value: 'patientid', label: '0~10'},
            { value: 'sex', label: '10~20'},
            { value: 'age', label: '20~30'},
            { value: 'finding', label: '30~40'},
            { value: 'clinical_notes', label: '40~50'},
            { value: 'clinical_notes', label: '50~60'},
            { value: 'clinical_notes', label: '60~70'},
            { value: 'clinical_notes', label: '>70'},
          ]
        }
  },
  components: {
    Post,
    DataTable,
    DataTablecp,
    DataTablecpp,
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
