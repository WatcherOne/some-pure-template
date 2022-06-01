<template>
  <div class="index-page">
    <div class="head-person">
      <div class="name">顾影自怜</div>
      <div class="describe">如果你给我的和你给别人的一样，那我就不要了！</div>
    </div>
    <div class="info">
      <div class="avator">
        <img src="../assets/avator.jpg" alt="博客头像" width="120px" height="120px">
      </div>
      <div class="customer">
        <div class="icon"><i class="iconfont icon-fangkeshu"></i></div>
        <div class="number">
          <span>今日访客&nbsp;<span class="count">{{ count }}</span></span>
          <span>总访客量&nbsp;<span class="count">2300</span></span>
        </div>
      </div>
    </div>
    <div class="content">
      <LeftNav v-bind:navIndex="navIndex" v-bind:changeNavIndex="changeNav"/>
      <MiddleContent v-bind:navIndex="navIndex"/>
      <RightNav/>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import cookie from '../../static/js/cookie.js';
  import LeftNav from './home/left-nav';
  import MiddleContent from './home/middle-content';
  import RightNav from './home/right-nav';

  export default {
    data() {
      return {
        navIndex: 1,
        count: cookie.getValue('count') || 1
      }
    },
    // 得到state里面的数据,是将store中的"getters"映射到局部计算属性中
    // 也可以改名字(newName: 'name')，然后直接可以得到值
    computed: mapGetters([
      'name',                    // 更改state中的状态唯一方法是提交mutation
      'sex',                     // 然后通过store.commit来唤醒相同类型的mutation
      'birthday',                // 因为mutation与commit已经封装好了，需要用直接调用函数
      'address'                 // mutation: this.$store.mutation.changeCount();
                           // commit：  this.$store.actions.changeCount()
    ]),
    components: {
      LeftNav,
      MiddleContent,
      RightNav
    },
    methods: {
      changeNav(index) {
        this.navIndex = index;
      }
    },
    // 视图渲染后的回调函数
    mounted() {
      let count = cookie.getValue('count')
      if (!count) {
        cookie.setValue('count', 1);
      } else {
        count++;
        cookie.setValue('count', count);
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .index-page {
    width: 1046px;
    padding-top: 40px;
    margin: 0 auto;
  }
  .head-person {
    .name {
      font-size: 28px;
      height: 36px;
      line-height: 36px;
    }
    .describe {
      margin: 5px 0px;
      color: #8D8dd7;
    }
  }
  .info {
    position: relative;
    height: 120px;
    .avator {
      position: absolute;
      left: 0;
      border: 1px solid #d9d9d9;
      height: 120px;
      width: 120px;
    }
    .customer {
      position: absolute;
      right: 0;
      top: 32px;
      width: 160px;
      height: 56px;
      line-height: 56px;
      &:hover {
        border: 1px dotted #448CC6;
      }
      div {
        display: inline-block;
      }
      .icon {
        float: left;
        height: 100%;
        width: 30px;
        margin-left: 10px;
        i {
          font-size: 30px;
          color: #FDBE3A;
        }
      }
      .number {
        float: right;
        width: 110px;
        line-height: 20px;
        margin-top: 8px;  
        > span {
          display: inline-block;
          width: 100%;
          font-size: 14px;
          text-shadow: 1px 1px 1px rgba(0,0,0,.2);
          color: #fff;
          .count {
            display: inline-block;
            font-size: 16px;
            text-shadow: 1px 1px 1px rgba(0,0,0,.4);
            vertical-align: top;
          }
        }
      }
    }
  }
  .content {
    padding-top: 20px;
  }
</style>
