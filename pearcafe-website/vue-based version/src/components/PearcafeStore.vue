<template>
  <!-- 區塊1 -->
  <div class="banner1" v-if="!showHome">
      <div class="container">
          <div class="title">
              <p>Brand Store</p>
          </div>
          <!-- <img src="store-page-banner1.jpg" alt=""> -->
          <img src="https://i.postimg.cc/c18RcWnY/store-page-banner1.jpg" alt="">
      </div>
  </div>

  <!-- 區塊2 -->
  <div class="banner2" v-if="!showHome">
      <div class="container">
          <ol class="breadcrumb">
              <li><a href="/" @click="handleClick()" :class="{'clicked': showHome}">首頁</a></li>
              <li><a href="#">分店資訊</a></li>
          </ol>
      </div>
  </div>

  <!-- 區塊3 -->
  <div class="banner3" v-if="!showHome">
      <div class="container">
          <div class="branch-block">
              <div class="branch-block-1">
                  <div class="branch-pic">
                      <!-- <img src="store-page-banner3-1.jpg" alt=""> -->
                      <img src="https://i.postimg.cc/SQvJQyDC/store-page-banner3-1.jpg" alt="">
                  </div>
                  <div class="branch-introduction">
                      <div class="branch-name">
                          <p>豐原店</p>
                      </div>
                      <div class="branch-address">
                          <p>台中市豐原區陽明街86號1樓</p>
                          <p>(台中市政府陽明大樓旁)</p>
                      </div>
                      <div class="branch-table">
                          <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr>
                                  <th>訂位專線</th>
                                  <td>04-2527-6799</td>
                              </tr>
                              <tr>
                                  <th>營業時間</th>
                                  <td>08:00-21:00</td>
                              </tr>
                              <tr>
                                  <th>停車資訊</th>
                                  <td></td>
                              </tr>
                            </tbody>
                          </table>
                      </div>
                  </div>
              </div>
              <div class="branch-block-2">
                  <div class="branch-pic">
                      <!-- <img src="store-page-banner3-2.jpg" alt=""> -->
                      <img src="https://i.postimg.cc/KcB8bn3S/store-page-banner3-2.jpg" alt="">
                  </div>
                  <div class="branch-introduction">
                      <div class="branch-name">
                          <p>崇德店</p>
                      </div>
                      <div class="branch-address">
                          <p>台中市北屯區崇德路三段1號</p>
                          <p>(入口於松竹路口)</p>
                      </div>
                      <div class="branch-table">
                          <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr>
                                  <th>訂位專線</th>
                                  <td>04-2249-0399</td>
                              </tr>
                              <tr>
                                  <th>營業時間</th>
                                  <td>09:00-21:00</td>
                              </tr>
                              <tr>
                                  <th>停車資訊</th>
                                  <td></td>
                              </tr>
                            </tbody>
                          </table>
                      </div>
                  </div>
              </div>
              <div class="branch-block-3">
                  <div class="branch-pic">
                      <!-- <img src="store-page-banner3-3.jpg" alt=""> -->
                      <img src="https://i.postimg.cc/0Nh9RQ8y/store-page-banner3-3.jpg" alt="">
                  </div>
                  <div class="branch-introduction">
                      <div class="branch-name">
                          <p>東海森林店</p>
                      </div>
                      <div class="branch-address">
                          <p>台中市西屯區台灣大道四段1727號第二教學區餐廳（東海大學內）</p>
                      </div>
                      <div class="branch-table">
                          <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr>
                                  <th>訂位專線</th>
                                  <td>04-2358-0499</td>
                              </tr>
                              <tr>
                                  <th>營業時間</th>
                                  <td>09:00-21:00</td>
                              </tr>
                              <tr>
                                  <th>停車資訊</th>
                                  <td></td>
                              </tr>
                            </tbody>
                          </table>
                      </div>
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
      background-color: #f1efea;
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
      height: auto;
      background-color: #f1efea;
      padding-left: 170px;
      padding-bottom: 95px;
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
      padding-left: 150px;
      padding-bottom: 110px;
  }
  .banner3 .branch-block{
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
  }
  .banner3 .branch-block-1,
  .banner3 .branch-block-2,
  .banner3 .branch-block-3{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding-bottom: 70px;
  }
  .banner3 .branch-introduction{
      width: 370px;
      padding-right: 45px;
      padding-left: 25px;
  }
  .banner3 .branch-name{
      font-size: 30px;
      text-align: left;
      color: #8eb135;
      padding-bottom: 5px;
  }
  .banner3 .branch-address{
      font-size: 18px;
      text-align: left;
      padding-bottom: 5px;
  }
  .banner3 .branch-address p{
      line-height: 1.5em;
  }
  .banner3 .branch-table th{
      width: 80px;
      color: #7e7d7b;
      font-size: 14px;
      text-align: left;
  }
  .banner3 .branch-table td{
      width: 180px;
      font-size: 22px;
      font-weight: 800;
      text-align: left;
      height: 30px;
  }
  /* 平板版（寬度小於 1400px） */
  @media screen and (max-width:1400px) {
    .banner2 {
        padding-left: 35px;
        padding-bottom: 0px;
    }
    .banner3 .container {
        padding-top: 60px;
        padding-left: 100px;
        padding-bottom: 50px;
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
          top: 62%;
          font-size: 36px;
      }
      .banner2 {
          padding-left: 40px;
          padding-bottom: 45px;
      }
      .banner2 .breadcrumb{
          padding-top: 25px;
          font-size: 12px;
      }
      .banner2 .breadcrumb a{
          font-size: 12px;
      }
      .banner3 .container {
          padding-top: 5px;
          padding-left: 0px;
      }
      .banner3 .branch-block-1,
      .banner3 .branch-block-2,
      .banner3 .branch-block-3{
          padding-bottom: 40px;
      }
      .banner3 .branch-introduction{
          width: 300px;
          padding-right: 0;
          padding-left: 15px;
      }
      .banner3 .branch-address{
          font-size: 15px;
      }
      .banner3 .branch-table th{
          width: 65px;
      }
      .banner3 .branch-table td{
          font-size: 18px;
          height: 25px;
      }
  }
</style>


