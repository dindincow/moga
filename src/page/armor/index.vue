<template>
  <BreadCrumbs :title="title" router="防具介紹" />
  <div class="weapon-page">
    <div class="left">
      <router-link to="/armor/luntisEarrings" :class="[tabIndex === 0 ? 'active' : '']" @click="changeMenu(0)">倫提斯耳環</router-link>
      <router-link to="/armor/pallasNecklace" :class="[tabIndex === 1 ? 'active' : '']" @click="changeMenu(1)">帕拉斯項鍊</router-link>
      <router-link to="/armor/snapeRing" :class="[tabIndex === 2 ? 'active' : '']" @click="changeMenu(2)">史奈普戒指</router-link>
      <router-link to="/armor/ancientEquipment" :class="[tabIndex === 3 ? 'active' : '']" @click="changeMenu(3)">古老的裝備</router-link>
      <router-link to="/armor/Tshirt" :class="[tabIndex === 4 ? 'active' : '']" @click="changeMenu(4)">內衣介紹</router-link>
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

const tabTitle = ["倫提斯耳環", "帕拉斯項鍊", "史奈普戒指", "古老的裝備", "內衣介紹"];
const tabIndex = ref(0);
const title = computed(() => tabTitle[tabIndex.value]);

// 頁面對應的 tabIndex 設定
const pathMap = {
  "/armor/luntisEarrings": 0,
  "/armor/pallasNecklace": 1,
  "/armor/snapeRing": 2,
  "/armor/ancientArmor": 3,
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
    router.replace("/armor/luntisEarrings"); // `replace` 避免影響歷史紀錄
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
