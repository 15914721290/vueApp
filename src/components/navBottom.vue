<template lang="pug">
  .nav_wrapper
    .nav_item(v-for="nav in navParams" :key="nav.type" @click="icon=nav.icon, onRouter(nav.type)")
      .nav_icon(:class="[nav.icon, { active: icon === nav.icon }]")
      .nav_title(:class="{ color: icon === nav.icon }") {{nav.title}}
</template>

<script>

export default {
  props: {
    meun: {
      type: String,
      default: 'home'
    }
  },
  data () {
    return {
      navParams: [
        {
          type: 'home',
          title: '首页',
          icon: 'home'
        },
        {
          type: 'find',
          title: '搜索',
          icon: 'find'
        },
        {
          type: 'dynamic',
          title: '动态',
          icon: 'dynamic'
        },
        {
          type: 'news',
          title: '消息',
          icon: 'news'
        },
        {
          type: 'me',
          title: '我的',
          icon: 'me'
        }
      ],
      icon: this.meun
    }
  },
  computed: {
  },
  created () {
    console.log('this.meun',this.meun)
  },
  methods: {
    onRouter (v) {
      switch (v) {
        case 'home':
          this.$router.push({
            name: 'index'
          })
          break
        case 'find':
          this.$router.push({
            name: 'find'
          })
          break
        case 'dynamic':
          this.$router.push({
            name: 'dynamic'
          })
          break
        case 'news':
          this.$router.push({
            name: 'news'
          })
          break
        case 'me':
          this.$router.push({
            name: 'me'
          })
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common.less';
.nav_wrapper {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;
  align-items: center;
  align-content: center;
  background: @background-color-fff;
  border: @border-size-1 solid @border-color-e5e5e5;
  text-align: center;
  color: @font-color-999;
  z-index: 99;

  .nav_icon {
    width: 40px;
    height: 40px;
    margin: 0 auto 10px;

    &.home {
      background: url('~@/assets/img/icon/home-b.png') no-repeat;
      background-size: contain;

      &.active {
        background: url('~@/assets/img/icon/home-a.png') no-repeat;
        background-size: contain;
      }
    }
    &.find {
      background: url('~@/assets/img/icon/find-b.png') no-repeat;
      background-size: contain;

      &.active {
        background: url('~@/assets/img/icon/find-a.png') no-repeat;
        background-size: contain;
      }
    }
    &.dynamic {
      background: url('~@/assets/img/icon/dynamic-b.png') no-repeat;
      background-size: contain;

      &.active {
        background: url('~@/assets/img/icon/dynamic-a.png') no-repeat;
        background-size: contain;
      }
    }
    &.news {
      background: url('~@/assets/img/icon/news-b.png') no-repeat;
      background-size: contain;

      &.active {
        background: url('~@/assets/img/icon/news-a.png') no-repeat;
        background-size: contain;
      }
    }
    &.me {
      background: url('~@/assets/img/icon/me-b.png') no-repeat;
      background-size: contain;

      &.active {
        background: url('~@/assets/img/icon/me-a.png') no-repeat;
        background-size: contain;
      }
    }
  }

  .nav_item {
    flex: 1;
    // .color {
    //   color: @font-color-fd6255;
    // }
  }
}
</style>