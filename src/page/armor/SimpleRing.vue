<template>
  <div class="content flex w-full">
    <!-- <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">按鈕</button> -->

    <table class="w-full">
      <thead>
        <tr>
          <th class="px-4 py-2 text-left">道具名稱</th>
          <th class="px-4 py-2 text-left">能力</th>

          <th class="px-4 py-2 text-left">獲取</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="(item, index) in data" :key="index">
          <td class="w-[100px]">
            <div><img :src="`/icons/armor/${item.img}`" /></div>
            <span class="text-center block">{{ item.name }}</span>
          </td>

          <td>
            <p v-for="(a, aIndex) in item.ability" :key="aIndex">{{ a }}</p>
          </td>

          <td class="w-[50px]">{{ item.get }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
const data = [
  {
    img: "a118.jpg",
    name: "水靈戒指",
    ability: ["水屬性防禦+30"],
    job: "全職",
    get: "掉落",
  },
  {
    img: "a117.jpg",
    name: "火靈戒指",
    ability: ["火屬性防禦+30"],
    job: "全職",
    get: "掉落",
  },
  {
    img: "a116.jpg",
    name: "地靈戒指",
    ability: ["地屬性防禦+30"],
    job: "全職",
    get: "掉落",
  },
  {
    img: "a119.jpg",
    name: "風靈戒指",
    ability: ["風屬性防禦+30"],
    job: "全職",
    get: "掉落",
  },
  {
    img: "a114.jpg",
    name: "抗魔戒指",
    ability: ["魔法防禦+5"],
    job: "全職",
    get: "掉落",
  },
  {
    img: "a115.jpg",
    name: "滅魔戒指",
    ability: ["魔法防禦+10"],
    job: "全職",
    get: "掉落",
  },
  {
    img: "a306.jpg",
    name: "蕾雅戒指",
    ability: ["昏迷耐性+5，恐怖耐性+4"],
    job: "全職",
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
