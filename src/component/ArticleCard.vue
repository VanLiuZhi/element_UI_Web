<!--@Time: 2018/7/30 9:58 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <el-card class="box-card" style="padding: 0;margin-bottom: 10px" v-for="item in data" :key="item.id" @click.native="cardClick(item.guid)">
      <el-row justify="space-between">
        <el-col :span="6">
          <img style="height: 100%;width: 100%"
               :src="item.cover">
        </el-col>
        <el-col :span="18">
          <el-col :span="24"><span>2018年7月23日</span></el-col>
          <el-col :span="24">python多线程编程</el-col>
          <el-col :span="24">
            <p style="-webkit-box-orient: vertical;" class="span_class abstract_c">今天也是充满希望的一天，有梦想的人不睡觉，到达星辰的彼岸,今天也是充满希望的一天，有梦想的人不睡觉，到达星辰的彼岸,今天也是充满希望的一天，有梦想的人不睡觉，到达星辰的彼岸,今天也是充满希望的一天，有梦想的人不睡觉，到达星辰的彼岸</p>
          </el-col>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  import {formatDate} from "../utils/dateFormat"
  import { getArticleForGUID } from '@/api/index'
  export default {
    name: "ArticleCard",
    props: ['data'],
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