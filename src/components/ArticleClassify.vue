<!--@Time: 2018/8/6 17:05 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <el-card class="box-card" style="margin-bottom: 10px">
      <div slot="header" class="clearfix" style="text-align: left">
        <span style="font-weight: bolder"><svg-icon icon-class="classify" style="margin: 0 5px"/>分类列表</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="$emit('expand_event')">{{isExpandAll?'收起全部':'展开全部'}}</el-button>
      </div>
      <el-input placeholder="输入关键字进行过滤" v-model="filterText">
      </el-input>
      <el-tree node-key="guid" :default-expand-all="isExpandAll" :props="props" :load="loadNode"
               :highlight-current=highlight_current lazy @check-change="handleCheckChange"
               @node-click="handleNodeClick" :expand-on-click-node="false" :filter-node-method="filterNode"
               ref="classify_tree" empty-text="正在加载ing . . .">
        <div slot-scope="{ node, data }" class="custom-tree-node">
          <el-row style="width: 100%;flex-wrap: nowrap">
            <el-col :span="24" style="text-align: left">
              <div @click="$emit('click_event', data.guid)">
            <span class="classify_class">{{ node.label }}({{ data.return_all_children_count }})
            </span>
                <span><svg-icon :icon-class="(node.id === selectKey)?'eye_select':'eye'"/></span>
              </div>
            </el-col>
            <!--<el-col :span="4">-->
            <!--<el-button type="success" size="mini" class="classify_class">{{ data.return_all_children_count }}</el-button>-->
            <!--</el-col>-->
          </el-row>
        </div>
      </el-tree>
    </el-card>
  </div>
</template>

<script>
  import {getTopLevelArticleClassify, getArticleClassifyForGUID} from "@/api/index"

  export default {
    name: "ArticleClassify",
    watch: {
      filterText(val) {
        this.$refs.classify_tree.filter(val);
      }
    },
    props: ['isExpandAll'],
    data() {
      return {
        props: {
          // 组件设置了props，值指向数据，也就是这里。
          label: 'name',
          // children: 'zones',
          isLeaf: 'isLeaf',
          // key: 'guid'
        },
        highlight_current: true,
        tree_data: [],
        selectKey: '',
        filterText: ''
      };
    },
    methods: {
      expandAll() {

      },
      // 通过顶级文章分类
      getInitList(node) {
        return getTopLevelArticleClassify().then(response => {
          this.tree_data = response.data.data.items
          return response
        })
      },
      // 获取子分类
      getChildrenList(node) {
        // console.log(node)
        return getArticleClassifyForGUID({parent: node.data.guid}).then(response => {
          this.tree_data = response.data.data.items
          return response
        })
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.name.indexOf(value) !== -1;
      },
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data, node) {
        // console.log(data);
        this.selectKey = node.id
        // data.isSelected = 99
      },
      async loadNode(node, resolve) {
        if (node.level === 0) {
          await this.getInitList(node)
          return resolve(this.tree_data)
        }
        if (node.level > 3) return resolve([]);
        if (node.level > 0) {
          await this.getChildrenList(node)
          setTimeout(() => {
            resolve(this.tree_data);
          }, 300);
        }
      }
    }
  }
</script>

<style scoped>
  .classify_class:hover {
    /*color: red;*/
  }

  .classify_class_level_one {
    margin-left: 10px;
  }

  .classify_class_level_two {
    margin-left: 15px;
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    /*padding-right: 8px;*/
  }
</style>

<style>
  .el-tree-node {
    margin: 5px 0;
    /*border-top: 1px solid rgba(0,0,0,.125);*/
  }

  .el-tree-node__content:hover {
    background-color: #66b1ff87;
  }

  /*.el-tree-node__content {*/
  /*background-color: lawngreen;*/
  /*}*/
  /*.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {*/
    /*background-color: #66b1ff;*/
  /*}*/
</style>
