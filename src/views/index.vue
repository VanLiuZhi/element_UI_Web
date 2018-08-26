<!--@Time: 2018/7/17 9:48 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <header-extend></header-extend>
    <el-container class="container_class">
      <el-main style="padding: 20px 20px 20px 0">
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
            <iframe frameborder="0" :src="apple_watch" width="100%" height="300px" scrolling="no"></iframe>

          </el-col>
        </el-row>
        <el-row justify="start">
          <el-col :span="8">
            <div class="sort_div_class" @click="sortHandler('-date')">
              <svg-icon className="svg_class" icon-class="time"/>
              <span v-bind:class="[(listQuery.orderby === '-date') ? 'active' : '']">时间排序</span></div>
          </el-col>
          <el-col :span="8">
            <div class="sort_div_class" @click="sortHandler('-times')">
              <svg-icon className="svg_class" icon-class="heat2"/>
              <span v-bind:class="[(listQuery.orderby === '-times') ? 'active' : '']">热度排序</span></div>
          </el-col>
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
        <personal-space></personal-space>
        <article-classify v-if="hackReset" :isExpandAll="isExpandAll" v-on:click_event="classifyHandler" v-on:expand_event="expandHandler"></article-classify>
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
  import HeaderExtend from '@/components/HeaderExtend'
  import ArticleCard from '@/components/ArticleCard'
  import ArticleClassify from '@/components/ArticleClassify'
  import ArticleTag from '@/components/ArticleTag'
  import PersonalSpace from '@/components/PersonalSpace'
  import {listArticle} from '@/api/index'

  const apple_watch = '/static/html/apple_watch.html'

  export default {
    name: "index",
    components: {ArticleClassify, HeaderExtend, ArticleCard, ArticleTag, PersonalSpace},
    data() {
      return {
        isExpandAll: false,
        hackReset: true,
        apple_watch: apple_watch,
        richtext: '',
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
      expandHandler(){
        this.hackReset = false
        this.isExpandAll = !this.isExpandAll
        this.$nextTick(() => {
          this.hackReset = true
        })
      },
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

  .footer_class {
    /*position: fixed;*/
    /*border: 0;*/
  }
</style>
