<!--@Time: 2018/7/17 9:48 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <header-extend></header-extend>
    <el-container class="container_class">
      <el-main>
        <!--index上部分-->
        <el-row justify="space-between" style="padding: 10px">
          <el-col :span="24">
            <!--<div class="block" style="background-color: white">-->
              <!--&lt;!&ndash;<span class="demonstration">默认 Hover 指示器触发</span>&ndash;&gt;-->
              <!--<el-carousel height="330px">-->
                <!--<el-carousel-item>-->
                  <!--<img src="/src/assets/img/banner_1.jpg"/>-->
                <!--</el-carousel-item>-->
                <!--<el-carousel-item>-->
                  <!--<img src="/src/assets/img/banner_2.jpg"/>-->
                <!--</el-carousel-item>-->
              <!--</el-carousel>-->
            <!--</div>-->
            <iframe frameborder="0" src="/src/assets/html/apple_watch.html" width="100%" height="300px" scrolling="no"></iframe>

          </el-col>
        </el-row>
        <el-row justify="start">
          <el-col :span="8"><div class="sort_div_class" @click="sortHandler('-date')"><svg-icon className="svg_class" icon-class="time" /><span v-bind:class="[(listQuery.orderby === '-date') ? 'active' : '']">时间排序</span></div></el-col>
          <el-col :span="8"><div class="sort_div_class" @click="sortHandler('-times')"><svg-icon className="svg_class" icon-class="heat2" /><span v-bind:class="[(listQuery.orderby === '-times') ? 'active' : '']">热度排序</span></div></el-col>
        </el-row>
        <!--index下部分-->
        <el-container>
          <el-main style="padding: 10px">
            <article-card :data="list" v-loading="listLoading"></article-card>
          </el-main>
        </el-container>
      </el-main>
      <!--侧边栏-->
      <el-aside style="padding: 30px 0;">
        <el-card class="box-card" style="margin-bottom: 10px">
          <div slot="header" class="clearfix" style="text-align: left">
            <span style="font-weight: bolder"><svg-icon icon-class="classify" style="margin: 0 5px" />分类列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <article-classify v-on:click_event="classifyHandler"></article-classify>
        </el-card>
        <article-tag v-on:click_event="classifyHandler"></article-tag>
      </el-aside>
      <!--end侧边栏-->
    </el-container>

    <!--分页-->
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="listQuery.page" :page-sizes="[5,10,20,30,50]" :page-size="listQuery.limit"
                     layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <!--分页结束-->
    <el-footer class="footer_class">
      <span style="line-height: 80px">1441765847@qq.com  vanliuzhi 2018</span>
    </el-footer>
  </div>
</template>

<script>
  import HeaderExtend from '@/component/HeaderExtend'
  import ArticleCard from '@/component/ArticleCard'
  import ArticleClassify from '@/component/ArticleClassify'
  import ArticleTag from '@/component/ArticleTag'
  import {listArticle} from '@/api/index'

  // import '@/assets/css/apple_clock.css'
  // import '@/assets/js/apple_clock.js'
  const img_url = '/src/assets/img/generally.jpg'

  export default {
    name: "index",
    components: {ArticleClassify, HeaderExtend, ArticleCard, ArticleTag},
    data() {
      return {
        richtext: '',
        img_url: img_url,
        list: [],  // 存储首页数据
        listLoading: false,  // 首页数据加载loading触发标识
        total: null,
        listQuery: {  // 首页数据查询参数
          page: 1,
          limit: 5,
          importance: undefined,
          title: undefined,
          type: undefined,
          orderby: '-date',
          classify_guid: ''
        },
      }
    },
    methods: {
      classifyHandler(classify_guid) {
        this.listQuery.classify_guid = classify_guid
        this.getList()
      },
      // 排序
      sortHandler(value) {
        this.listQuery.orderby = value
        this.getList()
      },
      // 获取首页数据，做分页处理
      getList() {
        this.listLoading = true
        listArticle(this.listQuery).then(response => {
          const res = response.data
          this.list = res.data.item
          this.total = res.data.total
          this.listLoading = false
        })
      },
      handleFilter() {
        this.listQuery.page = 1
        this.getList()
      },
      handleSizeChange(val) {
        this.listQuery.limit = val
        this.getList()
      },
      handleCurrentChange(val) {
        this.listQuery.page = val
        this.getList()
      },
    },
    created() {
      this.getList()
    }
  }
</script>

<style scoped>
  .sort_div_class {
    text-decoration: none;
    cursor: pointer;
    color: #868e96;
    font-weight: 800;
    font-size: 15px;
  }
  .sort_div_class:hover{
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
  .footer_class {
    /*position: fixed;*/
    /*border: 0;*/
  }
</style>