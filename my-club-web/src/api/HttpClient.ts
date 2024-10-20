import Keycloak from "keycloak-js";

export class HTTPClient {
  keycloak

  constructor(keycloak: Keycloak) {
    this.keycloak = keycloak;
  }

  async get(url: string): Promise<any> {
    return await this.baseCall(url, "GET")
  }

  async create(url: string): Promise<any> {
    return this.baseCall(url, "POST")
  }

  async update(url: string): Promise<any> {
    return this.baseCall(url, "PATCH")
  }

  async remove(url: string): Promise<any> {
    return this.baseCall(url, "DELETE")
  }

  async baseCall(url: string, method: string): Promise<any> {
    try {
      return await this.keycloak.updateToken().then(async () => {
        return fetch(url, {
          headers: this.getHeaders(this.keycloak.token),
          method: method
        }).then(async (res: Response) => {
          if (res.ok) {
            return await res.json()
          } else {
            return createResponseError(res);
          }
        }).catch((error) => {
          throw error;
        })
      });
    } catch (error) {
      throw error;
    }

  }

  getHeaders(token: string) {
    return {
      "Authorization": "Bearer " + token
    }
  }
}


type ResponseError = {
  code: number,
  message: string
}

const createResponseError = (res: Response): ResponseError => {
  return {
    code: res.status,
    message: res.statusText
  }
}
