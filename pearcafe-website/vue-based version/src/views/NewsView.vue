<template>
    <!-- 區塊1 -->
    <div class="banner1" v-if="!showHome">
        <div class="container">
            <div class="title">
                <p>News</p>
            </div>
            <!-- <img src="news-page-banner1.jpg" alt=""> -->
            <img src="https://i.postimg.cc/NFrZgnFV/news-page-banner1.jpg" alt="">
        </div>
    </div>

    <!-- 區塊2 -->
    <div class="banner2" v-if="!showHome">
        <div class="container">
            <ol class="breadcrumb">
                <li><a href="/" @click="loadNews(4)" :class="{'clicked': showHome}">首頁</a></li>
                <li><a href="#" @click="loadNews(1)" :class="{'clicked': showNews1}">活動快遞</a></li>
                <li v-show="showNews1" v-if="showNews1">好康優惠</li>
                <li v-show="showNews2" v-if="showNews2">活動快遞</li>
                <li v-show="showNews3" v-if="showNews3">媒體報導</li>
            </ol>
        </div>
    </div>

    <!-- 區塊3 -->
    <div class="banner3" v-if="!showHome">
        <div class="container">
            <div class="btn">
                <button @click="loadNews(1)" :class="{'clicked': showNews1}">好康優惠</button>
                <button @click="loadNews(2)" :class="{'clicked': showNews2}">活動快遞</button>
                <button @click="loadNews(3)" :class="{'clicked': showNews3}">媒體報導</button>
            </div>
        </div>
    </div>

    <!-- 區塊4 -->
    <div class="banner4" v-if="!showHome">
      <div class="container">
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
          <button
            v-for="page in totalPages"
            :key="page"
            :class="{ active: page === currentPage }"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
          <button @click="nextPage">＞</button>
        </div>
      </div>
    </div>

    <PearcafeHome v-if="showHome" />
</template>


<script lang="ts">
import { defineComponent } from "vue";
import PearcafeHome from "@/components/Pearcafe.vue";

interface NewsItem {
  img: string;
  title: string;
  date: string;
}

export default defineComponent({
  name: "News",
  data() {
    return {
      components: { PearcafeHome },
      news: [] as NewsItem[],
      currentPage: 1,
      perPage: 8, // 每頁顯示的數量
      link: "",
      showNews1: true, // 預設顯示 PearcafeNews01
      showNews2: false,
      showNews3: false,
      showHome: false,
    };
  },
  computed: {
    totalPages(): number {
      return Math.ceil(this.news.length / this.perPage);
    },
    visibleBlocks(): NewsItem[] {
      const start = (this.currentPage - 1) * this.perPage;
      return this.news.slice(start, start + this.perPage);
    },
  },
  methods: {
    async loadNews(buttonId: number) {
        switch(buttonId) {
            case 1:
                this.link = "/News01.json";
                this.showNews1 = true;
                this.showNews2 = false;
                this.showNews3 = false;
                this.showHome = false;
                break;
            case 2:
                this.link = "/News02.json";
                this.showNews1 = false;
                this.showNews2 = true;
                this.showNews3 = false;
                this.showHome = false;
                break;
            case 3:
                this.link = "/News03.json";
                this.showNews1 = false;
                this.showNews2 = false;
                this.showNews3 = true;
                this.showHome = false;
                break;
            case 4:
                this.link = "/News01.json";
                this.showNews1 = false;
                this.showNews2 = false;
                this.showNews3 = false;
                this.showHome = true;
                break;
            default:
                return; // 不做任何事
        }

        // 重置分頁
        this.currentPage = 1;

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
    goToPage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  },
  mounted() {
      this.loadNews(1); // 一進頁面自動載入 News01.json
  }
});
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
  .banner4{
    width: 100%;
    height: auto;
  }
  .banner4 .container{
    width: 100%;
    height: auto;
    background-color: #f2efea;
    position: relative;
    padding-bottom: 140px;
  }
  .banner4 .block-all{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 60px;
  }
  .banner4 .block{
    width: 340px;
    padding: 30px 5px;
    cursor: pointer;
  }
  .banner4 .pic-title, .date-title{
    padding: 5px;
    text-align: left;
  }
  .banner4 .pic-title{
    font-size: 18px;
  }
  .banner4 .date-title{
    font-size: 13px;
    font-weight: 600;
    color: #8eb135;
  }
  .banner4 .btn {
    padding-top: 40px;
  }
  .banner4 .btn a{
    padding: 10px;
  }
  .banner4 .btn button{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;
  }
  .banner4 .btn button.active{
    background-color: #8eb135;
    color: #fff;
  }
  .banner4 .btn button:hover{
    color: #8eb135;
    transition: 0.7s 0.05s ;
  }
  /* 平板版（寬度小於 1400px） */
  @media screen and (max-width:1400px) {
    .banner2 {
      padding-left: 35px;
    }
    .banner4 .container{
      padding-bottom: 80px;
    }
    .banner4 img{
      width: 260px;
      display: flex;
    }
    .banner4 .block-all {
      padding-top: 30px;
      padding-left: 20px;
      justify-content: left;
    }
    .banner4 .block{
      width: 270px;
      padding: 0;
      padding-bottom: 40px;
    }
    .banner4 .pic-title, .date-title{
      width: 260px;
      padding: 5px;
      text-align: left;
    }
    .banner4 .btn {
      padding-top: 5px;
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
    .banner4 img{
      width: 340px;
    }
    .banner4 .block-all {
      padding-top: 15px;
      justify-content: left;
      padding-left: 70px;
    }
    .banner4 .container {
      padding-bottom: 60px;
    }
  }
</style>


