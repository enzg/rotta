<template>
  <div class="creatout">
    <div class="title">
    	<el-breadcrumb separator="/">
  			<el-breadcrumb-item>商户中心</el-breadcrumb-item>
  			<el-breadcrumb-item>出口代理商</el-breadcrumb-item>
  			<el-breadcrumb-item>创建出口代理商</el-breadcrumb-item>
  			<el-breadcrumb-item class="large">{{backinfo}}</el-breadcrumb-item>
		  </el-breadcrumb>
    </div>
    <div class="stepsbox">
      <steps :active="active"></steps>
    </div>
    <div class="success">
      <success v-if="active === 3"></success>
    </div>
    <div class="formbox">
      <createform v-if="active === 1"></createform>
      <setform v-if="active === 2"></setform>
      <suclist v-if="active === 3"></suclist>
    </div>
    <div class="buttonbox">
      <el-button type="primary" class="justfy1" @click="next" v-if="active <= 2">下一步</el-button>
      <el-button v-if="active <= 2">重置</el-button>
    <sucbutton v-if="active > 2"></sucbutton>
    </div>
  </div>
</template>

<script>
import Createform from '@/components/allform/createform'
import Setform from '@/components/allform/setform'
import Steps from '@/components/allform/steps'
import Success from '@/components/allform/success'
import Suclist from '@/components/alllist/suclist'
import Sucbutton from '@/components/allbtn/sucbutton'
export default {
  components: {
    Createform,
    Steps,
    Success,
    Suclist,
    Sucbutton,
    Setform
  },
  data () {
    return {
      timer: [new Date(2000, 10, 10), new Date(2000, 10, 11)],
      checked: false,
      active: 1,
      backinfo: '填写基本信息'
    }
  },
  methods: {
    next () {
      this.active++
      if (this.active === 1) {
        this.backinfo = '填写基本信息'
      } else if (this.active === 2) {
        this.backinfo = '配置代理商'
      } else {
        this.backinfo = '创建成功'
      }
      if (this.active === 3) {
        this.active = 3
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.creatout{}
.stepsbox{padding: 1rem 0;text-align: center;}
.success{text-align: center;}
.formbox{text-align: center;margin-left: -8%;}
.buttonbox{text-align: center;padding-top: 3rem;margin-left: -6%;}
.justfy1{margin-right: 8rem;}

/*面包屑组件*/
.title{padding: 2rem;}
.large{font-size: 1.5rem;color: #000;position: relative;top: -0.3rem;}
</style>
