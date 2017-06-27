<template>
  <div>
    <div class="title">
	  <el-breadcrumb separator="/">
	    <el-breadcrumb-item>商户中心 </el-breadcrumb-item>
	    <el-breadcrumb-item>出口代理商 </el-breadcrumb-item>
	    <el-breadcrumb-item><span  class="large">一般商户列表</span> </el-breadcrumb-item>
	  </el-breadcrumb>
	</div>
	<div class="searchbox">
		<div class="boxpre">
    		<span>代理商标识: </span><el-input placeholder="请输入" class="input"></el-input>
    		<span>代理商昵称: </span><el-input placeholder="请输入" class="input"></el-input><el-button type="primary">搜索</el-button><el-button type="text">展开 <i class="el-icon-arrow-down"></i></el-button>
		</div>
		<div class="boxnext">
    		<span>代理商邮箱: </span><el-input placeholder="请输入" class="input"></el-input>
    		<span class="justfy">创建时间: </span><el-date-picker v-model="timer" type="datetimerange" placeholder="选择时间范围"></el-date-picker>
		</div>
		<div class="gosearch">
			<el-button type="primary">搜索</el-button>
			<el-button>重置</el-button>
			<el-button type="text">收起 <i class="el-icon-arrow-up"></i></el-button>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**/
.searchbox{background-color: #f5f5f5;padding: 4rem 0 7rem 0;border:1px solid #f5f5f5;position: relative;}
.boxpre{margin-bottom: 4rem;}
.boxnext{}
.boxpre span,
.boxnext span{margin-left: 6rem;margin-right: 0.2rem;font-size: 1.1rem;}
.input{width: 20rem;}
.justfy{padding-right: 1.2rem;}

.gosearch{padding-top: 2.5rem;position: absolute;right: 2rem;}
/*面包屑组件*/
.title{padding: 2rem;}
.large{font-size: 1.5rem;color: #000;position: relative;top: -0.3rem;}
</style>
