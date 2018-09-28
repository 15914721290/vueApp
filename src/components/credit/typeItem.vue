<template lang="pug">
  .item_wrapper(v-if="typeItemParams.length")
    .item_box(v-for="(type, index) in typeItemParams" :key="index" @click="$router.push({name: type.type})")
      .icon(:class="type.type")
      |{{type.title}}
      .triangle_r.fr
</template>

<script>
export default {
  props: {
    typeItemParams: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common.less';
.item_wrapper {

  .item_box {
    position: relative;
    display: flex;
    height: 120px;
    align-items: center;
    background: @background-color-fff;
    font-size: @font-32;
    color: @font-color-333;
    padding: 0 @mp-30;

    &:not(:last-child) {
      border-bottom: 1px solid @border-color-e5e5e5;
    }
  }
  .icon {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-right: @mp-30;

    &.news {
      background: url('~@/assets/img/creditImg/news@2x.png') no-repeat;
      background-size: contain;
    }

    &.suggestion {
      background: url('~@/assets/img/creditImg/suggestion@2x.png') no-repeat;
      background-size: contain;
    }

    &.agreement {
      background: url('~@/assets/img/creditImg/agreement@2x.png') no-repeat;
      background-size: contain;
    }

    &.about {
      background: url('~@/assets/img/creditImg/about@2x.png') no-repeat;
      background-size: contain;
    }

    &.setting {
      background: url('~@/assets/img/creditImg/setting@2x.png') no-repeat;
      background-size: contain;
    }
  }

  .triangle_r {
    position: absolute;
    right: @mp-30;
    top: @mp-50;
  }
}
</style>
