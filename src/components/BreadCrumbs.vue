<template>
  <div class="bread-crumbs">{{ router }} > {{ title }}</div>
</template>
<script setup>
import { defineProps } from "vue";

defineProps(["title", "router"]);
</script>

<style scoped>
.bread-crumbs {
  width: 1140px;
  margin: 20px auto 0 auto;
  font-size: 14px;
  color: #828282;
}
</style>
