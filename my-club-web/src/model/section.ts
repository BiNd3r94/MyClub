import {Team} from "./team";

export interface Section {
  id: number,
  clubId: number,

  name: string,
  description: string,

  teams: Team[],
}

export const sectionsPath: string = "/api/section/";