import {Atom, atom} from "jotai";
import {Team} from "../../model/team";

export const teamsState: Atom<Team[]> = atom([])