<template>
  <div class="article-list-main">
    <header-title v-show="0"></header-title>
    <div class="daohang">
      <div class="return">返回</div>
      <h1 class="title">设计随笔</h1>
      <div class="menu">菜单</div>
    </div>
  </div>
</template>

<script>
import header from '@/components/header/header'

export default {
  name: 'articlelist',
  components: {
    'header-title': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .article-list-main
    .daohang
      display: flex
      background: rgb(102, 102, 102)
      color: #fff
      line-height: 44px
      height: 44px
      .return
        flex: 0 0 40px
      .menu
        flex: 0 0 40px;
      .title
        font-size: 16px
        flex: 1
        text-align: center
</style>