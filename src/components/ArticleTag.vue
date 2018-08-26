<!--@Time: 2018/8/14 19:46 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix" style="text-align: left">
        <span style="font-weight: bolder"><svg-icon icon-class="tag" style="margin: 0 5px"/>常用标签</span>
        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
      </div>
      <div style="display: flex;justify-content: flex-start;flex-wrap: wrap">
        <template v-for="item in tag_data">
          <el-button @click="$emit('click_event', item.guid)" type="success" size="mini" icon="el-icon-star-off" style="margin: 0 0 8px 8px" :style="{backgroundColor: item.color, borderColor: item.color}">{{item.name}}</el-button>
        </template>
      </div>
    </el-card>
  </div>

</template>

<script>
  import { getCommonClassifyTag } from '@/api/index'
  const random_color = function () {
    return '#'+Math.floor(Math.random()*0xffffff).toString(16);
  }
  export default {
    name: "ArticleTag",
    computed: {
      tag_coler: function () {
        v = ''
        console.log(123)
        let v = random_color()
        return v
      }
    },
    data() {
      return {
        tag_data: []
      }
    },
    methods: {
      getRandomColor() {
        return random_color()
      },
      testMethods() {
        console.log(112)
      },
      getTagData() {
        getCommonClassifyTag().then(response => {
          this.tag_data = response.data.data.items
        })
      }
    },
    created() {
      this.getTagData()
    }

  }
</script>

<style scoped>
  @import '../assets/css/article_tag.css';
</style>
