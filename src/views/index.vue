<!--@Time: 2018/7/17 9:48 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <header-extend v-on:click_event="tagHandler" v-on:input_event="inputHandler"></header-extend>
    <el-container class="container_class">
      <el-aside style="position: fixed;z-index: 1000;width: 300px;margin-top:60px">
        <el-card
          :body-style="click_body_card"
          shadow="hover"
          style="padding: 0;margin-bottom: 10px;margin-top: 10px"
        >
          <el-row justify="space-between">
            <el-col>
              <iframe frameborder="0" :src="apple_watch" width="100%" height="200px" scrolling="no"></iframe>
            </el-col>
          </el-row>
        </el-card>
        <hot-content></hot-content>
        <post-tag v-on:click_event="tagHandler"></post-tag>
      </el-aside>
      <el-container :style="{minHeight: height + 'px', marginLeft: '340px'}">
        <el-header style="height: 60px"></el-header>
        <el-main style="padding: 20px 20px 20px 0">
          <!--index上部分-->
          <el-row justify="start">
            <el-col :span="8">
              <div class="sort_div_class" @click="sortHandler('created_at')">
                <svg-icon class="svg_class" icon-class="time"/>
                <span v-bind:class="[(listQuery.orderby === 'created_at') ? 'active' : '']">时间排序</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="sort_div_class" @click="sortHandler('-id')">
                <svg-icon class="svg_class" icon-class="heat2"/>
                <span v-bind:class="[(listQuery.orderby === '-id') ? 'active' : '']">热度排序</span>
              </div>
            </el-col>
          </el-row>
          <!--index下部分-->
          <el-container>
            <el-main style="padding: 10px">
              <article-card :data="list" v-loading="listLoading"></article-card>
            </el-main>
          </el-container>
        </el-main>
        <!--分页-->
        <div class="pagination-container">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="listQuery.page"
            :page-sizes="[5]"
            :page-size="listQuery.limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
        <!--分页结束-->
      </el-container>
      <!-- <el-footer class="footer_class">
          <span style="line-height: 80px">1441765847@qq.com vanliuzhi 2018</span>
      </el-footer>-->
    </el-container>

    <el-container>
      <el-footer class="footer_class">
        <span style="line-height: 80px; color: white">1441765847@qq.com vanliuzhi 2018</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import HeaderExtend from "@/components/HeaderExtend";
import PostTag from "@/components/PostTag";
import HotContent from "@/components/HotContent";
import ArticleCard from "@/components/ArticleCard";
import ArticleClassify from "@/components/ArticleClassify";
import ArticleTag from "@/components/ArticleTag";
import PersonalSpace from "@/components/PersonalSpace";
import { getPostList } from "@/api/index";

const apple_watch = "/static/html/apple_watch.html";
// var height =  window.screen.availHeight;

export default {
  name: "index",
  components: {
    ArticleClassify,
    HeaderExtend,
    ArticleCard,
    ArticleTag,
    PersonalSpace,
    HotContent,
    PostTag
  },
  data() {
    return {
      height: 0,
      isExpandAll: false,
      hackReset: true,
      apple_watch: apple_watch,
      richtext: "",
      list: [], // 存储首页数据
      listLoading: false, // 首页数据加载loading触发标识
      total: null,
      listQuery: {
        // 首页数据查询参数
        page: 1,
        limit: 5,
        query_str: "",
        type: "normal",
        orderby: "-created_at",
        classify_guid: ""
      },
      click_body_card: {
        padding: "0px"
      }
    };
  },
  methods: {
    expandHandler() {
      this.hackReset = false;
      this.isExpandAll = !this.isExpandAll;
      this.$nextTick(() => {
        this.hackReset = true;
      });
    },
    tagHandler(tag_name) {
      if (tag_name == "index") {
        this.initParam();
        this.getList();
      } else {
        this.listQuery.type = "tag";
        this.listQuery.query_str = tag_name;
        this.getList();
      }
    },
    inputHandler(value) {
      this.listQuery.type = "search";
      this.listQuery.query_str = value.value;
      if (value.value != "") {
        this.getList();
      }
    },
    // 排序
    sortHandler(value) {
      this.listQuery.orderby = value;
      this.getList();
    },
    // 获取首页数据，做分页处理
    getList() {
      this.listLoading = true;
      getPostList(this.listQuery).then(response => {
        const res = response.data;
        this.list = res.data.items;
        this.total = res.data.total;
        this.listLoading = false;
      });
    },
    initParam() {
      this.listQuery = {
        page: 1,
        limit: 5,
        query_str: "",
        type: "normal",
        orderby: "-created_at"
      };
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
    handleSizeChange(val) {
      this.listQuery.limit = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    }
  },
  created() {
    this.getList();
    this.$nextTick(function(){
      this.height = document.body.clientHeight - 80
    })
  }
};
</script>

<style scoped>
.sort_div_class {
  text-decoration: none;
  cursor: pointer;
  color: #868e96;
  font-weight: 800;
  font-size: 15px;
}

.sort_div_class:hover {
  color: red;
}

.svg_class {
  margin: 0 5px;
}

.container_class {
  margin-left: auto;
  margin-right: auto;
  width: 1100px;
}

.active {
  color: #212529;
  border-bottom: 2px solid #646464;
}

.click > .el-card__body {
  padding: 0px;
}

.footer_class {
  margin-top: 20px;
  height: 80px;
  background-color: #24292e;
  text-align: center;

  /* position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px; */
  /* background-color: #666; */
}
</style>
