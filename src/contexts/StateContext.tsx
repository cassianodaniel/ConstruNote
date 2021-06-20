import React, { createContext, useContext, useState } from "react";

interface IStateContextData {
  toggle: boolean;
  setToggle(value: boolean): void;
  setMicrorregioesRondonia(value: any[]): void;
  microrregioesRondonia: any[];
  setMicrorregioesAcre(value: any[]): void;
  microrregioesAcre: any[];
  setMicrorregioesAmazonas(value: any[]): void;
  microrregioesAmazonas: any[];
  setMicrorregioesRoraima(value: any[]): void;
  microrregioesRoraima: any[];
  setMicrorregioesPara(value: any[]): void;
  microrregioesPara: any[];
  setMicrorregioesAmapa(value: any[]): void;
  microrregioesAmapa: any[];
  setMicrorregioesTocantins(value: any[]): void;
  microrregioesTocantins: any[];
  setMicrorregioesMaranhao(value: any[]): void;
  microrregioesMaranhao: any[];
  setMicrorregioesPiaui(value: any[]): void;
  microrregioesPiaui: any[];
  setMicrorregioesCeara(value: any[]): void;
  microrregioesCeara: any[];
  setMicrorregioesRioGrandeDoNorte(value: any[]): void;
  microrregioesRioGrandeDoNorte: any[];
  setMicrorregioesParaiba(value: any[]): void;
  microrregioesParaiba: any[];
  setMicrorregioesPernambuco(value: any[]): void;
  microrregioesPernambuco: any[];
  setMicrorregioesAlagoas(value: any[]): void;
  microrregioesAlagoas: any[];
  setMicrorregioesSergipe(value: any[]): void;
  microrregioesSergipe: any[];
  setMicrorregioesBahia(value: any[]): void;
  microrregioesBahia: any[];
  setMicrorregioesMinasGerais(value: any[]): void;
  microrregioesMinasGerais: any[];
  setMicrorregioesEspiritoSanto(value: any[]): void;
  microrregioesEspiritoSanto: any[];
  setMicrorregioesRioDeJaneiro(value: any[]): void;
  microrregioesRioDeJaneiro: any[];
  setMicrorregioesSaoPaulo(value: any[]): void;
  microrregioesSaoPaulo: any[];
  setMicrorregioesParana(value: any[]): void;
  microrregioesParana: any[];
  setMicrorregioesSantaCatarina(value: any[]): void;
  microrregioesSantaCatarina: any[];
  setMicrorregioesRioGrandeDoSul(value: any[]): void;
  microrregioesRioGrandeDoSul: any[];
  setMicrorregioesMatoGrossoDoSul(value: any[]): void;
  microrregioesMatoGrossoDoSul: any[];
  setMicrorregioesMatoGrosso(value: any[]): void;
  microrregioesMatoGrosso: any[];
  setMicrorregioesGoias(value: any[]): void;
  microrregioesGoias: any[];
  setMicrorregioesDistritoFederal(value: any[]): void;
  microrregioesDistritoFederal: any[];
  selectedStatesArray: string[];
  setSelectedStatesArray(value: string[]): void;
  moreOptions: boolean;
  setMoreOptions(value: boolean): void;
}

export const StateContext = createContext<IStateContextData>(
  {} as IStateContextData
);

