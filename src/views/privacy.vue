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
        width: auto;
        height: 100%;
        margin: 0 auto;
        display: flex;
        overflow-y: auto;
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
          height: calc(100vh - 130px);

          overflow-y: auto;
        "
      >
        <div
          style="
            background-color: #ffffff;
            padding: 16px;
            width: 287px;
            height: auto;
            border-radius: 8px;
            overflow: hidden;
          "
        >
          <LayoutSider
            style="
              width: auto;
              background: #fff;
              height: 100%;
              overflow-y: auto;
            "
          >
            <Menu
              v-model:selectedKeys="selectedKeys2"
              v-model:openKeys="openKeys"
              mode="inline"
              style="
                width: auto;
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
                    <span style="font-weight: 500" @click="selectSection(1)"
                      >Terms of Service</span
                    >
                  </span>
                </template>
                <Menu.Item key="1" @click="scrollToElement(1, 'section-1')"
                  >Welcome to Miti!</Menu.Item
                >
                <Menu.Item key="2" @click="scrollToElement(1, 'section-2')"
                  >Our Service</Menu.Item
                >
                <Menu.Item key="3" @click="scrollToElement(1, 'section-3')"
                  >Your Service Provider</Menu.Item
                >
                <Menu.Item key="4" @click="scrollToElement(1, 'section-4')"
                  >Regarding Our Service</Menu.Item
                >
                <Menu.Item key="5" @click="scrollToElement(1, 'section-5')"
                  >Using Miti</Menu.Item
                >
                <Menu.Item key="6" @click="scrollToElement(1, 'section-6')"
                  >Your Rights and Licenses with Miti</Menu.Item
                >
                <Menu.Item key="7" @click="scrollToElement(1, 'section-7')"
                  >Disclaimers and Limitations of Liability</Menu.Item
                >
                <Menu.Item key="8" @click="scrollToElement(1, 'section-8')"
                  >Resolving Disputes and Terminating Terms</Menu.Item
                >
                <Menu.Item key="9" @click="scrollToElement(1, 'section-9')"
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
                    <span style="font-weight: 500" @click="selectSection(2)"
                      >Privacy Policy</span
                    >
                  </span>
                </template>
                <Menu.Item key="10" @click="scrollToElement(2, 'section-10')"
                  >Privacy Policy Notice</Menu.Item
                >
                <Menu.Item key="11" @click="scrollToElement(2, 'section-11')"
                  >Information We Collect</Menu.Item
                >
                <Menu.Item key="12" @click="scrollToElement(2, 'section-12')"
                  >How We Use Information</Menu.Item
                >
                <Menu.Item key="13" @click="scrollToElement(2, 'section-13')"
                  >How We Share Information</Menu.Item
                >
                <Menu.Item key="14" @click="scrollToElement(2, 'section-14')"
                  >Third-Party Content and Integrations</Menu.Item
                >
                <Menu.Item key="15" @click="scrollToElement(2, 'section-15')"
                  >How Long We Retain Your Information</Menu.Item
                >
                <Menu.Item key="16" @click="scrollToElement(2, 'section-16')"
                  >Controlling Your Information</Menu.Item
                >
                <Menu.Item key="17" @click="scrollToElement(2, 'section-17')"
                  >International Data Transfers</Menu.Item
                >
                <Menu.Item key="18" @click="scrollToElement(2, 'section-18')"
                  >State and Regional Specific Information</Menu.Item
                >
                <Menu.Item key="19" @click="scrollToElement(2, 'section-19')"
                  >Our Audience</Menu.Item
                >
                <Menu.Item key="20" @click="scrollToElement(2, 'section-20')"
                  >Updates to the Privacy Policy</Menu.Item
                >
                <Menu.Item key="21" @click="scrollToElement(2, 'section-21')"
                  >How to Contact Us</Menu.Item
                >
              </Menu.SubMenu>
            </Menu>
          </LayoutSider>
        </div>

        <div v-if="currentSection" class="text-container">
          <div
            v-html="currentSection.content.map((item) => item.content).join('')"
          ></div>
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
const SCROLL_TOP_MARGIN = 100;
const termsOfServiceSections = ref([
  {
    id: 1,
    title: "Welcome to Miti!",
    content: `
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
    `,
  },
  {
    id: 2,
    title: "Our Service",
    content: `
      <div id="section-2">
        <h1>Our Service</h1>
        <p>
          Our service allows you to send private messages, interact with AI
          Agents, and other services, providing a platform for people around
          the world to connect, communicate, and inspire.
        </p>
      </div>
    `,
  },
  {
    id: 3,
    title: "Your Service Provider",
    content: `
      <div id="section-3">
        <h1>Your Service Provider</h1>
        <p>
          The entity providing the service is Cat Pi Software INC., a
          company operating under the laws of the State of Delaware, United
          States, with its address at 874 Walker Road, Suite C, Dover,
          Delaware, United States (referred to as “Miti” or “we”).
        </p>
      </div>
    `,
  },
  {
    id: 4,
    title: "Regarding Our Service",
    content: `
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
            <p>
              Please read our Privacy Policy to understand how we protect
              the information you provide while using our service. To
              operate our service, you agree to our data practices as
              described in our Privacy Policy, including the transfer of
              your encrypted information and metadata to the United States
              and other countries where we have or use facilities, service
              providers, or partners.
            </p>
              </li>
              </li>
            </ul>
          </div>
          <div id="section-5">
            <p>
              Please read our Privacy Policy to understand how we protect the
              information you provide while using our service. To operate our
              service, you agree to our data practices as described in our
              Privacy Policy, including the transfer of your encrypted
              information and metadata to the United States and other countries
              where we have or use facilities, service providers, or partners.
            </p>
          </div>
          <ul style="padding-left: 1em">
          </li>
            </ul>
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
      </div>
    `,
  },
  {
    id: 5,
    title: "Using Miti",
    content: `
      <div id="section-5">
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
    `,
  },
  {
    id: 6,
    title: "Your Rights and Licenses with Miti",
    content: `
      <div id="section-6">
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
    `,
  },
  {
    id: 7,
    title: "Disclaimers and Limitations of Liability",
    content: `
      <div id="section-7">
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
    `,
  },
  {
    id: 8,
    title: "Resolving Disputes and Terminating Terms",
    content: `
      <div id="section-8">
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
    `,
  },
  {
    id: 9,
    title: "General",
    content: `
      <div id="section-9">
        <h1>General</h1>
        <p>
          Miti May Update These Terms from Time to Time. When we update our
          Terms, we will update the “Last Modified” date associated with the
          updated Terms. Your continued use of our service indicates your
          acknowledgment of the updated Terms and supersedes any prior
          Terms.
        </p>
      </div>
    `,
  },
]);
const privacyPolicySections = ref([
  {
    id: 1,
    title: "Privacy Policy Notice",
    content: `
      <div id="section-10">
        <h1>Privacy Policy Notice</h1>
        <p>
          Dear users of Miti (hereinafter referred to as "the Platform"), Cat Pi Software INC., with its registered address at 874 Walker Road, Suite C, Dover, Delaware, United States, and its affiliates, as operators of the Platform, acknowledge the importance of your personal information. We are committed to protecting your personal information and privacy in accordance with legal and regulatory requirements.
        </p>
        <p>
          When you use the Platform, we will collect, use, store, share, transfer, disclose, and protect your personal information as per this Privacy Policy. We are dedicated to maintaining your trust in us, adhering to principles such as the Consistency of Rights and Responsibilities, Clear Purpose, Consent Choice, Minimum Sufficiency, Security Assurance, Participant Involvement, and Transparency. We promise to adopt mature industry-standard security measures to protect your personal information.
        </p>
        <p>
          Before officially using the services through the Platform, please read this Privacy Policy carefully. If you have any questions during the reading process, feel free to contact us (email: support@miti.chat).
        </p>
        <p>
          By clicking the "I have read and agree" button, you indicate your acceptance and agreement to the terms of this Privacy Policy. You also consent to our collection, use, storage, sharing, transferring, disclosing, and protecting your personal information as specified in this Privacy Policy. If you do not agree with any terms of this Privacy Policy, you should immediately cease accessing and using the Platform.
        </p>
        <p>
          We will collect and use your information in accordance with this Privacy Policy, but we will not collect personal information in a bundled manner solely because you consent to this Privacy Policy. When you use or activate certain features or services, we will collect and use relevant information as necessary to realize the listed functions and services. Except for information necessary for business functions or as required by laws and regulations, you may refuse to provide it.
        </p>
        <p>
          Permissions in the mobile device are not enabled by default and will only be used for specific functions or services after your explicit authorization. You may also withdraw your authorization. It is important to note that even with your authorization, if we obtain sensitive permissions, we will not collect your information when it is not necessary for the related functions or services.
        </p>
      </div>
    `,
  },
  {
    id: 2,
    title: "Information We Collect",
    content: `
      <div id="section-11">
        <h1>Information We Collect</h1>
        <p>
          We collect information in three basic categories: Information you provide; Information we obtain when you use our services; Information we receive from third parties. More detailed information about each category is as follows:
        </p>
        <p>
          When you interact with our services, we collect information you provide to us. For example, many of our services require you to set up an account, so we need to collect some important details about you, such as your username, password, email address, phone number, gender, and date of birth. We may also ask you to provide additional information that will be publicly visible in our services, such as a personal avatar.
        </p>
        <p>
          Of course, you will also provide us with any information you send through our services, such as conversations with digital entities like My Miti, dynamic images, videos, etc. Remember, users who view your dynamics, chats, and any other content can always save that content or copy it outside the app. Therefore, the common sense applicable to the entire internet also applies to our services: do not send messages or share content that you do not want others to save or share.
        </p>
        <p>
          When you contact support or communicate with us in any other way, we will collect any information you voluntarily provide or that is necessary to resolve your issue.
        </p>
        <p>
          When you use our services, we collect information about which services you have used and how you have used them. For example, we may know that you have enabled auto-translation services in a conversation, shared a location, sent a business card or file, etc. Here is a more complete explanation of the types of information we collect when you use our services:
        </p>
        <p>
          Usage Information. We collect information about your activity through our services. For example, we may collect information about how you interact with our services, such as your interactions with digital entities like My Miti, or the search queries you submit.
        </p>
        <p>
          How you communicate with other Miti users, such as their names, the time and date of your communication, the number of messages you chat with friends, with whom you chat the most, and your interactions with the messages (e.g., when you open a message or when we detect you've captured a screenshot).
        </p>
        <p>
          Content Information. When you use our services, you can create and share various types of content, such as articles, daily dynamics, etc., using tools like cameras. We collect information about the content you create or provide in our services and your use of tools like cameras. We may also collect other information about the content, including metadata - information about the content itself, such as the date and time it was posted and the viewers.
        </p>
        <p>
          Device Information. We collect information about the device you use from your device. For example, we may collect information about your hardware and software, such as hardware model, operating system version, device memory, advertising identifiers, unique application identifiers, installed applications, unique device identifiers, device usage data, browser type, installed keyboards, language, battery level, and time zone; Information from device sensors, such as accelerometers, gyroscopes, compasses, microphones, and whether you have connected headphones; Information about your wireless and mobile network connections, such as phone number, service provider, IP address, and signal strength.
        </p>
        <p>
          Camera, Photos, and Audio. Many of our services require us to collect images and other information from your device's camera, photos, and microphone. Unless we can access your camera or photo album, you will not be able to send dynamics or upload photos from your album.
        </p>
        <p>
          Location Information. When you use our services, we may collect information about your location. With your permission, we may also collect information about your precise location through methods such as GPS signals.
        </p>
        <p>
          Information Collected Through Cookies and Other Technologies. Like most online services and mobile applications, we may use cookies and other technologies (such as web beacons, web storage, and unique advertising identifiers) to collect information about your activity, browser, and device. We may also use these technologies to collect information when you interact with services we offer through our partners, such as advertising and commercial features. For example, we may use information collected on other websites to show you more relevant ads. Most web browsers are set to accept cookies by default. If you wish, you can usually delete or reject browser cookies through the settings on your browser or device. But remember, deleting or rejecting cookies may affect the availability and functionality of our services.
        </p>
        <p>
          Log Information. When you use our website, we may also collect log information, such as: Detailed information about how you use our services; Device information, such as your network browser type and language; Access times; Pages browsed; IP address; Identifiers associated with cookies or other technologies that can uniquely identify your device or browser; Pages you visited before or after navigating to our website.
        </p>
        <p>
          Other Information with Your Permission. In some cases, when you interact with our services, we may ask your permission to collect other information.
        </p>
        <p>
          Information We Collect from Third Parties. We may collect information about you from other users and third parties. Here are some examples: If you link your Miti account to other services, we may receive information about how you use that service; We may receive information from advertisers, application developers, publishers, and other third parties. We may use this information to help target or measure the effectiveness of ads; If you provide us with your contact information, we may use that information, along with information obtained from third parties, to determine whether we can communicate with you on other messaging platforms; We may receive information about people who potentially violate our service terms and community guidelines from third parties, including website publishers, social network providers, law enforcement, and others.
        </p>
      </div>
    `,
  },
  {
    id: 3,
    title: "How We Use Information",
    content: `
      <div id="section-12">
        <h1>How We Use Information</h1>
        <p>
          We use the information in the following ways: To develop, operate, improve, deliver, maintain, and protect our products and services; To provide, personalize, and improve our advertising services, ad targeting, and ad measurement, including using your content and precise location information (likewise, if you allow us to collect precise location information), whether within our services or outside. For this, we may also store information about your use of third-party applications and websites on your device; To add background information to your Miti experience, for example, based on your location (of course, if you allow us to collect your precise location) and your photo or video content; To develop and improve our digital entities and prevent abuse or other violations of our service terms; To conduct research to better understand the interests and trends of Miti users, including how our services are used; To use the information you provide to communicate with you on other messaging platforms; To enhance the security of our products and services; To verify your identity and prevent fraud or other unauthorized or illegal activities; To use information we collect from cookies and other technologies to enhance our services and your user experience; To enforce, investigate, and report violations of our service terms and other usage policies, respond to law enforcement requests, and comply with legal requirements; To send you communications, where permitted, including through email, text messages, or other messaging platforms; To monitor and analyze trends and usage.
        </p>
      </div>
    `,
  },
  {
    id: 4,
    title: "How We Share Information",
    content: `
      <div id="section-13">
        <h1>How We Share Information</h1>
        <p>
          Why do we share the information we collect? Most of the time, it's because you've asked us to. Sometimes we share it because we need to. We may share your information in the following ways: Sharing Information with Other Miti Users. We may share the following information with other Miti users: Information about you, such as your username, name, and avatar; Information about how you interact with our services and the content you engage with, such as your Miti "points," the names of Miti users or AI digital entities you've befriended, the closeness of your interactions with friends on Miti, your recent location history (if you choose to share your precise location on Miti), and other information that helps Miti users understand your connections with other people using our services. For example, to clarify if a new friend request comes from someone you actually know, we may share information about whether you and the requester have mutual Miti friends or are in the same area; Information about your device, such as the operating system and device type, to help you receive chats, images, videos, and other content in the best viewing format; Any other information you instruct us to share. For instance, when you connect your Miti account to a third-party app, and when you share information or content from Miti to a third-party app, Miti will share your information; Content you post or send. The sharing range of your content depends on your personal settings and the type of service you use. For example, dynamics might be sent to a single friend you choose, but your posts might be seen by any Miti user you allow to view your posts.
        </p>
        <p>
          Sharing Information with All Miti Users, Our Business Partners, and the Public. We may share the following information with all Miti users as well as our business partners and the public: Public information, such as your name, username, profile picture, and public profile; Public content, such as dynamics, posts set to be viewable by everyone, and any content you submit to inherently public services (like maps and other crowdsourcing services). The general public can view, use, and share this content both within and outside of our services, including through search results, websites, applications, and both online and offline broadcasts.
        </p>
        <p>
          Sharing Information with Third Parties. We may share information with third parties in the following ways: We may share your information with service providers who perform services on our behalf, including facilitating payments, measuring and optimizing advertising effectiveness, and delivering more relevant ads (including on third-party websites and apps); We may share information about you with business partners who provide services and features; We may share information about you, such as device and usage information, to help us and others prevent fraud; For legal, security, and safety reasons, we may share information about you. If we reasonably believe that disclosing information is necessary for the following purposes, we may share your information: To comply with any valid legal process, government request, or applicable law, rule, or regulation; To investigate, remedy, or enforce potential violations of service terms and community guidelines; To protect the rights, property, or safety of us, our users, or others; To detect and resolve any fraud or security concerns; As part of a merger or acquisition, we may share your information. If Cat Pi Software INC. is involved in a merger, asset sale, financing, liquidation, or bankruptcy, or if we sell all or part of our business to another company, we may share your information before and after the transaction with that company.
        </p>
        <p>
          Non-Personal Information. We may also share aggregated, non-personally identifiable, or de-identified information with third parties who provide services to us or perform business purposes for us.
        </p>
      </div>
    `,
  },
  {
    id: 5,
    title: "Third-Party Content and Integrations",
    content: `
      <div id="section-14">
        <h1>Third-Party Content and Integrations</h1>
        <p>
          Our services may include third-party content and integrations. Examples include third-party integrations in digital entity models, etc. Through these integrations, you may provide information to third parties. We are not responsible for how these third parties collect or use your information. As always, we encourage you to review the privacy policies of every third-party service you visit or use, including third parties you interact with through our services.
        </p>
      </div>
    `,
  },
  {
    id: 6,
    title: "How Long We Retain Your Information",
    content: `
      <div id="section-15">
        <h1>How Long We Retain Your Information</h1>
        <p>
          We will store your basic account information (such as your name, phone number, and email address) and your friends list until you ask us to delete them. If you decide to stop using Miti, you can ask us to delete your account. After a period of inactivity, we will also delete most of the information we have collected about you. Please remember, while our systems are designed to carry out deletion operations automatically, we cannot guarantee that deletion will occur within a specific timeframe. There might be legal requirements to store your data, and if we receive a valid legal process requiring us to preserve content, or if we receive reports of abuse or other violations of service terms, or if your account, content you created, or content created by other users is flagged for abuse or other service term violations, we may need to suspend the practice of deleting this data. Finally, we may also retain backups of certain information for a limited time or as required by law.
        </p>
      </div>
    `,
  },
  {
    id: 7,
    title: "Controlling Your Information",
    content: `
      <div id="section-16">
        <h1>Controlling Your Information</h1>
        <p>
          We want you to be in control of your information, so we provide you with the following tools: Access, Correction, and Portability. You can access and edit most of your basic account information directly within our app. You can also use the "Download My Data" feature to obtain a copy of information not available in our app in a portable format so that you can move it or store it wherever you want. Since your privacy is important to us, we may ask you to verify your identity or provide additional information before allowing you to access or update your personal information. We may also refuse your request to access or update your personal information for various reasons, such as if the request would jeopardize the privacy of other users or is unlawful. Revoking Permissions. In most cases, if you've allowed us to use your information, you can simply revoke your permission by changing the settings on the app or device (if your device provides these options). Of course, doing so might cause some services to lose full functionality. For promotional emails and messages sent via SMS or other messaging platforms, you can opt-out by clicking the unsubscribe link or using a similar mechanism provided. Deletion. Although we hope you'll always be a Miti user, if for some reason you want to delete your account, please go here to learn how to do it. You can also delete some information in the app, such as conversations with My Miti and search history. Communication with Other Miti Users. For us, it's important that you can control who you communicate with. That's why we've built many tools in the "Settings" so that you can specify who you want to see your dynamics, whether you only want to receive dynamics from your friends, your friends and contacts, or all Miti users, and whether you want to block other Miti users from contacting you again. Go here for more information.
        </p>
      </div>
    `,
  },
  {
    id: 8,
    title: "International Data Transfers",
    content: `
      <div id="section-17">
        <h1>International Data Transfers</h1>
        <p>
          We may collect, transfer, store, and process your personal information in the United States and other countries outside of where you live. Whenever we share information outside of your place of residence, we ensure that appropriate transfer mechanisms are in place when legally required. We also ensure that any third party with whom we share information also has appropriate transfer mechanisms. You can find more information about the categories of third parties with whom we share information here.
        </p>
      </div>
    `,
  },
  {
    id: 9,
    title: "State and Regional Specific Information",
    content: `
      <div id="section-18">
        <h1>State and Regional Specific Information</h1>
        <p>
          You may have specific privacy rights in the state or region where you reside. For example, residents of California and other states in the United States have certain privacy rights. Miti users in the European Economic Area (EEA), the United Kingdom, Brazil, South Korea, and other jurisdictions also have specific rights. We maintain an up-to-date overview of state and regional-specific disclosures here.
        </p>
      </div>
    `,
  },
  {
    id: 10,
    title: "Our Audience",
    content: `
      <div id="section-19">
        <h1>Our Audience</h1>
        <p>
          Our services are not intended for (nor do we directly target) anyone under the age of 13. That's why we do not knowingly collect personal information from anyone under the age of 13. Additionally, we may restrict the ways we collect, use, and store some information of users under the age of 18. In some cases, this means that we may not be able to provide certain features to these users.
        </p>
      </div>
    `,
  },
  {
    id: 11,
    title: "Updates to the Privacy Policy",
    content: `
      <div id="section-20">
        <h1>Updates to the Privacy Policy</h1>
        <p>
          We may change this Privacy Policy from time to time. But when we do, we will notify you in some way. Sometimes, we notify you by updating the date at the top of the Privacy Policy available on our website and mobile application. Other times, we may provide additional notice (such as adding a statement to our website's homepage or providing an in-app notification).
        </p>
      </div>
    `,
  },
  {
    id: 12,
    title: "How to Contact Us",
    content: `
      <div id="section-21">
        <h1>How to Contact Us</h1>
        <p>
          If you have any questions, comments, or suggestions about this Privacy Policy, or to make complaints and appeals, contact us in the following way, and we will generally reply within 15 working days: Email: support@miti.chat Effective from December 31, 2023.
        </p>
      </div>
    `,
  },
]);
const sections = ref([
  {
    id: 1,
    title: "Terms of Service",
    content: termsOfServiceSections.value,
  },
  {
    id: 2,
    title: "Privacy Policy",
    content: privacyPolicySections.value,
  },
]);
const selectedKeys2 = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);
const router = useRouter();

