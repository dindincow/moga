<template>
  <div class="announcement-detail-page">
    <div class="title">
      <h1>永久活動 - + line拿好禮</h1>
      <h3>日期: 2025/03/02</h3>
    </div>

    <div class="content">
      <h2 class="text-sky-300 text-2xl">📢【加賴拿好禮】</h2>
      <p>立即加入官方Line，專屬豪禮等你來領！✨ 機會難得，千萬別錯過！</p>
      <p>✅ 加賴方式：[@你的Line帳號]</p>

      <div class="box">
        <h2 class="text-orange-300 text-xl">🎁 禮包內容:</h2>
        <p>金幣20萬</p>
        <p>經驗藥水150%*10</p>
        <p>LINE勳章*1</p>
        <p>經驗娃娃：艾依爾</p>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.announcement-detail-page {
  color: aliceblue;
  margin: 50px auto;
  width: 1000px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #949494;
  padding-bottom: 5px;
}
.content {
  color: #d9d9d9;
  margin-top: 20px;

  line-height: 36px;
}
.content p {
  font-size: 20px;
}
.box {
  margin-top: 20px;
  padding: 10px 20px;
  width: 300px;
  line-height: 28px;
  border: 1px solid #d9d9d9;
}

.box h2 {
  padding-bottom: 5px;
  border-bottom: 1px solid #4b4b4b;
}

.box p {
  padding-top: 3px;
  font-size: 16px;
}
</style>
