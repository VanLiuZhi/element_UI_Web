<!--@Time: 2018/7/17 9:48 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <header-extend></header-extend>
    <el-container style="margin: 0 300px">
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
          <el-main>
            <el-card class="box-card">
              <div v-html="richtext">
                <!--{{richtext}}-->
              </div>
              <!--<div v-for="o in 10" :key="o" class="text item">-->
                <!--{{'列表内容 ' + o }}-->
              <!--</div>-->
            </el-card>
          </el-main>
          <el-aside>
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
        "</table>"
      }
    }
  }
</script>

<style scoped>
  .footer_class {
    /*position: fixed;*/
    /*border: 0;*/
  }
</style>