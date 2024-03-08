<template>
  <micro-app 
    name='gateway'
    baseroute='/gateway'
    url='http://localhost:9001/'
    :data='microAppData'
    @created='handleCreate'
    @beforemount='handleBeforeMount'
    @mounted='handleMount'
    @unmount='handleUnmount'
    @error='handleError'
    @datachange='handleDataChange'
  ></micro-app>
</template>

<script>
export default {
  name: 'BaseGateway',
  data () {
    return {
      microAppData: {msg: '来自基座的数据'}
    }
  },
  methods: {
    handleCreate () {
      console.log('gateway 创建了')
    },

    handleBeforeMount () {
      console.log('gateway 即将被渲染')
    },

    handleMount () {
      console.log('gateway 已经渲染完成')

      setTimeout(() => {
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount () {
      console.log('gateway 卸载了')
    },

    handleError () {
      console.log('gateway 加载出错了')
    },

    handleDataChange (e) {
      console.log('来自子应用 gateway 的数据:', e.detail.data)
    },
  }
}
</script>