import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { AuthenticationService } from "./../services/authentication.service";

@Injectable()
export class CanActivateRouteGuard implements CanActivate {
  constructor(private auth: AuthenticationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.auth.isAuthenticated();
  }
}
