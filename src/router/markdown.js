const markdowns = require.context('@/blog/markdown', true, /\.md$/i)

const routes = markdowns.keys().reduce((res, key) => {
  const component = markdowns(key).default

  const id = key.split('/').pop()
  const name = id.replace(/\.md/i, '')
  const pathKey = name.replace(/\s+/, '-')

  const newRoute = {
    component,
    path: `/markdown/${encodeURIComponent(pathKey)}`,
    meta: {
      id,
      name,
    }
  }

  res.push(newRoute)

  return res
}, [])

export default routes
