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

@Injectable()
export class UserDataService {
  private serviceUrl = ServiceDiscovery.userService.url;

  constructor(protected http: HttpClient) {}

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.serviceUrl);
  }

  public getSingle<T>(id: number): Observable<T> {
    return this.http.get<T>(this.serviceUrl + id);
  }

  public add<T>(itemName: string): Observable<T> {
    const toAdd = JSON.stringify({ ItemName: itemName });

    return this.http.post<T>(this.serviceUrl, toAdd);
  }

  public update<T>(id: number, itemToUpdate: any): Observable<T> {
    return this.http.put<T>(this.serviceUrl + id, JSON.stringify(itemToUpdate));
  }

  public delete<T>(id: number): Observable<T> {
    return this.http.delete<T>(this.serviceUrl + id);
  }
}


