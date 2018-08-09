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
          <el-col :span="24"><span>{{item.date}}</span></el-col>
          <el-col :span="24">{{item.title}}</el-col>
          <el-col :span="24" style="text-align: left">
            <p style="-webkit-box-orient: vertical;" class="span_class abstract_c">{{item.abstract}}</p>
          </el-col>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  import {formatDate} from "../utils/dateFormat"
  import { getArticleForGUID } from '@/api/index'
  const img_url = '/src/assets/img/generally.jpg'
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
  .span_class:hover{
    color: red;
  }
  .span_class {
    color: #17a2b8;;
  }
  .abstract_c {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
  }
</style>