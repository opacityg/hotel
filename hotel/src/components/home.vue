<template>
  <div class="container">
    <van-swipe id="my-swipe" :autoplay="3000" indicator-color="white" width="375" height="200">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="width: 100%;height: 100%"/>
      </van-swipe-item>
    </van-swipe>

    <div class="location-area-wrap">
      <!--<p>gsgggs </p>-->
      <div class="location-area-inner">
        <div class="area-sel-tit">
          <div class="tab-tit-item  active">
            <span class="tab-span-l">国内</span>
          </div>
          <div class="tab-tit-item tab-span-r">
            <span class="tab-span-r">海外</span>
          </div>
        </div>
        <div class="area-sel-body">

          <div class="bar-item bar-item-location">
            <div class="bar-item-left">深圳</div>
            <i class="bar-item-middle"><img class="icon-r-arrow" src="../../static/home/icon-r-arrow.png" alt=""></i>
            <div class="bar-item-right bar-item-column">
              <i class="iconfont icon-icon_mine_order_scor1 icon-loction">
              </i>
              <span class="info">
                我的位置
              </span>
            </div>
          </div>
        </div>

        <div class="bar-item bar-item-date">
            <div class="bar-item-column">
              <span class="date-name">入住日期</span>
              <span  class="date-info">7 月 3 日</span>
            </div>
          <div class="bar-item-column">
            <span class="date-name border-bottom">共一晚</span>
          </div>
          <div class="bar-item-column">
            <span class="date-name">入住日期</span>
            <span  class="date-info">7 月 3 日</span>
          </div>
        </div>

        <div class="bar-item bar-item-hotel">
          <div class="hotel-left">酒店名/关键词</div>
          <i class="iconfont icon-icom_sousuo" style="color: #A0A9B5"></i>
        </div>

        <van-button type="default" class="search-btn">查找</van-button>

      </div>


    </div>


  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        images: [
          '../static/home/banner-3.jpg',
          '../static/home/banner-3.jpg',
          '../static/home/banner-3.jpg',
          '../static/home/banner-3.jpg',
          '../static/home/banner-3.jpg',
        ]
      }
    }
  }
</script>

<style scoped>

  .container{
    width: 375px;
  }

  .van-swipe-item {
    color: blue;
    font-size: 20px;
    text-align: center;
    width: 100%;
    height: 200px;
    position: relative;
  }

  /*指示器*/
  .van-swipe__indicator {
    width: 15px;
    height: 15px;
    background: blue;
  }

  .van-swipe__indicator--active {
    background: red !important;
  }

  .location-area-wrap {
    position: relative;
    width: 100%;
  }

  .location-area-inner {
    position: absolute;
    width: 345px;
    top: -50px;
    left: 50%;
    margin-left: -172.5px;
    background: red;
    height: 318.5px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 10px 20px 8px rgba(119, 83, 83, 0.09);
    border-radius: 20px 20px 20px 20px;
    /*margin: -50px 0 auto;*/
    z-index: 2;
  }

  .area-sel-tit {
    display: flex;
    flex-direction: row;
  }

  .area-sel-tit .tab-tit-item {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: #A0A9B5;
    height: 50px;
    background: #F6F6F6;
    /*background:rgba(246,246,246,1);*/
    border-radius: 10px 10px 0px 10px;
    position: relative;
    z-index: 33;
  }
  /*.tab-tit-item span{*/
    /*position: absolute;*/
    /*overflow: hidden;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*!*background: red;*!*/
    /*z-index: -1;*/
  /*}*/
  /*.tab-tit-item .tab-span-l{*/
    /*border-radius: 10px 0px 0 0 ;*/
    /*background: rebeccapurple;*/
  /*}*/
  /*.tab-tit-item .tab-span-r{*/
    /*border-radius: 0px 10px 0 0 ;*/
  /*}*/
  .area-sel-tit .active {
    color: #434A54;
    background: yellow;
  }
  .area-sel-body{

  }
  .bar-item{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #EFF0F1;
    margin: 0 20px;
    width: 305px;
  }
  .bar-item-location{
    height: 54px;
  }
  .bar-item-date{
    height: 64px;
  }
  .bar-item-hotel{
    height: 49px;
    justify-content: space-between;
  }
  .bar-item-left{
    /*width: 242.5px;*/
    width:234.5px;
    display: flex;
  }
  .bar-item-middle  {
    display: flex;
    margin-right: 15px;
  }
  .bar-item-right{
    font-size: 14px;
  }
  .bar-item-column{
    flex-direction: column;
    justify-content: center;
    flex: 1;
    display: flex;
  }
  .bar-item-right .icon-loction{
    font-size: 15px;
  }
  .bar-item-right .info{
    font-size: 12px;
  }
  .icon-r-arrow{
    display: inline-block;
    width: 7.5px;
    height: 13px;
  }

  .date-name{
    font-size: 11px;
    color: #A0A9B5;
  }
  .border-bottom{
    width: 71px;
    height: 20px;
    line-height: 20px;
    border-bottom: 1px solid #D1D1D1;
    margin: 0 auto;
  }
  .date-info{
    font-size: 17px;
  }

  .hotel-left{
    color: #A0A9B5
  }

  .search-btn{
    margin-top: 15px;
    /*background: url("../stat/home/search-btn.png");*/
    /*background: url("../../static/home/search-btn.png");*/
    width:270px;
    height:40px;
    font-weight:500;
    color: #fff;
    background:linear-gradient(315deg,rgba(251,88,112,1) 0%,rgba(251,143,96,1) 100%);
    border-radius:8px;
  }
</style>
