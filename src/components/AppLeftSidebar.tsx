import React from "react";
import { TabContent, TabPane } from "reactstrap";

//Import Components
import ProfileTab from "./ProfileTab";
import ChatTab from "./ChatTab";
import GroupTab from "./GroupTab";
import ContactTab from "./ContactTab";
import ConferenceTab from "./ConferenceTab";
import SettingTab from "./SettingTab";
import FavoriteMessagesTab from "./FavoriteMessagesTab";
// import CallHistoryTab from "./CallHistoryTab";

const AppLeftSidebar: React.FC = () => {

  return (
    <div className="chat-leftsidebar">
      <TabContent activeTab={"profile"}>
        <TabPane tabId="profile" id="pills-profile">
          <ProfileTab />
        </TabPane>
        <TabPane tabId="chats" id="pills-chats">
          <ChatTab />
        </TabPane>
        <TabPane tabId="contacts" id="pills-contacts">
          <ContactTab />
        </TabPane>
        <TabPane tabId="groups" id="pills-groups">
          <GroupTab />
        </TabPane>
        <TabPane tabId="conferences" id="pills-conferences">
          <ConferenceTab />
        </TabPane>
        {/* <TabPane tabId="callhistory" id="pills-callhistory">
          <CallHistoryTab />
        </TabPane> */}
        <TabPane tabId="settings" id="pills-setting">
          <SettingTab />
        </TabPane>
        <TabPane tabId="favoritemessages" id="pills-favoritemessages">
          <FavoriteMessagesTab />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default AppLeftSidebar;
