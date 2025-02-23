<template>
  <div class="object-page">
    <div class="left">
      <router-link to="/object/doll" :class="[tabIndex === 0 ? 'active' : '']" @click="changeMenu(0)">魔法娃娃介紹</router-link>
      <router-link to="/object/transform" :class="[tabIndex === 1 ? 'active' : '']" @click="changeMenu(1)">變身介紹</router-link>
      <!-- <router-link to="/object/darkWeapon" :class="[tabIndex === 2 ? 'active' : '']" @click="changeMenu(2)">娃娃介紹2</router-link> -->
      <!-- <router-link to="/gameSetting/pets" :class="[tabIndex === 3 ? 'active' : '']" @click="changeMenu(3)">123</router-link> -->
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

const tabTitle = ["魔法娃娃介紹", "變身介紹", "娃娃介紹2"];
const tabIndex = ref(0);
const title = computed(() => tabTitle[tabIndex.value]);

// 頁面對應的 tabIndex 設定
const pathMap = {
  "/object/doll": 0,
  "/object/transform": 1,
  // "/object/doll": 2,
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
    router.replace("/object/doll"); // `replace` 避免影響歷史紀錄
  }
});
</script>

<style scoped>
.object-page {
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
