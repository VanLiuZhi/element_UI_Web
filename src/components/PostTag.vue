<!--@Time: 2018/7/18 17:50 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <el-card shadow="hover">
      <div slot="header" class="clearfix" style="text-align: left">
        <span style="font-weight: bolder">
          <svg-icon icon-class="tag" style="margin: 0 5px"/>标签
        </span>
        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
      </div>
      <template >
        <el-button v-for="item in tag_data" :key="item.name"
          @click="$emit('click_event', item.name)"
          type="success"
          size="mini"
          style="margin: 0 0 8px 8px"
          :style="{backgroundColor: item.color, borderColor: item.color}"
        >{{item.name}}</el-button>
      </template>
    </el-card>
  </div>
</template>

<script>
import { getTag } from "@/api/index";
const random_color = function() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
};
export default {
  name: "PostTag",
  computed: {
    tag_coler: function() {
      v = "";
      console.log(123);
      let v = random_color();
      return v;
    }
  },
  data() {
    return {
      tag_data: []
    };
  },
  methods: {
    getRandomColor() {
      return random_color();
    },
    testMethods() {
      console.log(112);
    },
    getTagData() {
      getTag().then(response => {
        this.tag_data = response.data.data;
      });
    }
  },
  created() {
    this.getTagData();
  }
};
</script>

<style scoped>
@import "../assets/css/article_tag.css";
</style>
