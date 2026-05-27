<template>
    <!-- 區塊1 -->
    <div class="banner1">
        <div class="container">
            <!-- 這張圖不參與動畫，用來撐高容器 -->
            <img src="https://i.postimg.cc/wjchDXnD/home-page-banner1.jpg" class="placeholder" />
            <!-- <img src="home-page-banner1.jpg" alt=""> -->
            <!-- <img src="home-page-banner1-5.jpg" alt=""> -->
            <!-- <img src="home-page-banner1-6.jpg" alt=""> -->
            <!-- <img src="home-page-banner1-7.jpg" alt=""> -->
            <!-- <img src="home-page-banner1-8.jpg" alt=""> -->
            <!-- <img src="home-page-banner1-9.jpg" alt=""> -->
            <!-- <img src="home-page-banner1-10.jpg" alt=""> -->
            <!-- <img src="home-page-banner1-11.jpg" alt=""> -->
            <img src="https://i.postimg.cc/wjchDXnD/home-page-banner1.jpg" alt="">
            <img src="https://i.postimg.cc/KjDv5Qh1/home-page-banner1-5.jpg" alt="">
            <img src="https://i.postimg.cc/hj7XV9Gm/home-page-banner1-6.jpg" alt="">
            <img src="https://i.postimg.cc/GmJJynfR/home-page-banner1-7.jpg" alt="">
            <img src="https://i.postimg.cc/pLN5X5G1/home-page-banner1-8.jpg" alt="">
            <img src="https://i.postimg.cc/W3S0dpFq/home-page-banner1-9.jpg" alt="">
            <img src="https://i.postimg.cc/fT8qGZ8L/home-page-banner1-10.jpg" alt="">
            <img src="https://i.postimg.cc/B6Fd3yXz/home-page-banner1-11.jpg" alt="">
            <div class="button-switch-plc">
                <button> ＜ </button>
                <button> ＞ </button>
                <!-- <button> ← </button> -->
                <!-- <button> → </button> -->
            </div>
            <div class="button-plc">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    </div>

    <!-- 區塊2 -->
    <div class="banner2">
        <div class="container">
            <div class="introduction">
                <div class="title">
                    <p>梨子咖啡館</p>
                </div>
                <div class="second-title">
                    <p>SINCE 1999</p>
                </div>
                <div class="text">
                    <p>自1999年梨妃的堅持，</p>
                    <p>從路邊街角的一家露出溫暖黃光的小店開始，</p>
                    <p>梨子把每位好友當家人款待。</p>
                    <p>友善親子的空間環境發掘每位小孩的創造力，</p>
                    <p>記載著每位大人的幸福感....</p>
                </div>
            </div>
            <div class="pic">
                <!-- <img src="home-page-banner2.jpg" alt=""> -->
                <img src="https://i.postimg.cc/3Rm4rHMj/home-page-banner2.jpg" alt="">
            </div>
        </div>
    </div>

    <!-- 區塊3 -->
    <div class="banner3">
        <div class="container">
            <div class="title">
                <div class="first-title">
                    <p>活動快遞</p>
                </div>
                <div class="second-title">
                    <p>NEWS & EVENTS</p>
                </div>
            </div>
            <div class="block-all">
            <div
                class="block"
                v-for="(item, idx) in visibleBlocks"
                :key="idx"
                >
                <img :src="item.img" :alt="item.title" />
                <div class="pic-title">
                    <p>{{ item.title }}</p>
                </div>
                <div class="date-title">
                    <p>{{ item.date }}</p>
                </div>
                </div>
            </div>
            <div class="btn">
                <a href="#"><button>瀏覽更多</button></a>
            </div>
        </div>
    </div>

    <!-- 區塊4 -->
    <div class="banner4">
        <div class="container">
            <!-- <img src="home-page-banner4.jpg" alt=""> -->
            <img class= "background-plt" src="https://i.postimg.cc/5NWSc1qv/home-page-banner4.jpg" alt="">
            <div class="title">
                <div class="first-title">
                    <p>人氣餐點/菜單</p>
                </div>
                <div class="second-title">
                    <p>歡樂聚餐就在這裡！我們提供各式主餐，涵蓋義大利麵、定食、排餐、各式小點等...</p>
                    <p>除了葷食外也貼心提供素食用餐者專屬菜單，歡迎你們來品嚐分享喔！</p>
                </div>
            </div>
            <div class="block-first">
                <div class="block1">
                    <!-- <img src="home-page-banner4-1.jpg" alt=""> -->
                    <img src="https://i.postimg.cc/PJ62yD65/home-page-banner4-1.jpg" alt="">
                </div>
                <div class="block2">
                    <!-- <img src="home-page-banner4-2.jpg" alt=""> -->
                    <img src="https://i.postimg.cc/gkXvQ1jD/home-page-banner4-2.jpg" alt="">
                </div>
                <div class="block3">
                    <!-- <img src="home-page-banner4-3.jpg" alt=""> -->
                    <img src="https://i.postimg.cc/htKVvvMC/home-page-banner4-3.jpg" alt="">
                </div>
            </div>
            <div class="block-second">
                <div class="block4">
                    <!-- <img src="home-page-banner4-4.jpg" alt=""> -->
                    <img src="https://i.postimg.cc/DwtF5JD6/home-page-banner4-4.jpg" alt="">
                </div>
                <div class="block5">
                    <!-- <img src="home-page-banner4-5.jpg" alt=""> -->
                    <img src="https://i.postimg.cc/76ZB2XVW/home-page-banner4-5.jpg" alt="">
                </div>
                <div class="block6">
                    <!-- <img src="home-page-banner4-6.jpg" alt=""> -->
                    <img src="https://i.postimg.cc/1RLLkhMR/home-page-banner4-6.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface NewsItem {
  img: string;
  title: string;
  date: string;
}
export default defineComponent({
  name: "Pearcafe",
  data() {
    return {
      news: [] as NewsItem[],
      currentPage: 1,
      perPage: 4, // 每頁顯示的數量
      link: "/HomePageNews.json",
    };
  },
  computed: {
    visibleBlocks(): NewsItem[] {
      const start = (this.currentPage - 1) * this.perPage;
      return this.news.slice(start, start + this.perPage);
    },
  },
  methods: {
    async loadNews() {
        try {
            const response = await fetch(this.link);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            // 檢查 data 格式
            if (Array.isArray(data)) {
                // 確保每個項目有 img, title, data
                this.news = data.map((item: any) => ({
                  img: item.img,
                  title: item.title,
                  date: item.date,
                }));
            } else {
                console.warn("News file data is not an array:", data);
            }
        } catch (error) {
            console.error("Error loading News03.json:", error);
        }
    },
  },
  mounted() {
    this.loadNews(); // 一進頁面自動載入 News01.json
  }
});
</script>

