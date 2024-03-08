import Link from './Link/index'
import Button from './Button/index'

const components = [
  Link,
  Button
]

const install = function(Vue) {
  components.forEach((component) => {
    Vue.use(component.name, component)
  })
}

export default {
  install
}