export const StateProvider: React.FC = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [microrregioesRondonia, setMicrorregioesRondonia] = useState<any[]>([]);
  const [microrregioesAcre, setMicrorregioesAcre] = useState<any[]>([]);
  const [microrregioesAmazonas, setMicrorregioesAmazonas] = useState<any[]>([]);
  const [microrregioesRoraima, setMicrorregioesRoraima] = useState<any[]>([]);
  const [microrregioesPara, setMicrorregioesPara] = useState<any[]>([]);
  const [microrregioesAmapa, setMicrorregioesAmapa] = useState<any[]>([]);
  const [microrregioesTocantins, setMicrorregioesTocantins] = useState<any[]>(
    []
  );
  const [microrregioesMaranhao, setMicrorregioesMaranhao] = useState<any[]>([]);
  const [microrregioesPiaui, setMicrorregioesPiaui] = useState<any[]>([]);
  const [microrregioesCeara, setMicrorregioesCeara] = useState<any[]>([]);
  const [microrregioesRioGrandeDoNorte, setMicrorregioesRioGrandeDoNorte] =
    useState<any[]>([]);
  const [microrregioesParaiba, setMicrorregioesParaiba] = useState<any[]>([]);
  const [microrregioesPernambuco, setMicrorregioesPernambuco] = useState<any[]>(
    []
  );
  const [microrregioesAlagoas, setMicrorregioesAlagoas] = useState<any[]>([]);
  const [microrregioesSergipe, setMicrorregioesSergipe] = useState<any[]>([]);
  const [microrregioesBahia, setMicrorregioesBahia] = useState<any[]>([]);
  const [microrregioesMinasGerais, setMicrorregioesMinasGerais] = useState<
    any[]
  >([]);
  const [microrregioesEspiritoSanto, setMicrorregioesEspiritoSanto] = useState<
    any[]
  >([]);
  const [microrregioesRioDeJaneiro, setMicrorregioesRioDeJaneiro] = useState<
    any[]
  >([]);
  const [microrregioesSaoPaulo, setMicrorregioesSaoPaulo] = useState<any[]>([]);
  const [microrregioesParana, setMicrorregioesParana] = useState<any[]>([]);
  const [microrregioesSantaCatarina, setMicrorregioesSantaCatarina] = useState<
    any[]
  >([]);
  const [microrregioesRioGrandeDoSul, setMicrorregioesRioGrandeDoSul] =
    useState<any[]>([]);
  const [microrregioesMatoGrossoDoSul, setMicrorregioesMatoGrossoDoSul] =
    useState<any[]>([]);
  const [microrregioesMatoGrosso, setMicrorregioesMatoGrosso] = useState<any[]>(
    []
  );
  const [microrregioesGoias, setMicrorregioesGoias] = useState<any[]>([]);
  const [microrregioesDistritoFederal, setMicrorregioesDistritoFederal] =
    useState<any[]>([]);
  const [selectedStatesArray, setSelectedStatesArray] = React.useState<
    string[]
  >([]);
  const [moreOptions, setMoreOptions] = React.useState<boolean>(false);

  return (
    <StateContext.Provider
      value={{
        toggle,
        setToggle,
        setMicrorregioesRondonia,
        microrregioesRondonia,
        setMicrorregioesAcre,
        microrregioesAcre,
        setMicrorregioesAmazonas,
        microrregioesAmazonas,
        setMicrorregioesRoraima,
        microrregioesRoraima,
        setMicrorregioesPara,
        microrregioesPara,
        setMicrorregioesAmapa,
        microrregioesAmapa,
        setMicrorregioesTocantins,
        microrregioesTocantins,
        setMicrorregioesMaranhao,
        microrregioesMaranhao,
        setMicrorregioesPiaui,
        microrregioesPiaui,
        setMicrorregioesCeara,
        microrregioesCeara,
        setMicrorregioesRioGrandeDoNorte,
        microrregioesRioGrandeDoNorte,
        setMicrorregioesParaiba,
        microrregioesParaiba,
        setMicrorregioesPernambuco,
        microrregioesPernambuco,
        setMicrorregioesAlagoas,
        microrregioesAlagoas,
        setMicrorregioesSergipe,
        microrregioesSergipe,
        setMicrorregioesBahia,
        microrregioesBahia,
        setMicrorregioesMinasGerais,
        microrregioesMinasGerais,
        setMicrorregioesEspiritoSanto,
        microrregioesEspiritoSanto,
        setMicrorregioesRioDeJaneiro,
        microrregioesRioDeJaneiro,
        setMicrorregioesSaoPaulo,
        microrregioesSaoPaulo,
        setMicrorregioesParana,
        microrregioesParana,
        setMicrorregioesSantaCatarina,
        microrregioesSantaCatarina,
        setMicrorregioesRioGrandeDoSul,
        microrregioesRioGrandeDoSul,
        setMicrorregioesMatoGrossoDoSul,
        microrregioesMatoGrossoDoSul,
        setMicrorregioesMatoGrosso,
        microrregioesMatoGrosso,
        setMicrorregioesGoias,
        microrregioesGoias,
        setMicrorregioesDistritoFederal,
        microrregioesDistritoFederal,
        selectedStatesArray,
        setSelectedStatesArray,
        moreOptions,
        setMoreOptions,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export function useStateContext() {
  return useContext(StateContext);
}
