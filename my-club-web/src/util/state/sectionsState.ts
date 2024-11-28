import {Section} from "../../model/section";
import {atom, Atom} from "jotai";

export const sectionsState: Atom<Section[]> = atom([])