import Vue from 'vue'
import Router from 'vue-router'
import Board from 'view/board/board' // 看板页面
import Outlist from 'view/agentcenter/outagent/outlist' // 出口代理商列表
import Createout from 'view/agentcenter/outagent/createout' // 创建出口代理商
import Comlist from 'view/agentcenter/comagent/comlist' // 一般代理商列表
import Createcom from 'view/agentcenter/comagent/createcom' // 创建一般代理商
import Playercenter from 'view/playercenter/playercenter' // 玩家中心
import Gamecenter from 'view/gamecenter/gamecenter' // 游戏中心
import Operationcenter from 'view/operationcenter/operationcenter' // 运营中心
import Propertycenter from 'view/propertycenter/propertycenter' // 财务中心
import Controlcenter from 'view/controlcenter/controlcenter' // 风控中心
import Commandcenter from 'view/commandcenter/commandcenter' // 客服中心
import Systemsetting from 'view/systemsetting/systemsetting' // 系统设置

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/board',
      component: Board
    },
    {
      path: '/outlist',
      component: Outlist
    },
    {
      path: '/createout',
      component: Createout
    },
    {
      path: '/comlist',
      component: Comlist
    },
    {
      path: '/createcom',
      component: Createcom
    },
    {
      path: '/playercenter',
      component: Playercenter
    },
    {
      path: '/gamecenter',
      component: Gamecenter
    },
    {
      path: '/operationcenter',
      component: Operationcenter
    },
    {
      path: '/propertycenter',
      component: Propertycenter
    },
    {
      path: '/controlcenter',
      component: Controlcenter
    },
    {
      path: '/commandcenter',
      component: Commandcenter
    },
    {
      path: '/systemsetting',
      component: Systemsetting
    }
  ]
})
