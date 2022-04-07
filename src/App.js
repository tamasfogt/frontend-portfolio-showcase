import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/layout/layout.component";
import RequireAuth from "./components/require-auth/require-auth";
import Toaster from "./components/toaster/toaster.component";

const HomePage = React.lazy(() => import("./pages/home/home.component"));
const PortfolioPage = React.lazy(() =>
  import("./pages/portfolio/portfolio.component")
);
const SignInPage = React.lazy(() =>
  import("./pages/sign-in/sign-in.component")
);
const RegistrationPage = React.lazy(() =>
  import("./pages/registration/registration.component")
);

function App() {
  return (
    <div>
      <Layout>
        <Toaster></Toaster>
        <div className="min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route exact path="/sign-in" element={<SignInPage />}></Route>
              <Route
                exact
                path="/registration"
                element={<RegistrationPage />}
              ></Route>
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
          </Suspense>
        </div>
      </Layout>
    </div>
  );
}

export default App;
