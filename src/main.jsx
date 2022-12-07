import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { Provider } from "react-redux";
import { store } from "./store/store";
import global_en from './Lenguajes/en/global.json'
import global_es from './Lenguajes/es/global.json'
import "./index.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("idioma") ? localStorage.getItem("idioma") : "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
