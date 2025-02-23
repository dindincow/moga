<template>
  <div class="content flex w-full">
    <!-- <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">按鈕</button> -->

    <table class="w-full">
      <thead>
        <tr>
          <th class="px-4 py-2 text-left">道具名稱</th>
          <th class="px-4 py-2 text-left">道具介紹</th>
          <th class="px-4 py-2 text-left">能力</th>
          <th class="px-4 py-2 text-left">職業</th>
          <th class="px-4 py-2 text-left">獲取方式</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="(item, index) in data" :key="index">
          <td>
            <div><img :src="`/public/icons/armor/${item.img}`" /></div>
            <span class="text-center block">{{ item.name }}</span>
          </td>
          <td>
            <p v-for="(d, dIndex) in item.desc" :key="dIndex">{{ d }}</p>
          </td>
          <td>
            <p v-for="(a, aIndex) in item.ability" :key="aIndex">{{ a }}</p>
          </td>
          <td>
            <p>{{ item.job }}</p>
          </td>
          <td>{{ item.get }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
const data = [
  {
    img: "a164.jpg",
    name: "古老的長袍",
    desc: ["防禦：-12", "安定：0"],
    ability: ["魔力回復量+12", "限制等級：Lv.45"],
    job: "法師",
    get: "掉落",
  },
  {
    img: "a163.jpg",
    name: "古老的金屬盔甲",
    desc: ["防禦：-16", "安定：0"],
    ability: ["體力回復量+1", "限制等級：Lv.45"],
    job: "騎士",
    get: "掉落",
  },
  {
    img: "a165.jpg",
    name: "古老的鱗甲",
    desc: ["防禦：-14", "安定：0"],
    ability: ["魔力回復量+4", "體力回復量+8", "限制等級：Lv.45"],
    job: "王族",
    get: "掉落",
  },
  {
    img: "a162.jpg",
    name: "古老的皮甲",
    desc: ["防禦：-14", "安定：0"],
    ability: ["魔力回復量+8", "體力回復量+4", "限制等級：Lv.45"],
    job: "妖精/黑暗妖精",
    get: "掉落",
  },
];
</script>

<style scoped>
.content {
  /* color: rgb(240, 240, 240); */
  padding: 20px 0px;
  line-height: 28px;
}
table {
  width: 100%;
  border-collapse: collapse; /* 邊框合併 */
  border: 1px solid rgb(75, 75, 75); /* 設定表格外框 */
}
th,
td {
  border: 1px solid rgb(62, 62, 62); /* 設定內部格線 */
  padding: 8px;
  text-align: left;
  font-size: 14px;
}
th {
  background-color: #3a3a39; /* 表頭背景色 */
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
}
img {
  width: 45px;
  height: 45px;
  margin: 0 auto;
}

td:nth-child(1) {
  text-align: center;
}
</style>
