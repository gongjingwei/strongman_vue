<template>
  <div id="xxx">


    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
      >
      </el-table-column>

      <el-table-column
        prop="href"
        label="地址"
      >
      </el-table-column>

      <el-table-column
        prop="templated"
        label="模板?">

      </el-table-column>
    </el-table>


  </div>
</template>

<script>

  export default {

    mixins: [],
    props: [],
    components: {},
    data () {
      return {

        pointInfo: {},
        tableData: []

      }
    },
    watch: {},
    render: {},
    computed: {},
    methods: {

      send () {

        this.$http.get('/actuator', {
          params: {}
        },).then(res => {

          this.pointInfo = JSON.parse(res.bodyText)._links

          for (let key in this.pointInfo) {

            console.info(this.pointInfo)
            this.tableData.push({

              name: key,
              href: this.pointInfo[key].href,
              templated: this.pointInfo[key].templated ? '有' : '无'

            })

          }

        }, err => {

          console.info(err)

        })

      }

    },
    mounted () {

      this.send()

    }
  }
</script>

<style scoped>

</style>
