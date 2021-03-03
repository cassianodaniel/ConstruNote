import React from 'react';
import './../assets/scss/custom/_body.scss'
import ScreenType from "../enuns/ScreenType";
import Welcome from "./Welcome";
import FornecedoresFavoritos from "./FornecedoresFavoritos";
import MinhasCotacoes from "./MinhasCotacoes";
import Cadastros from './PrimeiraSessaoCadastro';
import CadastrosFisica from './CadastrosFisica';
import CadastrosJuridica from './CadastrosJuridica';
import CadastrosFornecedor from './CadastrosFornecedor';
import { useMainBox } from '../contexts/MainBoxContext';
import SegundaSessaoCadastroComprador from './SegundaSessaoCadastroComprador';
import PreCadastroEmpresaFornecedora from './PreCadastroEmpresaFornecedora';

const Body = () => {
    const { screen } = useMainBox();
    function showScreen() {
        switch (screen) {
          case ScreenType.PAGINAINICIAL:
            return <Welcome />;
          case ScreenType.FORNECEDORESFAVORITOS:
            return <FornecedoresFavoritos/>
          case ScreenType.MINHASCOTACOES:
            return <MinhasCotacoes/>
          case ScreenType.CADASTROS:
            return <Cadastros/>
          case ScreenType.CADASTROSFISICA:
            return <CadastrosFisica/>
          case ScreenType.CADASTROSJURIDICA:
            return <CadastrosJuridica/>
          case ScreenType.CADASTROSFORNECEDOR:
            return <CadastrosFornecedor/>
          case ScreenType.SEGUNDASESSAOCADASTROCOMPRADOR:
            return <SegundaSessaoCadastroComprador/>
          case ScreenType.PRECADASTROEMPRESAFORNECEDORA:
            return <PreCadastroEmpresaFornecedora/>
        }
      }
    return(
        <div className="body">
            {showScreen()}
        </div>
    )
}

export default Body;