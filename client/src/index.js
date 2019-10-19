import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "./auth/react-auth0-spa";
import "./index.css";
import App from "./App";
import config from "./config/auth0.config.json";
import * as serviceWorker from "./serviceWorker";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
