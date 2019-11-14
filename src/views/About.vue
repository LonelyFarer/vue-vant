<template>
  <div class="about">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="swipeImg" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      images: [
        require('../assets/apple-1.jpg'),
        require('../assets/apple-2.jpg')
      ]
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.swipeImg {
  width: 320px;
  height: 240px;
}
</style>
