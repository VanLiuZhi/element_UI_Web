<!--@Time: 2018/8/6 17:05 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <!--<el-input placeholder="输入关键字进行过滤" v-model="filterText">-->
    <!--</el-input>-->

    <!--<el-tree class="filter-tree" :props="defaultProps" :filter-node-method="filterNode" ref="tree2">-->
    <!--</el-tree>-->
    <el-tree :props="props" :load="loadNode" :highlight-current=highlight_current lazy @check-change="handleCheckChange"
             @node-click="handleNodeClick">
      <div slot-scope="{ node, data }" class="custom-tree-node">
        <span>{{ node.label }}
        </span>
        <el-button type="success" size="mini">Append</el-button>
      </div>
    </el-tree>
  </div>
</template>

<script>
  import {getTopLevelArticleClassify, getArticleClassifyForGUID} from "@/api/index"

  export default {
    name: "ArticleClassify",
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
    data() {
      return {
        props: {
          // 组件设置了props，值指向数据，也就是这里。
          label: 'name',
          children: 'zones'
        },
        highlight_current: true,
        tree_data: []
      };
    },
    methods: {
      // 通过顶级文章分类
      getInitList(node) {
        return getTopLevelArticleClassify().then(response => {
          this.tree_data = response.data.data.items
          return response
        })
      },
      // 获取子分类
      getChildrenList(node) {
        return getArticleClassifyForGUID({parent: node.data.guid}).then(response => {
          this.tree_data = response.data.data.items
          return response
        })
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
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
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
<style>
  .el-tree-node {
    margin: 10px;
  }
</style>