import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import gonggao from '@/views/modules/gonggao/list'
    import guoshu from '@/views/modules/guoshu/list'
    import guoshuCollection from '@/views/modules/guoshuCollection/list'
    import guoshuLiuyan from '@/views/modules/guoshuLiuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yujing from '@/views/modules/yujing/list'
    import zhuanjia from '@/views/modules/zhuanjia/list'
    import zhuanjiaChat from '@/views/modules/zhuanjiaChat/list'
    import config from '@/views/modules/config/list'
    import dictionaryForum from '@/views/modules/dictionaryForum/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryGuoshu from '@/views/modules/dictionaryGuoshu/list'
    import dictionaryGuoshuCollection from '@/views/modules/dictionaryGuoshuCollection/list'
    import dictionaryGuoshuErji from '@/views/modules/dictionaryGuoshuErji/list'
        import dictionaryGuoshuErjiAddOrUpdate from '@/views/modules/dictionaryGuoshuErji/add-or-update'//二级
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryYanjiufangxiang from '@/views/modules/dictionaryYanjiufangxiang/list'
    import dictionaryYujing from '@/views/modules/dictionaryYujing/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'
    import dictionaryZhuanjiaChat from '@/views/modules/dictionaryZhuanjiaChat/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForum',
        name: '帖子类型',
        component: dictionaryForum
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryGuoshu',
        name: '果蔬类型',
        component: dictionaryGuoshu
    }
    ,{
        path: '/dictionaryGuoshuCollection',
        name: '收藏表类型',
        component: dictionaryGuoshuCollection
    }
    ,{
        path: '/dictionaryGuoshuErji',
        name: '二级类型',
        component: dictionaryGuoshuErji
    }
    ,{
        path: '/dictionaryGuoshuErjiAddOrUpdate',
        name: '二级类型的新增修改页面',
        component: dictionaryGuoshuErjiAddOrUpdate
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryYanjiufangxiang',
        name: '研究方向',
        component: dictionaryYanjiufangxiang
    }
    ,{
        path: '/dictionaryYujing',
        name: '预警类型',
        component: dictionaryYujing
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/dictionaryZhuanjiaChat',
        name: '数据类型',
        component: dictionaryZhuanjiaChat
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/guoshu',
        name: '果蔬百科',
        component: guoshu
      }
    ,{
        path: '/guoshuCollection',
        name: '果蔬百科收藏',
        component: guoshuCollection
      }
    ,{
        path: '/guoshuLiuyan',
        name: '果蔬百科留言',
        component: guoshuLiuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yujing',
        name: '预警',
        component: yujing
      }
    ,{
        path: '/zhuanjia',
        name: '专家',
        component: zhuanjia
      }
    ,{
        path: '/zhuanjiaChat',
        name: '专家咨询',
        component: zhuanjiaChat
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
