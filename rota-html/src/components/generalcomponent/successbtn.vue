<template>
  <div>
    <div class="successbtn">
      <el-button type="primary">返回列表</el-button>
      <el-button class="justfy1">查看</el-button>
      <el-button>打印</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'successbtn'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.successbtn{margin-left: -4rem;padding: 2rem 0;}
.justfy1{margin:0 7%;}
</style>