const currentSection = ref(sections.value[0]);

const selectSection = (sectionId: number) => {
  const selectedSection = sections.value.find(
    (section) => section.id === sectionId
  );

  if (selectedSection) {
    currentSection.value = selectedSection;
  }
};
const scrollToElement = (sectionId: any, elementId: any) => {
  const targetSectionId =
    sectionId === 1 ? "Terms of Service" : "Privacy Policy";
  if (currentSection.value.title !== targetSectionId) {
    selectSection(sectionId);
    const element = document.getElementById(elementId);
    if (element) {
      const scrollPosition = element.offsetTop - SCROLL_TOP_MARGIN;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  } else {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
:deep(.ant-menu-item) {
  flex: none !important;
  white-space: normal !important;
  padding-left: 24px !important;
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
  padding-left: 0px;
  white-space: normal;
  padding-left: 0px !important;
}

:deep(.ant-menu-item .ant-menu-title-content),
:deep(.ant-menu-submenu-title .ant-menu-title-content) {
  flex: none !important;
  white-space: normal !important;
  height: auto !important;
  width: 100%;
  line-height: 20px !important;
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
  height: 100%;

  :deep(h1) {
    font-family: "Helvetica-Medium";
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    line-height: 28px;
    text-align: left;
    margin-top: 20px;
  }
  :deep(h2) {
    font-family: "Helvetica-Medium";
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    line-height: 28px;
    text-align: left;
    margin-top: 20px;
  }
  :deep(h3) {
    font-family: "Helvetica-Medium";
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    line-height: 28px;
    text-align: left;
    margin-top: 20px;
  }

  :deep(p) {
    font-family: "Helvetica-Regular";
    font-weight: 400;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 28px;
    text-align: left;
    margin-top: 20px;
  }
  :deep(ul) {
    font-family: "Helvetica-Regular";
    font-weight: 400;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 28px;
    text-align: left;
    margin-top: 20px;
  }
  :deep(li) {
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
