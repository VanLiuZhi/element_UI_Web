<!--@Time: 2018/7/18 17:50 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div style="position: fixed;z-index: 1000;width: 100%;text-align: center;">
    <el-menu
      :default-active="'1'"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#24292e"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="index" style="width: 30%">
        <span style="font-size: 30px">Learn Programing</span>
      </el-menu-item>

      <el-menu-item index="Python" ref="python" value="Python" style="width: 6.6%">Python</el-menu-item>

      <el-menu-item index="JavaScript" style="width: 6.6%">JavaScript</el-menu-item>
      <el-menu-item index="Linux" style="width: 6.6%">Linux</el-menu-item>
      <el-menu-item index="Database" style="width: 6.6%">Database</el-menu-item>
      <el-menu-item index="Web" style="width: 6.6%">Web</el-menu-item>

      <el-menu-item index="7" style="width: 24%" class="input_class">
        <el-autocomplete
          v-model="input_value"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容"
          @select="inputHandleSelect"
          style="margin-bottom: 1px;width: 90%;"
          clearable
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-autocomplete>
      </el-menu-item>
      <el-submenu index="8" style="width: 6.6%">
        <template slot="title">个人中心</template>
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
    </el-menu>
  </div>
</template>

<script>
import { searchPost } from "@/api/index";
// const signature = require("../assets/img/1626.png");
export default {
  name: "headerExtend",
  data() {
    return {
      input_value: "",
      horizontal: "",
      activeIndex: "1"
      // signature: signature
    };
  },
  methods: {
    handleSelect: function(index) {
      if (index != "7") {
        this.$emit("click_event", index);
      } else {
        this.inputHandleSelect();
      }
    },
    inputHandleSelect: function(index) {
      let data = { value: this.input_value};
      this.$emit("input_event", data);
    },
    querySearchAsync(queryString, cb) {
      if (queryString != "") {
        searchPost({ query: queryString, page: 1, limit: 100 }).then(
          response => {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              var values = queryString ? response.data.data.items : [];
              cb(values);
            }, 200 * Math.random());
          }
        );
      }
    }
  }
};
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

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 0px solid #409eff;
  border-bottom-color: 0px solid #409eff;
}
</style>

<style>
.el-menu-item {
  font-size: 15px;
}

.input_class {
  padding: 0 0 10px 0;
}
</style>
