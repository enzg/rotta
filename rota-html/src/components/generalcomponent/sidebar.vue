<template>
    <div>
        <el-row class="tac">
            <el-col>
                <el-menu default-active="board" class="el-menu-vertical-demo"  theme="dark" :router= "router" :unique-opened="unique">
                    <el-menu-item index="">NA LOGO</el-menu-item>
                    <el-menu-item index="board">看板</el-menu-item>
                    <el-submenu index="0">
                        <template slot="title">商户中心</template>
                        <el-submenu index="0-1">
                            <template slot="title">出口代理商</template>
                            <el-menu-item index="outlist">代理商列表</el-menu-item>
                            <el-menu-item index="createout">创建代理商</el-menu-item>
                        </el-submenu>
                        <el-submenu index="0-2">
                            <template slot="title">一般商户</template>
                            <el-menu-item index="comlist">一般商户列表</el-menu-item>
                            <el-menu-item index="createcom">创建一般商户</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="playercenter">玩家中心</el-menu-item>
                    <el-submenu index="4">
                        <template slot="title">游戏中心</template>
                        <el-menu-item index="gamelist">游戏列表</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="operationcenter">运营中心</el-menu-item>
                    <el-menu-item index="propertycenter">财务中心</el-menu-item>
                    <el-menu-item index="controlcenter">风控中心</el-menu-item>
                    <el-menu-item index="commandcenter">客服中心</el-menu-item>
                    <el-menu-item index="systemsetting">系统设置</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  name: 'sidebar',
  data () {
    return {
      unique: true,
      router: true
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
