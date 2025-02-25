<template>
  <div class="content">
    <!-- <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">按鈕</button> -->
    <h2>【祭司娃娃：鐮刀死神】👿⚔️</h2>
    <table class="w-full">
      <thead>
        <tr>
          <th class="px-4 py-2 text-left w-[100px]">階級</th>
          <th class="px-4 py-2 text-left">能力</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr>
          <td>Lv 0</td>
          <td>
            <p>體力上限+10、魔力上限+10、加速術</p>
          </td>
        </tr>
        <tr>
          <td>Lv 1</td>
          <td>
            <p>體力上限+20、魔力上限+15、加速術、生命之泉</p>
          </td>
        </tr>
        <tr>
          <td>Lv 2</td>
          <td>
            <p>體力上限+30、魔力上限+20、加速術、生命之泉、大地防護</p>
          </td>
        </tr>
        <tr>
          <td>Lv 3</td>
          <td>
            <p>體力上限+40、魔力上限+25、加速術、生命之泉、大地防護、通暢氣脈術</p>
          </td>
        </tr>
        <tr>
          <td>Lv 4</td>
          <td>
            <p>體力上限+50、魔力上限+30、加速術、生命之泉、大地防護、通暢氣脈術、體魄強健術</p>
          </td>
        </tr>
        <tr>
          <td>Lv 5</td>
          <td>
            <p>體力上限+60、魔力上限+35、加速術、生命之泉、大地防護、通暢氣脈術、體魄強健術、祝福魔法武器</p>
          </td>
        </tr>
        <tr>
          <td>Lv 6</td>
          <td>
            <p>體力上限+70、魔力上限+40、加速術、生命之泉、鋼鐵防護、通暢氣脈術、體魄強健術、祝福魔法武器、專注</p>
          </td>
        </tr>
        <tr>
          <td>Lv 7</td>
          <td>
            <p>體力上限+80、魔力上限+45、加速術、生命之泉、鋼鐵防護、通暢氣脈術、體魄強健術、祝福魔法武器、專注、耐力</p>
          </td>
        </tr>
        <tr>
          <td>Lv 8</td>
          <td>
            <p>體力上限+90、魔力上限+50、加速術、生命之泉、鋼鐵防護、通暢氣脈術、體魄強健術、祝福魔法武器、專注、耐力、洞察</p>
          </td>
        </tr>
        <tr>
          <td>Lv 9</td>
          <td>
            <p>體力上限+100、魔力上限+55、加速術、生命之泉、鋼鐵防護、通暢氣脈術、體魄強健術、祝福魔法武器、專注、耐力、洞察、水之防護</p>
          </td>
        </tr>
        <tr>
          <td>Lv Max</td>
          <td>
            <p>力上限+150、魔力上限+100、加速術、生命之泉、鋼鐵防護、通暢氣脈術、體魄強健術、祝福魔法武器、專注、耐力、洞察、水之防護、靈魂昇華</p>
          </td>
        </tr>
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
  color: #dfdfdf;
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

h2 {
  font-size: 20px;
  color: orange;
  margin-bottom: 10px;
}
</style>
