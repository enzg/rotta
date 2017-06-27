<template>
  <div class="checkagent">
    <div class="title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>商户中心</el-breadcrumb-item>
        <el-breadcrumb-item>出口代理商</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: 'agentlist' }">代理商列表</el-breadcrumb-item>
        <el-breadcrumb-item class="large">代理商详细信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="head-title">
      <p>NA泛娱乐</p>
    </div>
    <div class="com-info">
      <h2>基本信息</h2>
      <div class="com-form">
        123
      </div>
    </div>
    <div class="manage-info">
      <h2>管理信息</h2>
      <div class="manage-form">
        123
      </div>
    </div>
    <div class="status-info">
      <h2>财务信息</h2>
      <div class="status-form">
        123
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.head-title{text-align: center;font-size: 3rem;font-weight: bolder;color: #5a5a5a}
h2{font-weight: normal;color: #404040;font-family: "微软雅黑";padding-left: 3.5rem;margin: 2rem 0;}
.com-info{}
.manage-info{}
.status-info{}
/*面包屑组件*/
.title{padding: 2rem;}
.large{font-size: 1.5rem;color: #000;position: relative;top: -0.3rem;}
</style>
