<template>
   <!-- 區塊4 -->
  <div class="banner4" v-if="!showHome">
      <div class="container">
          <div class="pic">
              <!-- <img src="about-page-1-banner4.png" alt=""> -->
              <img src="https://i.postimg.cc/cCRssmr9/about-page-1-banner4.png" alt="">
          </div>
          <div class="introduction">
              <div class="title">
                  <p>撫心，一餐美好</p>
              </div>
              <div class="text">
                  <p>因為想要呈現好的，</p>
                  <p>所以持續努力到了第20個年頭，</p>
                  <p>各分店似孩子般的慢慢誕生與培育。</p>
                  <br>
                  <p>細細回味這股回憶，</p>
                  <p>從豐原小鎮的原點出發，</p>
                  <p>想起這段歷程。</p>
                  <p>梨子尋求回食物的根本，一直以來從不鬆懈。</p>
                  <p>每個人的答案或許不同，</p>
                  <p>有些人找原料尋訪不同的食材產地；</p>
                  <p>而有些人則是追尋美食評論家的報導與讚許。</p>
              </div>
          </div>
      </div>
  </div>

  <!-- 區塊5 -->
  <div class="banner5" v-if="!showHome">
      <div class="container">
          <div class="pic-block">
              <div class="pic-block-1">
                  <!-- <img src="about-page-1-banner5-1.jpg" alt=""> -->
                  <!-- <img src="about-page-1-banner5-2.jpg" alt=""> -->
                  <img src="https://i.postimg.cc/QtLGH7LR/about-page-1-banner5-1.jpg" alt="">
                  <img src="https://i.postimg.cc/nhQ3MPHh/about-page-1-banner5-2.jpg" alt="">
              </div>
              <div class="pic-block-2">
                  <div class="introduction">
                      <p>梨子多年來，默默的陪伴在你我的生活中，</p>
                      <p>對我們而言，料理的動力就是你們的胃，</p>
                      <p>我們做菜，你們大快朵頤，有如在自家廚房一樣的自在舒適。</p>
                      <p>對夥伴來說，那時刻就是最美好的一餐甜美。</p>
                      <p>能走到20歲的時光，是上帝給我們的奇異恩典，</p>
                      <p>而我們一直努力成為夥伴們的避風港，你們的後廚房，</p>
                      <p>與您走過這些風雨讓我們炒出更美的人生甘、甜、味。</p>
                  </div>
                  <div class="introduction-plt">
                    <!-- <img src="about-page-1-banner5-3.jpg" alt=""> -->
                    <img src="https://i.postimg.cc/SQdNjmdD/about-page-1-banner5-3.jpg" alt="">
                  </div>
              </div>
          </div>
      </div>
  </div>

  <!-- 區塊6 -->
  <div class="banner6" v-if="!showHome">
      <div class="container">
          <div class="introduction">
              <div class="first-title">
                  <p>我用心，你放心</p>
              </div>
              <div class="second-title">
                  <p>源頭、餐桌與人情的美好</p>
              </div>
              <div class="text">
                  <p>二十年來我們仍堅持於食物的本質</p>
                  <p>找尋可以信賴、細節用心、堅持信念的品牌伙伴，</p>
                  <p>將友善種植，土地共好的想法，傳遞到梨子旗下各品牌。</p>
              </div>
          </div>
          <div class="pic-block">
              <!-- <img src="about-page-1-banner6-1.png" alt=""> -->
              <!-- <img src="about-page-1-banner6-2.png" alt=""> -->
              <!-- <img src="about-page-1-banner6-3.png" alt=""> -->
              <!-- <img src="about-page-1-banner6-4.png" alt=""> -->
              <!-- <img src="about-page-1-banner6-5.png" alt=""> -->
              <!-- <img src="about-page-1-banner6-6.png" alt=""> -->
              <img src="https://i.postimg.cc/DwP8Q1P3/about-page-1-banner6-1.png" alt="">
              <img src="https://i.postimg.cc/XN93y4gT/about-page-1-banner6-2.png" alt="">
              <img src="https://i.postimg.cc/zXJmbWvg/about-page-1-banner6-3.png" alt="">
              <img src="https://i.postimg.cc/j5z9Cdrc/about-page-1-banner6-4.png" alt="">
              <img src="https://i.postimg.cc/3RCSYSgb/about-page-1-banner6-5.png" alt="">
              <img src="https://i.postimg.cc/FHMDc5pB/about-page-1-banner6-6.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
import PearcafeAbout01 from "@/components/PearcafeAbout01.vue";

export default {
  components: { PearcafeAbout01 },
  data() {
    return {
      showHome: false, // 預設顯示 PearcafeAbout01
    }
  }
}
</script>

