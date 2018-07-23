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
                       src="https://vanliuzhi-object-storage.oss-cn-zhangjiakou.aliyuncs.com/2016411523810606.jpg?Expires=1532363044&OSSAccessKeyId=TMP.AQHsncAt-luwttwlRYjMZ1DaMeGgvQn7ScyDx-tWqaOytVYd-HhQAXBx_LuYAAAwLAIUH8rgiNQoUn78wmwLtCXryDTUozcCFC9KsmVGmJNNIEbObT5fX7yU51iw&Signature=eHF2Xppj8FfgsEOPBiouJOoYpTU%3D">
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

  export default {
    name: "index",
    components: {'HeaderExtend': HeaderExtend},
    data() {
      return {
        richtext: "<p>文章测试</p>\n" +
        "<pre class=\"language-python\"><code>def get_you_money():\n" +
        "    return 1000</code></pre>\n" +
        "<p><span style=\"background-color: #00ff00;\"><strong>今天也是充满希望的一天</strong></span></p>\n" +
        "<p>&nbsp;</p>\n" +
        "<table style=\"border-collapse: collapse; width: 100%;\" border=\"1\">\n" +
        "<tbody>\n" +
        "<tr>\n" +
        "<td style=\"width: 20%;\">1</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "<td style=\"width: 20%;\">&nbsp;</td>\n" +
        "</tr>\n" +
        "</tbody>\n" +
        "</table>",
        loop_test: [1, 2, 3, 4, 5]
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