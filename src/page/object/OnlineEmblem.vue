<template>
  <div class="content">
    <img src="../../assets/olv0.png" />
    <img src="../../assets/olv1.png" />
    <img src="../../assets/olv2.png" />
    <img src="../../assets/olv3.png" />
    <img src="../../assets/olv4.png" />
    <img src="../../assets/olv5.png" />
  </div>
</template>
<script setup></script>

<style scoped>
.content {
  color: rgb(220, 220, 220);
  padding: 20px 0px;
  line-height: 35px;
  display: flex;
  flex-wrap: wrap;
}

img {
  display: block;
  margin: 10px;
  width: auto; /* 保證圖片寬度根據原始比例調整 */

  object-fit: contain; /* 保持圖片比例，不會變形 */
}
</style>
