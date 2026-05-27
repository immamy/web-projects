<template>
    <!-- 區塊1 -->
    <div class="banner1" v-if="!showHome">
        <div class="container">
            <div class="title">
                <p>Blog</p>
            </div>
            <!-- <img src="blog-page-banner1.jpg" alt=""> -->
            <img src="https://i.postimg.cc/8Pk1SRVb/blog-page-banner1.jpg" alt="">
        </div>
    </div>

    <!-- 區塊2 -->
    <div class="banner2" v-if="!showHome">
        <div class="container">
            <ol class="breadcrumb">
                <li><a href="/" @click="loadBlog(6)" :class="{'clicked': showHome}">首頁</a></li>
                <li><a href="#" @click="loadBlog(1)" :class="{'clicked': showNews1}">梨子講座</a></li>
                <li v-show="showBlog1" v-if="showBlog1">祝福學堂講座</li>
                <li v-show="showBlog2" v-if="showBlog2">梨子生活小學堂</li>
                <li v-show="showBlog3" v-if="showBlog3">梨子部落格</li>
                <li v-show="showBlog4" v-if="showBlog4">親子學習</li>
                <li v-show="showBlog5" v-if="showBlog5">讀書會</li>
            </ol>
        </div>
    </div>

    <!-- 區塊3 -->
    <div class="banner3" v-if="!showHome">
        <div class="container">
            <div class="btn">
                <button @click="loadBlog(1)" :class="{'clicked': showBlog1}">祝福學堂講座</button>
                <button @click="loadBlog(2)" :class="{'clicked': showBlog2}">梨子生活小學堂</button>
                <button @click="loadBlog(3)" :class="{'clicked': showBlog3}">梨子部落格</button>
                <button @click="loadBlog(4)" :class="{'clicked': showBlog4}">親子學習</button>
                <button @click="loadBlog(5)" :class="{'clicked': showBlog5}">讀書會</button>
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
            <div class="pic-introduction">
              <div class="pic-title">
                <p>{{ item.title }}</p>
              </div>
              <div class="date-title">
                <p>{{ item.date }}</p>
              </div>
              <div class="pic-text">
                <p>{{ item.text }}</p>
              </div>
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

interface BlogItem {
  img: string;
  title: string;
  date: string;
  text: string;
}
export default defineComponent({
  name: "Blog",
  data() {
    return {
      components: { PearcafeHome },
      Blog: [] as BlogItem[],
      currentPage: 1,
      perPage: 8, // 每頁顯示的數量
      link: "",
      showBlog1: true, // 預設顯示 PearcafeBlog01
      showBlog2: false,
      showBlog3: false,
      showBlog4: false,
      showBlog5: false,
      showHome: false,
    };
  },
  computed: {
    totalPages(): number {
      return Math.ceil(this.Blog.length / this.perPage);
    },
    visibleBlocks(): BlogItem[] {
      const start = (this.currentPage - 1) * this.perPage;
      return this.Blog.slice(start, start + this.perPage);
    },
  },
  methods: {
    async loadBlog(buttonId: number) {
        switch(buttonId) {
            case 1:
                this.link = "/Blog01.json";
                this.showBlog1 = true;
                this.showBlog2 = false;
                this.showBlog3 = false;
                this.showBlog4 = false;
                this.showBlog5 = false;
                this.showHome = false;
                break;
            case 2:
                this.link = "/Blog02.json";
                this.showBlog1 = false;
                this.showBlog2 = true;
                this.showBlog3 = false;
                this.showBlog4 = false;
                this.showBlog5 = false;
                this.showHome = false;
                break;
            case 3:
                this.link = "/Blog03.json";
                this.showBlog1 = false;
                this.showBlog2 = false;
                this.showBlog3 = true;
                this.showBlog4 = false;
                this.showBlog5 = false;
                this.showHome = false;
                break;
            case 4:
                this.link = "/Blog04.json";
                this.showBlog1 = false;
                this.showBlog2 = false;
                this.showBlog3 = false;
                this.showBlog4 = true;
                this.showBlog5 = false;
                this.showHome = false;
                break;
            case 5:
                this.link = "/Blog05.json";
                this.showBlog1 = false;
                this.showBlog2 = false;
                this.showBlog3 = false;
                this.showBlog4 = false;
                this.showBlog5 = true;
                this.showHome = false;
                break;
            case 6:
                this.link = "/Blog01.json";
                this.showBlog1 = false;
                this.showBlog2 = false;
                this.showBlog3 = false;
                this.showBlog4 = false;
                this.showBlog5 = false;
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
                this.Blog = data.map((item: any) => ({
                  img: item.img,
                  title: item.title,
                  date: item.date,
                  text: item.text,
                }));
            } else {
                console.warn("Blog file data is not an array:", data);
            }
        } catch (error) {
            console.error("Error loading Blog03.json:", error);
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
      this.loadBlog(1); // 一進頁面自動載入 Blog01.json
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
    padding: 0 10px;
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
    background-color: #f2efea;
    position: relative;
    padding-bottom: 150px;
  }
  .banner4 .container{
    width: 100%;
    height: auto;
    position: relative;
    justify-items: center;
  }
  .banner4 .block-all{
    top: 2%;
    padding-top: 80px;
    padding-bottom: 30px;
  }
  .banner4 .block{
    width: 100%;
    display: flex;
    padding: 0px 40px;
    cursor: pointer;
  }
  .banner4 .pic-introduction{
    width: 695px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }
  .banner4 img{
    width: 350px;
    padding: 35px;
  }
  .banner4 .pic-title{
    padding-bottom: 15px;
    font-size: 24px;
  }
  .banner4 .date-title{
    padding-bottom: 20px;
    font-size: 13px;
    color: #8eb135;
  }
  .banner4 .pic-text{
    line-height: 1.8em;
    font-size: 18px;
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
  .banner4 .btn button.active {
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
    .banner4 {
      padding-bottom: 80px;
    }
    .banner4 .block-all{
      padding-top: 10px;
    }
    .banner4 .pic-introduction{
      width: 500px;
    }
    .banner4 img{
      width: 267px;
      padding: 35px 35px 25px 0px;
    }
    .banner4 .pic-title{
      font-size: 23px;
    }
    .banner4 .date-title{
      font-size: 14px;
      font-weight: 600;
    }
    .banner4 .pic-text{
      font-size: 16px;
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
      padding-left: 30px;
      padding-bottom: 15px;
    }
    .banner2 .breadcrumb{
      padding-top: 25px;
    }
    .banner2 .breadcrumb li{
      font-size: 12px;
    }
    .banner3 .btn button {
      width: auto;
      height: 40px;
      padding: 10px;
      font-size: 16px;
      font-weight: 400;
    }
    .banner4{
      padding-bottom: 60px;
    }
    .banner4 .block-all {
      padding-top: 15px;
      padding-bottom: 0;
    }
    .banner4 .block {
      display: flex;
      flex-direction: column;
      padding-bottom: 30px;
    }
    .banner4 .block img {
      width: 350px;
      padding: 0;
    }
    .banner4 .pic-introduction {
      width: 350px;
      text-align: left;
      padding: 10px 0;
    }
    .banner4 .pic-title{
      font-size: 20px;
      padding-bottom: 10px;
    }
    .banner4  .date-title{
      font-size: 14px;
      font-weight: 600;
      padding-bottom: 10px;
    }
    .banner4 .pic-text {
      font-size: 14px;
      font-weight: 500;
      line-height: 1.7em;
    }
    .banner4 .btn button{
      width: 30px;
      height: 30px;
    }
  }
</style>


