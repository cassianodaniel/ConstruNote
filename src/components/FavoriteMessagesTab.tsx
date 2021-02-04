import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Media } from "reactstrap";
import SimpleBar from "simplebar-react";
const FavoriteMessagesTab = () => {
  const { t } = useTranslation();
  const array: any[] = [];
  return (
    <React.Fragment>
      <div className="p-4">
        <SimpleBar
          style={{ maxHeight: "100%" }}
          className="p-4 chat-message-list chat-group-list"
        >
          <ul className="list-unstyled chat-list">
            <h4 className="">{t("Favorite messages")}</h4>
            {array?.map((item, key) => (
              <li key={key}>
                <Link to="#" /* onClick={() => openConference(item)} */ >
                  <Media className="align-items-center">
                    <div className="chat-user-img mr-3">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                          ★  
                        </span>
                      </div>
                    </div>
                    <Media body className="overflow-hidden">
                      <h5 className="font-size-14 mb-0">
                        {item.message}
                      </h5>
                      <p className="chat-user-message mb-0 d-flex flex-row">
                        {item.messageDate}
                        <i onClick={() => {
                        }} className="ml-1 ri-delete-bin-line"/>
                      </p>
                    </Media>
                  </Media>
                </Link>
              </li>
            ))}
          </ul>
        </SimpleBar>
      </div>
    </React.Fragment>
  );
}

export default FavoriteMessagesTab;
