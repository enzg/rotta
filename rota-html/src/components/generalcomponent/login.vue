<template>
  <div class="login">
    <div class="left">
      <p class="title-big">NA 后台管理系统</p>
      <p class="title-small">--成都罗塔科技</p>
    </div>
    <div class="right">
      <el-form :model="userinfo" :rules="rules" :ref="userinfo">
        <el-form-item label="用户名" prop="username">
          <el-input class="input" placeholder="请输入" v-model="userinfo.username" :maxlength='length'></el-input>
        </el-form-item>
        <el-form-item label="密码" class="justfy2" prop="password">
          <el-input type="password" class="input" placeholder="请输入" v-model="userinfo.password" :maxlength='length'></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="msn">
          <el-input class="input1" placeholder="请输入" v-model="userinfo.msn"></el-input><img src="#" alt="验证码" class="verifyimg">
        </el-form-item>
        <el-form-item class="justfy3">
          <el-button @click="onSubmit" class="justfy1 botton">提交</el-button>
          <el-button @click="forgetPassword" class="botton">忘记密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { invoke } from '@/libs/fetchLib'
export default {
  data () {
    var checkUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空'))
      } else if (value.length < 5) {
        callback(new Error('用户名不能少于5位'))
      } else if (value.length >= 15) {
        callback(new Error('用户名不能多于16位'))
      } else {
        callback()
      }
    } // 验证用户名
    var checkPasswords = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      }
      callback()
    } // 验证密码
    var checkVerifycode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      }
      callback()
    } // 验证验证码
    return {
      rules: {
        username: [
          {validator: checkUsername, trigger: 'blur'}
        ],
        password: [
          {validator: checkPasswords, trigger: 'blur'}
        ],
        msn: [
          {validator: checkVerifycode, trigger: 'blur'}
        ]
      },
      userinfo: {
        username: '',
        password: '',
        msn: ''
      },
      length: 16
    }
  },
  props: this.userinfo,
  methods: {
    onSubmit () {
      const cfg = {
        url: '/player_login',
        method: 'post',
        data: this.userinfo
      }
      invoke(cfg).then(result => {
        console.log(result)
      })
    },
    forgetPassword () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{display: flex;}
.left{flex: 0.6;text-align: center;padding-top: 20%;}
.right{flex: 0.4;padding-top: 17%;}
.title-big{font-size: 4rem;}
.title-small{font-size: 1.2rem;padding-left: 23rem;padding-top: 0.5rem;}

.input{width: 20rem;}
.input1{width: 11rem;position: relative;top: -2rem;}
.verifyimg{display: inline-block;height: 4rem;width: 8.2rem;margin-left: 0.75rem;position: relative;top: -1rem;}
.botton{background-color: #919191;color: #fff;}
.botton:hover{color: #49a9ee;border-color: #fff;}
.justfy1{margin-right: 11rem;}
.justfy2{margin-left: 1.2rem;}
.justfy3{}
</style>
