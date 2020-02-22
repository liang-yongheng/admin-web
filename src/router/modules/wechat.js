/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const wechatRouter = {
  path: '/wechat',
  component: Layout,
  redirect: 'index',
  alwaysShow: true, // will always show the root menu
  meta: {
    title: 'wechat',
    icon: 'wechat'
    // roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [
    {
      path: 'index',
      name: 'wechat',
      component: () => import('@/views/wechat/index'),
      meta: { title: 'wechat', icon: 'wechat' }
    },
    {
      path: 'index1',
      name: 'wechat1',
      component: () => import('@/views/wechat/index'),
      meta: { title: 'wechat', icon: 'wechat' }
    }
  ]
}

export default wechatRouter
