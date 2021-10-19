import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import { createStore } from "redux";
import Reducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
