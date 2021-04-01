import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";
import LoadingPage from "./components/LoadingPage";
import { ScreenType } from "./enums/ScreenType";

const Welcome = lazy(() => import("./components/Welcome"));
const FornecedoresFavoritos = lazy(
  () => import("./components/FornecedoresFavoritos")
);
const PaginaInicialCompradores = lazy(
  () => import("./components/PaginaInicialCompradores")
);
const PaginaInicialFornecedores = lazy(
  () => import("./components/PaginaInicialFornecedores")
);
const PrimeiraSessaoCadastro = lazy(
  () => import("./components/PrimeiraSessaoCadastro")
);
const SegundaSessaoCadastroComprador = lazy(
  () => import("./components/SegundaSessaoCadastroComprador")
);
const PreCadastroEmpresaFornecedora = lazy(
  () => import("./components/PreCadastroEmpresaFornecedora")
);
const CadastrosFisica = lazy(() => import("./components/CadastrosFisica"));
const CadastrosJuridica = lazy(() => import("./components/CadastrosJuridica"));
const CadastroFuncionarioEmpresaCompradora = lazy(
  () => import("./components/CadastroFuncionarioEmpresaCompradora")
);
const CadastroFuncionarioEmpresaFornecedora = lazy(
  () => import("./components/CadastroFuncionarioEmpresaFornecedora")
);
const CadastrosFornecedor = lazy(
  () => import("./components/CadastrosFornecedor")
);

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={"/"} exact component={Welcome} />
        <Route path={ScreenType.LOADING} exact component={LoadingPage} />
        <Route
          path={ScreenType.PAGINAINICIALCOMPRADORES}
          exact
          component={PaginaInicialCompradores}
        />
        <Route
          path={ScreenType.PAGINAINICIALFORNECEDORES}
          exact
          component={PaginaInicialFornecedores}
        />
        <Route
          path={ScreenType.FORNECEDORESFAVORITOS}
          exact
          component={FornecedoresFavoritos}
        />
        <Route
          path={ScreenType.PRIMEIRASESSAOCADASTROS}
          exact
          component={PrimeiraSessaoCadastro}
        />
        <Route
          path={ScreenType.SEGUNDASESSAOCADASTROCOMPRADOR}
          exact
          component={SegundaSessaoCadastroComprador}
        />
        <Route
          path={ScreenType.PRECADASTROEMPRESAFORNECEDORA}
          exact
          component={PreCadastroEmpresaFornecedora}
        />
        <Route
          path={ScreenType.CADASTROSFISICA}
          exact
          component={CadastrosFisica}
        />
        <Route
          path={ScreenType.CADASTROSJURIDICA}
          exact
          component={CadastrosJuridica}
        />
        <Route
          path={ScreenType.CADASTROSFORNECEDOR}
          exact
          component={CadastrosFornecedor}
        />
        <Route
          path={ScreenType.CADASTROFUNCIONARIOEMPRESACOMPRADORA}
          exact
          component={CadastroFuncionarioEmpresaCompradora}
        />
        <Route
          path={ScreenType.CADASTROFUNCIONARIOEMPRESAFORNECEDORA}
          exact
          component={CadastroFuncionarioEmpresaFornecedora}
        />
      </Switch>
    </Suspense>
  );
};

export default Routes;
