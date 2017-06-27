<template>
  <div>
    <div class="title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>游戏中心 </el-breadcrumb-item>
        <el-breadcrumb-item><span class="large">游戏列表</span></el-breadcrumb-item>
      </el-breadcrumb>
  </div>
    <div class="tablist">
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="用户管理" name="first">
          <el-row :gutter="20">
            <el-col :span="8" >
              <el-card>
                <div style="text-align:center"><i class="el-icon-plus"></i></div>
              </el-card>
            </el-col>
            <el-col :span="8" >
              <el-card>
                <div style="text-align:center"><i class="el-icon-plus"></i></div>
              </el-card>
            </el-col>
            <el-col :span="8" >
              <el-card>
                <div style="text-align:center"><i class="el-icon-plus"></i></div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <el-row>
            <el-col :span="6" >
              <el-card>
                <div style="text-align:center"><i class="el-icon-plus"></i></div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">
          <el-row>
            <el-col :span="6" >
              <el-card>
                <div style="text-align:center"><i class="el-icon-plus"></i></div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
    </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*添加游戏组件*/
.el-icon-plus{font-size: 4rem;padding: 3rem 0;color: #919191}
/*面包屑组件*/
.title{padding: 2rem;}
.large{font-size: 1.5rem;color: #000;position: relative;top: -0.3rem;}
</style>
