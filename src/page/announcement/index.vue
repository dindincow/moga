<template>
  <div class="announcement-page">
    <!-- tab切換 -->
    <div class="announcement-tab">
      <div class="announcement-item all-announcement">全部公告</div>
      <!-- <div class="announcement-item all-announcement" @click="changeTab(0)" :class="[tagIndex === 0 ? 'active' : '']">全部公告</div>
      <div class="announcement-item all-active" @click="changeTab(1)" :class="[tagIndex === 1 ? 'active' : '']">遊戲公告</div>
      <div class="announcement-item past-active" @click="changeTab(2)" :class="[tagIndex === 2 ? 'active' : '']">系統公告</div> -->
    </div>
    <!-- 置頂公告-->
    <div class="top-post">
      <router-link to="/disclaimer">
        <div class="row text-blue">
          <div class="col">免責聲明</div>
          <div class="col">2025/02/05</div>
        </div>
      </router-link>
      <router-link to="/sponsor/sponsorDeclar">
        <div class="row text-green">
          <div class="col">贊助須知</div>
          <div class="col">2025/02/05</div>
        </div>
      </router-link>
    </div>
    <!-- 變動公告-->
    <div class="announcement-data">
      <div class="row" @click="gotoDetail('/announcement/post2')">
        <div class="col"><span class="announcement">開服公告</span> - 2025/03/10 晚上8點正式開服</div>
        <div class="col">2025/03/02</div>
      </div>
      <div class="row" @click="gotoDetail('/announcement/post3')">
        <div class="col"><span class="limit-event">限時活動</span> - 慶開服，金幣加倍!!</div>
        <div class="col">2025/03/02</div>
      </div>
      <div class="row" @click="gotoDetail('/announcement/post1')">
        <div class="col"><span class="event">永久活動</span> - 加 line 拿好禮</div>
        <div class="col">2025/03/02</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const tagIndex = ref(0);

const changeTab = (index) => {
  tagIndex.value = index;
};

const gotoDetail = (url) => {
  console.log("12313", url);
  router.push(url);
};
</script>

<style scoped>
.announcement-page {
  color: aliceblue;
  margin: 0 auto;
  width: 1180px;
}
.announcement-tab {
  margin-top: 50px;
  display: flex;
  width: 100%;
  background: #56544e;
  border: 1px solid #48473d;
}
.announcement-item {
  flex: 1;
  text-align: center;
  line-height: 50px;
  border-left: 1px solid #4f4e4e;
  /* cursor: pointer; */
}
/* .announcement-item:hover {
  background: #504029;
} */

.announcement-data {
  padding: 0 20px;
  border: 1px solid #4f4e4e;
}

.announcement-data .row {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #4f4e4e;
  font-size: 16px;
  cursor: pointer;
  color: #dedede;
}

.top-post {
  padding: 0 20px;
  border: 1px solid #4f4e4e;
}
.top-post .row {
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #4f4e4e;
  font-size: 16px;
}
.announcement-data .row:hover {
  color: #e7c60b;
}
.text-blue {
  color: rgb(92, 175, 239);
}
.text-green {
  color: #8bc34a;
}
.active {
  background: #957c5c;
}
</style>
