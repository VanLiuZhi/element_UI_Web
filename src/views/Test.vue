<!--@Time: 2018/8/5 21:06 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div style="background-color: white" class="header_class">
    <!--<div class="" >-->
    <!--<el-row :gutter="0" justify="space-between" class="header_class" style="font-size: 18px">-->
      <!--<el-col :span="24">-->
      <el-menu :default-active="activeIndex" class="" mode="horizontal" @select="handleSelect">
        <!--<el-row type="flex" justify="start">-->
        <!--<el-col :span="6" style="margin-top: 8px;height: 56px">-->
        <span :span="6" style="height: 60px;display: block;width: 50%">
          <img style="height: 100%;width: 100%" :src="signature">
        </span>
        <!--<el-menu-item index="23">-->
          <!--<img style="height: 100%;width: 100%" :src="signature">-->
        <!--</el-menu-item>-->
        <!--</el-col>-->
        <!--</el-row>-->
        <el-menu-item index="2">
          首页
        </el-menu-item>
        <el-menu-item index="3">
          个人
        </el-menu-item>
        <el-menu-item index="4">
          日记
        </el-menu-item>
        <!--<el-row type="flex" justify="end">-->
        <!--<el-col :span="8" style="margin-top: 8px">-->
          <!--<el-input placeholder="请输入内容" v-model="input5" class="input-with-select">-->
            <!--<el-button slot="append" icon="el-icon-search"></el-button>-->
          <!--</el-input>-->
        <!--</el-col>-->
        <!--</el-row>-->
      </el-menu>
      <!--</el-col>-->
    <!--</el-row>-->
    </div>
  <!--</div>-->
</template>

<script>
  const signature = require('../assets/img/1626.png')
  export default {
    name: "Test",
    data() {
      return {
        horizontal: '',
        activeIndex: '1',
        input5: '',
        signature: signature
      }
    },
    methods: {
      handleSelect: () => {
        console.log(this.horizontal)
      }
    }
  }
</script>

<style scoped>
  .heard {
    /*padding: 5px 20px;*/
    padding: 0;
  }

  .header_class {
    margin-left: auto;
    margin-right: auto;
    width: 1100px;
  }
</style>




