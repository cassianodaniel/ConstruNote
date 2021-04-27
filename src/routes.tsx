import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from './components/Loading';
import LoadingPage from './components/LoadingPage';
import Welcome from './components/Welcome';
import { ScreenType } from './enums/ScreenType';

const FornecedoresFavoritos = lazy(
  () => import('./components/FornecedoresFavoritos')
);
const PaginaInicialCompradores = lazy(
  () => import('./components/PaginaInicialCompradores')
);
const PaginaInicialFornecedores = lazy(
  () => import('./components/PaginaInicialFornecedores')
);
const PrimeiraSessaoCadastro = lazy(
  () => import('./components/PrimeiraSessaoCadastro')
);
const SegundaSessaoCadastroComprador = lazy(
  () => import('./components/SegundaSessaoCadastroComprador')
);
const PreCadastroEmpresaFornecedora = lazy(
  () => import('./components/PreCadastroEmpresaFornecedora')
);
const CadastrosFisica = lazy(() => import('./components/CadastrosFisica'));
const CadastrosJuridica = lazy(() => import('./components/CadastrosJuridica'));
const CadastroFuncionarioEmpresaCompradora = lazy(
  () => import('./components/CadastroFuncionarioEmpresaCompradora')
);
const CadastroFuncionarioEmpresaFornecedora = lazy(
  () => import('./components/CadastroFuncionarioEmpresaFornecedora')
);
const CadastrosFornecedor = lazy(
  () => import('./components/CadastrosFornecedor')
);
const SelecaoDeProdutos = lazy(() => import('./components/SelecaoDeProdutos'));
const SelecaoDeProdutosLista = lazy(
  () => import('./components/SelecaoDeProdutosLista')
);
const TipoDePagamento = lazy(() => import('./components/TipoDePagamento'));
const PagamentoAVista = lazy(() => import('./components/PagamentoAVista'));
const PagamentoAPrazo = lazy(() => import('./components/PagamentoAPrazo'));
const PagamentoFrete = lazy(() => import('./components/PagamentoFrete'));
const ResponderCotacao = lazy(() => import('./components/ResponderCotacao'));
const InformacoesAdicionais = lazy(
  () => import('./components/InformacoesAdicionais')
);
const Obras = lazy(() => import('./components/Obras'));
const MapaDePrecos = lazy(() => import('./components/MapaDePrecos'));

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
