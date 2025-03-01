<template>
  <div class="header-wraper">
    <div class="header">
      <div class="logo" @click="gotoPage"><img src="../assets/logo.png" /></div>
      <div class="menu">
        <ul>
          <li><router-link to="/announcement" :class="{ active: isActive('/announcement') }">公告發佈</router-link></li>
          <li><router-link to="/gameSetting/serverSet" :class="{ active: isActive('/gameSetting') }">遊戲設置</router-link></li>
          <li><router-link to="/gameFeature/weaponArmorBonus" :class="{ active: isActive('/gameFeature') }">遊戲特色</router-link></li>
          <li><router-link to="/weapon/normalWeapon" :class="{ active: isActive('/weapon') }">武器介紹</router-link></li>
          <li><router-link to="/armor/luntisEarrings" :class="{ active: isActive('/armor') }">防具介紹</router-link></li>
          <li><router-link to="/object/doll" :class="{ active: isActive('/object') }">道具介紹</router-link></li>
          <li><router-link to="/dowload" :class="{ active: isActive('/dowload') }">檔案下載</router-link></li>
          <li><router-link to="/sponsor/sponsorDeclar" :class="{ active: isActive('/sponsor') }">贊助說明</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";

const router = useRouter();
const route = useRoute();

console.log("route.path", route.path);
console.log("path======>", route.path.startsWith(route.path));

// 只檢查第一層路徑，確保不會誤判
const isActive = (path) => {
  return computed(() => {
    const firstSegment = route.path.split("/")[1]; // 取得第一層路徑
    return firstSegment === path.replace("/", ""); // 確保路徑名稱匹配
  }).value;
};

const gotoPage = () => {
  router.push("/");
};
</script>

<style scoped>
.header-wraper {
  background: #2a2a2a;
  height: 80px;
  margin: 0 auto;
  display: flex;
  color: #888;
}
.header {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.menu ul {
  display: flex;
}

.menu ul li a {
  font-family: "Noto Serif TC", serif;
  letter-spacing: 1px;
  list-style: none;
  color: #ad9774;
  /* color: aliceblue; */
  padding: 0 15px;
  font-size: 18px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
.menu ul li a:hover {
  color: rgb(229, 210, 135);
}

.menu ul li .active {
  color: rgb(255, 231, 135);
}

.logo {
  width: 130px;
  margin-right: auto;
  cursor: pointer;
}
.logo img {
  width: 100%;
}
</style>
