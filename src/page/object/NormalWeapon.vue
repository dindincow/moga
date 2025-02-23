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
            <div><img :src="`/public/icons/weapon/${item.img}`" /></div>
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
    img: "w212.jpg",
    name: "海神三叉戟",
    desc: ["攻擊：24 / 22", "雙手", "安定：6", "材料：鐵"],
    ability: ["體力上限+50", "近距離命中+4", "不死系加成"],
    job: "王族/騎士",
    get: "掉落",
  },
  {
    img: "w264.jpg",
    name: "深紅長矛",
    desc: ["攻擊：19 / 19", "雙手", "安定：6", "材料：米索莉"],
    ability: ["體力上限+50", "近距離命中+4", "不死系加成"],
    job: "王族/騎士",
    get: "掉落",
  },
  {
    img: "w098.jpg",
    name: "大馬士革刀",
    desc: ["攻擊：10 / 11", "單手", "安定：6", "材料：鐵"],
    ability: ["不會損壞"],
    job: "王族/騎士/妖精/黑暗妖精",
    get: "掉落",
  },
  {
    img: "w028.jpg",
    name: "武士刀",
    desc: ["攻擊：10 / 12", "單手", "安定：6", "材料：鐵"],
    ability: ["近距離命中+1"],
    job: "王族/騎士/妖精/黑暗妖精",
    get: "掉落",
  },
  {
    img: "w047.jpg",
    name: "細劍",
    desc: ["攻擊：11 / 6", "單手", "安定：6", "材料：奧里哈魯根"],
    ability: ["不死系加成"],
    job: "騎士/妖精/黑暗妖精",
    get: "製作",
  },
  {
    img: "w084.jpg",
    name: "鎖子甲破壞者",
    desc: ["攻擊：4 / 5", "單手", "安定：6", "材料：奧里哈魯根"],
    ability: ["近距離命中+10", "不死系加成"],
    job: "王族/騎士/妖精/法師/黑暗妖精",
    get: "掉落",
  },
  {
    img: "w052.jpg",
    name: "瑟魯基之劍",
    desc: ["攻擊：16 / 10", "單手", "安定：6", "材料：金屬"],
    ability: ["近距離命中+2"],
    job: "騎士",
    get: "掉落 / 製作",
  },
  {
    img: "w099.jpg",
    name: "十字弓",
    desc: ["攻擊：3 / 2", "雙手", "安定：6", "材料：木"],
    ability: ["近距離命中+3", "額外攻擊點數+2"],
    job: "騎士/妖精/黑暗妖精",
    get: "掉落",
  },
  {
    img: "w056.jpg",
    name: "尤米弓",
    desc: ["攻擊：3 / 3", "雙手", "安定：6", "材料：木"],
    ability: ["額外攻擊點數+3"],
    job: "妖精",
    get: "製作",
  },
  {
    img: "w175.jpg",
    name: "拉斯塔巴德重十字弓",
    desc: ["攻擊：3 / 3", "雙手", "安定：6", "材料：木"],
    ability: ["近距離命中+2", "額外攻擊點數+2"],
    job: "妖精/黑暗妖精",
    get: "掉落",
  },
  {
    img: "w134.jpg",
    name: "幽暗十字弓",
    desc: ["攻擊：3 / 2", "雙手", "安定：6", "材料：金屬"],
    ability: ["近距離命中+5", "額外攻擊點數+2"],
    job: "妖精/黑暗妖精",
    get: "製作",
  },
  {
    img: "w093.jpg",
    name: "瑪那魔杖",
    desc: ["攻擊：7 / 7", "單手", "安定：6", "材料：木"],
    ability: ["近距離命中-3", "吸取魔力", "魔攻+1"],
    job: "法師",
    get: "?",
  },
  {
    img: "w093.jpg",
    name: "力量魔法杖",
    desc: ["攻擊：9 / 9", "單手", "安定：6", "材料：木"],
    ability: ["額外攻擊點數+3", "力量+3", "魔攻-2"],
    job: "法師",
    get: "掉落",
  },
  {
    img: "w134.jpg",
    name: "大馬士革雙刀",
    desc: ["攻擊：3 / 2", "雙手", "安定：6", "材料：金屬"],
    ability: ["近距離命中+5", "額外攻擊點數+2"],
    job: "妖精/黑暗妖精",
    get: "製作",
  },
  {
    img: "w150.jpg",
    name: "大馬士革雙刀",
    desc: ["攻擊：15 / 9", "雙手", "安定：6", "材料：鐵"],
    ability: ["不會損壞"],
    job: "黑暗妖精",
    get: "掉落",
  },
  {
    img: "w152.jpg",
    name: "幽暗雙刀",
    desc: ["攻擊：15 / 10", "雙手", "安定：6", "材料：金屬"],
    ability: ["近距離命中+3", "額外攻擊點數+1", "不會損壞"],
    job: "黑暗妖精",
    get: "製作",
  },
  {
    img: "w135.jpg",
    name: "幽暗鋼爪",
    desc: ["攻擊：17 / 15", "雙手", "安定：6", "材料：金屬"],
    ability: ["額外攻擊點數+3", "不會損壞"],
    job: "黑暗妖精",
    get: "製作",
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
