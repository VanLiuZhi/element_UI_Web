<!--@Time: 2018/7/26 22:45 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <header-extend></header-extend>
    <el-container style="margin-left: auto;margin-right: auto; width: 1100px">
      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <!--<el-row justify="start" style="margin: 5px">-->
        <!--<el-col :span="4">-->
        <!--<el-button type="primary" onclick="javascript:history.back()">返回</el-button>-->
        <!--</el-col>-->
        <!--&lt;!&ndash;<el-col :span="3"><el-button type="primary">返回</el-button></el-col>&ndash;&gt;-->
        <!--</el-row>-->
        <el-card style="text-align: left;padding: 50px" class="rich_content_class" v-html="content">

        </el-card>
      </el-main>
      <el-aside style="position: relative;">
        <!--<div class="rich_text_class" style="position:fixed;" v-html="menu">-->

        <!--</div>-->
        <div v-highlight>
          <pre>
            <code v-html="test_html"></code>
          </pre>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
  import HeaderExtend from '@/component/HeaderExtend'
  import 'highlight.js/styles/googlecode.css'
  import hljs from 'highlight.js'
  hljs.highlightCode =   function () { //自定义highlightCode方法，将只执行一次的逻辑去掉
    let blocks = document.querySelectorAll('pre code');
    [].forEach.call(blocks, hljs.highlightBlock);
  };
  export default {
    name: "ArticleDetails",
    components: {'HeaderExtend': HeaderExtend},
    methods: {
      CodeSyntaxHighlighter() {
        // todo 当前代码高亮思路使用第三方插件，引入对于文件，在页面DOM渲染完成后对pre标签增加样式，调用高亮方法
        SyntaxHighlighter.defaults['auto-links'] = false; //是否可以添加自动连接  默认连接可以点击 默认为true
        SyntaxHighlighter.defaults['collapse'] = false; //默认高亮代码是否折叠 true为折叠 false为不折叠
        SyntaxHighlighter.defaults['html-script'] = false; //是否开启html的混合形式 默认为false 为关闭
        SyntaxHighlighter.defaults['toolbar']=true; //黄绿色版权问号的显示和隐藏 默认为true 为显示

        let blocks = document.querySelectorAll("pre");
        console.log(blocks);
        blocks.forEach(value => {
          console.log(value);
          value.className += ' brush: js;';
        });
        // document.getElementsByTagName('pre')[1].
        SyntaxHighlighter.highlight();
      },
      Codehighlight() {
        // hljs.highlightCode()
      }
    },
    created() {
      this.content = this.$route.params.data.data.content
      this.menu = this.$route.params.data.data.menu
      this.$nextTick(function () {
        // this.CodeSyntaxHighlighter()
        this.Codehighlight()
      });
    },
    data() {
      return {
        content: '',
        menu: '',
        test_html: "@csrf_protect.exempt\n" +
        "@blueprint.route('/param_query/<terminal_code>', methods=['GET', 'POST'])\n" +
        "# @per_required\n" +
        "def param_query(terminal_code):\n" +
        "    \"\"\"\n" +
        "    一键查询所有参数\n" +
        "    :param terminal_id:\n" +
        "    :return:\n" +
        "    \"\"\"\n" +
        "    terminal = TerminalInfo.query.filter(TerminalInfo.terminal_code == terminal_code).first()\n" +
        "    if terminal:\n" +
        "        terminal_area = terminal.terminal_area\n" +
        "        query_AFN = SysDict.query.filter(SysDict.dict_type == 'query_message').all()\n" +
        "        data = []\n" +
        "        for item in query_AFN:\n" +
        "            dic = {}\n" +
        "            dic.update({'rtu_AFN': item.dict_id})\n" +
        "            dic.update({'terminal_area': terminal_area})\n" +
        "            dic.update({'terminal_code': terminal_code})\n" +
        "            json.dumps(dic)\n" +
        "            data.append(dic)\n" +
        "        revc_data = socket_query_param(data)\n" +
        "        if revc_data == '00':\n" +
        "            return json.dumps({'desc': '查询中请稍等', 'code': ResponseCode.SUCCESS})\n" +
        "        else:\n" +
        "            return json.dumps({'desc': '报文发送失败', 'code': ResponseCode.ERROR})\n" +
        "    else:\n" +
        "        return None"
      }
    }
  }
</script>

<style scoped>
  .rich_content_class /deep/ h2, .rich_content_class /deep/ h3 {
    margin: 10px 0 10px 0;
    padding: 0 10px;
    border-left: 5px solid #20c997;
    background-color: #f7f7f7;
    line-height: 2em;
  }

  /*.rich_text /deep/ .rich_text_class {*/
  /*overflow: hidden;*/
  /*counter-reset: xxx 0;*/
  /*}*/
  .rich_text_class /deep/ li {
    list-style: none;
    position: relative;
    padding: 0 0 0 2em;
    margin: 0 0 .5em 10px;
    -webkit-transition: .12s;
    transition: .12s;
  }

  .rich_text_class /deep/ li::before {
    position: absolute;
    content: '\2022';
    color: #409eff;
    top: 0;
    left: 0;
    text-align: center;
    font-size: 2em;
    opacity: .5;
    line-height: .75;
    -webkit-transition: .5s;
    transition: .5s;
  }

  .rich_text_class /deep/ li:hover {
    color: red;
  }

  .rich_text_class /deep/ a {
    color: #3a8ee6;
  }

  .rich_text_class /deep/ a:hover {
    color: red;
  }

  .rich_text_class /deep/ li:hover::before {
    -webkit-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
    opacity: 1;
    text-shadow: 0 0 4px;
    -webkit-transition: .1s;
    transition: .1s;
  }

  .rich_text_class /deep/ li::before {
    content: counter(xxx, decimal) ".";
    counter-increment: xxx 1;
    font-size: 1em;
    opacity: .5;
    line-height: 1.4;
    -webkit-transition: .5s;
    transition: .5s;
  }

  .rich_text_class /deep/ li:hover:before {
    opacity: 1;
    left: -10px;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    text-shadow: none;
    -webkit-transition: .12s;
    transition: .12s;
  }

  .rich_text_class /deep/ ol, .rich_text_class /deep/ ul {
    /*width: 28%;*/
    display: inline-block;
    text-align: left;
    vertical-align: top;
    /*background: #409eff;*/
    color: #409eff;
    border-radius: 5px;
    padding: 1.5em;
    margin: 2%;
    /*box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);*/
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 970px;
      padding-right: 15px;
      padding-left: 15px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 750px;
      padding-right: 12px;
      padding-left: 12px;
    }
  }

  @media (min-width: 576px) {
    .container {
      max-width: none;
      padding-right: 10px;
      padding-left: 10px;
    }
  }

  .container {
    padding-right: 5px;
    padding-left: 5px;
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

</style>