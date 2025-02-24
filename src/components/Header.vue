<template>
  <div class="header-wraper">
    <div class="header">
      <div class="logo" @click="gotoPage"><img src="../assets/logo.png" /></div>
      <div class="menu">
        <ul>
          <li><router-link to="/gameSetting/serverSet">遊戲設置</router-link></li>
          <li><router-link to="/gameFeature/weaponArmorBonus">遊戲特色</router-link></li>
          <li><router-link to="/weapon/normalWeapon">武器介紹</router-link></li>
          <li><router-link to="/armor/luntisEarrings">防具介紹</router-link></li>
          <li><router-link to="/object/doll">道具介紹</router-link></li>
          <li><router-link to="/dowload">檔案下載</router-link></li>
          <li><router-link to="/sponsor/sponsorDeclar">贊助說明1</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
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
  padding: 0 20px;
  font-size: 18px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
.menu ul li a:hover {
  color: rgb(229, 210, 135);
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
