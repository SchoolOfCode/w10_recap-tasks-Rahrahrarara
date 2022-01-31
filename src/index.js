import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-3tlaii20.eu.auth0.com"
    clientId="NBxyqYROwpfMUJwcxw7yK5ZZcbdtsvAV"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </Auth0Provider>,
  document.getElementById("root")
);
