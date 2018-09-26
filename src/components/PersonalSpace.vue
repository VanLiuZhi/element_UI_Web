<!--@Time: 2018/8/26 14:31 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <el-card style="margin-bottom: 10px">
      <div slot="header" class="clearfix" style="text-align: left">
        <span style="font-weight: bolder"><svg-icon icon-class="myself" style="margin: 0 5px"/>个人空间</span>
        <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
      </div>
      <el-row type="flex">
        <el-col :span="12" style="flex-direction: row-reverse">
          <div onclick="javascript:window.open('https://segmentfault.com/u/justicelz')">
            <svg-icon style="font-size: 50px" icon-class="segmentfault" />
          </div>
          <div title="点击打开segmentfault" style="margin-top: 10px;text-decoration: none; cursor: pointer"><span onclick="javascript:window.open('https://segmentfault.com/u/justicelz')">segmentfault</span></div>
        </el-col>
        <el-col :span="12">
          <div onclick="javascript:window.open('https://github.com/VanLiuZhi')">
            <svg-icon style="font-size: 50px" icon-class="github" />
          </div>
          <div title="点击打开github" style="margin-top: 10px;text-decoration: none; cursor: pointer"><span onclick="javascript:window.open('https://github.com/VanLiuZhi')">GitHub</span></div>
        </el-col>
      </el-row>

      <!--<div style="display: flex;justify-content: flex-start;flex-wrap: wrap">-->
        <!--<template v-for="item in tag_data">-->
          <!--<el-button @click="$emit('click_event', item.guid)" type="success" size="mini" icon="el-icon-star-off" style="margin: 0 0 5px 5px">{{item.name}}</el-button>-->
        <!--</template>-->
      <!--</div>-->
    </el-card>
  </div>

</template>

<script>
  import { getCommonClassifyTag } from '@/api/index'
  const random_color = function () {
    return '#'+Math.floor(Math.random()*0xffffff).toString(16);
  }
  export default {
    name: "PersonalSpace",
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
