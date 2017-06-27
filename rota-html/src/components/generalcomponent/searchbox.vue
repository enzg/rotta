<template>
  <div class="searchbox">
		<div class="boxpre">
    		<span>代理商标识: </span><el-input placeholder="请输入" class="input"></el-input>
    		<span class="justfy2">代理商昵称: </span><el-input placeholder="请输入" class="input"></el-input><el-button type="primary" class="justfy1" v-show="!show">搜索</el-button><el-button type="text" @click="show = !show" v-show="!show">展开 <i class="el-icon-arrow-down"></i></el-button>
		</div>
		<div class="boxnext">
			<el-collapse-transition>
        		<div v-show="show">
          			<div class="transition-box">
          				<span>代理商邮箱: </span><el-input placeholder="请输入" class="input"></el-input>
    					<span class="justfy2">创建时间: </span><el-date-picker type="datetimerange" placeholder="选择时间范围" class="input justfy3"></el-date-picker>
          			</div>
          			<div class="gosearch">
			<el-button type="primary">搜索</el-button>
			<el-button>重置</el-button>
			<el-button type="text" @click="show = !show">收起 <i class="el-icon-arrow-up"></i></el-button>
		</div>
        		</div>
      		</el-collapse-transition>
		</div>
	</div>
</template>

<script>
export default {
  name: 'searchbox',
  data () {
    return {
      show: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchbox{background-color: #f5f5f5}
span{margin-right: 0.2rem}
.boxpre{margin-bottom: 2rem;padding: 2rem 0 0 10%;}
.boxnext{padding: 1rem 0 0 10%;}
.gosearch{text-align: right;padding: 2rem;}
.input{width: 30%;}
.justfy1{margin-left: 1rem;}
.justfy2{margin-left: 1.5rem}
.justfy3{margin-left: 1rem}
</style>
