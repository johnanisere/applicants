import React, { Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Loading from "./components/Loader";

const Applications = lazy(() => import("./compositions/Applications"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" render={props => <Applications {...props} />} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