<style scoped>
  .banner4{
      width: 100%;
      height: 620px;
      background-color: #f2efea;
      position: relative;
  }
  .banner4 .container{
      width: 100%;
      height: 620px;
      position: relative;
      top: 45px;
      padding: 0 140px;
  }
  .banner4 .pic{
      width: 50%;
      position: absolute;
      left: 0;
      bottom: 16%;
  }
  .banner4 .introduction{
      width: 50%;
      position: absolute;
      left: 47%;
      top: 8%;
      text-align: left;
  }
  .banner4 .title{
      font-size: 48px;
      padding-bottom: 40px;
      color: #8eb135;
  }
  .banner4 .text{
      font-size: 20px;
  }
  .banner4 .text p{
      padding-bottom: 10px;
  }
  .banner5 {
      width: 100%;
      height: auto;
  }
  .banner5 .container{
      width: 100%;
      height: auto;
      background-color: #fff;
      position: relative;
      padding-bottom: 60px;
  }
  .banner5 .pic-block-1{
      display: flex;
  }
  .banner5 .pic-block-1 img{
      width: 50%;
  }
  .banner5 .pic-block-2{
      display: flex;
  }
  .banner5 .pic-block-2 .introduction{
      width: 40%;
      padding-top: 170px;
      padding-left: 170px;
  }
  .banner5 .pic-block-2 .introduction p{
      width: 85%;
      text-align: left;
      line-height: 1.8em;
      font-size: 20px;
  }
  .banner5 .pic-block-2 .introduction-plt{
      width: 60%;
      background: linear-gradient(to bottom, white 50%, #f2efea 50%);
  }
  .banner5 .introduction-plt img{
      width: 100%;  /* 填滿寬度 */
      height: 100%;  /* 填滿高度 */
      object-fit: cover; /* 保持比例並填滿容器 */
      object-position: center; /* 圖片居中 */
  }
  .banner6{
      width: 100%;
      height: 1005px;
      background-color: #f2efea;
  }
  .banner6 .container{
      width: 100%;
      height: 1005px;
      position: relative;
  }
  .banner6 .introduction{
      text-align: center;
      padding-top: 120px;
  }
  .banner6 .introduction .first-title{
      font-size: 40px;
      color: #8eb135;
  }
  .banner6 .introduction .second-title{
      font-size: 18px;
      font-weight: 800;
      padding-bottom: 45px;
  }
  .banner6 .introduction .text{
      font-size: 20px;
  }
  .banner6 .introduction .text p{
      padding-bottom: 10px;
  }
  .banner6 .pic-block{
      width: 1010px;
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);  /* 修正偏移量 */
  }
  .banner6 .pic-block img{
      padding: 30px 60px;
  }
  /* 平板版（寬度小於 1400px） */
  @media screen and (max-width:1400px) {
    .banner4 {
        height: 680px;
    }
    .banner4 .container {
        height: 680px;
    }
    .banner4 .pic {
        bottom: 24%;
        left: -22px;
    }
    .banner4 .pic img {
        width: 87%;
    }
    .banner4 .introduction {
        width: 27%;
        top: 5%;
    }
    .banner4 .title{
        font-size: 40px;
    }
    .banner4 .text {
        font-size: 19px;
        line-height: 1.4em;
    }
    .banner5 .pic-block-2 .introduction{
        padding-top: 35px;
        padding-left: 15px;
        width: 36%;
    }
    .banner5 .pic-block-2 .introduction p{
        font-size: 19px;
    }
    .banner5 .pic-block-2 .introduction-plt{
        width: 64%;
    }
    .banner5 .introduction-plt img{
        height: 60%;
        padding-top: 130px;
    }
    .banner6 {
        height: 870px;
    }
    .banner6 .container {
        height: 870px;
    }
    .banner6 .introduction{
        padding-top: 50px;
    }
    .banner6 .introduction .first-title{
        padding-bottom: 5px;
    }
    .banner6 .introduction .second-title{
        font-size: 19px;
    }
    .banner6 .introduction .text{
        font-size: 19px;
    }
    .banner6 .pic-block{
        top: 63%;
    }
    .banner6 .pic-block img{
        padding: 15px 25px;
    }
  }
  /* 手機版（寬度小於 768px） */
  @media screen and (max-width: 768px) {
    .banner4 {
        height: 770px;
    }
    .banner4 .container {
        height: 770px;
    }
    .banner4 .pic{
        width: 100%;
        top: -30px;
        left: -140px;
    }
    .banner4 .pic img{
        width: 60%;
    }
    .banner4 .introduction{
        width: 100%;
        top: 320px;
        left: 20px;
    }
    .banner4 .title{
        font-size: 46px;
        padding-bottom: 35px;
    }
    .banner4 .text{
        font-size: 16px;
        line-height: 1.1em;
    }
    .banner5 .container{
        padding-bottom: 0px;
    }
    .banner5 .pic-block-1{
        display: flex;
        flex-direction: column;
    }
    .banner5 .pic-block-1 img{
        width: 100%;
    }
    .banner5 .pic-block-2{
        display: flex;
        flex-direction: column;
    }
    .banner5 .pic-block-2 .introduction{
        width: 100%;
        padding-top: 38px;
    }
    .banner5 .pic-block-2 .introduction p{
        width: 100%;
        font-size: 16px;
    }
    .banner5 .pic-block-2 .introduction-plt{
        width: 100%;
    }
    .banner5 .introduction-plt img{
        padding-top: 40px;
    }
    .banner6 .introduction .first-title{
        padding-bottom: 5px;
    }
    .banner6 .introduction .second-title{
        font-size: 16px;
        padding-bottom: 35px;
    }
    .banner6 .introduction .text{
        font-size: 16px;
        line-height: 1.2em;
    }
    .banner6 .pic-block{
        top: 59%;
        width: 100%;
    }
    .banner6 .pic-block img{
        padding: 15px 5px;
    }
    .banner6 {
        height: 1100px;
    }
    .banner6 .container {
        height: 1100px;
    }
  }
</style>


