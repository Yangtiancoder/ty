<template>
  <div class="post-table-container">
    <el-table :data="tableData" style="width: 100%" class="table">
      <el-table-column
        prop="patientid"
        label="id"
        width="90"
        align="center"
      ></el-table-column>

      <el-table-column
        prop="subject"
        label="subject"
        width="90"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="catagory"
        label="catagory"
        width="90"
        align="center"
      ></el-table-column>

      <el-table-column
        label="detail"
        align="center"
      >
        <template slot-scope="scope">
          <span v-html="convert(scope.row.detail)">
            {{ convert(scope.row.detail) }}
          </span>
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
      content = JSON.stringify(content);
      content = content
        .split(this.query)
        .join(
          `<span style="color:orange;fontWeight: 900;">${this.query}</span>`
        );
      return `<p>${content}</p>`;
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

