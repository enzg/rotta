<template>
  <div class="outdetailform">
	<div class="simpleinfo">
		<h4>基本信息</h4>
		<div class="simpleform">
			<p><span>代理商ID: </span><span>代理商标识: </span><span>负责人: </span><span>负责人联系方式: </span></p>
			<p><span>代理抽成比: </span><span>代理可放商户名额: </span><span>代理游戏: </span><span>代理商Email: </span></p>
			<p><span>代理商备注: </span><span>代理创建时间: </span><span>代理最后登录时间: </span></p>
		</div>
	</div>
	<div class="manangeinfo">
		<h4>管理信息</h4>
		<div class="manangeform">
			<p><span>管理员账号: </span><span>管理员姓名: </span><span>管理员密码: <el-button type="text" class="createbtn">生成</el-button></span></p>
			<p><span>管理员Eamil: </span><span>管理员联系方式: </span></p>
			<p><span>生效时间: </span><span>上次登录时间: </span><span>上次登陆IP: </span></p>
		</div>
	</div>
	<div class="propertyinfo">
		<h4>财务信息</h4>
		<div class="propertyform">
			<div class="propertyform-header">
				<span class="justfy1">当前剩余点数: 123456789</span>
				<el-button type="text" class="propertybtn justfy2">刷新</el-button>
				<el-button type="text" class="propertybtn">存点</el-button>
				<el-button type="text" class="propertybtn">提取</el-button>
			</div>
			<div class="propertyform-form">
				<el-table style="width: 98%; font-size: 12px;" border max-height='10px'>
    				<el-table-column label="序号" header-align="center" min-width="60"></el-table-column>
    				<el-table-column label="账户余额" header-align="center" width=""></el-table-column>
    				<el-table-column label="交易点数" header-align="center" width=""></el-table-column>
    				<el-table-column label="交易时间" header-align="center" width=""></el-table-column>
    				<el-table-column label="交易类型" header-align="center" width=""></el-table-column>
    				<el-table-column label="交易详情(原账+当前操作额=现在余额)" min-width="200" header-align="center"></el-table-column>
    				<el-table-column label="操作人" header-align="center" width=""></el-table-column>
    				<el-table-column label="备注" min-width="120" header-align="center"></el-table-column>
				</el-table>
			</div>
			<page></page>
		</div>
	</div>
  </div>
</template>

<script>
import Page from '@/components/generalcomponent/page'
export default {
  name: 'outdetailform',
  components: {
    Page
  }
}
</script>

<style scoped>
.manangeform span,
.simpleform span{display: inline-block;width: 20%;padding: 2rem 1.5rem 1.5rem 2rem;}
h4{font-size: 1.8rem;font-weight: normal;padding: 2rem 0;color: #5a5a5a}
.outdetailform{}
.simpleinfo,
.manangeinfo,
.propertyinfo{width: 98%;margin: 0 auto;vertical-align: baseline;}

.simpleform,
.manangeform,
.propertyform{background-color: #f5f5f5;padding-left: 3%;}

.simpleinfo{}
.simpleform{}
.simpleform{}

.manangeinfo{}
.manangeform{}

.propertyinfo{}
.propertyform{}

.createbtn{height: 1rem;margin-left: 1rem}

.propertyform-header{padding: 1rem 0;}
.propertyform-form{padding-bottom: 2rem;}
.justfy1{margin-left: 2rem;}
.justfy2{margin-left: 1rem}
</style>
