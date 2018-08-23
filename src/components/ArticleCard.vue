<!--@Time: 2018/7/30 9:58 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <el-card class="box-card" style="padding: 0;margin-bottom: 10px" v-for="item in data" :key="item.id" @click.native="cardClick(item.guid)">
      <el-row justify="space-between">
        <el-col :span="6">
          <img style="height: 100%;width: 100%"
               :src="item.cover || default_image">
        </el-col>
        <el-col :span="18" style="padding: 0 10px">
          <el-col :span="24" style="text-align: left;font-size: 13px;color: #868e96;">
            <svg-icon icon-class="classify" />
            <span>{{item.return_article_classify_name}}</span>
            <span class="span_class" style="margin-right: 10px" title="点击查看当前分类下更多文章">{{item.article_classify_name}}</span>
            <svg-icon className="svg_class" icon-class="date" /><span>{{item.date}}</span>
            <svg-icon className="svg_class" icon-class="eye_times" /><span>{{item.times}}</span>
          </el-col>
          <el-col :span="24">
            <h3 class="span_title_class">{{item.title}}</h3>
          </el-col>
          <el-col :span="24" style="text-align: left">
            <p style="-webkit-box-orient: vertical;" class="abstract_c">{{item.abstract}}</p>
          </el-col>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  import {formatDate} from "../utils/dateFormat"
  import { getArticleForGUID } from '@/api/index'
  // const img_url = '/src/assets/img/default.png'
  const img_url = require( '../assets/img/default.png')
  export default {
    name: "ArticleCard",
    props: ['data'],
    data() {
      return {
        default_image: img_url
      }
    },
    methods: {
      cardClick(guid) {
        getArticleForGUID({GUID:guid}).then(response => {
          this.$router.push({
            name: 'ArticleDetails',
            params: {
              guid: guid,
              data: response.data
            }
          })
        })
      }
    }
  }
</script>

<style scoped>
  .svg_class {
    margin: 0 5px;
  }
  .span_class:hover{
    color: #17a2b8;
  }
  .span_class {
    color: red;
    text-decoration: none; cursor: pointer;
  }
  .span_title_class:hover{
    color: red;
  }
  .span_title_class {
    text-align: left;
    margin: 5px;
    color: #17a2b8;
    text-decoration: none; cursor: pointer;
  }
  .abstract_c {
    margin: 5px 0;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
  }
</style>
