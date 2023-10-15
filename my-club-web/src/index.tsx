import React from 'react';
import ReactDOM from 'react-dom/client';
import '/node_modules/primeflex/primeflex.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Keycloak from "keycloak-js";


//keycloak init options
let initOptions = {
  url: 'http://localhost:61422/', realm: 'quarkus', clientId: 'react-api', onLoad: 'login-required'
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

let keycloak = new Keycloak(initOptions);

// @ts-ignore
keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {

  if (!auth) {
    window.location.reload();
  } else {
    console.info("Authenticated");
  }

  root.render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>
  );
  localStorage.setItem("react-token", keycloak.token);
  localStorage.setItem("react-refresh-token", keycloak.refreshToken);

  setTimeout(() => {
    keycloak.updateToken(70).then((refreshed:boolean) => {
      if (refreshed) {
        console.debug('Token refreshed' + refreshed);
      } else {
        console.warn('Token not refreshed, valid for '
            + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).catch(() => {
      console.error('Failed to refresh token');
    });


  }, 60000)

}).catch(() => {
  console.error("Authenticated Failed");
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
