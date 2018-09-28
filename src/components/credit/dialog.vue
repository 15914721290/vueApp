<template lang="pug">
  transition(name='toast')
    .dialog_wrapper(v-if='isDialog')
        .toast(v-if='isShowToast')
          p {{toast.message}}
        .shadow(v-if='isShowConfirm')
        .confirmBox(v-if='isShowConfirm')
          h3 {{confirm.title}}
          p {{confirm.text}}
          .button
            .cancel(@click="isDialog = false") 取消
            .confirm(@click="confirmFunction") 确定
</template>

<script>
export default {
  props: ['dialogParams'],
  data () {
    return {
      timeout: null,
      isDialog: false,
      isShowToast: false,
      isShowConfirm: false,
      toast: {
        message: ''
      },
      confirm: {
        title: '',
        text: ''
      }
    }
  },
  methods: {
    showToast (message) {
      this.toast.message = message
      this.isShowToast = true
      this.isDialog = true
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.isShowToast = false
        this.isDialog = false
        clearTimeout(this.timeout)
      }, 2000)
    },
    showConfirm (title, text, func) {
      this.confirm.title = title
      this.confirm.text = text
      this.confirmFunction = func
      this.isShowConfirm = true
      this.isDialog = true
    },
    confirmFunction () {}
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common.less';
.toast-enter-active,.toast-leave-active {
  transition: opacity .2s;
}
.toast-enter,.toast-leave-active {
  opacity: 0;
}
.dialog_wrapper {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .toast{
    background: rgba(0,0,0,0.7);
    color: @font-color-fff;
    padding:30px 50px;
    font-size: @font-32;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin: 0 50px;
    p{
      display: block;
      line-height: 48px;
    }
  }
  .confirmBox{
    width: 630px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: @background-color-fff;
    border-radius: 30px;
    z-index: 100;
    h3{
      text-align: center;
      font-size: @font-36;
      color: @font-color-333;
      margin: @mp-60 0 @mp-50;
    }
    p{
      margin: 0 @mp-60 @mp-30;
      font-size: @font-28;
      color: @font-color-424954;
      line-height: 42px;
    }
    .weight{
      margin-left: @mp-60;
      font-size: @font-28;
      font-weight: bold;
      margin-bottom: 60px;
    }
    .button{
      display: flex;
      font-size: @font-34;
      text-align: center;
      border-top: @border-size-1 solid @border-color-e5e5e5;
      .cancel{
        color: @font-color-999;
        width:50%;
        height: 90px;
        line-height: 90px;
        border-right: @border-size-1 solid @border-color-e5e5e5;
      }
      .confirm{
        color: @font-color-2a84f8;
        width:50%;
        height: 90px;
        line-height: 90px;
      }
    }
  }
}
.shadow{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  z-index: 100;
}
</style>
