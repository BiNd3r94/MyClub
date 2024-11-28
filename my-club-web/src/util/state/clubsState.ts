import {Club} from "../../model/club";
import {atom, Atom} from "jotai";

export const clubsState: Atom<Club[]> = atom([])