<template>
  <BreadCrumbs :title="title" />
  <div class="gameFeature-page">
    <div class="left">
      <router-link to="/gameFeature/weaponArmorBonus" :class="[tabIndex === 0 ? 'active' : '']" @click="changeMenu(0)">防武強化過安定值</router-link>
      <router-link to="/gameFeature/blessingAttribute" :class="[tabIndex === 1 ? 'active' : '']" @click="changeMenu(1)">祝福屬性加成</router-link>
      <router-link to="/gameFeature/attributeEnchantment" :class="[tabIndex === 2 ? 'active' : '']" @click="changeMenu(2)">屬性附魔系統</router-link>
      <router-link to="/gameFeature/bossMake" :class="[tabIndex === 3 ? 'active' : '']" @click="changeMenu(3)">BOSS套裝製作系統</router-link>
      <router-link to="/gameFeature/bossSet" :class="[tabIndex === 4 ? 'active' : '']" @click="changeMenu(4)">BOSS套裝系統</router-link>
      <router-link to="/gameFeature/mapTask" :class="[tabIndex === 5 ? 'active' : '']" @click="changeMenu(5)">地圖任務</router-link>
      <router-link to="/gameFeature/royalClanPack" :class="[tabIndex === 6 ? 'active' : '']" @click="changeMenu(6)">王族創盟禮包</router-link>
      <router-link to="/gameFeature/transform" :class="[tabIndex === 7 ? 'active' : '']" @click="changeMenu(7)">變身介紹</router-link>
      <router-link to="/gameFeature/onlineCoins" :class="[tabIndex === 8 ? 'active' : '']" @click="changeMenu(8)">在線幣說明</router-link>
      <router-link to="/gameFeature/dayTask" :class="[tabIndex === 9 ? 'active' : '']" @click="changeMenu(9)">每日任務系統</router-link>
      <router-link to="/gameFeature/autoPlay" :class="[tabIndex === 10 ? 'active' : '']" @click="changeMenu(10)">定時內掛</router-link>
      <router-link to="/gameFeature/killSystem" :class="[tabIndex === 10 ? 'active' : '']" @click="changeMenu(11)">眾生平等殺戮系統</router-link>
    </div>
    <div class="right">
      <h1>{{ title }}</h1>
      <hr />
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { computed, ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import BreadCrumbs from "../../components/BreadCrumbs.vue";

const route = useRoute();
const router = useRouter();

const tabTitle = [
  "防武強化過安定值",
  "祝福屬性加成",
  "屬性附魔系統",
  "BOSS套裝製作系統",
  "BOSS套裝系統",
  "地圖任務",
  "王族創盟禮包",
  "變身介紹",
  "在線幣說明",
  "每日任務系統",
  "定時內掛",
  "眾生平等殺戮系統",
];
const tabIndex = ref(0);
const title = computed(() => tabTitle[tabIndex.value]);

// 頁面對應的 tabIndex 設定
const pathMap = {
  "/gameFeature/weaponArmorBonus": 0,
  "/gameFeature/blessingAttribute": 1,
  "/gameFeature/attributeEnchantment": 2,
  "/gameFeature/bossMake": 3,
  "/gameFeature/bossSet": 4,
  "/gameFeature/mapTask": 5,
  "/gameFeature/royalClanPack": 6,
  "/gameFeature/transform": 7,
  "/gameFeature/onlineCoins": 8,
  "/gameFeature/dayTask": 9,
  "/gameFeature/autoPlay": 10,
  "/gameFeature/killSystem": 11,
};

watch(
  () => route.path,
  (newPath) => {
    if (pathMap[newPath] !== undefined) {
      tabIndex.value = pathMap[newPath];
    }
  },
  { immediate: true } // 確保初始化時也會執行一次
);

const changeMenu = (index) => {
  tabIndex.value = index;
};

onMounted(() => {
  const entries = performance.getEntriesByType("navigation");
  const isReload = entries.length > 0 && entries[0].type === "reload";

  if (isReload) {
    router.replace("/gameFeature/weaponArmorBonus"); // `replace` 避免影響歷史紀錄
  }
});
</script>

<style scoped>
.gameFeature-page {
  display: flex;
  color: aliceblue;
  margin: 20px auto;
  width: 1140px;
  justify-content: space-between;
}
.left {
  width: 20%;
  border: 1px solid #3e3e3e;
  display: flex;
  flex-direction: column;
}
.left a {
  padding: 10px;
  color: rgb(209, 209, 209);
  border-bottom: 1px solid #3e3e3e;
}

.left a:hover {
  background: #4d4d4d;
}
.left .active {
  background: #957c5c;
}
.right {
  width: 70%;
}

.right h1 {
  width: 70%;
  font-size: 36px;
  margin-bottom: 15px;
}
</style>
