<template>
  <main>
    <div class="header">
      <img
        value="@/assets/images/logo.png"
        alt=""
        class="header-logo"
        @click="scrollTop"
      />
      <div class="header-tabs">
        <div class="tab" @click="scrollTop">Home</div>
        <div class="tab" @click="goToPrivacy">Privacy</div>
        <div class="tab" @click="goToUserSupport">Help Center</div>
        <div class="tab" @click="goToH5">Miti Web</div>
      </div>
    </div>
    <div class="banner">
      <div class="banner-content">
        <div class="title">Bridging Distances Connecting Hearts</div>
        <div class="app-store">
          <img
            value="@/assets/images/play-store.png"
            alt=""
            @click="goPlayStore"
          />
          <img
            value="@/assets/images/apple-store.png"
            alt=""
            @click="goAppleStore"
          />
        </div>
      </div>
      <!-- <div class="banner-right"></div> -->
    </div>
    <div class="summary">
      <div class="title">A New Social Experience in the AI Era</div>
      <div class="summary-content-box">
        <div class="summary-content">
          <img value="@/assets/images/experience1.png" alt="" class="icon" />
          <div class="sub-title">Ultimate Social Experience</div>
          <div class="content">
            Immerse yourself in a dynamic social environment that brings
            together diverse communities. Experience deep connections and rich
            interactions that redefine what it means to socialize in the digital
            era.
          </div>
        </div>
        <div class="summary-content">
          <img value="@/assets/images/experience2.png" alt="" class="icon" />
          <div class="sub-title">Effortless Cross-Language Communication</div>
          <div class="content">
            Overcome linguistic barriers effortlessly, enabling smooth and
            natural communication across different languages. Whether for
            personal connections or global business, our technology ensures you
            can express and understand without limits.
          </div>
        </div>
        <div class="summary-content">
          <img value="@/assets/images/experience3.png" alt="" class="icon" />
          <div class="sub-title">Efficient and Reliable AI Assistant</div>
          <div class="content">
            Rely on a powerful AI assistant that streamlines your daily tasks,
            offers proactive suggestions, and helps you manage your time
            effectively. This assistant is your go-to for quick information
            retrieval, schedule management, and much more, enhancing your
            efficiency in every aspect of life.
          </div>
        </div>
        <div class="summary-content">
          <img value="@/assets/images/experience4.png" alt="" class="icon" />
          <div class="sub-title">Security and Privacy Protection</div>
          <div class="content">
            Experience the utmost confidence in the security of your personal
            information. Our advanced protocols and privacy-first policies
            ensure that your data remains protected from unauthorized access and
            breaches, giving you peace of mind in every interaction.
          </div>
        </div>
      </div>
    </div>
    <div class="feature-list">
      <div class="feature">
        <div class="feature-desc">
          <div class="title">Free Audio & Video Calls</div>
          <div class="content">
            Stay connected with friends, family, and colleagues around the world
            through high-quality audio and video calls at no cost, ensuring
            you're never out of touch.
          </div>
        </div>
        <div class="feature-img-container">
          <img
            value="@/assets/images/feature1.gif"
            alt=""
            class="feature-img"
          />
        </div>
      </div>
      <div class="feature">
        <div class="feature-img-container">
          <img
            value="@/assets/images/feature2.gif"
            alt=""
            class="feature-img"
          />
        </div>
        <div class="feature-desc">
          <div class="title">Multilingual Interaction Across 60+ Languages</div>
          <div class="content">
            Break down language barriers with the ability to communicate
            effortlessly in over 60 languages, facilitating global interactions
            and broadening your social and professional networks.
          </div>
        </div>
      </div>
      <div class="feature">
        <div class="feature-desc">
          <div class="title">Your Thoughtful AI Assistant</div>
          <div class="content">
            Offer features including information retrieval, answering queries,
            technical support, life advice, quick reading, and summary
            organization.
          </div>
        </div>
        <div class="feature-img-container">
          <img
            value="@/assets/images/feature3.gif"
            alt=""
            class="feature-img"
          />
        </div>
      </div>
      <div class="feature">
        <div class="feature-img-container">
          <img
            value="@/assets/images/feature4.gif"
            alt=""
            class="feature-img"
          />
        </div>
        <div class="feature-desc">
          <div class="title">Comprehensive Social Interaction</div>
          <div class="content">
            Users can interact with AI agents as well as their friends and
            family on the platform.
          </div>
        </div>
      </div>
      <div class="feature">
        <div class="feature-desc">
          <div class="title">Enhanced Privacy Through Multi-Server Support</div>
          <div class="content">
            Protect your privacy with advanced multi-server support that
            distributes data across multiple locations, reducing the risk of
            data breaches and enhancing security.
          </div>
        </div>
        <div class="feature-img-container">
          <img
            value="@/assets/images/feature5.gif"
            alt=""
            class="feature-img"
          />
        </div>
      </div>
    </div>
    <div class="download-center">
      <div class="title">Join the miti Community</div>
      <div class="download-buttons">
        <div class="button" @click="downloadIOS">
          <img value="@/assets/images/ios.png" alt="" />
          <span>Download for iOS</span>
        </div>
        <div class="button" @click="downloadAndroid">
          <img value="@/assets/images/android.png" alt="" />
          <span>Download for Android</span>
        </div>
        <div class="button" @click="downloadPC">
          <img value="@/assets/images/pc.png" alt="" />
          <span>Download for PC</span>
        </div>
        <div class="button" @click="() => router.push({ name: 'Test' })">
          <img value="@/assets/images/pc.png" alt="" />
          <span>检测是否安装app的链接</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-inner">
        <img
          value="@/assets/images/logo.png"
          alt=""
          class="footer-logo"
          @click="scrollTop"
        />
        <div class="">Support@miti.com</div>
        <div class="">Terms & Privacy Policy&nbsp;|&nbsp;Support</div>
        <div class="">Copyright © 2024 Miti. All Rights Reserved.</div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const iframeSrc = ref("");
