import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: 'http://my-club:8180/',
  realm: 'quarkus',
  clientId: 'my-club-com',
});

export default keycloak;