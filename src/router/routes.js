const components = require.context('@/components', true, /index\.vue$/i)

export const componentRoutes = components.keys().reduce((res, key) => {
  const keyArr = key.split('/')

  if (keyArr.length === 3) {
    const component = components(key).default
    const componentName = keyArr[1] // 默认提取文件夹名称作为组件名称
    const config = require(`@/components/${componentName}/config.js`)?.default || {} // 组件的说明信息等

    const newRoute = {
      path: `/case/${componentName}`,
      component,
      meta: {
        id: componentName,
        readme: () => import(`@/components/${componentName}/readme.md`),
        ...config
      }
    }

    res.push(newRoute)
  }

  return res
}, [])

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
    path: '/test',
    component: () => import('@/components/virtual-list/readme.md')
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
