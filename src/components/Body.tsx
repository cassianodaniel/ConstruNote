import React from 'react';
import './../assets/scss/custom/_body.scss'
import ScreenType from "../enuns/ScreenType";
import Welcome from "./Welcome";
import FornecedoresFavoritos from "./FornecedoresFavoritos";
import PaginaInicialFornecedores from "./PaginaInicialFornecedores";
import Cadastros from './PrimeiraSessaoCadastro';
import CadastrosFisica from './CadastrosFisica';
import CadastrosJuridica from './CadastrosJuridica';
import CadastrosFornecedor from './CadastrosFornecedor';
import { useMainBox } from '../contexts/MainBoxContext';
import SegundaSessaoCadastroComprador from './SegundaSessaoCadastroComprador';
import PreCadastroEmpresaFornecedora from './PreCadastroEmpresaFornecedora';
import CadastroFuncionarioEmpresaCompradora from './CadastroFuncionarioEmpresaCompradora';
import CadastroFuncionarioEmpresaFornecedora from './CadastroFuncionarioEmpresaFornecedora';
import PaginaInicialCompradores from './PaginaInicialCompradores'

const Body = () => {
    const { screen } = useMainBox();
    function showScreen() {
        switch (screen) {
          case ScreenType.WELCOME:
            return <Welcome />;
          case ScreenType.FORNECEDORESFAVORITOS:
            return <FornecedoresFavoritos/>
          case ScreenType.PAGINAINICIALFORNECEDORES:
            return <PaginaInicialFornecedores/>
          case ScreenType.PAGINAINICIALCOMPRADORES:
            return <PaginaInicialCompradores/>
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
          case ScreenType.CADASTROFUNCIONARIOEMPRESACOMPRADORA:
            return <CadastroFuncionarioEmpresaCompradora/>
          case ScreenType.CADASTROFUNCIONARIOEMPRESAFORNECEDORA:
            return <CadastroFuncionarioEmpresaFornecedora/>
        }
      }
    return(
        <div className="body">
            {showScreen()}
        </div>
    )
}

export default Body;