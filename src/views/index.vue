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
            <div class="block" style="background-color: white">
              <!--<span class="demonstration">默认 Hover 指示器触发</span>-->
              <el-carousel height="330px">
                <el-carousel-item>
                  <img src="/src/assets/img/banner_1.jpg"/>
                </el-carousel-item>
                <el-carousel-item>
                  <img src="/src/assets/img/banner_2.jpg"/>
                </el-carousel-item>
              </el-carousel>
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
      <!--侧边栏-->
      <el-aside style="padding: 30px 0">
        <el-card class="box-card">
          <div v-for="o in 10" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
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
      in footer
    </el-footer>
  </div>
</template>

<script>
  import HeaderExtend from '@/component/HeaderExtend'
  import ArticleCard from '@/component/ArticleCard'
  import {listArticle} from '@/api/index'

  const img_url = '/src/assets/img/generally.jpg'

  export default {
    name: "index",
    components: {'HeaderExtend': HeaderExtend, 'ArticleCard': ArticleCard},
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
          sort: '+id'
        },
      }
    },
    methods: {
      // 获取首页数据，做分页处理
      getList() {
        this.listLoading = true
        listArticle(this.listQuery).then(response => {
          const res = response.data
          this.list = res.data.item
          this.total = res.data.total
          setTimeout(() => {
            this.listLoading = false
          }, 1.5 * 1000)
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
  .container_class {
    margin-left: auto;
    margin-right: auto;
    width: 1100px;
  }

  .footer_class {
    /*position: fixed;*/
    /*border: 0;*/
  }
</style>