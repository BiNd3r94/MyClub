import {atom, Atom} from "jotai";
import Keycloak from "keycloak-js";

export const keycloakState= atom<Keycloak>()
