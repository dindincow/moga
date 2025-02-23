<template>
  <div class="content flex w-full">
    <!-- <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">按鈕</button> -->

    <table class="w-full">
      <thead>
        <tr>
          <th class="px-4 py-2 text-left w-[120px]">道具名稱</th>
          <th class="px-4 py-2 text-left">能力</th>
          <th class="px-4 py-2 text-left w-[90px]">獲取</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="(item, index) in data" :key="index">
          <td class="w-[100px]">
            <div><img :src="`/public/icons/armor/${item.img}`" /></div>
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
    img: "s1.png",
    name: "獵影之痕T(進戰)",
    ability: [
      "【 0階 】- 力量+2",
      "【 1階 】- 防禦+1，力量+2",
      "【 2階 】- 防禦+2，力量+2",
      "【 3階 】- 防禦+3，力量+2",
      "【 4階 】- 防禦+4，力量+2，體力回復+1，魔力回復+1，",
      "【 5階 】- 防禦+5，力量+2，體力回復+1，魔力回復+1，體力上限+10",
      "【 6階 】- 防禦+6，力量+2，體力回復+1，魔力回復+2，體力上限+20",
      "【 7階 】- 防禦+7，力量+2，體力回復+2，魔力回復+2，體力上限+30，近距離攻擊+1",
      "【 8階 】- 防禦+8，力量+2，體力回復+2，魔力回復+3，體力上限+40，近距離攻擊+2",
      "【 9階 】- 防禦+9，力量+3，體力回復+3，魔力回復+3，體力上限+50，近距離攻擊+3",
    ],
    job: "全職",
    get: "商城 / 製作",
  },
  {
    img: "s2.png",
    name: "獵影之痕T(遠攻)",

    ability: [
      "【 0階 】- 敏捷+2",
      "【 1階 】- 防禦+1，敏捷+2",
      "【 2階 】- 防禦+2，敏捷+2",
      "【 3階 】- 防禦+3，敏捷+2",
      "【 4階 】- 防禦+4，敏捷+2，體力回復+1，魔力回復+1，",
      "【 5階 】- 防禦+5，敏捷+2，體力回復+1，魔力回復+1，體力上限+10",
      "【 6階 】- 防禦+6，敏捷+2，體力回復+1，魔力回復+2，體力上限+20",
      "【 7階 】- 防禦+7，敏捷+2，體力回復+2，魔力回復+2，體力上限+30，遠距離攻擊+1",
      "【 8階 】- 防禦+8，敏捷+2，體力回復+2，魔力回復+3，體力上限+40，遠距離攻擊+2",
      "【 9階 】- 防禦+9，敏捷+3，體力回復+3，魔力回復+3，體力上限+50，遠距離攻擊+3",
    ],
    job: "全職",
    get: "商城 / 製作",
  },
  {
    img: "s3.png",
    name: "獵影之痕T(魔法)",

    ability: [
      "【 0階 】- 智力+2",
      "【 1階 】- 防禦+1，智力+2",
      "【 2階 】- 防禦+2，智力+2",
      "【 3階 】- 防禦+3，智力+2",
      "【 4階 】- 防禦+4，智力+2，體力回復+1，魔力回復+1，",
      "【 5階 】- 防禦+5，智力+2，體力回復+1，魔力回復+1，體力上限+10",
      "【 6階 】- 防禦+6，智力+2，體力回復+1，魔力回復+2，體力上限+20",
      "【 7階 】- 防禦+7，智力+2，體力回復+2，魔力回復+2，體力上限+30，魔攻+1",
      "【 8階 】- 防禦+8，智力+2，體力回復+2，魔力回復+3，體力上限+40，魔攻+2",
      "【 9階 】- 防禦+9，智力+3，體力回復+3，魔力回復+3，體力上限+50，魔攻+3",
    ],
    job: "全職",
    get: "商城 / 製作",
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
