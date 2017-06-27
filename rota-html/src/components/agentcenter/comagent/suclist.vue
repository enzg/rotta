<template>
  <div class="suclist">
    <div class="list-title">
      <p class="title">商户 : NA泛娱乐<span>所属代理商 : NA泛娱乐</span></p>
      <p><span>商户号 : 000000</span><span class="justfy1">商户标识 : NA</span><span class="justfy2">线路号 : JamesLi</span><span>代理商Email : 123456789@123.com</span></p>
      <p><span class="justfy2">负责人 : JamesLi</span><span>负责人联系方式 : +8613060000000</span></p>
      <p>代理商备注 : 我是备注我是备注我是备注</p>
    </div>
    <div class="list-form">
      <p>商户密匙 : GHAGJIADFUGIADFGBIADFGBUAFDIB</p>
      <p><span>商户初始点数 : 1,000,000,000</span><span class="justfy3">代理抽成比 : 90</span></p>
      <p>代理游戏 : 棋牌游戏、电子游戏、真人视讯</p>
      <p>白名单 : 192.168.1.2 ，192.168.3.2 ，192.168.3.8 ，0.0.0.0</p>
      <p>商户域名 : http://www.123456.com</p>
    </div>
    <div class="list-form">
      <p>后台地址 : http://123456789.com</p>
      <p><span>管理员账号 : {{}}</span><span class="justfy4">管理员密码 : {{}}</span></p>
      <p><span>管理员姓名 : {{}}</span><span class="justfy4">管理员联系方式 : {{}}</span></p>
      <p>管理员Email : {{}}</p>
    </div>
    <div class="list-bottom">
      <p>生效时间 : 2017年6月12日-2212年12月12日</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'suclist'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.suclist{background-color: #f5f5f5;width: 60%;margin-left:17%;text-align: left;padding: 2rem;}
.list-title{margin-bottom: 2rem;}
.list-title p{line-height: 3.5rem;font-size: 1.1rem;color: #5a5a5a;}
.list-title .title{font-size: 1.3rem;font-weight: bold;color: #5a5a5a}

.list-form{border: 1px dashed #222222;padding: 1rem 2rem;margin: 2rem 0;}
.list-form p{line-height: 3rem;font-size: 1rem;color: #5a5a5a;}
.list-bottom{text-align: right;}
.list-bottom p{margin: 1rem;padding-top: 1rem;color: #5a5a5a;}

.justfy1{margin: 0 2rem 0 3rem;}
.justfy2{margin-right: 4rem;}
.justfy3{margin: 0 9rem 0 10rem;}
.justfy4{margin-left: 14rem;}
</style>
