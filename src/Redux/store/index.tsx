//React Imports
import React from "react";
import Loading from "../../Components/Reusable/Loading/Page";

//Redux Persist Imports
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";

// Redux Imports
import { Provider } from "react-redux";

import configuredStore from "./configuredStore";

const persistor = persistStore(configuredStore);

const ReduxStore: React.FC = (props) => {
  return (
    <Provider store={configuredStore}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxStore;
