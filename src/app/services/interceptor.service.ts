import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(public auth: AuthenticationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.headers.has("Content-Type")) {
      req = req.clone({
        headers: req.headers.set("Content-Type", "application/json")
      });
    }

    req = req.clone({ headers: req.headers.set("Accept", "application/json") });

    if (this.auth.getToken() !== null) {
      req = req.clone({
        headers: req.headers.set("x-access-token", this.auth.getToken())
      });
    }

    return next.handle(req).do(evt => {
      if (evt instanceof HttpResponse) {
        console.log("---> status:", evt.status);
        console.log("---> filter:", req.params.get("filter"));
      }
    });
  }
}
