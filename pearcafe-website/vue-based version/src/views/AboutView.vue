<template>
 <!-- 區塊1 -->
  <div class="banner1" v-if="!showHome">
      <div class="container">
          <div class="title">
              <p>Brand Story</p>
          </div>
            <!-- <img src="about-page-banner1.jpg" alt=""> -->
            <img src="https://i.postimg.cc/RZ6xSGpw/about-page-banner1.jpg" alt="">
      </div>
  </div>

  <!-- 區塊2 -->
  <div class="banner2" v-if="!showHome">
      <div class="container">
          <ol class="breadcrumb">
              <li><a href="/" @click="handleClick(3)" :class="{'clicked': showHome}">首頁</a></li>
              <li><a href="#" @click="handleClick(1)" :class="{'clicked': showAbout1}">關於我們</a></li>
              <li v-show="showAbout1" v-if="showAbout1">品牌介紹</li>
              <li v-show="showAbout2" v-if="showAbout2">嚴選精神</li>
          </ol>
      </div>
  </div>

  <!-- 區塊3 -->
  <div class="banner3" v-if="!showHome">
      <div class="container">
          <div class="btn">
            <button @click="handleClick(1)" :class="{'clicked': showAbout1}">品牌介紹</button>
            <button @click="handleClick(2)" :class="{'clicked': showAbout2}">嚴選精神</button>
          </div>
      </div>
  </div>

  <PearcafeAbout01 v-if="showAbout1" />
  <PearcafeAbout02 v-if="showAbout2" />
  <PearcafeHome v-if="showHome" />
</template>

<script>
import PearcafeAbout01 from "@/components/PearcafeAbout01.vue";
import PearcafeAbout02 from "@/components/PearcafeAbout02.vue";
import PearcafeHome from "@/components/Pearcafe.vue";

export default{
  name: "About",
  components: { PearcafeAbout01, PearcafeAbout02, PearcafeHome },
  data() {
    return {
      showAbout1: true, // 預設顯示 PearcafeAbout01
      showAbout2: false,
      showHome: false,
    };
  },
  methods: {
    handleClick(buttonId) {
      // 如果點擊的是品牌介紹按鈕
      if (buttonId === 1) {
        this.showAbout1 = true;
        this.showAbout2 = false;
        this.showHome = false;
      }
      if (buttonId === 2) {
        this.showAbout1 = false;
        this.showAbout2 = true;
        this.showHome = false;
      }
      if (buttonId === 3) {
        this.showAbout1 = false;
        this.showAbout2 = false;
        this.showHome = true;
      }
    },
  },
}
</script>

<style scoped>
  .banner1{
    width: 100%;
    height: 405px;
  }
  .banner1 .container{
    width: 100%;
    height: 405px;
    position: relative;
    background-color: #f1efea;
  }
  .banner1 .title{
    display: flex;
    text-align: center;
    position: absolute;
    top: 63%;
    left: 50%;
    transform: translate(-50%, -50%);  /* 修正偏移量 */
    font-size: 60px;
    color: #fff;
  }
  .banner1 img{
    width: 100%;  /* 填滿寬度 */
    height: 100%;  /* 填滿高度 */
    object-fit: cover; /* 保持比例並填滿容器 */
    object-position: center; /* 圖片居中 */
  }
  .banner2{
    width: 100%;
    height: auto;
    background-color: #f1efea;
    padding-left: 170px;
    padding-bottom: 35px;
  }
  .banner2 .breadcrumb{
    width: 100%;
    display: flex;
    padding-top: 40px;
  }
  .banner2 .breadcrumb li{
    font-size: 14px;
    color: #7e7d7b;
    padding-right: 15px;
  }
  .banner2 .breadcrumb li + li::before{
    content: '/';
    color: #7e7d7b;
    margin-right: 15px;
  }
  .banner2 .breadcrumb a{
    text-decoration: none;
    color: #8eb135;
  }
  .banner2 .breadcrumb a:hover{
    color: #000;
    transition: 0.5s 0s;
  }
  .banner3{
    width: 100%;
    height: auto;
    background-color: #f1efea;
  }
  .banner3 .btn{
    padding: 10px;
  }
  .banner3 .btn button{
    width: 160px;
    height: 50px;
    margin: 5px;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 1000;
    cursor: pointer;
    background-color: #c0b096;
    border-radius: 5%;
  }
  .banner3 .btn button.clicked{
    background-color: #8eb135;
  }
  .banner3 .btn button:hover{
    background-color: #8eb135;
    transition: 0.5s 0;
  }
  /* 平板版（寬度小於 1400px） */
  @media screen and (max-width:1400px) {
    .banner2 {
      padding-left: 35px;
    }
  }
  /* 手機版（寬度小於 768px） */
  @media screen and (max-width: 768px) {
    .banner1 {
      height: 200px;
    }
    .banner1 .container {
      height: 200px;
    }
    .banner1 .title{
      top: 60%;
      font-size: 36px;
    }
    .banner2 {
      padding-left: 40px;
      padding-bottom: 15px;
    }
    .banner2 .breadcrumb{
      padding-top: 25px;
    }
    .banner2 .breadcrumb li{
      font-size: 12px;
    }
    .banner3 .btn button{
      width: 90px;
      height: 40px;
      font-size: 15px;
      font-weight: 400;
    }
  }
</style>


