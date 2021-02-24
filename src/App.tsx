import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Dashboard from "./pages/Dashboard";
import { useLoading } from "./contexts/LoadingContext";
import Favicon from "react-favicon";
import LoadingPage from "./components/LoadingPage";
import './assets/scss/app.scss'

function App() {
  const { isLoadingApp } = useLoading();
  return (
    <Router>
      {isLoadingApp ? (
        <LoadingPage />
      ) : (
        <>
          <Favicon alertCount={0} url="./favicon.ico"/>
          <Dashboard>
            <Routes />
          </Dashboard>
        </>
      )}
    </Router>
  );
}

export default App;
