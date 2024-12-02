import {Club} from "../../model/club";
import {atom, Atom} from "jotai";

export const clubsState = atom<Club[]>([]);
export const currentClubState = atom<Club>(new Club());