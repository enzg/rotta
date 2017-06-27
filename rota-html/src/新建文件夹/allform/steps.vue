<template>
  <div class="steps">
    <el-steps :active="active" finish-status="success">
      <el-step title="填写基本信息"></el-step>
      <el-step title="配置代理商"></el-step>
      <el-step title="创建成功"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: 'steps',
  data () {
    return {
    }
  },
  props: ['active']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.steps{margin:0 auto;max-width: 90rem;padding-left: 20rem;}
</style>
