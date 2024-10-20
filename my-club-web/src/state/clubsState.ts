import {atom, RecoilState} from "recoil";
import {Club} from "../model/club";

export const clubsState: RecoilState<Club[]> = atom({
  key: "clubsState",
  default: []
})