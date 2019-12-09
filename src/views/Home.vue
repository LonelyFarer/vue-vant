<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created () {
    this.$toast.loading({
      duration: 0,
      mask: true,
      forbidClick: true,
      message: '加载中...',
      loadingType: 'spinner'
    })

    setTimeout(() => {
      this.$toast.clear()
    }, 2000)
  }
}
</script>
<style lang="less" scoped>
.home{
  height:calc(100% - 500px)
}
// .home:after{
//   content : '';
//   height : 50px;
//   display :block;
// }

</style>
