<template>
  <Layout>
    <LayoutHeader class="header">
      <img
        src="@/assets/images/logo.png"
        alt="Logo"
        class="header-logo"
        @click="scrollTop"
      />
      <div class="header-tabs">
        <div class="tab" @click="scrollTop">Home</div>
        <div class="tab" @click="goToPrivacy">Privacy</div>
        <div class="tab" @click="goToUserSupport">Help Center</div>
        <div class="tab" @click="goToH5">Miti Web</div>
      </div>
    </LayoutHeader>
    <LayoutContent
      style="
        padding: 100px 24px 24px;
        width: calc(100% - 287px);
        margin-left: 287px;
      "
    >
      <Layout
        style="
          background: #fff;
          flex-grow: 1;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        "
      >
        <LayoutSider width="287px" style="background: #fff; overflow: auto">
          <Menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            style="height: 100%; border-right: 1px solid #f0f0f0"
          >
            <Menu.SubMenu key="sub1">
              <template #title>
                <span> 开始使用 </span>
              </template>
              <Menu.Item key="1">下载miti.chat</Menu.Item>
              <Menu.Item key="2">注册miti账号</Menu.Item>
              <Menu.Item key="3">更新miti.chat</Menu.Item>
              <Menu.Item key="4">账号设定</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2">
              <template #title>
                <span> 聊天 </span>
              </template>
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub3">
              <template #title>
                <span> 好友 </span>
              </template>
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub4">
              <template #title>
                <span> 设置 </span>
              </template>
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub5">
              <template #title>
                <span> 发现和圈子 </span>
              </template>
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub6">
              <template #title>
                <span> AI功能 </span>
              </template>
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </LayoutSider>
        <LayoutContent style="padding: 24px; width: 896px">
          <div class="text-container">
            <h1>Welcome to Miti!</h1>
            <p>
              These Terms of Service (“Terms”) apply to your use of Miti, except
              where we expressly state that separate terms (and not these)
              apply, and these Terms also govern your use of the Miti Service
              (“Service”), as more specifically detailed below. By creating a
              Miti account or by installing and using Miti, you agree to these
              Terms.
            </p>

            <h2>Our Service</h2>
            <p>
              Our service allows you to send private messages, interact with AI
              Agents, and other services, providing a platform for people around
              the world to connect, communicate, and inspire.
            </p>

            <h2>Your Service Provider</h2>
            <p>
              The entity providing the service is Cat Pi Software INC., a
              company operating under the laws of the State of Delaware, United
              States, with its address at 874 Walker Road, Suite C, Dover,
              Delaware, United States (referred to as “Miti” or “we”).
            </p>

            <h3>Terms of Service</h3>
            <h4>Regarding Our Service</h4>
            <ul>
              <li>
                <strong>Minimum Age:</strong> You must be at least 13 years old
                to use our service. The minimum age to use our service without
                parental consent may be higher in your home country.
              </li>
              <li>
                <strong>Account Registration:</strong> To create an account, you
                must register for our service using your phone number. You agree
                to receive text messages and calls (from us or our third-party
                providers) for registering for our service.
              </li>
              <li>
                <strong>User Data Privacy:</strong> Miti does not sell, rent, or
                monetize your personal data or content in any way.
              </li>
            </ul>

            <p>
              Please read our Privacy Policy to understand how we protect the
              information you provide while using our service. To operate our
              service, you agree to our data practices as described in our
              Privacy Policy, including the transfer of your encrypted
              information and metadata to the United States and other countries
              where we have or use facilities, service providers, or partners.
            </p>

            <h4>Software</h4>
            <p>
              You agree to download and install updates to our service to enable
              new features and enhanced functionality.
            </p>

            <h4>Fees and Taxes</h4>
            <p>
              You are responsible for any data and mobile carrier fees and taxes
              associated with the devices you use for our service.
            </p>

            <h3>Using Miti</h3>
            <ul>
              <li>
                <strong>Our Terms and Policies:</strong> You must use our
                service in accordance with our terms and published policies. If
                we disable your account for violating our terms, you must not
                create another account without our permission.
              </li>
              <li>
                <strong>Legal and Acceptable Use:</strong> You agree to use our
                service only for legal, authorized, and acceptable purposes.
              </li>
              <li>
                <strong>Harm to Miti:</strong> You must not (nor assist others)
                access, use, modify, distribute, transfer, or exploit our
                service unauthorizedly or in a manner harmful to Miti, our
                service, or our systems.
              </li>
            </ul>

            <h4>Protecting Your Account Security</h4>
            <p>
              You are responsible for keeping your device and Miti account
              secure. If you lose your phone, follow the steps on our support
              website to re-register for our service. When you register with a
              new device, your old device will stop receiving all messages and
              calls.
            </p>

            <h4>No Access to Emergency Services</h4>
            <p>
              Our service does not provide access to emergency service providers
              like the police, fire department, hospitals, or other public
              safety organizations. Ensure you can contact emergency service
              providers through mobile, landline, or other services.
            </p>

            <h4>Third-Party Services</h4>
            <p>
              Our service may allow you to access, use, or interact with
              third-party websites, apps, content, and other products and
              services. When you use third-party services, their terms and
              privacy policies govern and bind your use of these services.
            </p>

            <h3>Your Rights and Licenses with Miti</h3>
            <h4>Your Rights</h4>
            <p>
              You own all the information you submit through our service. You
              must have the rights to the phone number you use to register your
              Miti account.
            </p>

            <h4>Miti's Rights</h4>
            <p>
              We own all copyrights, trademarks, domain names, logos, trade
              dress, trade secrets, patents, and other intellectual property
              related to our service. You must not use our copyrights,
              trademarks, domain names, logos, trade dress, patents, and other
              intellectual property without our written permission.
            </p>

            <h4>License Granted by Miti</h4>
            <p>
              Miti grants you a limited, revocable, non-exclusive,
              non-transferable license to use our service according to these
              Terms.
            </p>

            <h3>Disclaimers and Limitations of Liability</h3>
            <h4>Disclaimer</h4>
            <p>
              You use our service at your own risk and are subject to the
              following disclaimers. We provide our service on an “AS IS” basis
              without any express or implied warranties, including but not
              limited to warranties of merchantability, fitness for a particular
              purpose, ownership, non-infringement, and freedom from computer
              viruses or other harmful code.
            </p>

            <h4>Limitation of Liability</h4>
            <p>
              Miti Parties shall not be liable to you for any lost profits or
              consequential, special, punitive, indirect, or incidental damages,
              even if Miti Parties have been advised of the possibility of such
              damages, arising in connection with our Terms, our service, or in
              any way connected with or related to our service.
            </p>

            <h3>Resolving Disputes and Terminating Terms</h3>
            <h4>Resolving Disputes</h4>
            <p>
              You agree to resolve any claims relating to our Terms, us, or our
              service in the United States District Court for the District of
              Delaware. You also agree to submit to the personal jurisdiction of
              such courts for the resolution of all such disputes.
            </p>

            <h4>Terminating These Terms</h4>
            <p>
              You may terminate these Terms with Miti at any time by deleting
              Miti from your device and ceasing to use our service. If you
              violate the letter or spirit of our Terms, or create harm, risk,
              or possible legal exposure for Miti, we may modify, suspend, or
              terminate your access to or use of our service at any time.
            </p>

            <h3>General</h3>
            <p>
              Miti May Update These Terms from Time to Time. When we update our
              Terms, we will update the “Last Modified” date associated with the
              updated Terms. Your continued use of our service indicates your
              acknowledgment of the updated Terms and supersedes any prior
              Terms.
            </p>
          </div>
        </LayoutContent>
      </Layout>
    </LayoutContent>
  </Layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Layout, Menu, Breadcrumb } from "ant-design-vue";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();
const selectedKeys1 = ref<string[]>(["2"]);
const selectedKeys2 = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);
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
}
.header-tabs.tab {
  cursor: pointer;
}

#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
.text-container {
  width: 896px;
  flex-grow: 1;
  padding: 20px;
  background-color: white;
  margin-left: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  height: calc(100vh - 80px);
}
</style>
