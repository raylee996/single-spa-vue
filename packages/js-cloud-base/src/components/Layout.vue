<template>
  <div class="layout">
    <div class="side">
      <side-bar :routes="routes" />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import {routes} from '../router'
import SideBar from './Sidebar.vue';

export default {
  name: 'BaseLayout',
  components: {
    SideBar
  },
  data() {
    return {
      routes: routes.filter((route) => !route.hidden),
    }
  }
}
</script>

<style lang="less">
.layout {
  overflow: hidden;
  .side {
    float: left;
    width: 200px;
    .item {
      text-align: center;
      line-height: 50px;
      height: 50px;
    }
  }
  .main {
    margin-left: 200px;
  }
}
</style>