import React, { useEffect } from "react";
import { Button, Input } from "reactstrap";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import ScreenType from "../enums/ScreenType";
import { useLoading } from "../contexts/LoadingContext";
import axios from "axios";

const Welcome: React.FC = () => {
  const history = useHistory();
  const { isLoadingApp, setIsLoadingApp } = useLoading();
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingApp(false);
    }, 4000);
  }, [setIsLoadingApp]);

  const getEstados = () => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((result) => {
        console.log(result.data);
      });
  };

  const getMicrorregioes = () => {
    axios
      .get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/PB/microrregioes"
      )
      .then((result) => {
        console.log(result.data);
      });
  };

  useEffect(() => {
    getEstados();
    getMicrorregioes();
  }, []);

  return (
    <>
      {isLoadingApp ? (
        <LoadingPage />
      ) : (
        <motion.div
          animate={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className={"main"}
        >
          <img
            style={{
              backgroundSize: "contain",
              background: "no-repeat",
              width: "45%",
              height: "auto",
            }}
            className={"imageFromBackground"}
            src={require("./../assets/images/backgrounds/negocio.png")}
            alt={"decisions"}
          />

          <div className={"form shadow bg-white rounded"}>
            <div className={"inputs"}>
              <h1>Entre já!</h1>

              <h6
                style={{
                  fontSize: 14,
                  marginTop: 20,
                  marginBottom: 30,
                }}
                className="text-muted"
              >
                E conheça a melhor plataforma de cotações virtuais!
              </h6>

              <Input
                color="primary"
                placeholder="E-mail"
                className="mt-1"
              ></Input>
              <Input placeholder="Senha" className="mt-1"></Input>
            </div>

            <div className={"buttons mt-4"}>
              <Button
                color={"primary"}
                className="w-100"
                onClick={() => history.push(ScreenType.FORNECEDORESFAVORITOS)}
              >
                Entrar
              </Button>
              <Button
                style={{
                  width: "100%",
                  marginTop: 10,
                }}
                onClick={() => history.push(ScreenType.PRIMEIRASESSAOCADASTROS)}
                color={"light"}
              >
                Cadastre-se
              </Button>
              <motion.button
                style={{
                  float: "right",
                  fontSize: 14,
                  backgroundColor: "transparent",
                  border: 0,
                  marginTop: 10,
                  color: "blue",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {}}
              >
                Esqueceu a sua senha?
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Welcome;
