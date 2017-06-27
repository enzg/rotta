<template>
  <div id="app">
    <login v-if="islogin == false"></login>
    <div class="rottatec" v-if="islogin == true">
      <div class="left">
      <sidebar></sidebar>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
    </div>
  </div>
</template>

<script>
  import Login from '@/components/generalcomponent/login'
  import Sidebar from '@/components/generalcomponent/sidebar'
  import { invoke } from '@/libs/fetchLib'
  export default {
    name: 'app',
    data () {
      return {
        islogin: false,
        stoken: '',
        userinfo:{
          username: '',
          password: '',
          msn: ''
        }
      }
    },
    methods: {
      onSubmit () {
        const cfg = {
          url: '/player_login',
          method: 'post',
          data: userinfo
        }
        invoke(cfg).then(result=>{
          console.log(result);
        })
      },
      forgetPassword () {
      },
      getStoken () {
      }
    },
    components: {
      Login,
      Sidebar
    }
  }
</script>

<style>
*{margin: 0;padding: 0;}
body,html{font-size: 12px;}
.rottatec{display: flex;}
.left{flex: 0.15}
.right{flex: 0.85}
</style>
