import "rxjs/add/operator/map";

import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { ServiceDiscovery } from "../constants/service-discovery";

export interface IAuth {
  userId: Number;
  token: String;
  session: String;
}

@Injectable()
export class AuthenticationService {
  private serviceUrl = ServiceDiscovery.userService.url;

  constructor(private http: HttpClient) {}

  public getToken(): string | null {
    return localStorage.getItem("token");
  }
  public setToken(token: string) {
    localStorage.setItem("toekn", token);
  }
  public isAuthenticated(): boolean {
    const token = this.getToken();
    return true;
  }
  public Authenticate(
    username: string,
    password: string,
    moduleId: number
  ): Observable<IAuth> {
    const actionURL = `${this.serviceUrl}/authentication/authenticate`;
    const payload = JSON.stringify({
      username: username,
      password: password,
      module_id: moduleId
    });
    return this.http.post<IAuth>(actionURL, payload);
  }
}
