import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";
// service
import { UserDataService } from "./../../../../services/user.service";
import {
  AuthenticationService,
  IAuth
} from "./../../../../services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    public userDataService: UserDataService,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {}
  public Login() {
    this.router.navigate(["/dashboard"]);
    // this.authService.Authenticate("binish", "admin", 1).subscribe(
    //   data => {},
    //   (err: HttpErrorResponse) => {
    //     console.log(err.error);
    //     console.log(err.name);
    //     console.log(err.message);
    //     console.log(err.status);
    //   }
    // );
  }
}
