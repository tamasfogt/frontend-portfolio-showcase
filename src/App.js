import HomePage from "./pages/home/home.component";
import PortfolioPage from "./pages/portfolio/portfolio.component";

import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/layout/layout.component";
import RequireAuth from "./components/require-auth/require-auth";
import Toaster from "./components/toaster/toaster.component";

function App() {
  return (
    <div>
      <Layout>
        <Toaster></Toaster>
        <div className="h-screen">
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route
              exact
              path="/portfolio"
              element={
                <RequireAuth>
                  <PortfolioPage />
                </RequireAuth>
              }
            ></Route>
          </Routes>
        </div>
      </Layout>
    </div>
  );
}

export default App;
