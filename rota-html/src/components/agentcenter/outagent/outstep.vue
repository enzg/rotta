<template>
  <div>
    <div class="outstep">
    	<el-steps :active="active" finish-status="success" :align-center= "center" :center= "center" :space= 'space'>
      		<el-step title="填写基本信息"></el-step>
      		<el-step title="配置代理商"></el-step>
      		<el-step title="创建成功"></el-step>
    	</el-steps>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'steps',
  props: ['active'],
  data () {
    return {
      center: true,
      space: 350
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outstep{padding-top: 3rem;}
</style>
