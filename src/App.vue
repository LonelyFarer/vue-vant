<template>
  <div id="app">
    <van-nav-bar
      :title="title"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- <div id="nav">
      <router-link to="/">Index</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <van-tabbar v-model="active" class="active_tab">
        <van-tabbar-item
        v-for="(item,index) in tabbars"
        :key="index"
        @click="tab(item.name)"
        :icon="item.icon"
        >
        <span>{{item.title}}</span>
        </van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
      return {
        title:'home',
        active: 0,
        tabbars: [
            {
                name: "home",
                title: "首页",
                icon:"home-o"
            },
            {
                name: "index",
                title: "消息",
                icon:"comment-o"
            },
            {
                name: "cart",
                title: "购物车",
                icon:"shopping-cart-o"
            },
            {
                name: "about",
                title: "我的",
                icon:"user-o"
            }
        ]
      }

  },
  components: {
    
  },
  created () {
    
  },
  methods: {
    tab(val) {
        this.title=val;
        this.$router.push(val);
    },
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      this.$toast('按钮')
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.active_tab img {
  width: 26px;
  height: 26px;
}

.van-tabbar-item--active {
  color: #e10f02;
}
</style>
