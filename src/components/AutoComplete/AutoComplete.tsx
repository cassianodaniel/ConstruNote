import React, { useState } from "react";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "reactstrap";
import { useModal } from "../../contexts/ModalContext";

const useStyles = makeStyles((theme) => ({
  label: {
    display: "block",
  },
  input: {
    width: "300px",
  },
  listbox: {
    width: "300px",
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: "absolute",
    listStyle: "none",
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    maxHeight: 200,
    border: "1px solid rgba(0,0,0,.25)",
    '& li[data-focus="true"]': {
      backgroundColor: "#4a8df6",
      color: "white",
      cursor: "pointer",
    },
    "& li:active": {
      backgroundColor: "#2977f5",
      color: "white",
    },
  },
}));

type ItemType = {
  name: string;
  suffix: string;
};

const thirtyElementsWithP: Array<ItemType> = [
  { name: "Pá", suffix: "A especificar" },
  { name: "Parafuso", suffix: "Incluir à lista" },
  { name: "Pé de cabra", suffix: "A especificar" },
  { name: "Pedra de amolar", suffix: "A especificar" },
  { name: "Periscópio", suffix: "Incluir à lista" },
  { name: "Picador de gelo", suffix: "A especificar" },
  { name: "Picota (ferramenta)", suffix: "Incluir à lista" },
  { name: "Pinça", suffix: "Incluir à lista" },
  { name: "Plaina", suffix: "Incluir à lista" },
  { name: "Plaina de contorno", suffix: "A especificar" },
  { name: "Plaina desempenadeira", suffix: "A especificar" },
  { name: "Ponteiro (ferramenta)", suffix: "Incluir à lista" },
  { name: "Porca", suffix: "Incluir à lista" },
  { name: "Prego", suffix: "A especificar" },
  { name: "Pugmill", suffix: "A especificar" },
  { name: "Punção", suffix: "Incluir à lista" },
];

/*
  O componente abaixo será lançado na V2, com o agrupamento de produtos por categoria.

  Pesquise por "Agrupamento", futuro dev.

  https://material-ui.com/pt/components/autocomplete/#customized-autocomplete

  <Autocomplete
    id="grouped-demo"
    options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
    groupBy={(option) => option.firstLetter}
    getOptionLabel={(option) => option.title}
    style={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="With categories" variant="outlined" />}
  />
*/

export default function UseAutocomplete() {
  const { setModalDetalhesProduto } = useModal();
  const classes = useStyles();
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    inputValue,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: thirtyElementsWithP,
    getOptionLabel: (option) => option.name,
  });

  return (
    <div>
      <div {...getRootProps()}>
        <div>
          <input
            value={inputValue}
            style={{
              width: 300,
              display: "block",
              height: 30,
              padding: "0.47rem 0.75rem",
              fontSize: "0.9375rem",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#495057",
              backgroundColor: "#fff",
              backgroundClip: "padding-box",
              border: "1px solid #e6ebf5",
              borderRadius: "0.25rem",
            }}
            placeholder="Selecione o produto a ser buscado"
            {...getInputProps()}
          />
        </div>
      </div>
      {inputValue.length > 0 && (
        <ul onClick={() => setModalDetalhesProduto(true)} className={classes.listbox} {...getListboxProps()}>
          {groupedOptions.length > 0 ? (
            groupedOptions.map((option, index) => (
              <li {...getOptionProps({ option, index })}>
                {option.name}
                <button
                  style={{
                    position: "relative",
                    textAlign: "center",
                    height: 20,
                    fontSize: 10,
                    marginLeft: 10,
                    color: "#4972b0",
                    borderColor: "#4972b0",
                    borderRadius: 4,
                    border: 0,
                    marginBottom: 2,
                  }}
                >
                  {option.suffix}
                </button>
              </li>
            ))
          ) : (
            <li
              {...getOptionProps({
                option: { name: inputValue, suffix: "Incluir" },
                index: 1,
              })}
            >
              {inputValue}
              <button
                style={{
                  position: "relative",
                  textAlign: "center",
                  height: 20,
                  fontSize: 10,
                  marginLeft: 10,
                  color: "#4972b0",
                  borderColor: "#4972b0",
                  borderRadius: 4,
                  border: 0,
                  marginBottom: 2,
                }}
              >
                {"Especificar"}
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
