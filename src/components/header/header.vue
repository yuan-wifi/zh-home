<template>
    <div class="header">
      <div class="item">首页</div>
      <div class="item">关于我</div>
      <div class="item">设计作品</div>
      <div class="item"><router-link tag="a" to="/articlelist">设计随笔</router-link></div>
    </div>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .header
      display: flex
      text-align: center
      background: rgb(10, 10, 10)
      color: #fff
      line-height: 40px
      height: 40px
      font-size: 14px
      .item
        flex: 1
        a
          color: #fff
</style>