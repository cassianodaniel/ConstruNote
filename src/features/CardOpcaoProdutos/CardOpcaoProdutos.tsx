import React, { useState } from "react";
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";
import "@webscopeio/react-textarea-autocomplete/style.css";
import { IoFilter } from "react-icons/io5";
import ContainerCards from "../ContainerCards/ContainerCards";
import Line from "../Line/Line";
import {
  Button,
} from "reactstrap";

const CardOpcaoProdutos: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  interface IItems {
    entity: {
      name: string;
    };
  }
  
  const Item: React.FC<IItems> = ({ entity }) => <div>{`${entity.name}`}</div>;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="containerSelecaoProdutos">
      <div className="searchProduct">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <ReactTextareaAutocomplete
            value={search}
            style={{ 
              height: '100%',
              lineHeight: 1,
              border: '1 solid',
              fontSize: 16,
              borderColor: 'gray',
              borderWidth: 0.5,
              width: '100%'
            }}
            movePopupAsYouType={true}
            /*dropdownStyle={}*/
            onChange={(e) => handleChange(e)}
            placeholder={("Digite @ e o nome do item correspondente...")}
            loadingComponent={() => <span>Loading</span>}
            listClassName="list-group"
            listStyle={{
              textAlign: "start",
              width: "100%",
            }}
            itemClassName={"autoCompleteBotao"}
            trigger={{
              '@': {
                dataProvider: (token) => {
                  let viewArray =
                    [
                      { name: '@'.concat('Mangueira de aço')},
                      { name: '@'.concat('Mangueira de látex')},
                      { name: '@'.concat('Mangueira de alumínio')},
                      { name: '@'.concat('Mangueira de titânio')},
                      { name: '@'.concat('Mangueira de inox')},
                    ]
                  if (viewArray) {
                    return viewArray.filter(
                      (item) => {
                        return item.name
                        .toUpperCase()
                        .match(token.toUpperCase());
                      }
                    );
                  }
                  return [];
                },
                // @ts-ignore
                component: Item,
                output: (item, trigger) =>
                  '@'+ JSON.stringify(item as string).split('@')[1].slice(0, -2),
                  allowWhitespace: true,

              },
            }}
            />
        </div>
        <Button outline color="primary">
          <IoFilter className="mr-2" />
          Filtrar
        </Button>
        {search.length > 0 && !search.includes('@') && <div className={`alert-at`}>Digite @ e o nome do item correspondente para procurá-lo...</div>}
        <div className="mt-3">
          <Line />
        </div>
        <div className="productCard mt-3">
          <ContainerCards />
        </div>
      </div>
    </div>
  );
};

export default CardOpcaoProdutos;
