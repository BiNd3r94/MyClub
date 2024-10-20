import React, {createContext, PropsWithChildren, useEffect, useState} from "react";
import Keycloak from "keycloak-js";

// Create a context for Keycloak
const KeycloakContext = createContext(null);

const keycloakInstance = new Keycloak({
  url: 'http://my-club.com/auth/',
  realm: 'my-club',
  clientId: 'my-club-web',
});

const KeycloakProvider = ({children}: PropsWithChildren) => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (!keycloakInstance.authenticated) {
      // Initialize Keycloak only once
      keycloakInstance.init({onLoad: 'login-required'})
      .then(authenticated => {
        setKeycloak(keycloakInstance);
        setAuthenticated(authenticated);
      })
      .catch(error => {
        console.error("Failed to initialize Keycloak", error);
      });
    }
  }, []); // Empty dependency array ensures this runs once

  if (!keycloak || !authenticated) {
    return <div>Loading...</div>; // Show a loading screen until Keycloak is initialized
  }

  return (
      <KeycloakContext.Provider value={keycloak}>
        {children}
      </KeycloakContext.Provider>
  );
};

export {KeycloakContext, KeycloakProvider};
