import {Member} from "./member";
import {Section} from "./section";

export interface Team {
  id: number,
  clubSectionId: Section,

  name: string,
  description: string,

  members: Member[],
}

export const teamsPath: string = "/api/team/"