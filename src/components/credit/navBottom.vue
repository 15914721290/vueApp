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
          type: 'detection',
          title: '检测',
          icon: 'detection'
        },
        {
          type: 'found',
          title: '发现',
          icon: 'found'
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
  methods: {
    onRouter (v) {
      switch (v) {
        case 'home':
          this.$router.push({
            name: 'index'
          })
          break
        case 'detection':
          this.$router.push({
            name: 'detection'
          })
          break
        case 'found':
          this.$router.push({
            name: 'forum'
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
      background: url('~@/assets/img/creditImg/home@2x.png') no-repeat;
      background-size: contain;

      &.active {
        background: url('~@/assets/img/creditImg/home-n@2x.png') no-repeat;
        background-size: contain;
      }
    }
    &.detection {
      background: url('~@/assets/img/creditImg/detection@2x.png') no-repeat;
      background-size: contain;

      &.active {
        background: url('~@/assets/img/creditImg/detection-n@2x.png') no-repeat;
        background-size: contain;
      }
    }
    &.found {
      background: url('~@/assets/img/creditImg/found@2x.png') no-repeat;
      background-size: contain;

      &.active {
        background: url('~@/assets/img/creditImg/found-n@2x.png') no-repeat;
        background-size: contain;
      }
    }
    &.me {
      background: url('~@/assets/img/creditImg/me@2x.png') no-repeat;
      background-size: contain;

      &.active {
        background: url('~@/assets/img/creditImg/me-n@2x.png') no-repeat;
        background-size: contain;
      }
    }
  }

  .nav_item {
    flex: 1;

    .color {
      color: @font-color-fd6255;
    }
  }
}
</style>