<style scoped>
    /* 圖片輪播：淡入淡出 */
    .banner1 {
        width: 100%;
        height: auto;
        background-color: #f2efea;
    }
    .banner1 .container {
        width: 100%;
        height: auto;
        background-color: #f2efea;
        position: relative;
    }
    .banner1 .button-switch-plc button {
        width: 55px;
        height: 55px;
        position: absolute;;
        top: 46%;
        z-index: 1;
        border: none;
        border-radius: 50%;
        background-color: rgba(70, 70, 70, 0.8);
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
        color: white;
        font-size: 30px;
    }
    .banner1 .button-switch-plc button:hover {
        background-color: black;
        cursor: pointer;
    }
    .banner1 .button-switch-plc button:first-child {
        left: 0;
    }
    .banner1 .button-switch-plc button:last-child {
        right: 0;
    }
    .banner1 .button-plc {
        position: absolute;
        bottom: 2%;
        left: 43%;
        z-index: 1;
    }
    .banner1 .button-plc button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: none;
        background-color: rgba(180, 180, 180, 0.8);
        margin: 8px;
    }
    .banner1 .button-plc button:hover {
        cursor: pointer;
    }
    .banner1 .placeholder {
        visibility: hidden;
        position: static;
        display: block;
        width: 100%;
        height: auto;
    }
    .banner1 img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        object-fit: cover;
        opacity: 0;
        animation: fade 40s infinite;
    }
    .banner1 img:nth-child(1) { animation-delay: 0s; }
    .banner1 img:nth-child(2) { animation-delay: 5s; }
    .banner1 img:nth-child(3) { animation-delay: 10s; }
    .banner1 img:nth-child(4) { animation-delay: 15s; }
    .banner1 img:nth-child(5) { animation-delay: 20s; }
    .banner1 img:nth-child(6) { animation-delay: 25s; }
    .banner1 img:nth-child(7) { animation-delay: 30s; }
    .banner1 img:nth-child(8) { animation-delay: 35s; }
    @keyframes fade {
        0%     { opacity: 0; }
        2.5%   { opacity: 1; }
        12.5%  { opacity: 1; }
        15%    { opacity: 0; }
        100%   { opacity: 0; }
    }
    /* 圖片輪播：滑動 */
    /*
    .banner1{
        width: 100%;
        height: auto;
        background-color: #f2efea;
        overflow: hidden;
        position: relative;
    }
    .banner1 .container {
        display: flex;
        animation: slide 30s infinite;
    }
    .banner1 img{
        width: 100%;
    }
    @keyframes slide {
        0% {
            transform: translateX(0);
        }
        20% {
            transform: translateX(-100%);
        }
        40% {
            transform: translateX(-200%);
        }
        60% {
            transform: translateX(-300%);
        }
        80% {
            transform: translateX(-400%);
        }
        100% {
            transform: translateX(0);
        }
    }
    */
    .banner2{
        width: 100%;
        height: auto;
        background-color: #f2efea;
    }
    .banner2 .container{
        display: flex;
        padding-bottom: 70px;
    }
    .banner2 .introduction{
        width: 40%;
        height: auto;
        padding: 220px 0 0 300px;
        text-align: left;
    }
    .banner2 .pic{
        width: 60%;
        margin: 100px 50px;
    }
    .banner2 .introduction .title{
        font-size: 42px;
        color: #8eb135;
    }
    .banner2 .introduction .second-title{
        padding: 5px 0 15px 0;
        font-size: 24px;
    }
    .banner2 .introduction .text p{
        padding: 5px 0;
        font-size: 20px;
    }
    .banner2 .pic img{
        width: 100%;
    }
    .banner3{
        width: 100%;
        height: auto;
        background-color: #f2efea;
        position: relative;
        padding-bottom: 270px;
    }
    .banner3 .title{
        text-align: center;
    }
    .banner3 .title .first-title{
        font-size: 42px;
        color: #8eb135;
    }
    .banner3 .title .second-title{
        padding-top: 6px;
        font-size: 14px;
    }
    .banner3 .block-all{
        display: flex;
        flex-wrap: wrap;
        margin-top: 35px;
        margin-left: 80px;
    }
    .banner3 .block {
        cursor: pointer;
        text-align: left;
        padding: 0 20px;
    }
    .banner3 .pic-title, .date-title{
        padding: 5px;
    }
    .banner3 .pic-title{
        font-size: 18px;
    }
    .banner3 .date-title{
        font-size: 13px;
        color: #8eb135;
    }
    .banner3 .btn button{
        width: 200px;
        height: 45px;
        background-color: #8eb135;
        color: #fff;
        border: none;
        position: absolute;
        bottom: 150px;
        left: 44%;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
    }
    .banner3 .btn button:hover{
        background-color: #ca7d2e;
        transition: 0.7s 0.05s ;
    }
    .banner4{
        width: 100%;
        height: auto;
    }
    .banner4 .container {
        position: relative;
    }
    .banner4 .container img.background-plt {
        width: 150%;
        position: absolute;
        display: block;
        z-index: -1;
    }
    .banner4 .title{
        text-align: center;
        padding-top: 100px;
        color: #fff;
    }
    .banner4 .first-title{
        font-size: 42px;
        padding-bottom: 20px;
    }
    .banner4 .second-title p{
        padding-bottom: 5px;
        font-size: 20px;
        line-height: 1.5em;
    }
    .banner4 .block-first {
        display: flex;
        flex-wrap: wrap;
        padding: 50px 0 120px 140px;
    }
    .banner4 .block-second {
        display: flex;
        flex-wrap: wrap;
    }
    .banner4 .block1, .banner4 .block2, .banner4 .block3{
        margin: 15px;
    }
    .banner4 .block4, .banner4 .block5, .banner4 .block6{
        width: 33.3%;
    }
    .banner4 img {
        width: 100%;
    }
    /* 平板版（寬度小於 1400px） */
    @media screen and (max-width:1400px) {
        .banner2 .container{
            padding-bottom: 180px;
        }
        .banner2 .introduction{
            width: 45%;
            padding: 110px 0px 0 15px;
        }
        .banner2 .pic {
            width: 45%;
            margin: 170px 0 0 0px;
            padding-left: 70px;
        }
        .banner3 {
            padding-bottom: 130px;
        }
        .banner3 .title .first-title{
            font-size: 36px;
        }
        .banner3 img {
            width: 100%;
        }
        .banner3 .block-all {
            margin: 30px 15px 0 25px;
        }
        .banner3 .block {
            width: 250px;
            height: 265px;
            padding: 0 15px 0 0px;
        }
        .banner3 .pic-title {
            font-size: 20px;
        }
        .banner3 .date-title {
            line-height: 2em;
        }
        .banner3 .btn button{
            left: 40%;
            bottom: 60px;
        }
        .banner4 .block-first {
            display: flex;
            flex-wrap: unset;
            padding: 50px 15px 60px 15px;
        }
        .banner4 .block1, .banner4 .block2, .banner4 .block3{
            margin: 5px;
        }
        .banner4 .title{
            padding-top: 60px;
        }
        .banner4 .first-title{
            font-size: 36px;
        }
        .banner4 .container {
            overflow: hidden;  /* 隱藏超出容器部分 */
        }
        .banner4 .container img.background-plt {
            width: 153%;
        }
    }
    /* 手機版（寬度小於 768px） */
    @media screen and (max-width: 768px) {
        .banner1 {
            padding-bottom: 200px;
        }
        .banner1 img{
            height: 198%;
        }
        .banner1 .button-switch-plc button {
            width: 40px;
            height: 40px;
            top: 91%;
        }
        .banner1 .button-plc {
            bottom: 0%;
            top: 180%;
            left: 25%;
        }
        .banner2 .container {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 50px;
            padding-top: 70px;
        }
        .banner2 .introduction{
            width: 100%;
            padding: 0 0 15px 15px;
        }
        .banner2 .pic {
            width: 100%;
        }
        .banner2 .introduction .title{
            font-size: 38px;
        }
        .banner2 .introduction .second-title{
            font-size: 22px;
        }
        .banner2 .introduction .text p{
            font-size: 16px;
            line-height: 1.1em;
            font-weight: 500;
        }
        .banner2 .pic {
            margin-top: 40px;
            padding: 0;
        }
        .banner3 {
            padding-bottom: 110px;
        }
        .banner3 .block-all{
            justify-content: center;
            margin-top: 20px;
            margin-left: 0px;
        }
        .banner3 .block {
            margin-bottom: 15px;
        }
        .banner3 img {
            width: 130%;
        }
        .banner3 .title .first-title{
            font-size: 28px;
        }
        .banner3 .pic-title{
            font-size: 18px;
        }
        .banner3 .date-title{
            font-size: 13px;
            padding: 0 0 0 10;
            line-height: 0.8em;
        }
        .banner3 .btn button{
            width: 200px;
            height: 41.33px;
            bottom: 70px;
            left: 30%;
            font-size: 16px;
        }
        .banner4 .first-title{
            font-size: 28px;
        }
        .banner4 .second-title {
            padding: 0 15px;
        }
        .banner4 .second-title p{
            font-size: 16px;
            line-height: 1.65em;
        }
        .banner4 .container {
            overflow: hidden;  /* 隱藏超出容器部分 */
        }
        .banner4 .container img.background-plt {
            width: 700%;
        }
        .banner4 .block-first {
            display: flex;
            flex-wrap: wrap;
            padding-top: 15px;
            justify-content: center;
        }
        .banner4 .block4, .banner4 .block5, .banner4 .block6{
            width: 100%;
        }
        .banner4 img {
            display: block;
        }
    }
</style>


