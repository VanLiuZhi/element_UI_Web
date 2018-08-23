<!--@Time: 2018/7/18 17:50 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#1e89e0" text-color="#fff" active-text-color="#fff">
        <!--background-color="#42b983" text-color="#fff"-->
        <el-row :gutter="0" justify="space-between" class="header_class">
          <el-col :span="6">
            <el-menu-item index="1"><img style="height: 100%;width: 100%" :src="signature"></el-menu-item>
          </el-col>
          <el-col :span="4">
            <el-menu-item index="2"><router-link tag="span" to="/">首页</router-link></el-menu-item>
          </el-col>
          <el-col :span="4">
            <el-menu-item index="3"><router-link tag="span" to="/">个人</router-link></el-menu-item>
          </el-col>
          <el-col :span="4">
            <el-menu-item index="4"><router-link tag="span" to="/">日记</router-link></el-menu-item>
          </el-col>
          <el-col :span="6">
            <el-row type="flex" justify="end">
              <el-col :span="20" style="margin-top: 8px">
                <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-menu>
  </div>
</template>

<script>
  const signature = require( '../assets/img/1626.png')
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
      handleSelect: ()=>{console.log(this.horizontal)}
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
