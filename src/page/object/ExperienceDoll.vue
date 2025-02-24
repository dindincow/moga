<template>
  <div class="content">
    <!-- <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">按鈕</button> -->
    <h2>獲取方式:商城 ，需用娃娃成長藥劑升級</h2>
    <table class="w-full">
      <thead>
        <tr>
          <th class="px-4 py-2 text-left">道具名稱</th>
          <th class="px-4 py-2 text-left">能力</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr>
          <td>普通的 Lv0</td>
          <td>
            <p>阿努比斯： 遠距離傷害+1、遠距離命中+1</p>
            <p>炎魔：近距離傷害+1、近距離命中+1</p>
            <p>伊弗利特：魔攻+1、每64秒MP 恢復+15</p>
            <p>大腳瑪幽：防禦+1 HP+10 減免+1</p>
          </td>
        </tr>
        <tr>
          <td>努力的 Lv1</td>
          <td>
            <p>阿努比斯：遠距離傷害+2、遠距離命中+1、每64秒魔力恢復+6</p>
            <p>炎魔：近距離攻擊+2、近距離命中+1</p>
            <p>伊弗利特：魔攻+2、魔法命中+1、每64秒魔力恢復+15</p>
            <p>大腳瑪幽：防禦+2 HP+20 減免+2</p>
          </td>
        </tr>
        <tr>
          <td>聰明的 Lv2</td>
          <td>
            <p>阿努比斯：遠距離傷害+3、遠距離命中+2、每64秒魔力恢復+10</p>
            <p>炎魔：近距離攻擊+3、近距離命中+2</p>
            <p>伊弗利特：魔攻+3、魔法命中+2、每32秒魔力恢復+20</p>
            <p>大腳瑪幽：防禦+3 HP+40 減免+3</p>
          </td>
        </tr>
        <tr>
          <td>聰穎的 Lv3</td>
          <td>
            <p>阿努比斯：遠距離傷害+4、遠距離命中+3、每64秒魔力恢復+15</p>
            <p>炎魔：近距離攻擊+4、近距離命中+3、</p>
            <p>伊弗利特：魔攻+4、魔法命中+3、每32秒魔力恢復+25</p>
            <p>大腳瑪幽：防禦+5 HP+60 減免+4</p>
          </td>
        </tr>
        <tr>
          <td>發光的 Lv4</td>
          <td>
            <p>阿努比斯：防禦-3 遠距離傷害+5、遠距離命中+5、每64秒魔力恢復+20</p>
            <p>炎魔：防禦-3 近距離攻擊+5、近距離命中+5</p>
            <p>伊弗利特：防禦-3 魔攻+5、魔法命中+5、每32秒魔力恢復+25</p>
            <p>大腳瑪幽：防禦+8 HP+80 減免+8</p>
          </td>
        </tr>

        <tr>
          <td>光彩照人的 Lv5</td>
          <td>
            <p>阿努比斯：敏捷+2 防禦-5 遠距離傷害+7、遠距離命中+7、每32秒魔力恢復+25</p>
            <p>炎魔：力量+2 防禦-5 近距離攻擊+7、近距離命中+7</p>
            <p>伊弗利特：智力+2 防禦-5 魔攻+7、魔法命中+7、每32秒魔力恢復+30</p>
            <p>大腳瑪幽：精神+2 防禦+10 HP+100 減免+10 昏迷耐性+5</p>
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
