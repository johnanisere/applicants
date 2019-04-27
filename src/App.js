import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import storage from "./store";
import Loading from "./components/Loader";
import Root from "./Root";
import ToastContainer from "./components/ToastContainer";
import ErrorBoundary from "./compositions/ErrorBoundary";

const { store, persistor } = storage();

const App = () => (
  <ErrorBoundary>
    <ToastContainer />
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  </ErrorBoundary>
);

export default App;
