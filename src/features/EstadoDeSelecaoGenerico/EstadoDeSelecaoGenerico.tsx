import { motion } from "framer-motion";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Input, Label } from "reactstrap";
import { useStateContext } from "../../contexts/StateContext";

interface IEstadoDeSelecaoGenerico {
  nomeDoEstado: string;
  microrregioes: string;
}

export const EstadoDeSelecaoGenerico: React.FC<IEstadoDeSelecaoGenerico> = ({
  nomeDoEstado,
  microrregioes, //microrregioesParaiba
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
                  <Label
                    className="form-check-input-box"
                    htmlFor={nomeDoEstado}
                  >
                    {"Todo o estado"}{" "}
                  </Label>
                  <hr className="fineline" />
                </>
              )}
              {openDropdown &&
                !showStates &&
                microrregioesRondonia.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                        id={nomeDoEstado}
                      >
                        {microrregiao}
                      </Input>
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesAcre" &&
                microrregioesAcre.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesAmazonas" &&
                microrregioesAmazonas.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesRoraima" &&
                microrregioesRoraima.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesPara" &&
                microrregioesPara.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesAmapa" &&
                microrregioesAmapa.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesTocantins" &&
                microrregioesTocantins.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesMaranhao" &&
                microrregioesMaranhao.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesPiaui" &&
                microrregioesPiaui.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesCeara" &&
                microrregioesCeara.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesRio Grande do Norte" &&
                microrregioesRioGrandeDoNorte.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesRio de Janeiro" &&
                microrregioesRioDeJaneiro.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesParaiba" &&
                microrregioesParaiba.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesPernambuco" &&
                microrregioesPernambuco.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesAlagoas" &&
                microrregioesAlagoas.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesSergipe" &&
                microrregioesSergipe.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesBahia" &&
                microrregioesBahia.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesMinas Gerais" &&
                microrregioesMinasGerais.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesEspirito Santo" &&
                microrregioesEspiritoSanto.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesSao Paulo" &&
                microrregioesSaoPaulo.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesParana" &&
                microrregioesParana.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesSanta Catarina" &&
                microrregioesSantaCatarina.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesRio Grande do Sul" &&
                microrregioesRioGrandeDoSul.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesMato Grosso do Sul" &&
                microrregioesMatoGrossoDoSul.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesMato Grosso" &&
                microrregioesMatoGrosso.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesGoias" &&
                microrregioesGoias.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
              {openDropdown &&
                microrregioes === "microrregioesDistrito Federal" &&
                microrregioesDistritoFederal.map((microrregiao) => {
                  return (
                    <li>
                      <Input
                        onChange={(e: React.FormEvent<HTMLInputElement>) =>
                          pushData(e.currentTarget.value)
                        }
                        type="checkbox"
                        value={microrregiao}
                      />
                      <Label
                        className="form-check-input-box"
                        htmlFor={microrregiao}
                      >
                        {microrregiao}{" "}
                      </Label>
                    </li>
                  );
                })}
            </ul>
          </li>
        </div>
      }
    </motion.li>
  );
};
