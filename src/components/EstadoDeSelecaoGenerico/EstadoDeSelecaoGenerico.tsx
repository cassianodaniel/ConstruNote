import { motion } from "framer-motion";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Input } from "reactstrap";
import { useStateContext } from "../../contexts/StateContext";
import { Microrregioes } from "../../types/MicrorregioesType";
import { Estado } from "../../types/EstadoTypes";
import Microrregiao from "../Microrregiao/Microrregiao";

interface IEstadoDeSelecaoGenerico {
  nomeDoEstado: Estado;
  microrregioes: Microrregioes;
}

export const EstadoDeSelecaoGenerico: React.FC<IEstadoDeSelecaoGenerico> = ({
  nomeDoEstado,
  microrregioes,
}) => {
  const {
    microrregioesParaiba,
    microrregioesMatoGrossoDoSul,
    microrregioesMatoGrosso,
    microrregioesMaranhao,
    microrregioesGoias,
    microrregioesEspiritoSanto,
    microrregioesDistritoFederal,
    microrregioesCeara,
    microrregioesBahia,
    microrregioesAmazonas,
    microrregioesAmapa,
    microrregioesAlagoas,
    microrregioesAcre,
    microrregioesMinasGerais,
    microrregioesPara,
    microrregioesParana,
    microrregioesPernambuco,
    microrregioesPiaui,
    microrregioesRioDeJaneiro,
    microrregioesRioGrandeDoNorte,
    microrregioesRioGrandeDoSul,
    microrregioesRondonia,
    microrregioesRoraima,
    microrregioesSantaCatarina,
    microrregioesSaoPaulo,
    microrregioesSergipe,
    microrregioesTocantins,
    selectedStatesArray,
    setSelectedStatesArray,
  } = useStateContext();
  const [openDropdown, setOpenDropdown] = React.useState<boolean>(false);
  const [showStates, setShowStates] = React.useState<boolean>(false);
  const pushData = (value: string) => {
    if (selectedStatesArray.find((el) => el === value)) {
      setSelectedStatesArray(selectedStatesArray.filter((el) => el !== value));
      alert(selectedStatesArray);
    } else {
      setSelectedStatesArray([...selectedStatesArray, value]);
      alert(selectedStatesArray);
    }
  };

  const toggleShow = () => {
    setShowStates(!showStates);
  };

  const showAcre = openDropdown && microrregioes === "microrregioesAcre";
  const showRondonia =
    openDropdown && microrregioes === "microrregioesRondonia";
  const showAmazonas =
    openDropdown && microrregioes === "microrregioesAmazonas";
  const showRoraima = openDropdown && microrregioes === "microrregioesRoraima";
  const showPara = openDropdown && microrregioes === "microrregioesPara";
  const showAmapa = openDropdown && microrregioes === "microrregioesAmapa";
  const showTocantins =
    openDropdown && microrregioes === "microrregioesTocantins";
  const showMaranhao =
    openDropdown && microrregioes === "microrregioesMaranhao";
  const showPiaui = openDropdown && microrregioes === "microrregioesPiaui";
  const showCeara = openDropdown && microrregioes === "microrregioesCeara";
  const showRioGrandeDoNorte =
    openDropdown && microrregioes === "microrregioesRio Grande do Norte";
  const showParaiba = openDropdown && microrregioes === "microrregioesParaiba";
  const showPernambuco =
    openDropdown && microrregioes === "microrregioesPernambuco";
  const showAlagoas = openDropdown && microrregioes === "microrregioesAlagoas";
  const showSergipe = openDropdown && microrregioes === "microrregioesSergipe";
  const showBahia = openDropdown && microrregioes === "microrregioesBahia";
  const showMinasGerais =
    openDropdown && microrregioes === "microrregioesMinas Gerais";
  const showEspiritoSanto =
    openDropdown && microrregioes === "microrregioesEspirito Santo";
  const showRioDeJaneiro =
    openDropdown && microrregioes === "microrregioesRio de Janeiro";
  const showSaoPaulo =
    openDropdown && microrregioes === "microrregioesSao Paulo";
  const showParana = openDropdown && microrregioes === "microrregioesParana";
  const showSantaCatarina =
    openDropdown && microrregioes === "microrregioesSanta Catarina";
  const showRioGrandeDoSul =
    openDropdown && microrregioes === "microrregioesRio Grande do Sul";
  const showMatoGrossoDoSul =
    openDropdown && microrregioes === "microrregioesMato Grosso do Sul";
  const showMatoGrosso =
    openDropdown && microrregioes === "microrregioesMato Grosso";
  const showGoias = openDropdown && microrregioes === "microrregioesGoias";
  const showDistritoFederal =
    openDropdown && microrregioes === "microrregioesDistrito Federal";
  return (
    <motion.li
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: () => ({
          opacity: 1,
          transition: {
            delay: 1.0,
          },
        }),
      }}
      initial="hidden"
      animate="visible"
      className="mb-2"
    >
      <div className="d-flex flex-row">
        <div
          onClick={() => {
            setOpenDropdown(!openDropdown);
          }}
          className="cursor-pointer"
        >
          {nomeDoEstado}
        </div>
        <RiArrowDropDownLine
          size={20}
          onClick={() => setOpenDropdown(!openDropdown)}
          className="customizedArrow ml-1"
        />
      </div>
      {
        <div className="mt-2">
          <li className="list-style-none">
            <ul className="limitedWidth">
              {microrregioes === "microrregioesRondonia" && openDropdown && (
                <>
                  <Input
                    onChange={() => {
                      toggleShow();
                      setSelectedStatesArray(microrregioesRondonia);
                    }}
                    type="checkbox"
                    value={microrregioesRondonia}
                    id={nomeDoEstado}
                  ></Input>
                  {/* V2 <Label
                    className="form-check-input-box"
                    htmlFor={nomeDoEstado}
                  >
                    {"Selecionar todo o estado"}{" "}
                  </Label> */}
                </>
              )}
              {showRondonia &&
                microrregioesRondonia.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                      id={nomeDoEstado}
                    />
                  );
                })}
              {showAcre &&
                microrregioesAcre.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showAmazonas &&
                microrregioesAmazonas.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showRoraima &&
                microrregioesRoraima.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showPara &&
                microrregioesPara.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showAmapa &&
                microrregioesAmapa.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showTocantins &&
                microrregioesTocantins.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showMaranhao &&
                microrregioesMaranhao.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showPiaui &&
                microrregioesPiaui.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showCeara &&
                microrregioesCeara.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showRioGrandeDoNorte &&
                microrregioesRioGrandeDoNorte.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showRioDeJaneiro &&
                microrregioesRioDeJaneiro.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showParaiba &&
                microrregioesParaiba.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showPernambuco &&
                microrregioesPernambuco.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showAlagoas &&
                microrregioesAlagoas.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showSergipe &&
                microrregioesSergipe.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showBahia &&
                microrregioesBahia.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showMinasGerais &&
                microrregioesMinasGerais.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showEspiritoSanto &&
                microrregioesEspiritoSanto.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showSaoPaulo &&
                microrregioesSaoPaulo.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showParana &&
                microrregioesParana.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showSantaCatarina &&
                microrregioesSantaCatarina.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showRioGrandeDoSul &&
                microrregioesRioGrandeDoSul.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showMatoGrossoDoSul &&
                microrregioesMatoGrossoDoSul.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showMatoGrosso &&
                microrregioesMatoGrosso.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showGoias &&
                microrregioesGoias.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
              {showDistritoFederal &&
                microrregioesDistritoFederal.map((microrregiao) => {
                  return (
                    <Microrregiao
                      microrregiao={microrregiao}
                      pushData={pushData}
                    />
                  );
                })}
            </ul>
          </li>
        </div>
      }
    </motion.li>
  );
};
