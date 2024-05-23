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
        height: calc(100vh - 105px);
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f4f6fa;
        overflow: hidden;
      "
    >
      <Layout
        style="
          background: #f4f6fa;
          flex-grow: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        "
      >
        <LayoutSider width="287px" style="background: #fff">
          <Menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            style="height: 100%; width: 287px; border-right: 1px solid #f0f0f0"
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
              <Menu.Item key="1" @click="scrollToElement('section1')"
                >Download miti.chat</Menu.Item
              >
              <Menu.Item key="2" @click="scrollToElement('section2')"
                >Register a miti Account</Menu.Item
              >
              <Menu.Item key="3" @click="scrollToElement('section3')"
                >Update miti.chat</Menu.Item
              >
              <Menu.Item key="4" @click="scrollToElement('section4')"
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
              <Menu.Item key="5" @click="scrollToElement('section5')"
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
              <Menu.Item key="14" @click="scrollToElement('section14')"
                >Add Friends</Menu.Item
              >
              <Menu.Item key="15" @click="scrollToElement('section15')">
                Delete Friends</Menu.Item
              >
              <Menu.Item key="16" @click="scrollToElement('section16')"
                >Friend Limit</Menu.Item
              >
              <Menu.Item key="17" @click="scrollToElement('section17')"
                >Blocklist</Menu.Item
              >
              <Menu.Item key="18" @click="scrollToElement('section18')"
                >Check If Blocked</Menu.Item
              >
              <Menu.Item key="19" @click="scrollToElement('section19')"
                >Friend Notes</Menu.Item
              >
              <Menu.Item key="20" @click="scrollToElement('section20')"
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
              <Menu.Item key="21" @click="scrollToElement('section21')"
                >Personal Information Settings</Menu.Item
              >
              <Menu.Item key="22" @click="scrollToElement('section22')"
                >mitiID</Menu.Item
              >
              <Menu.Item key="23" @click="scrollToElement('section23')"
                >Modify Bound Account</Menu.Item
              >
              <Menu.Item key="24" @click="scrollToElement('section24')"
                >Set New Message Alerts</Menu.Item
              ><Menu.Item key="25" @click="scrollToElement('section25')"
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
              <Menu.Item key="26" @click="scrollToElement('section26')"
                >Differences Between Discovery and Circle</Menu.Item
              >
              <Menu.Item key="27" @click="scrollToElement('section27')"
                >Post Content in Circle</Menu.Item
              >
              <Menu.Item key="28" @click="scrollToElement('section28')"
                >Set Circle Post Viewing Permissions</Menu.Item
              >
              <Menu.Item key="29" @click="scrollToElement('section29')"
                >Delete Circle Posts</Menu.Item
              >
              <Menu.Item key="30" @click="scrollToElement('section30')"
                >Post Content in Discovery</Menu.Item
              >
              <Menu.Item key="31" @click="scrollToElement('section31')"
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
              <Menu.Item key="32" @click="scrollToElement('section32')"
                >Introduction to miti AI Features</Menu.Item
              >
              <Menu.Item key="33" @click="scrollToElement('section33')"
                >Accessing AI Features</Menu.Item
              >
              <Menu.Item key="34" @click="scrollToElement('section34')"
                >Activation Mechanism</Menu.Item
              >
              <Menu.Item key="35" @click="scrollToElement('section35')"
                >Differentiate AI Agents and Real Friends</Menu.Item
              >
            </Menu.SubMenu>
          </Menu>
        </LayoutSider>

        <LayoutContent
          style="padding: 0px 24px 0px 24px; width: calc(100% - 287px)"
        >
          <div class="text-container">
            <h1>Getting Started</h1>
            <div id="section1">
              <h2>1. Download miti.chat</h2>
              <h3>1.1 Android</h3>
              <p>1. Ensure your Android version is 10.0 or higher.</p>
              <p>
                2. Find miti.chat in the Google Play Store and click "Install."
              </p>
              <h3>1.2 iOS</h3>
              <p>1. Ensure your iOS version is 13 or higher.</p>
              <p>2. Find miti.chat in the Apple App Store and click "Get."</p>
              <h3>1.3 Web</h3>
              <p>
                1. You can access miti web by opening miti.chat in your browser,
                whether on computer or mobile phone.
              </p>

              <p>2. To add miti web to your mobile home screen:</p>
              <ul>
                <li>
                  For Android, open Chrome, navigate to miti.chat, click the
                  three dots in the upper-right corner, and select "Add to Home
                  screen."
                </li>
                <li>
                  For iOS, open Safari, click the share button at the bottom
                  center, and select "Add to Home screen."
                </li>
              </ul>
              <h3>1.4 PC</h3>
              <p>1. Ensure your computer runs Windows 10 or higher.</p>
              <p>2. Currently, macOS and Linux systems are not supported.</p>
              <p>
                3. Click the link
                <a href="https://miti.chat/download/miti_1.0.0.exe"
                  >https://miti.chat/download/miti_1.0.0.exe</a
                >
                to download the miti.chat PC version and follow the installation
                instructions.
              </p>
            </div>
            <div id="section2">
              <h2>2. Register a miti Account</h2>
              <h3>2.1 Register with a Phone Number</h3>
              <p>
                1. Click "Register now" on the login screen to go to the "Sign
                up with Mobile" screen.
              </p>
              <p>2. Enter an optional invite code, username, and password.</p>
              <p>
                3. Select your country/region from the dropdown menu and enter
                your phone number in the box.
              </p>
              <p>
                4. Click "Send Verification Code" to request a verification
                code.
              </p>
              <p>5. Enter the 6-digit code you received on your phone.</p>
              <p>6. If you don't receive the code:</p>
              <ul>
                <li>
                  Phone: Check if your country/region is on the list below. If
                  not, use email registration. If listed, try resending the
                  code.
                </li>
                <ul>
                  <li>+1 USA</li>
                  <li>+1 Canada</li>
                  <li>+61 Australia</li>
                  <li>+81 Japan</li>
                  <li>+82 South Korea</li>
                  <li>+34 Spain</li>
                </ul>
                <li>
                  Email: Check your spam folder for the verification email. If
                  not found, try resending the code.
                </li>
              </ul>
              <h3>2.2 Register with an Email</h3>
              <p>
                1. Click "Register now" on the login screen to go to the "Sign
                up with Email" screen.
              </p>
              <p>2. Enter an optional invite code, username, and password.</p>
              <p>3. Enter your email and click "Send Verification Code."</p>
              <p>4. Enter the 6-digit code received in your email.</p>
              <h3>2.3 Register with Facebook</h3>
              <p>
                1. Click the Facebook button at the bottom of the login screen.
              </p>
              <p>2. Allow miti.chat to open the Facebook app.</p>
            </div>
            <div id="section3">
              <p>3. The system will automatically create a miti account.</p>
              <h2>3. Update miti.chat</h2>
              <h3>3.1 Android</h3>
              <p>Find miti.chat in the Google Play Store and click "Update."</p>
              <h3>3.2 iOS</h3>
              <p>Find miti.chat in the Apple App Store and click "Update."</p>
              <h3>3.3 Web</h3>
              <p>Refresh the web login interface at miti.chat.</p>
              <h3>3.4 PC</h3>
              <p>
                Visit the miti website at
                <a href="http://www.mitichat.com">www.mitichat.com</a> and click
                "Download for PC" at the bottom to download the latest
                installer. Follow the instructions to update.
              </p>
            </div>
            <div id="section4">
              <h2>4. Account Settings</h2>
              <h3>4.1 Registered Phone and Email</h3>
              <p>1. Use the phone or email registered at sign-up to log in.</p>
              <p>
                2. In the "My" menu, click "Account Settings" to enter "Account
                & Security" and modify your bound phone number and email.
              </p>
            </div>
            <h2>Messaging</h2>
            <div id="section5">
              <h3>1. Sending Messages</h3>
              <h4>1.1 Text Messages</h4>
              <p>
                Enter text in the input area at the bottom of the screen, then
                click the arrow icon on the right to send.
              </p>
              <h4>1.2 Voice Messages</h4>
              <p>
                1. Sending: Tap the voice button on the bottom left, hold the
                "Hold to Talk" button, speak, and release to send. Maximum
                length is 60 seconds.
              </p>
              <p>
                2. Cancel Recording: Slide your finger up from the "Hold to
                Talk" button to cancel.
              </p>
              <p>
                3. Voice to Text: Long press the voice message, then click
                "Convert to Text."
              </p>
              <h4>1.3 Photos or Videos</h4>
              <p>
                Click the plus icon next to the text input area, then click
                "Album" at the bottom. Select the circle at the top right of the
                photos or videos you want to send, then click the confirm button
                at the bottom right.
              </p>
              <h4>1.4 Location</h4>
              <p>
                Click the plus icon next to the text input area, then click
                "Location" at the bottom. Select the location to send, then
                click "Confirm."
              </p>
              <h4>1.5 Contact Card</h4>
              <p>
                Click the plus icon next to the text input area, then click
                "Card" at the bottom. Select the contact to send.
              </p>
              <h4>1.6 Files</h4>
              <p>
                Click the plus icon next to the text input area, then click
                "File" at the bottom. Select the file to send.
              </p>
            </div>
            <div id="section6">
              <h3>2. Message Recall</h3>
              <p>
                Long press the sent message, click "Recall" to retract the sent
                message. This feature supports recalling voice, text, image,
                video, contact card, and location messages sent within the last
                2 minutes.
              </p>
            </div>
            <div id="section7">
              <h3>3. Audio/Video Calls</h3>
              <p>
                Click the plus icon next to the text input area, then click
                "Call" at the bottom to choose between starting a video or voice
                call.
              </p>
            </div>
            <div id="section8">
              <h3>4. Group Chats</h3>
              <h4>4.1 Create a Group Chat</h4>
              <p>
                In the "Chat" menu, click the plus icon in the top right, select
                "Create Group," check the circle next to the contacts, then
                click "Confirm" at the bottom right.
              </p>
              <h4>4.2 Dismiss a Group Chat</h4>
              <p>
                Only the group owner can disband the group. The owner clicks the
                three dots in the top right of the group chat screen, enters
                chat settings, scrolls to the bottom, and clicks "Dismiss
                Group."
              </p>
              <h4>4.3 Exit a Group Chat</h4>
              <p>
                Group members click the three dots in the top right of the group
                chat screen, enter chat settings, scroll to the bottom, and
                click "Exit Group."
              </p>
              <h4>4.4 Join a Group Chat</h4>
              <p>
                1. In the "Chat" menu, click the plus icon in the top right,
                select "Add Group," and search for the group ID to add.
              </p>
              <p>2. Scan the group QR code using "Scan" in the "Chat" menu.</p>
              <p>3. Add through group contact cards.</p>
              <h4>4.5 Group Management</h4>
              <p>
                Group owners click the three dots in the top right of the group
                chat screen, enter chat settings, and click "Group Management"
                to enable/disable group-wide silence, prevent members from
                viewing others' profiles, and add members as friends. Also, set
                group entry verification or transfer ownership.
              </p>
              <h4>4.6 Add Friends to Group Chat</h4>
              <p>
                Click the three dots in the top right of the group chat screen,
                enter chat settings, click the add button next to member
                avatars, select the people to invite, and click "Confirm."
              </p>
              <h4>4.7 Remove Members from Group Chat</h4>
              <p>
                Only the group owner can remove members. The owner clicks the
                three dots in the top right of the group chat screen, enters
                chat settings, clicks the remove button next to member avatars,
                selects the members to remove, and clicks "Confirm."
              </p>
              <h4>4.8 Group Announcements</h4>
              <p>
                Group owners can post announcements. Click the three dots in the
                top right of the group chat screen, enter chat settings, and
                click "Group Announcement" to edit.
              </p>
              <h4>4.9 Group QR Code</h4>
              <p>
                Click the three dots in the top right of the group chat screen,
                enter chat settings, click the QR code next to the group name,
                or click "Group QR Code" to save and share.
              </p>
              <h4>4.10 Group Audio/Video Calls</h4>
              <p>
                Click the plus icon next to the text input area, then click
                "Call" at the bottom, select group members to invite for audio
                or video calls, and click "Confirm."
              </p>
              <h4>4.11 Mute Group Notifications</h4>
              <p>
                Click the three dots in the top right of the group chat screen,
                enter chat settings, and turn on "Do Not Disturb."
              </p>
            </div>
            <div id="section9">
              <h2>5. Burn After Reading</h2>
              <p>
                Burn After Reading is an optional feature for one-on-one chats.
              </p>
              <h3>5.1 Enable/Disable Burn After Reading</h3>
              <p>
                1. Click the plus icon next to the text input area, then click
                "Burn After Reading" to enable or disable.
              </p>
              <p>
                2. Click the three dots in the top right of the chat screen,
                enter chat settings, and toggle "Burn After Reading."
              </p>
              <h3>5.2 Set Burn After Reading Time</h3>
              <p>
                1. Click the three dots in the top right of the chat screen,
                enter chat settings, and enable "Burn After Reading."
              </p>
              <p>
                2. Select the burn time under "Time Settings." Default is 30
                seconds, but you can set it to 5 minutes, 1 hour, or 1 day.
              </p>
            </div>
            <div id="section10">
              <h2>6. Pin/Delete Chat</h2>
              <p>
                Swipe left on the conversation bar in the chat menu, and click
                "Pin" or "Delete."
              </p>
            </div>
            <div id="section11">
              <h2>7. Search Chat History</h2>
              <p>
                Click the plus icon next to the text input area, then click
                "Search" at the bottom to quickly find conversations, images,
                videos, and files.
              </p>
            </div>
            <div id="section12">
              <h2>8. Auto-Translation</h2>
              <h3>8.1 Introduction to Auto-Translation</h3>
              <p>
                Auto-Translation automatically translates received messages into
                your target language, enabling seamless communication in up to
                63 languages.
              </p>
              <h3>8.2 Enable Auto-Translation</h3>
              <p>
                Click the plus icon next to the text input area, then click
                "Auto-Translation," toggle it on, and select the target
                language. If set to auto, it matches the system language.
              </p>
              <h3>8.3 Manual Translation</h3>
              <p>
                Messages before enabling Auto-Translation won't be translated.
                Long press a message and click "Translate" to manually translate
                a single message.
              </p>
            </div>
            <div id="section13">
              <h2>9. Not Receiving miti Notifications?</h2>
              <h3>Android</h3>
              <p>
                Long press the miti.chat app icon, click app details, and check
                if notifications or background behavior is allowed and if Do Not
                Disturb mode is off.
              </p>
              <h3>iOS</h3>
              <p>
                Check if notifications are enabled, or if miti is added in
                "Allow Notifications" under Focus Mode, and ensure Do Not
                Disturb mode is off.
              </p>
            </div>
            <h2>Friends</h2>
            <div id="section14">
              <h3>1. Add Friends</h3>
              <h4>1.1 Add Friends Actively</h4>
              <p>
                1. In the "Chat" menu, click the plus icon in the top right,
                select "Add Friend," and search for their mitiID/phone number.
                Nickname search is not supported.
              </p>
              <p>
                2. In the "Chat" menu, click the plus icon in the top right, and
                click "Scan" to scan their personal QR code.
              </p>
              <p>
                3. Click on the contact card shared by an existing friend to
                add.
              </p>
              <h4>1.2 Accept Friend Requests</h4>
              <p>
                In the "Chat" menu, click "Friends," select "Recently Added,"
                click "View," and then click "Accept."
              </p>
            </div>
            <div id="section15">
              <h3>2. Delete Friends</h3>
              <p>
                Click the friend's avatar, click the function button in the top
                right, and click "Unfriend."
              </p>
            </div>
            <div id="section16">
              <h3>3. Friend Limit</h3>
              <p>
                You can add up to 10,000 friends on miti (excluding groups).
              </p>
            </div>
            <div id="section17">
              <h3>4. Blocklist</h3>
              <h4>4.1 Introduction to Blocklist</h4>
              <p>1. You won't receive messages from blocked contacts.</p>
              <p>
                2. Blocked contacts cannot send you messages and will receive a
                "Message sent but rejected" notification, but you can send
                messages to them.
              </p>
              <h4>4.2 Add/Remove Blocklist</h4>
              <p>
                1. Add: Click the friend's avatar, click the function button in
                the top right, and turn on "Add to Blocklist."
              </p>
              <p>
                2. Remove: Click the friend's avatar, click the function button
                in the top right, and turn off "Add to Blocklist."
              </p>
            </div>
            <div id="section18">
              <h3>5. Check If Blocked</h3>
              <p>
                If you are blocked, you'll receive a "Message sent but rejected"
                notification when trying to message them.
              </p>
            </div>
            <div id="section19">
              <h2>6. Friend Notes</h2>
              <h3>6.1 Introduction to Friend Notes</h3>
              <p>
                Add or modify notes to better identify and search for friends in
                your contact list.
              </p>
              <h3>6.2 Add/Modify Remark</h3>
              <p>
                Click the friend's avatar, click "Remark," edit, and save the
                remark.
              </p>
            </div>
            <div id="section20">
              <h2>7. Prevent Others from Adding You</h2>
              <p>
                In "My" menu, click "Account Settings," and enable "Disallow Add
                Me as Friend."
              </p>
            </div>
            <h2>Settings</h2>
            <div id="section21">
              <h3>1. Personal Information Settings</h3>
              <p>
                In "My" menu, click "My Info" to set your miti nickname, gender,
                birthday, avatar, and mitiID.
              </p>
            </div>
            <div id="section22">
              <h2>2. mitiID</h2>
              <h3>2.1 Introduction to mitiID</h3>
              <p>
                mitiID is your unique identifier on miti, allowing others to add
                you as a friend by searching for your mitiID.
              </p>
              <h3>2.2 Change mitiID</h3>
              <p>
                In "My" menu, select "My Info," click "mitiID," and click
                "Change mitiID." The new mitiID must be unique and can only be
                changed once per year. Once changed, it cannot be reverted, and
                others won't be able to find you using the old mitiID.
              </p>
            </div>
            <div id="section23">
              <h2>3. Modify Bound Account</h2>
              <p>
                In "My" menu, click "Account Setup," then click "Account &
                Security" to manage the phone number and email linked to
                different accounts.
              </p>
            </div>
            <div id="section24">
              <h2>4. Set New Message Alerts</h2>
              <p>
                In "My" menu, click "Account Settings," and set the notification
                sound or vibration for new messages while miti is running.
                Enable "Do Not Disturb Mode" at the top of the "Account
                Settings" screen to stop receiving notifications.
              </p>
            </div>
            <div id="section25">
              <h2>5. Change System Language</h2>
              <p>
                In "My" menu, click "Account Settings," then "Language Setup."
                miti currently supports English, Simplified Chinese, Japanese,
                Korean, and Spanish.
              </p>
            </div>
            <h2>Discovery and Circle</h2>
            <div id="section26">
              <h3>1. Differences Between Discovery and Circle</h3>
              <p>
                Discovery content is visible to everyone, while Circle content
                is only visible to your friends or specific people you set.
              </p>
            </div>
            <div id="section27">
              <h3>2. Post Content in Circle</h3>
              <p>
                In the "Circle" menu, click the "New Post" button in the top
                right, edit your text, click the plus icon below the text input
                to add photos or videos, then click "Publish" at the top right.
              </p>
              <ul>
                <li>
                  If no photos or videos are selected, the post will be
                  text-only.
                </li>
                <li>A single post can include up to 9 photos/videos.</li>
                <li>
                  To arrange the order of photos/videos, adjust the selection
                  order when choosing from the album. The order will be shown at
                  the top left of each thumbnail.
                </li>
                <li>
                  You can only post videos up to 15 seconds long directly from
                  the album.
                </li>
                <li>
                  When posting, you can use the "Tag Friends" feature to notify
                  friends mentioned.
                </li>
              </ul>
            </div>
            <div id="section28">
              <h3>3. Set Circle Post Viewing Permissions</h3>
              <p>
                On the Circle posting page, click "Who Can Watch" to set the
                viewing permissions for your post.
              </p>
            </div>
            <div id="section29">
              <h3>4. Delete Circle Posts</h3>
              <p>
                Enter the post you created and click the delete button at the
                bottom left.
              </p>
            </div>
            <div id="section30">
              <h3>5. Post Content in Discovery</h3>
              <p>
                In the "Circle" menu, click the "New Post" button in the top
                right, edit the text and images, enable the "Public" button at
                the bottom, then click "Publish" at the top right to share your
                post on Discovery.
              </p>
            </div>
            <div id="section31">
              <h3>6. Delete Discovery Posts</h3>
              <p>
                In the Discovery menu, click your post, then click the three
                dots in the top right and select "Delete."
              </p>
            </div>
            <h2>AI Features</h2>
            <div id="section32">
              <h3>1. Introduction to miti AI Features</h3>
              <p>
                At miti, the AI era's social platform is one where AI agents
                coexist with real people, serving as friends or assistants.
                miti's official team has designed two AI agents: "My miti" and
                "Ada (Product Manager)." In the future, users will be able to
                train their own AI agents on our platform.
              </p>
              <h4>1.1 My miti</h4>
              <ul>
                <li>
                  Send My miti links to news or articles to receive summarized
                  key points.
                </li>
                <li>Fetch the latest news or data.</li>
                <li>Assist with text creation based on your needs.</li>
                <li>Aid in programming tasks.</li>
                <li>Provide quick text translations.</li>
              </ul>
              <p>For detailed instructions, refer to the My miti tutorial:</p>
              <p>
                My miti User Guide:
                <a href="https://www.miti.chat/download/my_miti_tutorial.pdf"
                  >https://www.miti.chat/download/my_miti_tutorial.pdf</a
                >
              </p>
              <h4>1.2 Ada (Product Manager)</h4>
              <p>
                Ada is miti's product manager. You can ask her any questions
                related to using the product.
              </p>
            </div>
            <div id="section33">
              <h3>2. Accessing AI Features</h3>
              <p>
                Inactive miti accounts can use chat, Discovery, and Circle
                features, but not AI features. Users can activate their miti
                accounts with an invite code to gain AI features.
              </p>
            </div>
            <div id="section34">
              <h3>3. Activation Mechanism</h3>
              <h4>3.1 Activate During Registration</h4>
              <p>
                Enter an invite code when registering with a phone or email to
                activate the account, or scan the invite QR code provided by the
                inviter.
              </p>
              <p>
                What is an invite code? An activated user's mitiID can be used
                as an invite code for inactive users.
              </p>
              <h4>3.2 Activate After Registration</h4>
              <p>
                If you didn't enter an invite code during registration, go to
                "My" menu, click the "Pending Activation" button, enter the
                invite code (inviter's mitiID), and click "Submit." The inviter
                must approve the request to activate the account.
              </p>
              <h4>3.3 Change Inviter</h4>
              <p>
                In the "My" menu, click the "Pending Activation" button, then
                click "Change Inviter."
              </p>
            </div>
            <div id="section35">
              <h3>4. Differentiate AI Agents and Real Friends</h3>
              <p>
                In the "Chat" menu, friends with a small robot icon next to
                their name are AI agents. You can also click the "Friends" tab
                at the top of the screen and select "AI Buddies" to view your AI
                friends list.
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
import { useRouter } from "vue-router";

const router = useRouter();
const selectedKeys1 = ref<string[]>(["2"]);
const selectedKeys2 = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);
const scrollToElement = (elementId: any) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
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

:deep(
    :where(.css-dev-only-do-not-override-16pw25h).ant-menu-light
      .ant-menu-item-selected
  ) {
  background-color: #7800fd !important;
  color: #fff !important;
}

:deep(
    :where(.css-dev-only-do-not-override-16pw25h).ant-menu-light
      .ant-menu-submenu-selected
      > .ant-menu-submenu-title
  ) {
  color: black;
}

:deep(.ant-menu-submenu-title:hover) {
  background-color: transparent !important;
  color: #7800fd !important;
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