const iframe = ref(null);

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

<style scoped lang="less">
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

  .header-logo {
    height: 60px;
    cursor: pointer;
  }

  .header-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    font-size: 20px;
    color: #433367;
    line-height: 25px;
    font-family: "Helvetica-Medium";

    .tab {
      cursor: pointer;
    }
  }
}

.banner {
  width: 100%;
  height: 993px;
  background-color: #f9f2ff;
  padding: 0 127px;
  display: flex;
  background-image: url("../assets/images/bannerbg.png");
  background-size: cover;
  background-position: center;
  .banner-content {
    display: flex;
    flex-direction: column;
    gap: 103px;
    width: 673px;
    height: 100%;
    justify-content: center;

    .title {
      width: 673px;
      font-family: "Helvetica-Bold";
      font-size: 58px;
      color: #433367;
      line-height: 69px;
      letter-spacing: 1px;
    }

    .app-store {
      display: flex;
      gap: 30px;

      img {
        width: 183px;
        height: 61px;
        cursor: pointer;
      }
    }
  }
}

.summary {
  background-color: #b886f8;
  padding: 127px;

  .title {
    font-family: "Helvetica-Bold";
    font-size: 58px;
    color: #ffffff;
    line-height: 69px;
    text-align: center;
    margin-bottom: 127px;
  }

  .summary-content-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    .summary-content {
      height: 516px;
      background: #ffffff;
      border-radius: 25px;
      padding: 53px 53px 0 53px;
      gap: 31px;
      .icon {
        width: 137px;
      }

      .sub-title {
        margin: 36px 0;
        font-size: 28px;
        color: #433367;
        line-height: 33px;
        font-family: Helvetica-Bold;
      }

      .content {
        font-size: 23px;
        color: #433367;
        line-height: 27px;
      }
    }
  }
}

.feature-list {
  padding: 80px 127px;

  .feature {
    padding: 80px 0;
    border-bottom: 1px solid #a1a1aa;
    display: flex;
    justify-content: space-between;

    &:first-of-type {
      border-top: 1px solid #a1a1aa;
    }

    &:nth-of-type(odd) {
      .feature-desc {
        padding-right: 94px;
      }
    }

    &:nth-of-type(even) {
      .feature-desc {
        padding-left: 94px;
      }
    }

    .feature-img-container {
      flex: 1 1 50%;
      min-width: 0;
      position: relative;

      &::after {
        content: "";
        width: 100%;
        height: 5px;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
      }

      .feature-img {
        width: 100%;
      }
    }

    .feature-desc {
      flex: 1 1 50%;
      padding: 63.5px 0 94px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 186px;

      .title {
        font-family: "Helvetica-Bold";
        font-size: 58px;
        color: #433367;
        line-height: 69px;
        max-width: 673px;
      }

      .content {
        max-width: 673px;
        font-size: 30px;
        color: #433367;
        line-height: 33px;
      }
    }
  }
}

.download-center {
  background: #f9f2ff;
  padding: 127px 0 165px 0;

  .title {
    font-family: "Helvetica-Bold";
    font-size: 58px;
    color: #000000;
    line-height: 69px;
    text-align: center;
    margin-bottom: 70px;
  }

  .download-buttons {
    gap: 63px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Helvetica-Medium";
    font-size: 25px;
    color: #ffffff;
    line-height: 32px;

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #b886f8;
      border-radius: 113px;
      height: 109px;
      padding: 0 30px;
      cursor: pointer;
      gap: 15px;

      img {
        height: 36px;
      }
    }
  }
}

.footer {
  padding: 0 127px;
  background-color: #f9f2ff;
  font-size: 23px;
  color: #a1a1aa;
  line-height: 27px;
  gap: 99px;
  .footer-inner {
    padding: 48px 0 142px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #a1a1aa;

    .footer-logo {
      flex: 0 1 248px;
      min-width: 0;
      cursor: pointer;
      padding-right: 9px;
    }
  }
}
</style>
