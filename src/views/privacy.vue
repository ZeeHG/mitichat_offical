<template>
  <Layout style="background: #f4f6fa; height: 100vh">
    <LayoutHeader class="header">
      <img
        src="@/assets/images/logo.png"
        alt="Logo"
        class="header-logo"
        @click="goToHome"
      />
      <div class="header-tabs">
        <div class="tab" @click="goToHome">Home</div>
        <div class="tab" @click="goToPrivacy">Terms & Privacy Policy</div>
        <div class="tab" @click="goToUserSupport">Help Center</div>
        <div class="tab" @click="goToH5">Miti Web</div>
      </div>
    </LayoutHeader>
    <LayoutContent
      style="
        padding: 0px 24px 0px 100px;
        width: 1300px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        overflow-y: auto;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        right: 0;
        top: 100px;
      "
    >
      <Layout
        style="
          background: #f4f6fa;
          flex-grow: 1;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: calc(100vh - 90px);
          position: fixed;
          overflow-y: hidden;
        "
      >
        <div
          style="
            background-color: #ffffff;
            padding: 16px;
            width: 287px;
            height: auto;
            border-radius: 8px;
            overflow-y: auto;
          "
        >
          <LayoutSider
            width="287px"
            style="background: #fff; height: 100%; overflow-y: auto"
          >
            <Menu
              v-model:selectedKeys="selectedKeys2"
              v-model:openKeys="openKeys"
              mode="inline"
              style="
                height: 100%;
                border: none;
                border-radius: 8px;
                overflow-y: scroll;
              "
            >
              <Menu.SubMenu key="sub1">
                <template #title>
                  <span style="display: flex; align-items: center">
                    <img
                      v-if="openKeys.includes('sub1')"
                      src="@/assets/images/tallymark-1@1x.png"
                      alt=""
                      style="margin-right: 8px; width: 16px; height: 16px"
                    />
                    <img
                      v-else
                      src="@/assets/images/plus@1x.png"
                      alt=""
                      style="margin-right: 8px; width: 16px; height: 16px"
                    />
                    <span style="font-weight: 500">Terms of Service</span>
                  </span>
                </template>
                <Menu.Item key="1" @click="scrollToElement('section1')"
                  >Welcome to Miti!</Menu.Item
                >
                <Menu.Item key="2" @click="scrollToElement('section2')"
                  >Our Service</Menu.Item
                >
                <Menu.Item key="3" @click="scrollToElement('section3')"
                  >Your Service Provider</Menu.Item
                >
                <Menu.Item key="4" @click="scrollToElement('section4')"
                  >Regarding Our Service</Menu.Item
                ><Menu.Item key="5" @click="scrollToElement('section5')"
                  >Using Miti</Menu.Item
                ><Menu.Item key="6" @click="scrollToElement('section6')"
                  >Your Rights and Licenses with Miti</Menu.Item
                ><Menu.Item key="7" @click="scrollToElement('section7')"
                  >Disclaimers and Limitations of Liability</Menu.Item
                ><Menu.Item key="8" @click="scrollToElement('section8')"
                  >Resolving Disputes and Terminating Terms</Menu.Item
                ><Menu.Item key="9" @click="scrollToElement('section9')"
                  >General</Menu.Item
                >
              </Menu.SubMenu>
              <Menu.SubMenu key="sub2">
                <template #title>
                  <span style="display: flex; align-items: center">
                    <img
                      v-if="openKeys.includes('sub2')"
                      src="@/assets/images/tallymark-1@1x.png"
                      alt=""
                      style="margin-right: 8px; width: 16px; height: 16px"
                    />
                    <img
                      v-else
                      src="@/assets/images/plus@1x.png"
                      alt=""
                      style="margin-right: 8px; width: 16px; height: 16px"
                    />
                    <span style="font-weight: 500">Privacy Policy</span>
                  </span>
                </template>
                <!-- <Menu.Item key="5" @click="scrollToElement('section5')"
                  >Sending Messages</Menu.Item
                >

                <Menu.Item key="6" @click="scrollToElement('section6')"
                  >Message Recall</Menu.Item
                >
                <Menu.Item key="7" @click="scrollToElement('section7')"
                  >Audio/Video Calls</Menu.Item
                >
                <Menu.Item key="8" @click="scrollToElement('section8')"
                  >Group Chats</Menu.Item
                >
                <Menu.Item key="9" @click="scrollToElement('section9')"
                  >Burn After Reading</Menu.Item
                >
                <Menu.Item key="10" @click="scrollToElement('section10')"
                  >Pin/Delete Chat</Menu.Item
                >
                <Menu.Item key="11" @click="scrollToElement('section11')"
                  >Search Chat History</Menu.Item
                >
                <Menu.Item key="12" @click="scrollToElement('section12')"
                  >Auto-Translation</Menu.Item
                >
                <Menu.Item key="13" @click="scrollToElement('section13')"
                  >Not Receiving miti Notifications?</Menu.Item
                > -->
              </Menu.SubMenu>
            </Menu>
          </LayoutSider>
        </div>

        <div class="text-container">
          <div id="section-1">
            <h1>Welcome to Miti!</h1>
            <p>
              These Terms of Service (“Terms”) apply to your use of Miti, except
              where we expressly state that separate terms (and not these)
              apply, and these Terms also govern your use of the Miti Service
              (“Service”), as more specifically detailed below. By creating a
              Miti account or by installing and using Miti, you agree to these
              Terms.
            </p>
          </div>
          <div id="section-2">
            <h1>Our Service</h1>
            <p>
              Our service allows you to send private messages, interact with AI
              Agents, and other services, providing a platform for people around
              the world to connect, communicate, and inspire.
            </p>
          </div>
          <div id="section-3">
            <h1>Your Service Provider</h1>
            <p>
              The entity providing the service is Cat Pi Software INC., a
              company operating under the laws of the State of Delaware, United
              States, with its address at 874 Walker Road, Suite C, Dover,
              Delaware, United States (referred to as “Miti” or “we”).
            </p>
          </div>
          <div id="section-4">
            <h3>Regarding Our Service</h3>
            <ul style="padding-left: 1em">
              <li>
                Minimum Age
                <p>
                  You must be at least 13 years old to use our service. The
                  minimum age to use our service without parental consent may be
                  higher in your home country.
                </p>
              </li>
              <li>
                Account Registration
                <p>
                  To create an account, you must register for our service using
                  your phone number. You agree to receive text messages and
                  calls (from us or our third-party providers) for registering
                  for our service.
                </p>
              </li>
              <li>
                User Data Privacy
                <p>
                  Miti does not sell, rent, or monetize your personal data or
                  content in any way.
                </p>
              </li>
            </ul>
          </div>
          <div id="section-5">
            <h3>
              Please read our Privacy Policy to understand how we protect the
              information you provide while using our service. To operate our
              service, you agree to our data practices as described in our
              Privacy Policy, including the transfer of your encrypted
              information and metadata to the United States and other countries
              where we have or use facilities, service providers, or partners.
            </h3>
          </div>
          <ul style="padding-left: 1em">
            <li>
              Software
              <p>
                You agree to download and install updates to our service to
                enable new features and enhanced functionality.
              </p>
            </li>
            <li>
              Fees and Taxes
              <p>
                You are responsible for any data and mobile carrier fees and
                taxes associated with the devices you use for our service.
              </p>
            </li>
          </ul>
          <div id="section-6">
            <h1>Using Miti</h1>
            <ul style="padding-left: 1em">
              <li>
                Our Terms and Policies
                <p>
                  You must use our service in accordance with our terms and
                  published policies. If we disable your account for violating
                  our terms, you must not create another account without our
                  permission.
                </p>
              </li>
              <li>
                Legal and Acceptable Use
                <p>
                  You agree to use our service only for legal, authorized, and
                  acceptable purposes. You must not (nor assist others to) use
                  our service in ways that: (a) infringe or violate the rights
                  of Miti, our users, or others, including privacy, publicity,
                  intellectual property, or other proprietary rights; (b)
                  involve sending illegal or impermissible communications such
                  as bulk messaging, auto-messaging, and auto-dialing; (c) other
                  illegal or non-compliant ways with the laws or regulations of
                  your jurisdiction.
                </p>
              </li>
              <li>
                Harm to Miti
                <p>
                  You must not (nor assist others) access, use, modify,
                  distribute, transfer, or exploit our service unauthorizedly or
                  in a manner harmful to Miti, our service, or our systems.
                </p>
              </li>
              <li>
                Protecting Your Account Security
                <p>
                  You are responsible for keeping your device and Miti account
                  secure. If you lose your phone, follow the steps on our
                  support website to re-register for our service. When you
                  register with a new device, your old device will stop
                  receiving all messages and calls.
                </p>
              </li>
              <li>
                No Access to Emergency Services
                <p>
                  Our service does not provide access to emergency service
                  providers like the police, fire department, hospitals, or
                  other public safety organizations. Ensure you can contact
                  emergency service providers through mobile, landline, or other
                  services.
                </p>
              </li>
              <li>
                Third-Party Services
                <p>
                  Our service may allow you to access, use, or interact with
                  third-party websites, apps, content, and other products and
                  services. When you use third-party services, their terms and
                  privacy policies govern and bind your use of these services.
                </p>
              </li>
            </ul>
          </div>
          <div id="section-7">
            <h1>Your Rights and Licenses with Miti</h1>
            <ul style="padding-left: 1em">
              <li>
                Your Rights
                <p>
                  You own all the information you submit through our service.
                  You must have the rights to the phone number you use to
                  register your Miti account.
                </p>
              </li>
              <li>
                Miti's Rights
                <p>
                  We own all copyrights, trademarks, domain names, logos, trade
                  dress, trade secrets, patents, and other intellectual property
                  related to our service. You must not use our copyrights,
                  trademarks, domain names, logos, trade dress, patents, and
                  other intellectual property without our written permission.
                </p>
              </li>
              <li>
                License Granted by Miti
                <p>
                  Miti grants you a limited, revocable, non-exclusive,
                  non-transferable license to use our service according to these
                  Terms.
                </p>
              </li>
            </ul>
          </div>
          <div id="section-8">
            <h1>Disclaimers and Limitations of Liability</h1>
            <ul style="padding-left: 1em">
              <li>
                Disclaimer
                <p>
                  You use our service at your own risk and are subject to the
                  following disclaimers. We provide our service on an “AS IS”
                  basis without any express or implied warranties, including but
                  not limited to warranties of merchantability, fitness for a
                  particular purpose, ownership, non-infringement, and freedom
                  from computer viruses or other harmful code.
                </p>
              </li>
              <li>
                Limitation of Liability
                <p>
                  Miti Parties shall not be liable to you for any lost profits
                  or consequential, special, punitive, indirect, or incidental
                  damages, even if Miti Parties have been advised of the
                  possibility of such damages, arising in connection with our
                  Terms, our service, or in any way connected with or related to
                  our service. Our total liability in connection with our Terms,
                  our service, or in any way connected with or related to our
                  service will not exceed one hundred dollars ($100).
                </p>
              </li>
            </ul>
          </div>
          <div id="section-9">
            <h1>Resolving Disputes and Terminating Terms</h1>
            <ul style="padding-left: 1em">
              <li>
                Resolving Disputes
                <p>
                  You agree to resolve any claims relating to our Terms, us, or
                  our service in the United States District Court for the
                  District of Delaware. You also agree to submit to the personal
                  jurisdiction of such courts for the resolution of all such
                  disputes.
                </p>
              </li>
              <li>
                Terminating These Terms
                <p>
                  You may terminate these Terms with Miti at any time by
                  deleting Miti from your device and ceasing to use our service.
                  If you violate the letter or spirit of our Terms, or create
                  harm, risk, or possible legal exposure for Miti, we may
                  modify, suspend, or terminate your access to or use of our
                  service at any time.
                </p>
              </li>
            </ul>
          </div>
          <div id="section-10">
            <h1>General</h1>
            <p>
              Miti May Update These Terms from Time to Time. When we update our
              Terms, we will update the “Last Modified” date associated with the
              updated Terms. Your continued use of our service indicates your
              acknowledgment of the updated Terms and supersedes any prior
              Terms.
            </p>
          </div>
        </div>
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

