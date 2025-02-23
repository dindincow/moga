<template>
  <BreadCrumbs :title="title" />
  <div class="gamesetting-page">
    <div class="left">
      <router-link to="/gameSetting/serverSet" :class="[tabIndex === 0 ? 'active' : '']" @click="changeMenu(0)">伺服器設置</router-link>
      <router-link to="/gameSetting/professionSkill" :class="[tabIndex === 1 ? 'active' : '']" @click="changeMenu(1)">各職業技能說明</router-link>
      <router-link to="/gameSetting/maxHpMp" :class="[tabIndex === 2 ? 'active' : '']" @click="changeMenu(2)">各職業血魔設置</router-link>
      <router-link to="/gameSetting/pets" :class="[tabIndex === 3 ? 'active' : '']" @click="changeMenu(3)">各職業抓寵物說明</router-link>
    </div>

    <div class="right">
      <h1>{{ title }}</h1>
      <hr />
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import BreadCrumbs from "../../components/BreadCrumbs.vue";

const route = useRoute();

const tabTitle = ["伺服器設置", "各職業技能說明", "各職業血魔設置", "各職業抓寵物說明"];
const tabIndex = ref(0);

watch(
  () => route.path,
  (newPath, oldPath) => {
    if (newPath === "/gameSetting/serverSet") {
      tabIndex.value = 0;
    }
  }
);

const changeMenu = (index) => {
  tabIndex.value = index;
};

const title = computed(() => tabTitle[tabIndex.value]);
</script>

<style scoped>
.gamesetting-page {
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
