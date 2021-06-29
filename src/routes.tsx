import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from './features/Loading/Loading';
import LoadingPage from './features/LoadingPage/LoadingPage';
import Welcome from './features/Welcome/Welcome';
import { ScreenType } from './enums/ScreenType';

const FornecedoresFavoritos = lazy(
  () => import('./features/FornecedoresFavoritos/FornecedoresFavoritos')
);
const PaginaInicialCompradores = lazy(
  () => import('./features/PaginaInicialCompradores/PaginaInicialCompradores')
);
const PaginaInicialFornecedores = lazy(
  () => import('./features/PaginaInicialFornecedores/PaginaInicialFornecedores')
);
const PrimeiraSessaoCadastro = lazy(
  () => import('./features/PrimeiraSessaoCadastro/PrimeiraSessaoCadastro')
);
const SegundaSessaoCadastroComprador = lazy(
  () => import('./features/SegundaSessaoCadastroComprador/SegundaSessaoCadastroComprador')
);
const PreCadastroEmpresaFornecedora = lazy(
  () => import('./features/PreCadastroEmpresaFornecedora/PreCadastroEmpresaFornecedora')
);
const CadastrosFisica = lazy(() => import('./features/CadastrosFisica/CadastrosFisica'));
const CadastrosJuridica = lazy(() => import('./features/CadastrosJuridica/CadastrosJuridica'));
const CadastroFuncionarioEmpresaCompradora = lazy(
  () => import('./features/CadastroFuncionarioEmpresaCompradora/CadastroFuncionarioEmpresaCompradora')
);
const CadastroFuncionarioEmpresaFornecedora = lazy(
  () => import('./features/CadastroFuncionarioEmpresaFornecedora/CadastroFuncionarioEmpresaFornecedora')
);
const CadastrosFornecedor = lazy(
  () => import('./features/CadastrosFornecedor/CadastrosFornecedor')
);
const SelecaoDeProdutos = lazy(() => import('./features/SelecaoDeProdutos/SelecaoDeProdutos'));
const SelecaoDeProdutosLista = lazy(
  () => import('./features/SelecaoDeProdutosLista/SelecaoDeProdutosLista')
);
const TipoDePagamento = lazy(() => import('./features/TipoDePagamento/TipoDePagamento'));
const PagamentoAVista = lazy(() => import('./features/PagamentoAVista/PagamentoAVista'));
const PagamentoAPrazo = lazy(() => import('./features/PagamentoAPrazo/PagamentoAPrazo'));
const PagamentoFrete = lazy(() => import('./features/PagamentoFrete/PagamentoFrete'));
const ResponderCotacao = lazy(() => import('./features/ResponderCotacao/ResponderCotacao'));
const InformacoesAdicionais = lazy(
  () => import('./features/InformacoesAdicionais/InformacoesAdicionais')
);
const Obras = lazy(() => import('./features/Obras/Obras'));
const MapaDePrecos = lazy(() => import('./features/MapaDePrecos/MapaDePrecos'));

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
