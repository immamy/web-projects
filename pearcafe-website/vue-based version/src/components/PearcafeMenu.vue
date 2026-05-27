<template>
  <!-- 區塊1 -->
  <div class="banner1" v-if="!showHome">
      <div class="container">
          <div class="title">
              <p>Menu</p>
          </div>
          <!-- <img src="menu-page-banner1.png" alt=""> -->
          <img src="https://i.postimg.cc/76pwM0TF/menu-page-banner1.png" alt="">
      </div>
  </div>

  <!-- 區塊2 -->
  <div class="banner2" v-if="!showHome">
      <div class="container">
          <ol class="breadcrumb">
              <li><a href="/" @click="handleClick()" :class="{'clicked': showHome}">首頁</a></li>
              <li><a href="#">梨子菜單</a></li>
          </ol>
      </div>
  </div>

  <!-- 區塊3 -->
  <div class="banner3" v-if="!showHome">
      <div class="container">
          <div class="menu-banner">
              <!-- <img src="menu-page-banner3-3.jpg" alt=""> -->
              <img src="https://i.postimg.cc/Ls1cN1tD/menu-page-banner3-3.png" alt="">
          </div>
          <div class="menu-block">
              <div class="menu-block-1">
                  <div class="menu-title">
                      <p>豐原店</p>
                  </div>
                  <div class="menu-pic">
                      <!-- <img src="menu-page-banner3-2.jpg" alt=""> -->
                      <img src="https://i.postimg.cc/C5YmCZ7Y/menu-page-banner3-2.jpg" alt="">
                  </div>
                  <div class="menu-download">
                      <img src="" alt="">
                      <a href="#">菜單下載</a>
                  </div>
              </div>
              <div class="menu-block-2">
                  <div class="menu-title">
                      <p>崇德店</p>
                  </div>
                  <div class="menu-pic">
                      <!-- <img src="menu-page-banner3-2.jpg" alt=""> -->
                      <img src="https://i.postimg.cc/C5YmCZ7Y/menu-page-banner3-2.jpg" alt="">
                  </div>
                  <div class="menu-download">
                      <img src="" alt="">
                      <a href="#">菜單下載</a>
                  </div>
              </div>
              <div class="menu-block-2">
                  <div class="menu-title">
                      <p>東海森林店</p>
                  </div>
                  <div class="menu-pic">
                      <!-- <img src="menu-page-banner3-2.jpg" alt=""> -->
                      <img src="https://i.postimg.cc/C5YmCZ7Y/menu-page-banner3-2.jpg" alt="">
                  </div>
                  <div class="menu-download">
                      <img src="" alt="">
                      <a href="#">菜單下載</a>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <PearcafeHome v-if="showHome" />
</template>

<script>
import PearcafeHome from "@/components/Pearcafe.vue";

export default{
  name: "About",
  components: { PearcafeHome },
  data() {
    return {
      showHome: false,
    };
  },
  methods: {
    handleClick() {
        this.showHome = true;
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
  }
  .banner1 .title{
      display: flex;
      text-align: center;
      position: absolute;
      top: 65%;
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
      height: 100px;
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
      background-color: #f2efea;
  }
  .banner3 .container{
      width: 100%;
      height: auto;
      padding-bottom: 80px;
  }
  .banner3 .menu-block{
      display: flex;
      justify-content: center;
      padding: 5px;
  }
  .banner3
  .menu-block-1,
  .menu-block-2,
  .menu-block-3{
      padding: 30px;
  }
  .banner3 .menu-block .menu-title{
      font-size: 28px;
      padding-bottom: 10px;
      text-align: left;
  }
  .banner3 .menu-block .menu-download{
      width: 280px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .banner3 .menu-block .menu-download a{
      font-size: 20px;
      color: #8eb135;
      font-weight: 800;
      text-decoration: none;
  }
  .banner3 .menu-banner{
      position: absolute;
      width: 105%;
      visibility: hidden;
  }
  .banner3 .menu-banner img{
      width: 100%;
  }
  /* 平板版（寬度小於 1400px） */
  @media screen and (max-width:1400px) {
    .banner2 {
        padding-left: 40px;
        padding-bottom: 0;
    }
    .banner3 .container {
        padding-bottom: 60px;
    }
    .banner3 .menu-block {
        display: flex;
        flex-wrap: wrap;
        padding-top: 0;
    }
    .banner3
    .menu-block-1,
    .menu-block-2,
    .menu-block-3{
        padding: 20px;
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
        padding-bottom: 0;
    }
    .banner2 .breadcrumb{
        padding-top: 25px;
    }
    .banner2 .breadcrumb li{
        font-size: 12px;
    }
    .banner2 .breadcrumb a{
        font-size: 12px;
    }
    .banner3 .menu-block .menu-title{
        text-align: center;
    }
    .banner3 .menu-block-1,
    .banner3 .menu-block-2,
    .banner3 .menu-block-3{
        padding: 10px;
        padding-top: 0px;
    }
  }
</style>


