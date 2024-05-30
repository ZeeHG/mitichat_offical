<template>
  <div class="header">
    <img
      value="@/assets/images/logo.png"
      alt=""
      class="header-logo"
      @click="scrollTop"
    />
    <div class="header-tabs">
      <div class="tab" @click="scrollTop">Home</div>
      <div class="tab" @click="goToPrivacy">Terms & Privacy Policy</div>
      <div class="tab" @click="goToUserSupport">Help Center</div>
      <div class="tab" @click="goToH5">Miti Web</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const scrollTop = () => {
  document.documentElement.scrollTo(0, 0);
};

const goToPrivacy = () => {
  router.push("/privacy");
};
const goToUserSupport = () => {
  router.push("/userSupport");
};
const goToH5 = () => {
  location.href = "https://www.miti.chat";
};

const goPlayStore = () => {
  location.href = "https://play.google.com/store/apps/details?id=miti.chat";
};

const goAppleStore = () => {
  // location.href = ""
};

const downloadAndroid = () => {
  location.href = "https://www.miti.chat/download/miti.apk";
};

const downloadIOS = () => {
  // location.href = ""
};

const downloadPC = () => {
  location.href = "https://miti.chat/download/miti_1.0.0.exe";
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 51px 127px 16px 112px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(73px);
  z-index: 999;
}
.header .header-tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  font-size: 20px;
  color: #433367;
  line-height: 25px;
  font-family: "Helvetica-Medium";
}
.header .header-logo {
  height: 60px;
  cursor: pointer;
}
.header .header-tabs .tab {
  cursor: pointer;
}
</style>
