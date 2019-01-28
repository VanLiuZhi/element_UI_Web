<!--@Time: 2018/7/18 17:50 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div>
    <el-card shadow="hover" style="padding: 0;margin-bottom: 10px">
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item title="Objective" name="1">
          <p>Beautiful is better than ugly.</p>
          <p>Explicit is better than implicit.</p>
          <p>Simple is better than complex.</p>
          <p>Complex is better than complicated.</p>
          <p>Flat is better than nested.</p>
        </el-collapse-item>
        <el-collapse-item title="Reflective" name="2">
          <p>Sparse is better than dense.</p>
          <p>Readability counts.</p>
          <p>Special cases aren't special enough to break the rules.</p>
          <p>Although practicality beats purity.</p>
          <p>Errors should never pass silently.</p>
        </el-collapse-item>
        <el-collapse-item title="Interpretive" name="3">
          <p>Unless explicitly silenced.</p>
          <p>In the face of ambiguity, refuse the temptation to guess.</p>
          <p>There should be one-- and preferably only one --obvious way to do it.</p>
          <p>Although that way may not be obvious at first unless you're Dutch.</p>
        </el-collapse-item>
        <el-collapse-item title="Decisional" name="4">
          <p>Now is better than never.</p>
          <p>Although never is often better than *right* now.</p>
          <p>If the implementation is hard to explain, it's a bad idea.</p>
          <p>If the implementation is easy to explain, it may be a good idea.</p>
          <p>Namespaces are one honking great idea -- let's do more of those!</p>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ''
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
</style>
