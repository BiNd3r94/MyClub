import {Section} from "../../model/section";
import {atom, Atom} from "jotai";

export const sectionsState= atom<Section[]>([])