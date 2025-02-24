<template>
  <div class="accumulated-page">
    <div class="content">
      <p class="desc text-orange-500 text-2xl">🎉 累計充值，超值獎勳等你來領！🎉</p>
      <p class="desc text-orange-300">
        💎 累積充值達標，解鎖超值獎品！ 每達到一定的充值金額，您就能獲得一份專屬大禮，從珍稀道具到獨家裝備，每一份禮包都精心挑選！
      </p>
      <table class="w-full">
        <thead>
          <tr class="text-gray-200">
            <th class="px-4 py-2 text-left">累計金額</th>
            <th class="px-4 py-2 text-left">獎勵</th>
          </tr>
        </thead>
        <tbody class="divide-y text-gray-200">
          <tr>
            <td class="w-[130px]">金額5000</td>
            <td>專屬暮光徽章x1， [中級]裝備保護卷*5</td>
          </tr>
          <tr>
            <td class="w-[130px]">金額1萬</td>
            <td>100%四屬性強化卷4選1，Boss防具箱x2， [中級]裝備保護卷*10</td>
          </tr>
          <tr>
            <td class="w-[130px]">金額2萬</td>
            <td>古卷&龍心2選1，Boss防具箱x2 ，[中級]裝備保護卷*15</td>
          </tr>
          <tr>
            <td class="w-[130px]">金額3萬</td>
            <td>傳說變身兌換卷，Boss防具箱x2，[中級]裝備保護卷*20</td>
          </tr>
          <tr>
            <td class="w-[130px]">金額4萬</td>
            <td>隨機萬能藥X5，Boss防具箱x2，[中級]裝備保護卷*25</td>
          </tr>
          <tr>
            <td class="w-[130px]">金額5萬</td>
            <td>隨機萬能藥X5，Boss防具箱x2，[中級]裝備保護卷*30</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.accumulated-page {
  color: aliceblue;
  margin: 0px auto;

  width: 1000px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #949494;
}
.content {
  line-height: 34px;
}

.desc {
  padding-top: 20px;
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
</style>
