<!--@Time: 2018/7/17 9:48 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <header-extend></header-extend>
    <el-container style="margin: 0 200px">
      <el-main>
        <el-row :gutter="20" justify="space-between">
          <el-col :span="16">
            <div class="block" style="background-color: white">
              <!--<span class="demonstration">默认 Hover 指示器触发</span>-->
              <el-carousel height="150px">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3>{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-container>
          <!--TODO 考虑只用row 不用 main-->
          <el-main style="padding: 10px">
            <el-card class="box-card" style="padding: 0;margin-bottom: 10px" v-for="o in loop_test" :key="o">
              <el-row justify="space-between">
                <el-col :span="6">
                  <img style="height: 100%;width: 100%"
                       :src="img_url">
                </el-col>
                <el-col :span="18">
                  <el-col :span="24">2018年7月23日</el-col>
                  <el-col :span="24">python多线程编程</el-col>
                  <el-col :span="24">
                    <p style="-webkit-box-orient: vertical;" class="span_class abstract_c">今天也是充满希望的一天，有梦想的人不睡觉，到达星辰的彼岸,今天也是充满希望的一天，有梦想的人不睡觉，到达星辰的彼岸,今天也是充满希望的一天，有梦想的人不睡觉，到达星辰的彼岸,今天也是充满希望的一天，有梦想的人不睡觉，到达星辰的彼岸</p>
                  </el-col>
                </el-col>
              </el-row>
            </el-card>
          </el-main>
          <el-aside style="padding: 10px">
            <el-card class="box-card">
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
          </el-aside>
        </el-container>

      </el-main>
      <!--<el-aside width="200px">-->
      <!--lll-->
      <!--</el-aside>-->
    </el-container>
    <el-footer class="footer_class">
      in footer
    </el-footer>
  </div>
</template>

<script>
  import HeaderExtend from '~/component/HeaderExtend'
  const img_url = '/src/assets/img/generally.jpg'
  export default {
    name: "index",
    components: {'HeaderExtend': HeaderExtend},
    data() {
      return {
        richtext: '',
        loop_test: [1, 2, 3, 4, 5],
        img_url: img_url
      }
    }
  }
</script>

<style scoped>
  .footer_class {
    /*position: fixed;*/
    /*border: 0;*/
  }
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