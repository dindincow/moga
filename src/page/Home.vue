<template>
  <div class="home-page">
    <!-- BANNER -->
    <div class="banner">
      <video autoplay loop muted style="width: 100%" class="bg-vedio">
        <source src="https://vod.plaync.com/LineageW/20241104/web_bg.mp4.mp4" type="video/mp4" />
        您的瀏覽器不支援 HTML5 影片
      </video>
      <div class="logo"><img src="../assets/logo2.png" /></div>
      <div class="download"><img src="../assets/btn_watch_pc_zh.png" /></div>
    </div>
  </div>
  <!-- 公告 -->

  <Bulletin />

  <!-- 遊戲資訊-->
  <div class="announcement-section">
    <MainTitle title="遊戲資訊" />
    <div class="game-info">
      <router-link to="/announcement" class="game-info-item">
        <div><img src="../assets/a06.png" /></div>
        <h1>公告發佈</h1>
      </router-link>
      <router-link to="/gameSetting/serverSet" class="game-info-item">
        <div><img src="../assets/a04.png" /></div>
        <h1>遊戲設置</h1>
      </router-link>
      <router-link to="/announcement" class="game-info-item">
        <div><img src="../assets/a08.png" /></div>
        <h1>遊戲特色</h1>
      </router-link>
      <router-link to="/announcement" class="game-info-item">
        <div><img src="../assets/a01.png" /></div>
        <h1>武器介紹</h1>
      </router-link>
      <router-link to="/announcement" class="game-info-item">
        <div><img src="../assets/a02.png" /></div>
        <h1>防具介紹</h1>
      </router-link>
      <router-link to="/object/doll" class="game-info-item">
        <div><img src="../assets/a07.png" /></div>
        <h1>道具介紹</h1>
      </router-link>
    </div>
  </div>

  <!-- 贊助檔案下載-->
  <div class="social-section">
    <MainTitle title="玩家專用" />
    <div class="social">
      <router-link to="/announcement" class="social-item">
        <img src="../assets/q1.png" />
        <h1>檔案下載</h1>
      </router-link>
      <router-link to="/announcement" class="social-item">
        <img src="../assets/q1.png" />
        <h1>贊助相關</h1>
      </router-link>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import Bulletin from "../components/Bulletin.vue";
import MainTitle from "../components/MainTitle.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
li {
  list-style: none;
}
.banner {
  /* background: url("../assets/bg2.webp"); */
  background-size: cover;
  height: 600px;
  background-position: center;
  position: relative;
}
.bg-vedio {
  position: absolute;
  top: 0px;
}

.logo {
  position: absolute;
  width: 648px;
  height: 284px;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.download {
  position: absolute;
  width: 200px;
  height: 80px;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.announcement-section {
  padding-top: 50px;
  position: relative;
  background: #2d2d2d;
}

.title {
  padding: 15px 0;
  border-radius: 10px;
  text-align: center;
  font-size: 30px;
  border-bottom: 1px solid #ccc;
  background: #241919;
  color: aliceblue;
}

.game-info {
  display: flex;
  width: 1140px;
  margin: 50px auto;
  flex-wrap: wrap;
  justify-content: space-around;
}

.game-info-item {
  border: 1px solid #484848;
  width: 30%;
  margin-bottom: 20px;
  font-size: 14px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Serif TC", serif;
  color: #ccc;
}
.game-info-item img {
  padding: 10px 15px;
  width: 90px;
  opacity: 0.8;
  transition: 0.5s all;
}

.game-info-item h1 {
  letter-spacing: 2px;
  color: #ccc;
  transition: color 1s ease-in-out;
  transition: 0.5s all;
}

.game-info-item:hover h1 {
  color: orange;
}
.game-info-item:hover img {
  opacity: 1;
}

.social-section {
  padding-top: 50px;
  position: relative;
  background: #262424;
}

.social {
  display: flex;
  width: 1140px;
  margin: 50px auto;
  flex-wrap: wrap;
  justify-content: space-around;
}

.social-item {
  border: 1px solid #484848;
  width: 45%;
  height: 150px;
  margin-bottom: 20px;
  font-family: "Noto Serif TC", serif;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #ccc;
}
.social-item img {
  width: 242px;
}

.social-item:hover h1 {
  color: orange;
}
</style>
