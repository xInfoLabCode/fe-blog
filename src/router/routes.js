const components = require.context('@/components', true, /index\.vue$/i)

export const componentRoutes = components.keys().map(key => {
  const component = components(key).default
  const componentName = key.split('/').slice(-2, -1).pop() // 默认提取文件夹名称作为组件名称

  return {
    path: `/case/${componentName}`,
    component,
    meta: {
      name: componentName,
      readme: () => import(`@/components/${componentName}/readme.md`)
    }
  }
})

const routes = [
  {
    path: '*',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/pages/home')
  },
  {
    path: '/case',
    component: () => import('@/pages/case'),
    children: [
      ...componentRoutes
    ]
  }
]

export default routes
