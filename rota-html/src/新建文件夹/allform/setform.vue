<template>
    <div>
    	<div class="setinfo">
    		<h2 class="title">配置代理商信息</h2>
        	<p><span>初始代理点数</span><el-input placeholder="请输入" class="input"></el-input></p>
        	<p class="justfy1"><span>代理可放商户名额</span><el-input placeholder="请输入" class="input"></el-input></p>
        	<p class="justfy2"><span>代理拥有的游戏</span><el-input placeholder="请输入" class="input"></el-input><el-button type="text" class="justfy3">添加</el-button></p>
    	</div>
    	<div class="setadmin">
    		<h2 class="title">配置代理商后台管理员</h2>
    		<p class="justfy4"><span>代理商管理员用户名</span><el-input placeholder="请输入" class="input"></el-input></p>
    		<p class="justfy5"><span>代理商管理员密码</span><el-input placeholder="请输入" class="input"></el-input><el-button type="text" class="justfy3">生成</el-button></p>
    		<p class="justfy6"><span>代理商管理员真实姓名</span><el-input placeholder="请输入" class="input"></el-input></p>
    		<p class="justfy7"><span>代理商管理员邮箱</span><el-input placeholder="请输入" class="input"></el-input></p>
    		<p class="justfy8"><span>代理商管理员联系方式</span><el-input placeholder="请输入" class="input"></el-input></p>
    	</div>
    </div>
</template>
<script>
export default {
  name: 'setform'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{padding-top: 1.5rem;}
span{padding-right: 1rem;}
.setadmin{padding-top: 2rem;}
.setinfo .title{padding-left: 4rem;}
.title{margin-left: -35rem;font-weight: normal;}
.input{width: 25rem;}
.justfy1{margin-left: -2rem;}
.justfy2{margin-left: 2.4rem;}
.justfy3{margin-left: 1rem;}
.justfy4{margin-left: -3rem;}
.justfy5{margin-left: 1.3rem;}
.justfy6{margin-left: -4rem;}
.justfy7{margin-left: -2rem;}
.justfy8{margin-left: -4rem;}
</style>
