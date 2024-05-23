<template>
  <Layout>
    <LayoutHeader class="header">
      <img
        src="@/assets/images/logo.png"
        alt="Logo"
        class="header-logo"
        @click="goToHome"
      />
      <div class="header-tabs">
        <div class="tab" @click="goToHome">Home</div>
        <div class="tab" @click="goToPrivacy">Privacy</div>
        <div class="tab" @click="goToUserSupport">Help Center</div>
        <div class="tab" @click="goToH5">Miti Web</div>
      </div>
    </LayoutHeader>
    <LayoutContent
      style="
        padding: 100px 24px 24px 100px;
        width: calc(100% - 287px);
        height: calc(100vh - 130px);
        margin: 0 auto;
        display: flex;
        overflow: hidden;
        justify-content: center;
        align-items: center;
      "
    >
      <Layout
        style="
          background: #f4f6fa;
          flex-grow: 1;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        "
      >
        <div style="background-color: #ffffff; padding: 16px; width: 287px">
          <div
            style="
              background-color: #ffffff;
              padding: 20px;
              display: flex;
              align-items: center;
            "
          >
            <img
              src="@/assets/images/list@1x.png"
              alt="导言"
              style="width: 16px; height: 16px; margin-right: 10px"
            />
            <h2
              style="color: #333; margin: 0; font-size: 16px; line-height: 16px"
            >
              introduction
            </h2>
          </div>
          <LayoutSider width="287px" style="background-color: #f4f6fa">
            <Menu
              v-model:selectedKeys="selectedKeys2"
              v-model:openKeys="openKeys"
              mode="inline"
              theme="light"
              style="
                height: 100%;
                border: none;
                border-radius: 8px;
                overflow: hidden;
              "
            >
              <Menu.Item
                v-for="item in menuItems"
                :key="item.key"
                :class="{
                  'custom-selected':
                    item.key === selectedKeys2[0] ? '#7800FD' : '#333',
                }"
                :style="{
                  color: item.key === selectedKeys2[0] ? '#7800FD' : '#333',
                  backgroundColor: '#f4f6fa',
                  margin: '0',
                  padding: '0',
                  borderRadius: '0',
                }"
                @click="scrollToSection(item.key)"
              >
                {{ item.title }}
              </Menu.Item>
            </Menu>
          </LayoutSider>
        </div>

        <LayoutContent
          style="padding: 0px 24px 0px 24px; width: calc(100% - 287px)"
        >
          <div class="text-container">
            <div id="section-1">
              <h1>Welcome to Miti!</h1>
              <p>
                These Terms of Service (“Terms”) apply to your use of Miti,
                except where we expressly state that separate terms (and not
                these) apply, and these Terms also govern your use of the Miti
                Service (“Service”), as more specifically detailed below. By
                creating a Miti account or by installing and using Miti, you
                agree to these Terms.
              </p>
            </div>
            <div id="section-2">
              <h2>Our Service</h2>
              <p>
                Our service allows you to send private messages, interact with
                AI Agents, and other services, providing a platform for people
                around the world to connect, communicate, and inspire.
              </p>
            </div>
            <div id="section-3">
              <h2>Your Service Provider</h2>
              <p>
                The entity providing the service is Cat Pi Software INC., a
                company operating under the laws of the State of Delaware,
                United States, with its address at 874 Walker Road, Suite C,
                Dover, Delaware, United States (referred to as “Miti” or “we”).
              </p>
            </div>
            <div id="section-4">
              <h2>Terms of Service</h2>
              <h3>Regarding Our Service</h3>
              <p>· Minimum Age</p>
              <p>
                You must be at least 13 years old to use our service. The
                minimum age to use our service without parental consent may be
                higher in your home country.
              </p>
              <p>· Account Registration</p>
              <p>
                To create an account, you must register for our service using
                your phone number. You agree to receive text messages and calls
                (from us or our third-party providers) for registering for our
                service.
              </p>
              <p>· User Data Privacy</p>
              <p>
                Miti does not sell, rent, or monetize your personal data or
                content in any way.
              </p>
            </div>
            <div id="section-5">
              <h3>
                Please read our Privacy Policy to understand how we protect the
                information you provide while using our service. To operate our
                service, you agree to our data practices as described in our
                Privacy Policy, including the transfer of your encrypted
                information and metadata to the United States and other
                countries where we have or use facilities, service providers, or
                partners.
              </h3>
            </div>
            <p>· Software</p>
            <p>
              You agree to download and install updates to our service to enable
              new features and enhanced functionality.
            </p>

            <p>· Fees and Taxes</p>
            <p>
              You are responsible for any data and mobile carrier fees and taxes
              associated with the devices you use for our service.
            </p>
            <div id="section-6">
              <h2>Using Miti</h2>
              <p>· Our Terms and Policies</p>
              <p>
                You must use our service in accordance with our terms and
                published policies. If we disable your account for violating our
                terms, you must not create another account without our
                permission.
              </p>
              <p>· Legal and Acceptable Use:</p>
              <p>
                You agree to use our service only for legal, authorized, and
                acceptable purposes. You must not (nor assist others to) use our
                service in ways that: (a) infringe or violate the rights of
                Miti, our users, or others, including privacy, publicity,
                intellectual property, or other proprietary rights; (b) involve
                sending illegal or impermissible communications such as bulk
                messaging, auto-messaging, and auto-dialing; (c) other illegal
                or non-compliant ways with the laws or regulations of your
                jurisdiction.
              </p>
              <p>· Harm to Miti</p>
              <p>
                You must not (nor assist others) access, use, modify,
                distribute, transfer, or exploit our service unauthorizedly or
                in a manner harmful to Miti, our service, or our systems.
              </p>

              <p>· Protecting Your Account Security</p>
              <p>
                You are responsible for keeping your device and Miti account
                secure. If you lose your phone, follow the steps on our support
                website to re-register for our service. When you register with a
                new device, your old device will stop receiving all messages and
                calls.
              </p>

              <p>· No Access to Emergency Services</p>
              <p>
                Our service does not provide access to emergency service
                providers like the police, fire department, hospitals, or other
                public safety organizations. Ensure you can contact emergency
                service providers through mobile, landline, or other services.
              </p>

              <p>· Third-Party Services</p>
              <p>
                Our service may allow you to access, use, or interact with
                third-party websites, apps, content, and other products and
                services. When you use third-party services, their terms and
                privacy policies govern and bind your use of these services.
              </p>
            </div>
            <div id="section-7">
              <h2>Your Rights and Licenses with Miti</h2>
              <p>· Your Rights</p>
              <p>
                You own all the information you submit through our service. You
                must have the rights to the phone number you use to register
                your Miti account.
              </p>

              <p>· Miti's Rights</p>
              <p>
                We own all copyrights, trademarks, domain names, logos, trade
                dress, trade secrets, patents, and other intellectual property
                related to our service. You must not use our copyrights,
                trademarks, domain names, logos, trade dress, patents, and other
                intellectual property without our written permission.
              </p>

              <p>· License Granted by Miti</p>
              <p>
                Miti grants you a limited, revocable, non-exclusive,
                non-transferable license to use our service according to these
                Terms.
              </p>
            </div>
            <div id="section-8">
              <h2>Disclaimers and Limitations of Liability</h2>
              <p>· Disclaimer</p>
              <p>
                You use our service at your own risk and are subject to the
                following disclaimers. We provide our service on an “AS IS”
                basis without any express or implied warranties, including but
                not limited to warranties of merchantability, fitness for a
                particular purpose, ownership, non-infringement, and freedom
                from computer viruses or other harmful code.
              </p>

              <p>· Limitation of Liability</p>
              <p>
                Miti Parties shall not be liable to you for any lost profits or
                consequential, special, punitive, indirect, or incidental
                damages, even if Miti Parties have been advised of the
                possibility of such damages, arising in connection with our
                Terms, our service, or in any way connected with or related to
                our service. Our total liability in connection with our Terms,
                our service, or in any way connected with or related to our
                service will not exceed one hundred dollars ($100).
              </p>
            </div>
            <div id="section-9">
              <h2>Resolving Disputes and Terminating Terms</h2>
              <p>· Resolving Disputes</p>
              <p>
                You agree to resolve any claims relating to our Terms, us, or
                our service in the United States District Court for the District
                of Delaware. You also agree to submit to the personal
                jurisdiction of such courts for the resolution of all such
                disputes.
              </p>

              <p>· Terminating These Terms</p>
              <p>
                You may terminate these Terms with Miti at any time by deleting
                Miti from your device and ceasing to use our service. If you
                violate the letter or spirit of our Terms, or create harm, risk,
                or possible legal exposure for Miti, we may modify, suspend, or
                terminate your access to or use of our service at any time.
              </p>
            </div>
            <div id="section-10">
              <h2>General</h2>
              <p>
                Miti May Update These Terms from Time to Time. When we update
                our Terms, we will update the “Last Modified” date associated
                with the updated Terms. Your continued use of our service
                indicates your acknowledgment of the updated Terms and
                supersedes any prior Terms.
              </p>
            </div>
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
const menuItems = ref([
  { key: "1", title: "Welcome to Miti!" },
  { key: "2", title: "Our Service" },
  { key: "3", title: "Your Service Provider" },
  { key: "4", title: "Terms of Service" },
  { key: "5", title: "Please read our Privacy Policy" },
  { key: "6", title: "Using Miti" },
  { key: "7", title: "Your Rights and Licenses with Miti" },
  { key: "8", title: "Disclaimers and Limitations of Liability" },
  { key: "9", title: "Resolving Disputes and Terminating Terms" },
  { key: "10", title: "General" },
]);
const scrollToSection = (key: any) => {
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

<style scoped>
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

:deep(.ant-menu-submenu-arrow) {
  display: none;
}
.text-container {
  width: 100%;
  flex-grow: 1;
  padding: 48px;
  background-color: white;
  margin-left: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  height: calc(100vh - 80px);
}
.text-container h1,
.text-container h2,
.text-container h3 {
  font-family: "MiSans", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  line-height: 28px;
  text-align: left;
  margin-top: 20px;
}

.text-container p {
  font-family: "MiSans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 28px;
  text-align: left;
  margin-top: 20px;
}
</style>
