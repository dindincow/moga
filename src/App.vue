<template>
  <div class="app">
    <!-- <div class="box">
      <img scr="./assets/pp1.png" />
    </div> -->
    <Header></Header>

    <router-view></router-view>
  </div>
</template>
<script setup>
import Header from "./components/Header.vue";
</script>

<style lang="css" scoped>
.box {
  width: 278px;
  position: absolute;
  z-index: 9;
  height: 278px;
  top: 40%;
  background: url("./assets/pp1.png");
  opacity: 0.8;
  left: -20px;
}
/* img {
  background: #ccc;
  width: 250px;
  height: 300px;
  border: 1px solid #ccc;
} */
</style>
