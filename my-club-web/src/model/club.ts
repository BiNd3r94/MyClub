export class Club {
  constructor() {
    this.name = "";
    this.description = "";
    return this;
  }

  id: number
  name: string
  description: string
}

export const clubsPath: string = "/api/club/";
export const clubsCreatePath: string = "/clubs/create"