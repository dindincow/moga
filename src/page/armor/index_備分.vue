<template>
  <div class="armor-page">
    <div class="left">
      tabIndex =={{ tabIndex }} subMenuIndex =={{ subMenuIndex }}
      <nav class="menu">
        <h2 v-for="item in menuTitle" :key="item.id" :class="[item.id === tabIndex ? 'active' : '']" @click="changeTab(item.id)">
          {{ item.name }}
        </h2>
      </nav>
      <nav v-if="tabIndex === 0">
        <h2>耳環系列</h2>
        <div :class="['subMenuItem', subMenuIndex === 0 ? 'active' : '']" @click="changeMenu(0, '/armor/luntisEarrings')">倫提斯耳環</div>
      </nav>
      <nav v-if="tabIndex === 1">
        <h2>戒指系列</h2>
        <div :class="['subMenuItem', subMenuIndex === 0 ? 'active' : '']" @click="changeMenu(0, '/armor/simpleRing')">一般戒指</div>
        <div :class="['subMenuItem', subMenuIndex === 1 ? 'active' : '']" @click="changeMenu(1, '/armor/snapeRing')">史奈普戒指</div>
      </nav>
      <nav v-if="tabIndex === 2">
        <h2>項鍊系列</h2>
        <!-- <router-link to="/armor/pallasNecklace" :class="[subMenuIndex === 0 ? 'active' : '']" @click="changeMenu(0)">一般項鍊</router-link>
        <router-link to="/armor/pallasNecklace" :class="[subMenuIndex === 1 ? 'active' : '']" @click="changeMenu(0)">帕拉斯項鍊</router-link> -->
      </nav>
      <nav v-if="tabIndex === 3">
        <h2>頭盔系列</h2>
      </nav>
      <nav v-if="tabIndex === 4">
        <h2>斗篷系列</h2>
      </nav>
      <nav v-if="tabIndex === 5">
        <h2>盔甲系列</h2>
      </nav>
      <nav v-if="tabIndex === 6">
        <h2>內衣系列</h2>
      </nav>
      <nav v-if="tabIndex === 7">
        <h2>腰帶系列</h2>
      </nav>
      <nav v-if="tabIndex === 8">
        <h2>臂甲系列</h2>
      </nav>
      <nav v-if="tabIndex === 9">
        <h2>盾牌系列</h2>
      </nav>
      <nav v-if="tabIndex === 10">
        <h2>脛甲系列</h2>
      </nav>
      <nav v-if="tabIndex === 11">
        <h2>靴子系列</h2>
      </nav>
    </div>

    <div class="right">
      <h1 class="title">{{ menuTitle[tabIndex].name }} - {{ menuTitle[tabIndex].subMenu[subMenuIndex].subname }}</h1>
      <hr />
      <router-view />
    </div>
  </div>
</template>
<script setup>
import { computed, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();

// const tabTitle = ["耳環", "戒指", "項鍊", "頭盔", "斗篷", "盔甲", "內衣", "腰帶", "臂假", "盾牌", "脛甲", "靴子"];
const menuTitle = [
  { id: 0, name: "耳環", subMenu: [{ subname: "倫提斯耳環", url: "/armor/luntisEarrings" }] },
  {
    id: 1,
    name: "戒指",
    subMenu: [
      { subname: "一般戒指", url: "/armor/simpleRing" },
      { subname: "史奈普戒指", url: "/armor/snapeRing" },
    ],
  },
  {
    id: 2,
    name: "項鍊",
    subMenu: [
      { subname: "一般項鍊", url: "/armor/pallasNecklace" },
      { subname: "帕拉斯項鍊", url: "/armor/luntisEarrings" },
    ],
  },
  { id: 3, name: "頭盔", subMenu: ["倫提斯耳環"] },
  { id: 4, name: "斗篷", subMenu: ["倫提斯耳環"] },
  { id: 5, name: "盔甲", subMenu: ["倫提斯耳環"] },
  { id: 6, name: "內衣", subMenu: ["倫提斯耳環"] },
  { id: 7, name: "腰帶", subMenu: ["倫提斯耳環"] },
  { id: 8, name: "臂甲", subMenu: ["倫提斯耳環"] },
  { id: 9, name: "盾牌", subMenu: ["倫提斯耳環"] },
  { id: 10, name: "脛甲", subMenu: ["倫提斯耳環"] },
  { id: 11, name: "靴子", subMenu: ["倫提斯耳環"] },
];
const tabIndex = ref(0);
const subMenuIndex = ref(0);

watch(
  () => route.path,
  (newPath, oldPath) => {
    if (newPath === "/armor/luntisEarrings") {
      tabIndex.value = 0;
      subMenuIndex.value = 0;
    }
  }
);

// watch(
//   () => subMenuIndex.value,
//   (newVal, oldVal) => {
//     console.log("變化撩");
//     console.log("newPath==>", newVal, oldVal);
//   }
// );

const changeTab = (tabId) => {
  tabIndex.value = tabId;
  subMenuIndex.value = 0;
  const menu = menuTitle[tabId];
  router.push(menu.subMenu[0].url);
};

const changeMenu = (index, url) => {
  console.log("index==>", index);
  subMenuIndex.value = index;
  router.push(url);
};

// const title = computed(() => tabTitle[tabIndex.value]);
</script>

<style scoped>
.armor-page {
  display: flex;

  margin: 50px auto;
  width: 1140px;
  justify-content: space-between;
}
.left {
  width: 20%;
  display: flex;
  flex-direction: column;
}

.left nav {
  border: 1px solid #3e3e3e;
  margin-bottom: 15px;
}

.left nav h2 {
  padding: 10px;
  background: #4c4141;
  color: #fdebeb;
}

.left nav .subMenuItem {
  padding: 10px;
  color: rgb(209, 209, 209);
  border-bottom: 1px solid #3e3e3e;
}

.left nav .subMenuItem.active {
  color: #957c5c;
}

.left nav.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: none;
}

.left nav.menu h2 {
  background: none;
  border: 1px solid #3e3e3e;
  cursor: pointer;
  /* padding: 5px; */
}

.left nav.menu h2:hover {
  background: #3e3e3e;
}

.left a:hover {
  background: #4d4d4d;
}
.left .active {
  /* background: #957c5c; */
  color: #957c5c;
}
.right {
  width: 70%;
}
.right h1 {
  margin-bottom: 15px;
  font-size: 36px;
}
</style>
