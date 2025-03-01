<template>
  <BreadCrumbs :title="title" router="道具介紹" />
  <div class="object-page">
    <div class="left">
      <router-link to="/object/doll" :class="[tabIndex === 0 ? 'active' : '']" @click="changeMenu(0)">魔法娃娃</router-link>
      <router-link to="/object/experienceDoll" :class="[tabIndex === 1 ? 'active' : '']" @click="changeMenu(1)">經驗娃娃</router-link>
      <router-link to="/object/priestDoll" :class="[tabIndex === 2 ? 'active' : '']" @click="changeMenu(2)">祭司娃娃</router-link>
      <router-link to="/object/twilightEmblem" :class="[tabIndex === 3 ? 'active' : '']" @click="changeMenu(3)">暮光勳章</router-link>
      <router-link to="/object/bossStone" :class="[tabIndex === 4 ? 'active' : '']" @click="changeMenu(4)">boss符石</router-link>
      <router-link to="/object/makePanacea" :class="[tabIndex === 5 ? 'active' : '']" @click="changeMenu(5)">萬能藥製作</router-link>
      <router-link to="/object/bossRadar" :class="[tabIndex === 6 ? 'active' : '']" @click="changeMenu(6)">Boss雷達</router-link>
      <router-link to="/object/onlineEmblem" :class="[tabIndex === 7 ? 'active' : '']" @click="changeMenu(7)">在線勳章</router-link>
      <router-link to="/object/tShirtBox" :class="[tabIndex === 8 ? 'active' : '']" @click="changeMenu(8)">獵影之痕寶箱</router-link>
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
import BreadCrumbs from "../../components/BreadCrumbs.vue";

const route = useRoute();
const router = useRouter();

const tabTitle = ["魔法娃娃", "經驗娃娃", "祭司娃娃", "暮光勳章", "boss符石", "萬能藥製作", "Boss雷達", "在線勳章", "獵影之痕寶箱"];
const tabIndex = ref(0);
const title = computed(() => tabTitle[tabIndex.value]);

// 頁面對應的 tabIndex 設定
const pathMap = {
  "/object/doll": 0,
  "/object/experienceDoll": 1,
  "/object/priestDoll": 2,
  "/object/twilightEmblem": 3,
  "/object/bossStone": 4,
  "/object/makePanacea": 5,
  "/object/bossRadar": 6,
  "/object/onlineEmblem": 7,
  "/object/tShirtBox": 8,
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
