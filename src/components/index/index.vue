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
      <div class="item"><router-link tag="a" to="/articlelist">设计随笔</router-link></div>
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
        <div class="item">
          <div class="bgimg rest"></div>
          <span>
            <a>休息室</a> 
          </span>
        </div>
        <div class="item">
          <div class="bgimg hospital"></div>
          <span>
            <a>医院</a> 
          </span>
        </div>
      </div>
    </div>

    <div class="aboutme">
      <div class="idx_tit"> 
        <div class="tit_bg"> 
          <p>关于我</p> 
          <span>About Me</span> 
        </div> 
        <b></b> 
      </div>
      <div class="aboutme-content">
        <p>
            本人于2014年进入四川师范大学影视与传媒学院室内设计专业学习，在掌握本专业基础理论知识的同时，注重将所学的理论知识与实践相结合，努力培养自己的动手能力。在搞好专业课学习的同时，还努力拓展自己的知识面，能够熟练进行电脑基本操作；掌握cad，天正，3dmax、photoshop、lightscape等制图软件；熟悉word，excel等办公软件。
        </p>
        <p>
            我已经具备了计算机操作的基本能力和设计能力，并且坚信会在室内设计方面创造出一片蔚蓝的天空。平时我的课余活动也十分广泛，篮球、羽毛球、摄影等都是我的爱好，还喜欢阅读书籍，这主要是为了培养艺术能力，有艺术才会树立好形象。  
        </p>
      </div>
    </div>

    <div class="aboutme">
      <div class="idx_tit"> 
        <div class="tit_bg"> 
          <p>设计随笔</p> 
          <span>Design Essay</span> 
        </div> 
        <b></b> 
      </div>
      <div class="essay-content">
          <div class="essay-item">
            <div class="cls_left"> 
              <div class="article article1"></div>
            </div> 
            <div class="cls_right"> 
              <h1>室内设计的零星感悟</h1> 
              <p>在设计行业也走过了两个年头, 从开始的家装到后来的商业项目, 跟大家分享一些自己的感悟...</p> 
            </div> <div class="clearfix"></div> 
          </div>
          <div class="essay-item">
            <div class="cls_left"> 
              <div class="article article2"></div>
            </div> 
            <div class="cls_right"> 
              <h1>与客户交流有感</h1> 
              <p>我觉得室内设计最辛苦的工作不是画设计图也不是施工，而是沟通。由于业主没有经过专业训练...</p> 
            </div> <div class="clearfix"></div> 
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
        a
          color: #fff
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
    .prd, .aboutme
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
      .aboutme-content
        padding: 10px 10px
        text-indent: 2em
        font-size: 12px
        text-justify: auto
        text-align: justify
        line-height: 30px
        p
          font-size: 14px
          color: #8f8f94
      .essay-content
        .essay-item
          margin-top: 5px
          .cls_left
            width: 80px
            float: left
            margin-right: 5%
            overflow: hidden
            .article2
              background-image: url('./article2.jpg')
            .article1
              background-image: url('./article.jpg')
            .article
              width: 100%
              -webkit-margin-before: 0.67em
              height: 90px;
              background-size: cover
              background-position: center
          .cls_right
            float: left
            width: 60%
            h1
              font-size: 14px
              width: 100%
              overflow: hidden
              text-overflow: ellipsis
              white-space: nowrap
              -webkit-margin-before: 0.9em
              -webkit-margin-after: 0.67em
              -webkit-margin-start: 0px
              -webkit-margin-end: 0px
              font-weight: bold
            p
              font-size: 12px
              overflow: hidden
              height: 50px
              color: #8f8f94
              text-justify: auto
              text-align: justify
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
          .rest
            background-image: url(./rest.jpg)
          .hospital
            background-image: url(./hospital.jpg)
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
