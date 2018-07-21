<!--@Time: 2018/7/17 9:48 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <el-container>
      <header-extend></header-extend>
      <el-main>
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-main>
      <el-footer style="position:fixed;bottom:0px">
        in footer
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import HeaderExtend from '~/component/HeaderExtend'
  export default {
    name: "index",
    components: {'HeaderExtend': HeaderExtend}
  }
</script>

<style scoped>

</style>