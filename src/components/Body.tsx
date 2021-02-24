import React from 'react';
import './../assets/scss/custom/_body.scss'
import ScreenType from "../enuns/ScreenType";
import Welcome from "./Welcome";
import Teste from "./Teste";
import FornecedoresFavoritos from "./FornecedoresFavoritos";
import MinhasCotacoes from "./MinhasCotacoes";
import { useMainBox } from '../contexts/MainBoxContext';

const Body = () => {
    const { screen } = useMainBox();
    function showScreen() {
        switch (screen) {
          case ScreenType.PAGINAINICIAL:
            return <Welcome />;
          case ScreenType.TESTE:
            return <Teste/>
          case ScreenType.FORNECEDORESFAVORITOS:
            return <FornecedoresFavoritos/>
          case ScreenType.MINHASCOTACOES:
            return <MinhasCotacoes/>
        }
      }
    return(
        <div className="body">
            {showScreen()}
        </div>
    )
}

export default Body;