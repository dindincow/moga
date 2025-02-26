<template>
  <div class="weapon-page">
    <div class="left">
      <router-link to="/weapon/normalWeapon" :class="[tabIndex === 0 ? 'active' : '']" @click="changeMenu(0)">一般武器</router-link>
      <router-link to="/weapon/pandora" :class="[tabIndex === 1 ? 'active' : '']" @click="changeMenu(1)">潘朵拉武器</router-link>
      <router-link to="/weapon/ancientWeapon" :class="[tabIndex === 2 ? 'active' : '']" @click="changeMenu(1)">古老武器</router-link>
      <router-link to="/weapon/darkWeapon" :class="[tabIndex === 3 ? 'active' : '']" @click="changeMenu(3)">暗黑武器</router-link>
      <router-link to="/weapon/dragonShatter" :class="[tabIndex === 4 ? 'active' : '']" @click="changeMenu(4)">碎龍武器</router-link>
    </div>

    <div class="right">
      <h1 class="title">{{ title }}</h1>
      <hr />
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const tabTitle = ["一般武器", "潘朵拉武器", "古老武器", "暗黑武器", "碎龍武器"];
const tabIndex = ref(0);
const title = computed(() => tabTitle[tabIndex.value]);

// 頁面對應的 tabIndex 設定
const pathMap = {
  "/weapon/normalWeapon": 0,
  "/weapon/pandora": 1,
  "/weapon/ancientWeapon": 2,
  "/weapon/darkWeapon": 3,
  "/weapon/dragonShatter": 4,
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
    router.replace("/weapon/normalWeapon"); // `replace` 避免影響歷史紀錄
  }
});
</script>

<style scoped>
.weapon-page {
  display: flex;

  margin: 50px auto;
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
  margin-bottom: 15px;
  font-size: 36px;
}
</style>
