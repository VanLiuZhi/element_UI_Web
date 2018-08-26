<!--@Time: 2018/7/18 17:50 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div style="background-color: white">
    <el-row :gutter="0" justify="space-between" class="header_class" style="font-size: 18px">
      <el-menu class="" mode="horizontal" @select="handleSelect" text-color="#000">
        <!--<el-menu :default-active="activeIndex" class="" mode="horizontal" @select="handleSelect">-->
        <el-col :span="6" style="height: 60px;pointer-events: none;">
          <img style="height: 100%;width: 100%" :src="signature">
        </el-col>
        <el-menu-item index="2" style="width: 16.66%">
          <router-link tag="span" to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item index="3" style="width: 16.66%">
          <router-link tag="span" to="/">个人</router-link>
        </el-menu-item>
        <el-menu-item index="4" style="width: 16.66%">
          <router-link tag="span" to="/">日记</router-link>
        </el-menu-item>
        <el-col :span="6" style="margin-top: 10px">
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
  const signature = require('../assets/img/1626.png')
  export default {
    name: "headerExtend",
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

<style>
  .el-menu-item {
    font-size: 18px;
  }
</style>
