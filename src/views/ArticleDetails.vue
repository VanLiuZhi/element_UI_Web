<!--@Time: 2018/7/26 22:45 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <header-extend></header-extend>
    <el-container style="margin-left: auto;margin-right: auto; width: 1100px">
      <el-main>
        <el-card style="margin-bottom: 20px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <template v-for="item in breadcrumb">
            <el-breadcrumb-item><span class="el-breadcrumb__inner is-link" @click="goToRoute(item.name)">{{item.name}}</span></el-breadcrumb-item>
          </template>
          <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
        </el-breadcrumb>
        </el-card>
        <el-card style="text-align: left;padding: 50px" class="rich_content_class" v-html="content" v-highlight>
        </el-card>
      </el-main>
      <el-aside style="position: relative;">
        <div class="rich_text_class" style="position:fixed;" v-html="menu">
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
  import HeaderExtend from '@/components/HeaderExtend'
  import {getArticleForGUID} from '@/api/index'

  export default {
    name: "ArticleDetails",
    components: {'HeaderExtend': HeaderExtend},
    methods: {
      cardClick(guid) {
        getArticleForGUID({GUID: guid}).then(response => {
          let routeData = response.data
          this.content = routeData.data.content
          this.menu = routeData.data.menu
          this.breadcrumb = routeData.data.return_classify_parents
        })
      },
      goToRoute(guid) {
        console.log(guid)
      }
    },
    created() {
      let routeData = this.$route.params.data
      if (routeData) {
        this.content = this.$route.params.data.data.content
        this.menu = this.$route.params.data.data.menu
        this.breadcrumb = routeData.data.return_classify_parents
      }
      else {
        this.cardClick(this.$route.params.guid)
      }
      this.$nextTick(function () {
      });
    },
    data() {
      return {
        content: '',
        menu: '',
        breadcrumb: []
      }
    }
  }
</script>

<style scoped>
  .breadcrumb_class {
    text-decoration: none; cursor: pointer
  }

  .rich_content_class /deep/ h2, .rich_content_class /deep/ h3 {
    margin: 10px 0 10px 0;
    padding: 0 10px;
    border-left: 5px solid #20c997;
    background-color: #f7f7f7;
    line-height: 2em;
  }

  /*.rich_text /deep/ .rich_text_class {*/
  /*overflow: hidden;*/
  /*counter-reset: xxx 0;*/
  /*}*/
  .rich_text_class /deep/ li {
    list-style: none;
    position: relative;
    padding: 0 0 0 2em;
    margin: 0 0 .5em 10px;
    -webkit-transition: .12s;
    transition: .12s;
  }

  .rich_text_class /deep/ li::before {
    position: absolute;
    content: '\2022';
    color: #409eff;
    top: 0;
    left: 0;
    text-align: center;
    font-size: 2em;
    opacity: .5;
    line-height: .75;
    -webkit-transition: .5s;
    transition: .5s;
  }

  .rich_text_class /deep/ li:hover {
    color: red;
  }

  .rich_text_class /deep/ a {
    color: #3a8ee6;
  }

  .rich_text_class /deep/ a:hover {
    color: red;
  }

  .rich_text_class /deep/ li:hover::before {
    -webkit-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
    opacity: 1;
    text-shadow: 0 0 4px;
    -webkit-transition: .1s;
    transition: .1s;
  }

  .rich_text_class /deep/ li::before {
    /*content: counter(xxx, decimal) ".";*/
    /*counter-increment: xxx ;*/
    font-size: 1em;
    opacity: .5;
    line-height: 1.4;
    -webkit-transition: .5s;
    transition: .5s;
  }

  .rich_text_class /deep/ li:hover:before {
    opacity: 1;
    left: -10px;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    text-shadow: none;
    -webkit-transition: .12s;
    transition: .12s;
  }

  .rich_text_class /deep/ ol, .rich_text_class /deep/ ul {
    width: 100%;
    display: inline-block;
    text-align: left;
    vertical-align: top;
    /*background: #409eff;*/
    color: #409eff;
    border-radius: 5px;
    padding: 1.5em 0;
    margin: 2%;
    /*box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);*/
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 970px;
      padding-right: 15px;
      padding-left: 15px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 750px;
      padding-right: 12px;
      padding-left: 12px;
    }
  }

  @media (min-width: 576px) {
    .container {
      max-width: none;
      padding-right: 10px;
      padding-left: 10px;
    }
  }

  .container {
    padding-right: 5px;
    padding-left: 5px;
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

</style>
