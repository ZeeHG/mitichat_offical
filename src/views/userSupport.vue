<template>
  <Layout style="height: 100vh; background: #f4f6fa">
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
            overflow-y: auto;
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
                    <span style="font-weight: 500"> Getting Started </span>
                  </span>
                </template>
                <Menu.Item key="1" @click="selectSection(1)"
                  >Download miti.chat</Menu.Item
                >
                <Menu.Item key="2" @click="selectSection(2)">
                  Register a miti Account</Menu.Item
                >
                <Menu.Item key="3" @click="selectSection(3)"
                  >Update miti.chat</Menu.Item
                >
                <Menu.Item key="4" @click="selectSection(4)"
                  >Account Settings</Menu.Item
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
                    <span style="font-weight: 500"> Messaging </span>
                  </span>
                </template>
                <Menu.Item key="5" @click="selectSection(5)"
                  >Sending Messages</Menu.Item
                >

                <Menu.Item key="6" @click="selectSection(6)"
                  >Message Recall</Menu.Item
                >
                <Menu.Item key="7" @click="selectSection(7)"
                  >Audio/Video Calls</Menu.Item
                >
                <Menu.Item key="8" @click="selectSection(8)"
                  >Group Chats</Menu.Item
                >
                <Menu.Item key="9" @click="selectSection(9)"
                  >Burn After Reading</Menu.Item
                >
                <Menu.Item key="10" @click="selectSection(10)"
                  >Pin/Delete Chat</Menu.Item
                >
                <Menu.Item key="11" @click="selectSection(11)"
                  >Search Chat History</Menu.Item
                >
                <Menu.Item key="12" @click="selectSection(12)"
                  >Auto-Translation</Menu.Item
                >
                <Menu.Item key="13" @click="selectSection(13)"
                  >Not Receiving miti Notifications?</Menu.Item
                >
              </Menu.SubMenu>
              <Menu.SubMenu key="sub3">
                <template #title>
                  <span style="display: flex; align-items: center">
                    <img
                      v-if="openKeys.includes('sub3')"
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
                    <span style="font-weight: 500"> Friends </span>
                  </span>
                </template>
                <Menu.Item key="14" @click="selectSection(14)"
                  >Add Friends</Menu.Item
                >
                <Menu.Item key="15" @click="selectSection(15)">
                  Delete Friends</Menu.Item
                >
                <Menu.Item key="16" @click="selectSection(16)"
                  >Friend Limit</Menu.Item
                >
                <Menu.Item key="17" @click="selectSection(17)"
                  >Blacklist</Menu.Item
                >
                <Menu.Item key="18" @click="selectSection(18)"
                  >Check If Blocked</Menu.Item
                >
                <Menu.Item key="19" @click="selectSection(19)"
                  >Friend Notes</Menu.Item
                >
                <Menu.Item key="20" @click="selectSection(20)"
                  >Prevent Others from Adding You</Menu.Item
                >
              </Menu.SubMenu>
              <Menu.SubMenu key="sub4">
                <template #title>
                  <span style="display: flex; align-items: center">
                    <img
                      v-if="openKeys.includes('sub4')"
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
                    <span style="font-weight: 500"> Settings </span>
                  </span>
                </template>
                <Menu.Item key="21" @click="selectSection(21)"
                  >Personal Information Settings</Menu.Item
                >
                <Menu.Item key="22" @click="selectSection(22)"
                  >mitiID</Menu.Item
                >
                <Menu.Item key="23" @click="selectSection(23)"
                  >Modify Bound Account</Menu.Item
                >
                <Menu.Item key="24" @click="selectSection(24)"
                  >Set New Message Alerts</Menu.Item
                ><Menu.Item key="25" @click="selectSection(25)"
                  >Change System Language</Menu.Item
                >
              </Menu.SubMenu>
              <Menu.SubMenu key="sub5">
                <template #title>
                  <span style="display: flex; align-items: center">
                    <img
                      v-if="openKeys.includes('sub5')"
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
                    <span style="font-weight: 500"> Discovery and Circle </span>
                  </span>
                </template>
                <Menu.Item key="26" @click="selectSection(26)"
                  >Differences Between Discovery and Circle</Menu.Item
                >
                <Menu.Item key="27" @click="selectSection(27)"
                  >Post Content in Circle</Menu.Item
                >
                <Menu.Item key="28" @click="selectSection(28)"
                  >Set Circle Post Viewing Permissions</Menu.Item
                >
                <Menu.Item key="29" @click="selectSection(29)"
                  >Delete Circle Posts</Menu.Item
                >
                <Menu.Item key="30" @click="selectSection(30)"
                  >Post Content in Discovery</Menu.Item
                >
                <Menu.Item key="31" @click="selectSection(31)"
                  >Delete Discovery Posts</Menu.Item
                >
              </Menu.SubMenu>
              <Menu.SubMenu key="sub6">
                <template #title>
                  <span style="display: flex; align-items: center">
                    <img
                      v-if="openKeys.includes('sub6')"
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
                    <span style="font-weight: 500"> AI Features</span>
                  </span>
                </template>
                <Menu.Item key="32" @click="selectSection(32)"
                  >Introduction to miti AI Features</Menu.Item
                >
                <Menu.Item key="33" @click="selectSection(33)"
                  >Accessing AI Features</Menu.Item
                >
                <Menu.Item key="34" @click="selectSection(34)"
                  >Activation Mechanism</Menu.Item
                >
                <Menu.Item key="35" @click="selectSection(35)"
                  >Differentiate AI Agents and Real Friends</Menu.Item
                >
              </Menu.SubMenu>
            </Menu>
          </LayoutSider>
        </div>
        <div
          v-if="currentSection"
          class="text-container"
          v-html="currentSection.content"
        ></div>
      </Layout>
    </LayoutContent>
  </Layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Layout, Menu, Breadcrumb } from "ant-design-vue";
