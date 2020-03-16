<template>
  <div class="keyword-container">
      <div class="nav">
          <div class="nav-bar">
            <i class="iconfont icon-icon_page_return1 return"></i>
            <div class="search-bar">
              <div class="search-bar-left">
                深圳
              </div>
              <div class="search-field-box">
                <i class="iconfont icon-search icon-icom_sousuo"></i>
                <input type="search" placeholder="请输入搜索关键词" class="search-field">
              </div>

            </div>
          </div>
      </div>
      <div class="category">
        <!--左側分類-->
        <div class="scroll-view-left" >
          <div class="scroll-view-left-item"
               v-for="(item, index) in lists" :key="index"
               :class="activeIndex == index ? 'category-active' : ''"
               @click="handleSelectedType(index)"
          >
            {{item.categoryName}}
          </div>
        </div>

        <div class="scroll-view-right">
          <div class="scroll-view-right-item" v-for="(child,index) in lists[activeIndex].subCategory" :key="index">
            {{child.name}}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'keyWords',
    data(){
      return{
        activeIndex:0,
        lists:[
          {
            categoryName:'特色',
            subCategory:[
              {
                name:'温泉',
              },
              {
                name: '青年旅舍',
              },
              {
                name:'休闲度假',
              },
              {
                name:'民宿客栈',
              },
              {
                name:'精品酒店',
              }
            ]
          },
          {
            categoryName:'商圈',
            subCategory:[
              {
                name:'温泉1111111',
              },
              {
                name: '青年旅舍',
              },
              {
                name:'休闲度假',
              },
              {
                name:'民宿客栈',
              },
              {
                name:'精品酒店',
              }
            ]
          },
          {
            categoryName:'机场车站',
            subCategory:[
              {
                name:'温泉22222',
              },
              {
                name: '青年旅舍',
              },
              {
                name:'休闲度假',
              },
              {
                name:'民宿客栈',
              },
              {
                name:'精品酒店',
              }
            ]
          },
          {
            categoryName:'景点',
            subCategory:[
              {
                name:'温泉333333333',
              },
              {
                name: '青年旅舍',
              },
              {
                name:'休闲度假',
              },
              {
                name:'民宿客栈',
              },
              {
                name:'精品酒店',
              }
            ]
          },
          {
            categoryName:'行政区',
            subCategory:[
              {
                name:'温泉444444',
              },
              {
                name: '青年旅舍',
              },
              {
                name:'休闲度假',
              },
              {
                name:'民宿客栈',
              },
              {
                name:'精品酒店',
              }
            ]
          },
        ],

      }
    },
    methods:{
      handleSelectedType(i){
        // console.log('sssssssss')
        this.activeIndex = i;
      }
    }
  }
</script>

<style scoped>
.nav{
  width: 100%;
  height: 44px;
  background:linear-gradient(225deg,rgba(251,88,112,1) 0%,rgba(251,143,96,1) 100%);
  padding:0 15px;
}
.nav-bar{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;

}
  .return{
    color: #fff;
    font-size: 15px;
    margin-right: 15px;
  }
  .search-bar{
   display: flex;
    flex-direction: row;

  }
  .search-bar-left{
    width: 50px;
    height: 30px;
    border-radius: 15px 0 0 15px;
    font-size:16px;
    color: #434A54;
    background: #fff;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: 1.5px;
  }
  .search-field{
    width: 100%;
    height: 30px;
    border-radius:0px 30px 30px 0px;
    background-size: 50% auto;
    background-origin: border-box;
    background: #fff;
    padding-left: 31px;
    box-sizing: border-box;
    /*background-img: url(../../static/keyWords/search.png) no-repeat;*/
  }
  .search-field-box{
    position: relative;
    width: 270px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .icon-search{
    position: absolute;
    font-size: 15px;
    font-weight: bold;
    color: #A0A9B5;
    margin-left: 15px;
    margin-right: 5px;

  }
  .category{
    display: flex;
    flex-direction: row;

  }
  .scroll-view-left{
    width:84px;
    background: #FAFAFA;
  }
  .scroll-view-left-item{
    width:84px;
    height:40px;
    font-size:14px;
    font-weight:400;
    color:#60656E;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .category-active{
    color:rgba(251,97,110,1);
    background: #fff;
  }
  .scroll-view-right-item{
    width: 207px;
    height: 39.5px;
    line-height: 39.5px;
    border-bottom: 1px solid #F6F6F6;
    margin-left: 19.5px;
    font-size:14px;
    font-weight:400;
    color:rgba(96,101,110,1);
  }
</style>
