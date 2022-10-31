<template>
  <div>
    <h2><span>{{ title }}</span>你好啊 vue</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  data () {
    return {
      title: 'zs'
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">
h2 {
  color: red;
  span {
   font-size: 40px;
  }
}
</style>
