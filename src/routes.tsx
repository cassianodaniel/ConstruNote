import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import LoadingPage from './pages/LoadingPage';
import Welcome from './pages/Welcome';
import { ScreenType } from './enums/ScreenType';

const FornecedoresFavoritos = lazy(
  () => import('./pages/FornecedoresFavoritos')
);
const PaginaInicialCompradores = lazy(
  () => import('./pages/PaginaInicialCompradores')
);
const PaginaInicialFornecedores = lazy(
  () => import('./pages/PaginaInicialFornecedores')
);
const PrimeiraSessaoCadastro = lazy(
  () => import('./pages/PrimeiraSessaoCadastro')
);
const SegundaSessaoCadastroComprador = lazy(
  () => import('./pages/SegundaSessaoCadastroComprador')
);
const PreCadastroEmpresaFornecedora = lazy(
  () => import('./pages/PreCadastroEmpresaFornecedora')
);
const CadastrosFisica = lazy(() => import('./pages/CadastrosFisica/CadastrosFisica'));
const CadastrosJuridica = lazy(() => import('./pages/CadastrosJuridica/CadastrosJuridica'));
const CadastroFuncionarioEmpresaCompradora = lazy(
  () => import('./pages/CadastroFuncionarioEmpresaCompradora/CadastroFuncionarioEmpresaCompradora')
);
const CadastroFuncionarioEmpresaFornecedora = lazy(
  () => import('./pages/CadastroFuncionarioEmpresaFornecedora/CadastroFuncionarioEmpresaFornecedora')
);
const CadastrosFornecedor = lazy(
  () => import('./pages/CadastrosFornecedor/CadastrosFornecedor')
);
const SelecaoDeProdutos = lazy(() => import('./pages/SelecaoDeProdutos'));
const SelecaoDeProdutosLista = lazy(
  () => import('./pages/SelecaoDeProdutosLista')
);
const TipoDePagamento = lazy(() => import('./pages/TipoDePagamento'));
const PagamentoAVista = lazy(() => import('./pages/PagamentoAVista'));
const PagamentoAPrazo = lazy(() => import('./pages/PagamentoAPrazo'));
const PagamentoFrete = lazy(() => import('./pages/PagamentoFrete/PagamentoFrete'));
const ResponderCotacao = lazy(() => import('./pages/ResponderCotacao'));
const InformacoesAdicionais = lazy(
  () => import('./pages/InformacoesAdicionais')
);
const Obras = lazy(() => import('./pages/Obras/Obras'));
const MapaDePrecos = lazy(() => import('./pages/MapaDePrecos'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={'/'} exact component={Welcome} />
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
        <Route
          path={ScreenType.SELECAODEPRODUTOS}
          exact
          component={SelecaoDeProdutos}
        />
        <Route
          path={ScreenType.SELECAODEPRODUTOSLISTA}
          exact
          component={SelecaoDeProdutosLista}
        />
        <Route
          path={ScreenType.TIPODEPAGAMENTO}
          exact
          component={TipoDePagamento}
        />
        <Route
          path={ScreenType.PAGAMENTOBOLETO}
          exact
          component={PagamentoAVista}
        />
        <Route
          path={ScreenType.PAGAMENTOCARTAO}
          exact
          component={PagamentoAPrazo}
        />
        <Route
          path={ScreenType.PAGAMENTOFRETE}
          exact
          component={PagamentoFrete}
        />
        <Route
          path={ScreenType.RESPONDERCOTACAO}
          exact
          component={ResponderCotacao}
        />
        <Route
          path={ScreenType.INFORMACOESADICIONAIS}
          exact
          component={InformacoesAdicionais}
        />
        <Route path={ScreenType.OBRAS} exact component={Obras} />
        <Route path={ScreenType.MAPADEPRECOS} exact component={MapaDePrecos} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
