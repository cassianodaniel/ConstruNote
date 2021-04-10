import axios from "axios";

interface ISetSiglaDaFederacao {
  value: string;
  setMicrorregioes(value: any[]): void;
}

export function setSiglaDaFederacao({
  value,
  setMicrorregioes,
}: ISetSiglaDaFederacao) {
  switch (value) {
    case "Rondônia": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/RO/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Acre": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/AC/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Amazonas": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/AM/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Roraima": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/RR/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Pará": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/PA/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Amapá": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/AP/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Tocantins": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/TO/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Maranhão": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/MA/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Piauí": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/PI/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Ceará": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/CE/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Rio Grande do Norte": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/RN/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Paraíba": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/PB/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Pernambuco": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/PE/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Alagoas": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/AL/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Sergipe": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/SE/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Bahia": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/BA/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Minas Gerais": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/MG/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Espírito Santo": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/ES/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Rio de Janeiro": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/RJ/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "São Paulo": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Paraná": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/PR/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Santa Catarina": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/SC/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Rio Grande do Sul": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/RS/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Mato Grosso do Sul": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/MS/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Mato Grosso": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/MT/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Goiás": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/GO/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
    case "Distrito Federal": {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/DF/microrregioes`
        )
        .then((result) => {
          setMicrorregioes(
            Object.values(result.data)
              .map((rst: any) => rst?.nome)
              .filter(Boolean)
          );
        });

      break;
    }
  }
}
