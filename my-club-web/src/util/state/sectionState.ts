import {atom, RecoilState} from "recoil";
import {Section} from "../model/section";

export const sectionsState: RecoilState<Section[]> = atom({
  key: "sectionsState",
  default: []
})