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
    img: "earing01.png",
    name: "倫提斯力量耳環",
    ability: [
      "【 +0 】- 防禦+1，力量+1，體力上限+10，藥水回復+2",
      "【 +1 】- 防禦+1，力量+1，體力上限+20，藥水回復+3",
      "【 +2 】- 防禦+1，力量+1，體力上限+30，藥水回復+4",
      "【 +3 】- 防禦+1，力量+1，體力上限+40，藥水回復+5",
      "【 +4 】- 防禦+1，力量+1，體力上限+50，藥水回復+6",
      "【 +5 】- 防禦+2，力量+1，體力上限+60，藥水回復+8，傷害減免+1",
      "【 +6 】- 防禦+3，力量+1，體力上限+70，藥水回復+10，傷害減免+1",
      "【 +7 】- 防禦+3，力量+2，體力上限+80，藥水回復+12，傷害減免+2，pvp額外傷害+1",
      "【 +8 】- 防禦+4，力量+2，體力上限+100，藥水回復+14，傷害減免+2，pvp額外傷害+2",
    ],
    job: "全職",
    get: "商城",
  },
  {
    img: "earing02.png",
    name: "倫提斯敏捷耳環",

    ability: [
      "【 +0 】- 防禦+1，敏捷+1，體力上限+5，魔力上限+5，藥水回復+2",
      "【 +1 】- 防禦+1，敏捷+1，體力上限+10，魔力上限+10，藥水回復+3",
      "【 +2 】- 防禦+1，敏捷+1，體力上限+15，魔力上限+15，藥水回復+4",
      "【 +3 】- 防禦+1，敏捷+1，體力上限+20，魔力上限+20，藥水回復+5",
      "【 +4 】- 防禦+1，敏捷+1，體力上限+25，魔力上限+25，藥水回復+6",
      "【 +5 】- 防禦+2，敏捷+1，體力上限+30，魔力上限+30，藥水回復+8，傷害減免+1",
      "【 +6 】- 防禦+3，敏捷+1，體力上限+35，魔力上限+35，藥水回復+10，傷害減免+1",
      "【 +7 】- 防禦+3，敏捷+2，體力上限+40，魔力上限+40，藥水回復+12，傷害減免+2，pvp額外傷害+1",
      "【 +8 】- 防禦+4，敏捷+2，體力上限+50，魔力上限+50，藥水回復+14，傷害減免+2，pvp額外傷害+2",
    ],
    job: "全職",
    get: "商城",
  },
  {
    img: "earing03.png",
    name: "倫提斯智力耳環",

    ability: [
      "【 +0 】- 防禦+1，智力+1，體力上限+5，魔力上限+5，藥水回復+2",
      "【 +1 】- 防禦+1，智力+1，體力上限+10，魔力上限+10，藥水回復+3",
      "【 +2 】- 防禦+1，智力+1，體力上限+15，魔力上限+15，藥水回復+4",
      "【 +3 】- 防禦+1，智力+1，體力上限+20，魔力上限+20，藥水回復+5",
      "【 +4 】- 防禦+1，智力+1，體力上限+25，魔力上限+25，藥水回復+6",
      "【 +5 】- 防禦+2，智力+1，體力上限+30，魔力上限+30，藥水回復+8，傷害減免+1",
      "【 +6 】- 防禦+3，智力+1，體力上限+35，魔力上限+35，藥水回復+10，傷害減免+1",
      "【 +7 】- 防禦+3，智力+2，體力上限+40，魔力上限+40，藥水回復+12，傷害減免+2，pvp額外傷害+1",
      "【 +8 】- 防禦+4，智力+2，體力上限+50，魔力上限+50，藥水回復+14，傷害減免+2，pvp額外傷害+2",
    ],
    job: "全職",
    get: "商城",
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
