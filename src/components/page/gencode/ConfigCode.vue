<template>
  <div id="ConfigCodeROOT">

    <el-table :data="tableData" style="width: 100%" stripe border>

      <el-table-column label="列名">
        <template slot-scope="scope">
          {{scope.row.columnName}}
        </template>

      </el-table-column>

      <el-table-column label="说明">
        <template slot-scope="scope">
          <el-input v-model="scope.row.desc"></el-input>
        </template>
      </el-table-column>


      <el-table-column label="物理类型">
        <template slot-scope="scope">
          <el-input v-model="scope.row.dbType"></el-input>
        </template>
      </el-table-column>

      <el-table-column label="Java类型">
        <template slot-scope="scope">
          <el-input v-model="scope.row.javaType"></el-input>
        </template>
      </el-table-column>


      <el-table-column label="Java属性名称" width="120">
        <template slot-scope="scope">
          <el-input v-model="scope.row.javaField"></el-input>
        </template>
      </el-table-column>


      <el-table-column label="操作" width="290" align="center">
        <template slot-scope="scope">


          <el-checkbox v-model="scope.row.primaryKey">主键</el-checkbox>


          <el-checkbox v-model="scope.row.nullAble">可空</el-checkbox>


          <el-checkbox v-model="scope.row.insertAble">插入</el-checkbox>


          <el-checkbox v-model="scope.row.editAble">编辑</el-checkbox>


          <el-checkbox v-model="scope.row.listAble">列表</el-checkbox>


          <el-checkbox v-model="scope.row.queryAble">查询</el-checkbox>


        </template>
      </el-table-column>


      <el-table-column label="匹配查询方式">
        <template slot-scope="scope">
          <el-select v-model="scope.row.queryWay" placeholder="请选择">
            <el-option label="=" value="1"></el-option>
            <el-option label=">" value="2"></el-option>
            <el-option label="<" value="3"></el-option>
            <el-option label=">=" value="4"></el-option>
            <el-option label="<=" value="5"></el-option>
            <el-option label="like" value="6"></el-option>
          </el-select>

        </template>
      </el-table-column>


      <el-table-column label="显示表单类型">
        <template slot-scope="scope">
          <el-select v-model="scope.row.formType" placeholder="请选择">
            <el-option label="单行文本" value="1"></el-option>
            <el-option label="多行文本" value="2"></el-option>
            <el-option label="日期" value="3"></el-option>
            <el-option label="数字" value="4"></el-option>
            <el-option label="复选框" value="5"></el-option>
            <el-option label="文件" value="6"></el-option>
          </el-select>
        </template>


      </el-table-column>


      <el-table-column label="字典类型">
        <template slot-scope="scope">
          <el-input v-model="scope.row.dictType"></el-input>

        </template>
      </el-table-column>


      <el-table-column label="排序">
        <template slot-scope="scope">
          <el-input v-model="scope.row.sortNum"></el-input>
        </template>
      </el-table-column>


    </el-table>


  </div>
</template>

<script>
  export default {
    name: 'ConfigCode',
    mixins: [],
    props: [],

    data () {
      return {
        tableData: [{}, {}, {}]
      }
    },
    watch: {},

    computed: {},
    methods: {
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      }

    },
    mounted () {

    }
  }
</script>

<style scoped>

</style>