import { useRouter } from "vue-router";
const sections = ref([
  {
    id: 1,
    title: "Download miti.chat",
    content: `
      <div>
        <h3>Download miti.chat</h3>
        <h3>1. Android</h3>
        <p>1) Ensure your Android version is 10.0 or higher.</p>
        <p>2) Find miti.chat in the Google Play Store and click "Install."</p>
        <h3>2. iOS</h3>
        <p>1) Ensure your iOS version is 13 or higher.</p>
        <p>2)Find miti.chat in the Apple App Store and click "Get."</p>
        <h3>3. Web</h3>
        <p>1) You can access miti web by opening miti.chat in your browser, whether on computer or mobile phone.</p>
        <p>2) To add miti web to your mobile home screen:</p>
        <ul>
          <li>For Android, open Chrome, navigate to miti.chat, click the three dots in the upper-right corner, and select "Add to Home screen."</li>
          <li>For iOS, open Safari, click the share button at the bottom center, and select "Add to Home screen."</li>
        </ul>
        <h3>4. PC</h3>
        <p>1) Ensure your computer runs Windows 10 or higher.</p>
        <p>2) Currently, macOS and Linux systems are not supported.</p>
        <p>3) Click the link <a href="https://miti.chat/download/miti_1.0.0.exe">https://miti.chat/download/miti_1.0.0.exe</a> to download the miti.chat PC version and follow the installation instructions.</p>
      </div>
    `,
  },
  {
    id: 2,
    title: "Register a miti Account",
    content: `
      <div>
        <h3>Register a miti Account</h3>
        <h3>1. Register with a Phone Number</h3>
        <p>1) Click "Register now" on the login screen to go to the "Sign up with Mobile" screen.</p>
        <p>2) Enter an optional invite code, username, and password.</p>
        <p>3) Select your country/region from the dropdown menu and enter your phone number in the box.</p>
        <p>4) Click "Send Verification Code" to request a verification code.</p>
        <p>5) Enter the 6-digit code you received on your phone.</p>
        <p>6) If you don't receive the code:</p>
        <ul>
          <li>Phone: Check if your country/region is on the list below. If not, use email registration. If listed, try resending the code.</li>
         <table class="centered-table">
          <colgroup>
            <col class="narrow-column"></col>
            <col class="wide-column"></col>
          </colgroup>
        <thead>
          <tr>
            <th>Country Codes</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>+1</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>+1</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>+61</td>
            <td>Australia</td>
          </tr>
          <tr>
            <td>+81</td>
            <td>Japan</td>
          </tr>
          <tr>
            <td>+82</td>
            <td>South Korea</td>
          </tr>
          <tr>
            <td>+34</td>
            <td>Spain</td>
          </tr>
        </tbody>
      </table>
          <li>Email: Check your spam folder for the verification email. If not found, try resending the code.</li>
        </ul>
        <h3>2. Register with an Email</h3>
        <p>1) Click "Register now" on the login screen to go to the "Sign up with Email" screen.</p>
        <p>2) Enter an optional invite code, username, and password.</p>
        <p>3) Enter your email and click "Send Verification Code."</p>
        <p>4) Enter the 6-digit code received in your email.</p>
        <h3>3. Register with Facebook</h3>
        <p>1) Click the Facebook button at the bottom of the login screen.</p>
        <p>2) Allow miti.chat to open the Facebook app.</p>
        <p>3) System will automatically create a miti account.</p>
      </div>
    `,
  },
  {
    id: 3,
    title: "Update miti.chat",
    content: `
      <div>
        <h3>Update miti.chat</h3>
        <h3>1. Android</h3>
        <p>Find miti.chat in the Google Play Store and click "Update."</p>
        <h3>2. iOS</h3>
        <p>Find miti.chat in the Apple App Store and click "Update."</p>
        <h3>3. Web</h3>
        <p>Refresh the web login interface at miti.chat.</p>
        <h3>4. PC</h3>
        <p>Visit the miti website at <a href="http://www.mitichat.com">www.mitichat.com</a> and click "Download for PC" at the bottom to download the latest installer. Follow the instructions to update.</p>
      </div>
    `,
  },
  {
    id: 4,
    title: "Account Settings",
    content: `
      <div>
        <h3>Account Settings</h3>
        <h3>1. Registered Phone and Email</h3>
        <p>1) Use the phone or email registered at sign-up to log in.</p>
        <p>2) In the "My" menu, click "Account Settings" to enter "Account & Security" and modify your bound phone number and email.</p>
      </div>
    `,
  },
  {
    id: 5,
    title: "Sending Messages",
    content: `
      <div>
        <h3>Sending Messages</h3>
        <h3>1. Text Messages</h3>
        <p>Enter text in the input area at the bottom of the screen, then click the arrow icon on the right to send.</p>
        <h3>2. Voice Messages</h3>
        <p>1) Sending: Tap the voice button on the bottom left, hold the "Hold to Talk" button, speak, and release to send. Maximum length is 60 seconds.</p>
        <p>2) Cancel Recording: Slide your finger up from the "Hold to Talk" button to cancel.</p>
        <p>3) Voice to Text: Long press the voice message, then click "Convert to Text."</p>
        <h3>3. Photos or Videos</h3>
        <p>Click the plus icon next to the text input area, then click "Album" at the bottom. Select the circle at the top right of the photos or videos you want to send, then click the confirm button at the bottom right.</p>
        <h3>4. Location</h3>
        <p>Click the plus icon next to the text input area, then click "Location" at the bottom. Select the location to send, then click "Confirm."</p>
        <h3>5. Contact Card</h3>
        <p>Click the plus icon next to the text input area, then click "Card" at the bottom. Select the contact to send.</p>
        <h3>6. Files</h3>
        <p>Click the plus icon next to the text input area, then click "File" at the bottom. Select the file to send.</p>
      </div>
    `,
  },
  {
    id: 6,
    title: "Message Recall",
    content: `
      <div>
        <h3>Message Recall</h3>
        <p class="no-subtitle">Long press the sent message, click "Recall" to retract the sent message. This feature supports recalling voice, text, image, video, contact card, and location messages sent within the last 2 minutes.</p>
      </div>
    `,
  },
  {
    id: 7,
    title: "Audio/Video Calls",
    content: `
      <div>
        <h3>Audio/Video Calls</h3>
        <p class="no-subtitle">Click the plus icon next to the text input area, then click "Call" at the bottom to choose between starting a video or voice call.</p>
      </div>
    `,
  },
  {
    id: 8,
    title: "Group Chats",
    content: `
      <div>
        <h3>Group Chats</h3>
        <h3>1. Create a Group Chat</h3>
        <p>In the "Chat" menu, click the plus icon in the top right, select "Create Group," check the circle next to the contacts, then click "Confirm" at the bottom right.</p>
        <h3>2. Dismiss a Group Chat</h3>
        <p>Only the group owner can disband the group. The owner clicks the three dots in the top right of the group chat screen, enters chat settings, scrolls to the bottom, and clicks "Dismiss Group."</p>
        <h3>3. Exit a Group Chat</h3>
        <p>Group members click the three dots in the top right of the group chat screen, enter chat settings, scroll to the bottom, and click "Exit Group."</p>
        <h3>4. Join a Group Chat</h3>
        <p>1) In the "Chat" menu, click the plus icon in the top right, select "Add Group," and search for the group ID to add.</p>
        <p>2) Scan the group QR code using "Scan" in the "Chat" menu.</p>
        <p>3) Add through group contact cards.</p>
        <h3>5. Group Management</h3>
        <p>Group owners click the three dots in the top right of the group chat screen, enter chat settings, and click "Group Management" to enable/disable group-wide silence, prevent members from viewing others' profiles, and add members as friends. Also, set group entry verification or transfer ownership.</p>
        <h3>6. Add Friends to Group Chat</h3>
        <p>Click the three dots in the top right of the group chat screen, enter chat settings, click the add button next to member avatars, select the people to invite, and click "Confirm."</p>
        <h3>7. Remove Members from Group Chat</h3>
        <p>Only the group owner can remove members. The owner clicks the three dots in the top right of the group chat screen, enters chat settings, clicks the remove button next to member avatars, selects the members to remove, and clicks "Confirm."</p>
        <h3>8. Group Announcements</h3>
        <p>Group owners can post announcements. Click the three dots in the top right of the group chat screen, enter chat settings, and click "Group Announcement" to edit.</p>
        <h3>9. Group QR Code</h3>
        <p>Click the three dots in the top right of the group chat screen, enter chat settings, click the QR code next to the group name, or click "Group QR Code" to save and share.</p>
        <p>1) Group Audio/Video Calls</p>
        <p>Click the plus icon next to the text input area, then click "Call" at the bottom, select group members to invite for audio or video calls, and click "Confirm."</p>
        <p>2)Mute Group Notifications</p>
        <p>Click the three dots in the top right of the group chat screen, enter chat settings, and turn on "Do Not Disturb."</p>
      </div>
    `,
  },
  {
    id: 9,
    title: "Burn After Reading",
    content: `
      <div>
        <h3>Burn After Reading</h3>
        <p  class="no-subtitle">Burn After Reading is an optional feature for one-on-one chats.</p>
        <h3>1. Enable/Disable Burn After Reading</h3>
        <p>1) Click the plus icon next to the text input area, then click "Burn After Reading" to enable or disable.</p>
        <p>2) Click the three dots in the top right of the chat screen, enter chat settings, and toggle "Burn After Reading."</p>
        <h3>2. Set Burn After Reading Time</h3>
        <p>1) Click the three dots in the top right of the chat screen, enter chat settings, and enable "Burn After Reading."</p>
        <p>2) Select the burn time under "Time Settings." Default is 30 seconds, but you can set it to 5 minutes, 1 hour, or 1 day.</p>
      </div>
    `,
  },
  {
    id: 10,
    title: "Pin/Delete Chat",
    content: `
      <div>
        <h3>Pin/Delete Chat</h3>
        <p class="no-subtitle">Swipe left on the conversation bar in the chat menu, and click "Pin" or "Delete."</p>
      </div>
    `,
  },
  {
    id: 11,
    title: "Search Chat History",
    content: `
      <div>
        <h3>Search Chat History</h3>
        <p class="no-subtitle">Click the plus icon next to the text input area, then click "Search" at the bottom to quickly find conversations, images, videos, and files.</p>
      </div>
    `,
  },
  {
    id: 12,
    title: "Auto-Translation",
    content: `
      <div>
        <h3>Auto-Translation</h3>
        <h3>1. Introduction to Auto-Translation</h3>
        <p>Auto-Translation automatically translates received messages into your target language, enabling seamless communication in up to 63 languages.</p>
        <h3>2. Enable Auto-Translation</h3>
        <p>Click the plus icon next to the text input area, then click "Auto-Translation," toggle it on, and select the target language. If set to auto, it matches the system language.</p>
        <h3>3. Manual Translation</h3>
        <p>Messages before enabling Auto-Translation won't be translated. Long press a message and click "Translate" to manually translate a single message.</p>
      </div>
    `,
  },
  {
    id: 13,
    title: "Not Receiving miti Notifications?",
    content: `
      <div>
        <h3>Not Receiving miti Notifications?</h3>
        <h3>1. Android</h3>
        <p>Long press the miti.chat app icon, click app details, and check if notifications or background behavior is allowed and if Do Not Disturb mode is off.</p>
        <h3>2. iOS</h3>
        <p>Check if notifications are enabled, or if miti is added in "Allow Notifications" under Focus Mode, and ensure Do Not Disturb mode is off.</p>
      </div>
    `,
  },
  {
    id: 14,
    title: "Add Friends",
    content: `
      <div>
        <h3>Add Friends</h3>
        <h3>1. Add Friends Actively</h3>
        <p>1) In the "Chat" menu, click the plus icon in the top right, select "Add Friend," and search for their mitiID/phone number. Nickname search is not supported.</p>
        <p>2) In the "Chat" menu, click the plus icon in the top right, and click "Scan" to scan their personal QR code.</p>
        <p>3) Click on the contact card shared by an existing friend to add.</p>
        <h3>2. Accept Friend Requests</h3>
        <p>In the "Chat" menu, click "Friends," select "Recently Added," click "View," and then click "Accept."</p>
      </div>
    `,
  },
  {
    id: 15,
    title: "Delete Friends",
    content: `
      <div>
        <h3>Delete Friends</h3>
        <p class="no-subtitle">Click the friend's avatar, click the function button in the top right, and click "Unfriend."</p>
      </div>
    `,
  },
  {
    id: 16,
    title: "Friend Limit",
    content: `
      <div>
        <h3>Friend Limit</h3>
        <p class="no-subtitle">You can add up to 10,000 friends on miti (excluding groups).</p>
      </div>
    `,
  },
  {
    id: 17,
    title: "Blacklist",
    content: `
      <div>
        <h3> Blacklist</h3>
        <h3>1. Introduction to Blacklist</h3>
        <p>1) You won't receive messages from blocked contacts.</p>
        <p>2) Blocked contacts cannot send you messages and will receive a "Message sent but rejected" notification, but you can send messages to them.</p>
        <h3>2. Add/Remove Blacklist</h3>
        <p>1) Add: Click the friend's avatar, click the function button in the top right, and turn on "Add to Blocklist."</p>
        <p>2) Remove: Click the friend's avatar, click the function button in the top right, and turn off "Add to Blocklist."</p>
      </div>
    `,
  },
  {
    id: 18,
    title: "Check If Blocked",
    content: `
      <div>
        <h3>Check If Blocked</h3>
        <p class="no-subtitle">If you are blocked, you'll receive a "Message sent but rejected" notification when trying to message them.</p>
      </div>
    `,
  },
  {
    id: 19,
    title: "Friend Notes",
    content: `
      <div>
        <h3>Friend Notes</h3>
        <h3>1. Introduction to Friend Notes</h3>
        <p>Add or modify notes to better identify and search for friends in your contact list.</p>
        <h3>2. Add/Modify Remark</h3>
        <p>Click the friend's avatar, click "Remark," edit, and save the remark.</p>
      </div>
    `,
  },
  {
    id: 20,
    title: "Prevent Others from Adding You",
    content: `
      <div>
        <h3>Prevent Others from Adding You</h3>
        <p class="no-subtitle">In "My" menu, click "Account Settings," and enable "Disallow Add Me as Friend."</p>
      </div>
    `,
  },
  {
    id: 21,
    title: "Personal Information Settings",
    content: `
      <div>
        <h3>Personal Information Settings</h3>
        <p class="no-subtitle">In "My" menu, click "My Info" to set your miti nickname, gender, birthday, avatar, and mitiID.</p>
      </div>
    `,
  },
  {
    id: 22,
    title: "mitiID",
    content: `
      <div>
        <h3>mitiID</h3>
        <h3>1. Introduction to mitiID</h3>
        <p>mitiID is your unique identifier on miti, allowing others to add you as a friend by searching for your mitiID.</p>
        <h3>2. Change mitiID</h3>
        <p>In "My" menu, select "My Info," click "mitiID," and click "Change mitiID." The new mitiID must be unique and can only be changed once per year. Once changed, it cannot be reverted, and others won't be able to find you using the old mitiID.</p>
      </div>
    `,
  },
  {
    id: 23,
    title: "Modify Bound Account",
    content: `
      <div>
        <h3>Modify Bound Account</h3>
        <p class="no-subtitle">In "My" menu, click "Account Setup," then click "Account & Security" to manage the phone number and email linked to different accounts.</p>
      </div>
    `,
  },
  {
    id: 24,
    title: "Set New Message Alerts",
    content: `
      <div>
        <h3>Set New Message Alerts</h3>
        <p class="no-subtitle">In "My" menu, click "Account Settings," and set the notification sound or vibration for new messages while miti is running. Enable "Do Not Disturb Mode" at the top of the "Account Settings" screen to stop receiving notifications.</p>
      </div>
    `,
  },
  {
    id: 25,
    title: "Change System Language",
    content: `
      <div>
        <h3>Change System Language</h3>
        <p class="no-subtitle">In "My" menu, click "Account Settings," then "Language Setup." miti currently supports English, Simplified Chinese, Japanese, Korean, and Spanish.</p>
      </div>
    `,
  },
  {
    id: 26,
    title: "Differences Between Discovery and Circle",
    content: `
      <div>
        <h3>Differences Between Discovery and Circle</h3>
        <p class="no-subtitle">Discovery content is visible to everyone, while Circle content is only visible to your friends or specific people you set.</p>
      </div>
    `,
  },
  {
    id: 27,
    title: "Post Content in Circle",
    content: `
      <div>
        <h3>Post Content in Circle</h3>
        <p>In the "Circle" menu, click the "New Post" button in the top right, edit your text, click the plus icon below the text input to add photos or videos, then click "Publish" at the top right.</p>
        <ul>
          <li>If no photos or videos are selected, the post will be text-only.</li>
          <li>A single post can include up to 9 photos/videos.</li>
          <li>To arrange the order of photos/videos, adjust the selection order when choosing from the album. The order will be shown at the top left of each thumbnail.</li>
          <li>You can only post videos up to 15 seconds long directly from the album.</li>
          <li>When posting, you can use the "Tag Friends" feature to notify friends mentioned.</li>
        </ul>
      </div>
    `,
  },
  {
    id: 28,
    title: "Set Circle Post Viewing Permissions",
    content: `
      <div>
        <h3>Set Circle Post Viewing Permissions</h3>
        <p class="no-subtitle">On the Circle posting page, click "Who Can Watch" to set the viewing permissions for your post.</p>
      </div>
    `,
  },
  {
    id: 29,
    title: "Delete Circle Posts",
    content: `
      <div>
        <h3> Delete Circle Posts</h3>
        <p class="no-subtitle">Enter the post you created and click the delete button at the bottom left.</p>
      </div>
    `,
  },
  {
    id: 30,
    title: "Post Content in Discovery",
    content: `
      <div>
        <h3>Post Content in Discovery</h3>
        <p class="no-subtitle">In the "Circle" menu, click the "New Post" button in the top right, edit the text and images, enable the "Public" button at the bottom, then click "Publish" at the top right to share your post on Discovery.</p>
      </div>
    `,
  },
  {
    id: 31,
    title: "Delete Discovery Posts",
    content: `
      <div>
        <h3>Delete Discovery Posts</h3>
        <p class="no-subtitle">In the Discovery menu, click your post, then click the three dots in the top right and select "Delete."</p>
      </div>
    `,
  },
  {
    id: 32,
    title: "Introduction to miti AI Features",
    content: `
      <div>
        <h3>Introduction to miti AI Features</h3>
        <p class="no-subtitle">At miti, the AI era's social platform is one where AI agents coexist with real people, serving as friends or assistants. miti's official team has designed two AI agents: "My miti" and "Ada (Product Manager)." In the future, users will be able to train their own AI agents on our platform.</p>
        <h3>1. My miti</h3>
        <ul>
          <li>Send My miti links to news or articles to receive summarized key points.</li>
          <li>Fetch the latest news or data.</li>
          <li>Assist with text creation based on your needs.</li>
          <li>Aid in programming tasks.</li>
          <li>Provide quick text translations.</li>
        </ul>
        <p>For detailed instructions, refer to the My miti tutorial:</p>
        <p>My miti User Guide: <a href="https://www.miti.chat/download/my_miti_tutorial.pdf">https://www.miti.chat/download/my_miti_tutorial.pdf</a></p>
        <h3>2. Ada (Product Manager)</h3>
        <p>Ada is miti's product manager. You can ask her any questions related to using the product.</p>
      </div>
    `,
  },
  {
    id: 33,
    title: "Accessing AI Features",
    content: `
      <div>
        <h3>Accessing AI Features</h3>
        <p class="no-subtitle">Inactive miti accounts can use chat, Discovery, and Circle features, but not AI features. Users can activate their miti accounts with an invite code to gain AI features.</p>
      </div>
    `,
  },
  {
    id: 34,
    title: "Activation Mechanism",
    content: `
      <div>
        <h3>Activation Mechanism</h3>
        <h3>1. Activate During Registration</h3>
        <p>Enter an invite code when registering with a phone or email to activate the account, or scan the invite QR code provided by the inviter.</p>
        <h3>What is an invite code?</h3>
        <p>An activated user's mitiID can be used as an invite code for inactive users.</p>
        <h3>2. Activate After Registration</h3>
        <p>If you didn't enter an invite code during registration, go to "My" menu, click the "Pending Activation" button, enter the invite code (inviter's mitiID), and click "Submit." The inviter must approve the request to activate the account.</p>
        <h3>3. Change Inviter</h3>
        <p>In the "My" menu, click the "Pending Activation" button, then click "Change Inviter."</p>
      </div>
    `,
  },
  {
    id: 35,
    title: "Differentiate AI Agents and Real Friends",
    content: `
      <div>
        <h3>Differentiate AI Agents and Real Friends</h3>
        <p class="no-subtitle">In the "Chat" menu, friends with a small robot icon next to their name are AI agents. You can also click the "Friends" tab at the top of the screen and select "AI Buddies" to view your AI friends list.</p>
      </div>
    `,
  },
]);

