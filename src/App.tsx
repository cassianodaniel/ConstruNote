import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Dashboard from "./pages/Dashboard";
import { useLoading } from "./contexts/LoadingContext";
import Favicon from "react-favicon";
import LoadingPage from "./components/LoadingPage";

function App() {
  const { isLoadingApp } = useLoading();
  const notificacoesDeCompra = 3;
  return (
    <Router>
      {isLoadingApp ? (
        <LoadingPage />
      ) : (
        <>
          <Favicon alertCount={notificacoesDeCompra} url="./favicon.ico"/>
          <Dashboard>
            <Routes />
          </Dashboard>
        </>
      )}
    </Router>
  );
}

export default App;
