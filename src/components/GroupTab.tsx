import React, { useState } from "react";
import {
  Button,
  UncontrolledTooltip,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

//components

//alias

const GroupTab: React.FC = () => {
  const t = (value: string) => {return value};
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const toggle = () => {
    setShowModal(!showModal);
  };

  const searchArray = (groups: any[], search: string) => {
    if(    
      search.includes('@') || 
      search.includes('(') || 
      search.includes(')') || 
      search.includes('[') || 
      search.includes(']') ||
      search.includes('+') || 
      search.includes('-') || 
      search.includes('/') || 
      search.includes('?') || 
      search.includes('*') ||
      search.includes(';') ||
      search.includes(':') ||
      search.includes(',') ||
      search.includes('.') ||
      search.includes('|') ||
      search.includes('=') ||
      search.includes('!') ||
      search.includes('#') ||
      search.includes('$') ||
      search.includes('%') ||
      search.includes('¨') ||
      search.includes('&') ||
      search.includes('_') ||
      search.includes('{') ||
      search.includes('}') ||
      search.includes('º') ||
      search.includes('ª')
    ){
      return [];
    }
    else{
      return groups.filter((item) => {
        return item.name.toUpperCase().match(search.toUpperCase());
      });
    }
  };

  return (
    <div>
      <div className="p-4">
        <div className="user-chat-nav float-right">
          <div id="create-group">
            <Button /*botão de criação do grupo*/
              onClick={toggle}
              type="button"
              color="link"
              className="text-decoration-none text-muted font-size-18 py-0"
            >
              <i className="ri-group-line mr-1"></i>
            </Button>
          </div>
          <UncontrolledTooltip target="create-group" placement="bottom">
            {t("Create group")}
          </UncontrolledTooltip>
        </div>

        <h4 className="mb-4">{t("Groups")}</h4>

        <div className="search-box chat-search-box">
          <InputGroup size="lg" className="bg-light rounded-lg">
            <InputGroupAddon addonType="prepend">
              <Button
                color="link"
                className="text-decoration-none text-muted pr-1"
                type="button"
              >
                <i className="ri-search-line search-icon font-size-18"></i>
              </Button>
            </InputGroupAddon>
            <Input
              type="text"
              className="form-control bg-light"
              placeholder={t("Search groups...")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default GroupTab;
