<template>
  <div class="content flex w-full">
    <!-- <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">按鈕</button> -->

    <table class="w-full">
      <thead>
        <tr class="text-gray-200">
          <th class="px-4 py-2 text-left">道具名稱</th>
          <th class="px-4 py-2 text-left">能力</th>
        </tr>
      </thead>
      <tbody class="divide-y text-gray-200">
        <tr>
          <td class="w-[130px]">螞蟻任務石</td>
          <td>防禦+1，體力上限+30，魔力上限+5</td>
        </tr>
        <tr>
          <td class="w-[130px]">戰場任務石</td>
          <td>防禦+1，體力上限+30，魔力上限+10，近遠距離攻擊+1</td>
        </tr>
        <tr>
          <td class="w-[130px]">騎士洞任務石</td>
          <td>防禦+2，體力上限+40，魔力上限+15，近遠距離攻擊+2，魔攻+1</td>
        </tr>
        <tr>
          <td class="w-[130px]">海音任務石</td>
          <td>防禦+2，體力上限+40，魔力上限+20，近遠距離攻擊+3，魔攻+2</td>
        </tr>
        <tr>
          <td class="w-[130px]">奇岩任務石</td>
          <td>防禦+3，體力上限+50，魔力上限+25，近遠距離攻擊+4，魔攻+3，傷害減免+1</td>
        </tr>
        <tr>
          <td class="w-[130px]">水晶任務石</td>
          <td>防禦+3，體力上限+50，魔力上限+30，近遠距離攻擊+5，魔攻+4，傷害減免+2</td>
        </tr>
        <tr>
          <td class="w-[130px]">象牙塔任務石</td>
          <td>防禦+5，體力上限+80，魔力上限+40，近遠距離攻擊+6，魔攻+5，傷害減免+3</td>
        </tr>
        <tr>
          <td class="w-[130px]">火龍窟任務石</td>
          <td>防禦+5，體力上限+80，魔力上限+50，近遠距離攻擊+7，魔攻+6，傷害減免+4，力敏智+1</td>
        </tr>
        <tr>
          <td class="w-[130px]">海賊任務石</td>
          <td>防禦+6，體力上限+100，魔力上限+60，近遠距離攻擊+8，魔攻+7，傷害減免+5，力敏智+2</td>
        </tr>
        <!-- <tr>
          <td class="w-[130px]">遺忘任務石</td>
          <td>防禦+6，體力上限+120，魔力上限+70，近遠距離攻擊+9，魔攻+8，傷害減免+6，力敏智+2</td>
        </tr>
        <tr>
          <td class="w-[130px]">精墓任務石</td>
          <td>防禦+6，體力上限+130，魔力上限+80，近遠距離攻擊+10，魔攻+9，傷害減免+7，力敏智+2</td>
        </tr>
        <tr>
          <td class="w-[130px]">暗影任務石</td>
          <td>防禦+6，體力上限+150，魔力上限+90，近遠距離攻擊+12，魔攻+10，傷害減免+8，力敏智+3</td>
        </tr>
        <tr>
          <td class="w-[130px]">傲慢之塔任務石</td>
          <td>防禦+6，體力上限+200，魔力上限+100，近遠距離攻擊+14，魔攻+12，傷害減免+10，力敏智+4</td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>
<script setup></script>

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
  font-size: 16px;
  font-weight: bold;
}
img {
  width: 45px;
  height: 45px;
  margin: 0 auto;
}
</style>
