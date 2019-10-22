<template>
  <div class="about">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-swipe :autoplay="3000" >
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
  methods: {
    onClickLeft () {
      this.$toast('返回')
    },
    onClickRight () {
      this.$toast('按钮')
    }
  }
}
</script>
<style lang="less" scoped>
.swipeImg {
  width: 320px;
  height: 240px;
}
</style>