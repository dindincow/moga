<template>
  <div class="main-title"><img src="../assets/main_title1.png" /></div>
</template>
<script setup>
defineProps({
  title: String,
});
</script>

<style scoped>
.main-title {
  margin: 0 auto;
  position: relative;
  width: 1120px;
  color: #ffffff;
  text-align: center;
  text-shadow: 1px 1px 3px black;
  display: flex;
  justify-content: center;
}
.main-title::before {
  position: absolute;
  content: "";
  width: 450px;
  height: 1px;
  background: linear-gradient(207deg, rgb(187 162 132) 0%, rgb(254 199 120) 35%, rgb(255 255 255 / 0%) 100%);
  left: 10px;
  top: 45%;
}
.main-title::after {
  position: absolute;
  content: "";
  width: 450px;
  height: 1px;
  background: linear-gradient(90deg, rgba(254 199 120) 0%, rgba(187 162 132) 35%, rgba(228, 255, 0, 0) 100%);
  right: 10px;
  top: 45%;
}
</style>
