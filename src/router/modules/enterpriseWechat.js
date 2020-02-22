/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const enterpriseWechatRouter = {
  path: '/enterpriseWechat',
  component: Layout,
  redirect: 'index',
  alwaysShow: true, // will always show the root menu
  meta: {
    title: 'enterpriseWechat',
    icon: 'enterpriseWechat'
    // roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [
    {
      path: 'index',
      name: 'enterpriseWechat',
      component: () => import('@/views/enterpriseWechat/index'),
      meta: { title: 'enterpriseWechat', icon: 'enterpriseWechat' }
    },
    {
      path: 'index1',
      name: 'enterpriseWechat1',
      component: () => import('@/views/enterpriseWechat/index'),
      meta: { title: 'enterpriseWechat', icon: 'enterpriseWechat' }
    }
  ]
}

export default enterpriseWechatRouter