const scrollToElement = (key: any) => {
  const section = document.getElementById(`section-${key}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};
const goToHome = () => {
  router.push("/");
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
  /* position: fixed; */
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

:deep(.ant-menu-submenu-arrow) {
  display: none;
}
:deep(.ant-menu-light .ant-menu-item-selected) {
  background-color: #7800fd !important;
  color: #fff !important;
}

:deep(.ant-menu-light .ant-menu-submenu-selected > .ant-menu-submenu-title) {
  color: black;
}

:deep(.ant-menu-submenu-title:hover) {
  background-color: transparent !important;
  color: #7800fd !important;
}

:deep(.ant-menu-submenu-title) {
  position: relative;
  padding-bottom: 16px;
}

:deep(.ant-menu-submenu:not(.ant-menu-submenu-open))
  .ant-menu-submenu-title::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px solid #e8e8e8;
}
:deep(.ant-menu::-webkit-scrollbar) {
  width: 5px;
}

:deep(.ant-menu::-webkit-scrollbar-track) {
  background: #f1f1f1;
}

:deep(.ant-menu::-webkit-scrollbar-thumb) {
  background: #888;
  border-radius: 4px;
}
:deep(.text-container::-webkit-scrollbar) {
  width: 5px;
}

:deep(.text-container::-webkit-scrollbar-track) {
  background: #f1f1f1;
}

:deep(.text-container::-webkit-scrollbar-thumb) {
  background: rgba(136, 136, 136, 0.6);
  border-radius: 4px;
}
.text-container {
  width: 896px;
  flex-grow: 1;
  padding: 48px;
  background-color: white;
  margin-left: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  height: calc(100vh - 80px);

  h1 {
    font-family: "Helvetica-Medium";
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    line-height: 28px;
    text-align: left;
    margin-top: 20px;
  }
  h1 {
    font-family: "Helvetica-Medium";
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    line-height: 28px;
    text-align: left;
    margin-top: 20px;
  }
  h3 {
    font-family: "Helvetica-Medium";
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    line-height: 28px;
    text-align: left;
    margin-top: 20px;
  }

  p {
    font-family: "Helvetica-Regular";
    font-weight: 400;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 28px;
    text-align: left;
    margin-top: 20px;
  }
  ul {
    font-family: "Helvetica-Regular";
    font-weight: 400;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 28px;
    text-align: left;
    margin-top: 20px;
  }
  li {
    font-family: "Helvetica-Regular";
    font-weight: 400;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 28px;
    text-align: left;
    p {
      margin-top: 0;
    }
  }
}
</style>
