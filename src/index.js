import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

//Provider: Redux Store를 index.js에 연결하기 위한 라이브러리.
