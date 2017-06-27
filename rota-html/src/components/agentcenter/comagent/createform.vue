<template>
  <div>
    <div class="createform">
      <h2 class="title">基本信息$</h2>
 	    <p><span>商户标识</span><el-input placeholder="必须以字母开头" class="input"></el-input></p>
      	<p><span>商户昵称</span><el-input placeholder="请输入" class="input"></el-input></p>
      	<p class="justfy1"><span >商户抽成比</span><el-input placeholder="请输入" class="input"></el-input></p>
      	<p><span>商户邮箱</span><el-input placeholder="请输入" class="input"></el-input></p>
      	<p><span class="justfy1">商户负责人</span><el-input placeholder="请输入" class="input"></el-input></p>
      	<p><span class="justfy7">商户负责人联系方式</span><el-input placeholder="请输入" class="input"></el-input></p>
      	<p><span class="justfy1">所属代理商</span><el-select placeholder="请选择" class="input"><el-option></el-option></el-select></p>
      	<p class="justfy6"><span>生效时间:</span><el-date-picker v-model="timer" type="datetimerange" placeholder="选择时间范围" class="input1 justfy4"></el-date-picker><el-checkbox v-model="checked" class="justfy2">永久</el-checkbox></p>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'createform',
  data () {
    return {
      timer: [new Date(2000, 10, 10), new Date(2000, 10, 11)],
      checked: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.createform{text-align: center;padding-top: 2rem;margin-left: -4rem;}
p{padding-top: 1.5rem;}
span{padding-right: 1rem;}
.title{margin-left: -35rem;font-weight: normal;color: #5a5a5a}
.input{width: 28rem;}
.justfy1{margin-left: -1rem;}
.justfy2{padding-left: 0.6rem;}
.justfy3{margin-left: -3.4rem;}
.justfy4{margin-left: -0.35rem}
.justfy5{position: relative;top: -4.5rem;}
.justfy6{margin-left: 3.8rem;}
.justfy7{margin-left: -5rem}
.input1{width: 27rem;}
</style>
