import {Game} from "./game";
import {Member} from "./member";
import {Section} from "./section";

export interface Team {
  id: number,
  clubSectionId: Section,

  name: string,
  description: string,

  members: Member[],
  games: Game[]
}