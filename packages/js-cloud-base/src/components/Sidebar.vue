<template>
  <div class="submenu">
    <div class="submenu-item" v-for="route in routes" :key="route.path">
      <div v-if="route.children">
        <div class="item">{{route.name}}</div>
        <side-bar :basePath="route.path" :routes="route.children" />
      </div>
      <div class="item" v-else>
        <router-link :to="resolvePath(route.path)">{{route.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    routes: {
      type: Array,
      default: () => []
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  methods: {
    /**
     * @param {string} path 
     */
    resolvePath(path) {
      return this.basePath.concat('/', path.startsWith('/') ? path.slice(1) : path)
    }
  }
}
</script>