import BaseLink from './Link.vue'

BaseLink.install = function(Vue) {
  Vue.component(BaseLink.name, BaseLink)
}

export default BaseLink