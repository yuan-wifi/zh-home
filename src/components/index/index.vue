<template>
  <div class="container">
    <div class="top">
      <div class="image">
      </div>
      <div class="phone">13578961234</div>
    </div>
    <div class="header">
      <div class="item">首页</div>
      <div class="item">关于我</div>
      <div class="item">设计作品</div>
      <div class="item">设计随笔</div>
    </div>
    <div class="carousel">
      <transition-group tag="ul" class="clearfix1 slide" name="image">
        <li class="item item1" :key="1" v-show="1===mark"></li>
        <li class="item item2" :key="2" v-show="2===mark"></li>
        <li class="item item3" :key="3" v-show="3===mark"></li>
      </transition-group>
    </div>

    <div class="prd">
      <div class="idx_tit"> 
        <div class="tit_bg"> 
          <p>设计作品</p> 
          <span>Design</span> 
        </div> 
        <b></b> 
      </div>
      <div class="prd-content">
        <div class="item">
          <div class="bgimg cafe"></div>
          <span>
            <a>咖啡厅</a> 
          </span>
        </div>
        <div class="item">
          <div class="bgimg office"></div>
          <span>
            <a>办公室</a> 
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      mark: 1
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.start()
    })
  },
  methods: {
    autoPlay () {
      this.mark++
      if (this.mark === 4) {
        this.mark = 1
        return false
      }
    },
    start () {
      setInterval(this.autoPlay, 3000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .container
    padding: 0px
    margin: 0px
    width: 100%
    height: 100%
    .top
      position: relative
      text-align: center
      margin: 0 15px;
      height: 128px
      overflow: hidden
      .image
        margin: 0 auto
        width: 260px
        height: 128px
        background-image: url(./logo3.jpg)
      .phone
        position: absolute
        right: 0px
        bottom: 0px
        text-indent: 32px
        line-height: 50px
        font-size: 16px;
        background: url(./tel.jpg) left center no-repeat
        font-family: '微软雅黑'
      @media screen and (max-width:500px)
        .phone
          display: none
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
    .carousel
      width: 100%
      height: 260px
      .slide
        width: 100%
        height: 260px
        position: relative
        content: ''
        clear: both
        display: block
        .image-enter-active, .image-leave-active
          transition: opacity 1s
        .image-enter, .image-leave-to
          opacity: 0
        .item
          position: absolute
          width: 100%
          height: 100%
          &.item1
            background-image: url('./1.jpg')
            background-size: cover
            background-position: center
          &.item2
            background-image: url('./2.jpg')
            background-size: cover
            background-position: center
          &.item3
            background-image: url('./3.jpg')
            background-size: cover
            background-position: center
    .prd
      position: relative
      margin: 15px 15px
      text-align: center
      p
        font-size: 16px
        color: #666666
      span
        font-size: 12px
        font-family: arial
        color: #C7C7CC
      .prd-content
        margin-top: 20px
        width: 100%
        .item
          width: 46%
          padding: 0 2% 0 2%
          float: left
          .cafe
            background-image: url(./cafe.jpg)
          .office
            background-image: url(./office.jpg)
          .bgimg
            width: 100%
            height: 100px
            background-size: cover
            background-position: center
          span
            display: block
            height: 90px
            background: url(./bgn34.jpg) center 60px no-repeat
            line-height: 66px
            font-size: 16px
            text-align: center
</style>
