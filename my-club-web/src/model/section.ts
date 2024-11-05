import {Team} from "./team";

export class Section {
  constructor() {
    this.name = ""
    this.description = ""
  }

  id: number
  clubId: number

  name: string
  description: string

  teams: Team[]
}

export const sectionsPath: string = "/api/section/";