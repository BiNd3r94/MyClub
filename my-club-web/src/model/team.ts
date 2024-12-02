import {Member} from "./member";
import {Section} from "./section";

export class Team {
  constructor() {
    this.name = ""
    this.description = ""
    return this;
  }

  id: number;
  clubSectionId: Section;

  name: string;
  description: string;

  members: Member[];
}

export const teamsPath: string = "/api/team/"