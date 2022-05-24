import { formatDate } from '@/lib/util.js'

const markdowns = require.context('@/blog/markdown', true, /\.md$/i)
const type = 'markdown'

const routes = markdowns.keys().reduce((res, key) => {
  const component = markdowns(key).default

  const id = key.split('/').pop()
  const [name, date = new Date()] = id.replace(/\.md/i, '').split('.')

  const newRoute = {
    component,
    path: `/markdown/${encodeURIComponent(name)}`,
    meta: {
      id,
      name,
      type,
      date: formatDate(date),
    }
  }

  res.push(newRoute)

  return res
}, [])

export default routes
