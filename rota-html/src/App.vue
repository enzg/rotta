<template>
  <div id="app">
    <!--<login></login>-->
    <div class="rottatec">
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
  export default {
    name: 'app',
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
