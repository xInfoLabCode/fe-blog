export default {
  install(Vue) {
    const components = require.context('@/components', true, /\.vue$/i)

    components.keys().forEach(key => {
      const component = components(key).default
      Vue.component(component.name, component)
    })
  }
}
