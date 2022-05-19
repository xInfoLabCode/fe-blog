import { formatDate } from '@/lib/util.js'

const codes = require.context('@/blog/code', true, /index\.vue$/i)

const routes = codes.keys().reduce((res, key) => {
  const keyArr = key.split('/')

  if (keyArr.length === 3) {
    const component = codes(key).default
    const componentName = keyArr[1] // 默认提取文件夹名称作为组件名称
    const config = require(`@/blog/code/${componentName}/config.js`)?.default || {} // 组件的说明信息等
    config.date = formatDate(config.date)

    const newRoute = {
      path: `/code/${componentName}`,
      component,
      meta: {
        id: componentName,
        readme: () => import(`@/blog/code/${componentName}/readme.md`),
        ...config
      }
    }

    res.push(newRoute)
  }

  return res
}, [])

export default routes
