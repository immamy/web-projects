<template>
  <!-- 區塊1 -->
  <div class="banner1" v-if="!showCatering && !showHome">
      <div class="container">
          <div class="title">
              <p>Our Service</p>
          </div>
          <!-- <img src="service-page-banner1.jpg" alt=""> -->
          <img src="https://i.postimg.cc/qv7Xy3XB/service-page-banner1.jpg" alt="">
      </div>
  </div>

  <!-- 區塊2 -->
  <div class="banner2" v-if="!showCatering && !showHome">
      <div class="container">
          <ol class="breadcrumb">
              <li><a href="/" @click="handleClick(3)" :class="{'clicked': showHome}">首頁</a></li>
              <li><a href="#">提供服務</a></li>
          </ol>
      </div>
  </div>

  <!--區塊3 -->
  <div class="banner3" v-if="!showCatering && !showHome">
      <div class="container">
          <div class="btn">
              <a href="#"><button @click="handleClick(1)" :class="{'clicked': showService}">娜娜的幸福旅程</button></a>
              <a href="#section-2"><button @click="handleClick(1)" :class="{'clicked': showService}">抓周、生日派對</button></a>
              <a href="#section-3"><button @click="handleClick(1)" :class="{'clicked': showService}">婚禮會場</button></a>
              <a href="#section-4"><button @click="handleClick(1)" :class="{'clicked': showService}">私廚料理</button></a>
              <a href="#section-5"><button @click="handleClick(1)" :class="{'clicked': showService}">會議室租借</button></a>
              <a href="#"><button @click="handleClick(2)" :class="{'clicked': showCatering}">台中外燴首選</button></a>
          </div>
      </div>
  </div>

  <PearcafeService v-if="showService" />
  <PearcafeServiceCatering v-if="showCatering" />
  <PearcafeHome v-if="showHome" />
</template>

<script>
import PearcafeService from '../components/PearcafeService.vue'
import PearcafeServiceCatering from '../components/PearcafeServiceCatering.vue'
import PearcafeHome from "@/components/Pearcafe.vue";

export default{
  name: "Service",
  components: { PearcafeService, PearcafeServiceCatering, PearcafeHome },
  data() {
    return {
      showService: true, // 預設顯示 PearcafeService
      showCatering: false,
      showHome: false,
    };
  },
  methods: {
    handleClick(buttonId) {
      // 如果點擊的是品牌介紹按鈕
      if (buttonId === 1) {
        this.showService = true;
        this.showCatering = false;
        this.showHome = false;
      }
      if (buttonId === 2) {
        this.showService = false;
        this.showCatering = true;
        this.showHome = false;
      }
      if (buttonId === 3) {
        this.showService = false;
        this.showCatering = false;
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
    font-size: 14px;
  }
  .banner2 .breadcrumb a:hover{
    color: #000;
    transition: 0.5s 0s;
  }
  .banner2 .breadcrumb li:last-child a{
    color: #7e7d7b;
    cursor: text;
  }
  .banner3{
    width: 100%;
    height: auto;
    background-color: #f1efea;
  }
  .banner3 .btn{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
  }
  .banner3 .btn a{
    padding: 5px;
  }
  .banner3 .btn button{
    width: 170px;
    height: 50px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 1000;
    cursor: pointer;
    background-color: #8eb135;
    border-radius: 5%;
  }
  .banner3 .btn a:nth-child(n+2) button{
    background-color: #c0b096;
  }
  .banner3 .btn a:nth-child(n+2) button:hover{
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
    .banner2 .breadcrumb a {
      font-size: 12px;
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
    .banner3 {
      position: relative;
      padding-bottom: 140px;
    }
    .banner3 .btn {
      width: 400px;
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translate(-50%, -50%);  /* 修正偏移量 */
    }
    .banner3 .btn button{
      width: auto;
      padding: 10px 15px;
    }
  }
</style>


