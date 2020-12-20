<template>
  <div class="post-table-container">
    <el-table :data="tableData" style="width: 100%" class="table">
 <el-table-column
        prop="sequenceid"
        label="sequenceid"
        width="120"
        align="center"
      ></el-table-column>

      <el-table-column
        prop="sequencetype"
        label="sequencetype"
        width="140"
        align="center"
      >
              <template slot-scope="scope">
                <span v-html="convert(scope.row.sequencetype)">
                  {{ convert(scope.row.sequencetype) }}
                </span>
              </template>
      </el-table-column>

    <el-table-column
        prop="completeness"
        label="completeness"
        width="180"
        align="center"
      >
              <template slot-scope="scope">
                <span v-html="convert(scope.row.completeness)">
                  {{ convert(scope.row.completeness) }}
                </span>
              </template>
      </el-table-column>

        <el-table-column
              prop="datasource"
              label="datasource"
              width="120"
              align="center"
            >
                    <template slot-scope="scope">
                      <span v-html="convert(scope.row.datasource)">
                        {{ convert(scope.row.datasource) }}
                      </span>
                    </template>
            </el-table-column>

   <el-table-column
        prop="clinicalinfo"
        label="clinicalinfo"
        width="280"
        align="center"
      >
              <template slot-scope="scope">
                <span v-html="convert(scope.row.clinicalinfo)">
                  {{ convert(scope.row.clinicalinfo) }}
                </span>
              </template>
      </el-table-column>

      <el-table-column
        label="sequence"
        align="center"
      >
        <template >
            <el-button type="text">Download</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["data", "query"],
  computed: {
    tableData() {
      return this.data.map((row) => ({ ...JSON.parse(row[0]?.content) }));
    },
  },
  methods: {
    convert(content) {
      if(!content) return ""
      content = JSON.stringify(content);
      content = content
        .split(this.query)
        .join(
          `<span style="color:orange;fontWeight: 900;">${this.query}</span>`
        );
      return `<p>${content.slice(1, content.length-1)}</p>`;
    },
  },
};
</script>

<style lang="less" scoped>
.post-table-container {
  padding: 5px 10px;
  max-height: 600px;
  overflow-y: auto;
  .img {
    width: 100px;
  }
  .table {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    padding: 20px 10px;
    color: #fff;
  }
}
</style>


<style lang="less">
.post-table-container {
  .el-table td,
  .el-table th {
    height: 90px;

    .cell {
      overflow: initial;
    }
  }

  .el-table thead {
    color: #fff;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .el-table th,
  .el-table tr {
    background-color: transparent;
  }
}
</style>

