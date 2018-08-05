<!--@Time: 2018/8/5 21:06 -->
<!--@Auther: VanLiuZhi -->
<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main
      <el-row :gutter="20" justify="space-between" style="padding: 10px">
        <el-col :span="16">
          <div class="block" style="background-color: white">
            <!--<span class="demonstration">默认 Hover 指示器触发</span>-->
            <el-carousel height="330px">
              <el-carousel-item>
                <img src="/src/assets/img/banner_1.jpg"/>
              </el-carousel-item>
              <el-carousel-item>
                <img src="/src/assets/img/banner_2.jpg"/>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <!--<div v-for="o in 4" :key="o" class="text item">-->
            <!--{{'列表内容 ' + o }}-->
            <!--</div>-->
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>

</template>

<script>
  export default {
    name: "Test"
  }
</script>

<style scoped>

</style>