<!--@Time: 2018/7/18 17:50 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <el-header class="heard">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <!--background-color="#42b983" text-color="#fff"-->
        <el-row :gutter="0" justify="space-between">
          <el-col :span="6">
            <el-menu-item index="1" style="font-size: 30px">HELLO WORD</el-menu-item>
          </el-col>
          <el-col :span="6">
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-col>
          <el-col :span="6">
            <el-menu-item index="3" disabled><router-link tag="span" to="/article_details/2">word页面</router-link></el-menu-item>
          </el-col>
          <el-col :span="6">
            <el-row justify="space-between">
              <el-col :span="24" style="margin-top: 5px">
                <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-menu>
    </el-header>
  </div>
</template>

<script>
  export default {
    name: "headerExtend",
    data() {
      return {
        horizontal: '',
        activeIndex: '1',
        input5: ''
      }
    },
    methods: {
      handleSelect: ()=>{console.log(this.horizontal)}
    }
  }
</script>

<style scoped>
  .heard {
    padding: 0;
  }
</style>