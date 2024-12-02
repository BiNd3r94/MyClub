import {Atom, atom} from "jotai";
import {Team} from "../../model/team";

export const teamsState = atom<Team[]>([])