const router = useRouter();
const currentSection = ref(sections.value[0]);

const selectedKeys2 = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);
const selectSection = (sectionId: any) => {
  const selectedSection = sections.value.find(
    (section) => section.id === sectionId
  );

  if (selectedSection) {
    currentSection.value = selectedSection;
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
  white-space: normal;
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
  padding-left: 0px !important;
}
:deep(.ant-menu-item .ant-menu-title-content),
:deep(.ant-menu-submenu-title .ant-menu-title-content) {
  flex: none !important;
  white-space: normal !important;
  height: auto !important;
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

  :deep(h1),
  :deep(h3),
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
    padding-left: 1.5em;
  }
  :deep(ul) {
    font-family: "Helvetica-Regular";
    font-weight: 400;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 28px;
    text-align: left;
    padding-left: 1.5em;
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
  :deep(.centered-table) {
    margin: 10px auto;
    border-collapse: collapse;
    width: 80%;
    th,
    td {
      padding: 5px;
      border: 1px solid #ddd;
      text-align: center;
    }
    th {
      font-weight: bold;
    }
    :deep(.narrow-column) {
      width: 20%;
    }

    :deep(.wide-column) {
      width: 80%;
    }
  }
  :deep(.no-subtitle) {
    padding-left: 0;
    margin-top: 20px;
  }
}
</style>
