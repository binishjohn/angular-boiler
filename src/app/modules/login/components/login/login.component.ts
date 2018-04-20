import { Component, OnInit } from "@angular/core";
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
    public userDataService: UserDataService,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    // this.Login();
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      // ...our form is valid, we can submit the data
    }
  }

  public Login() {
    this.authService.Authenticate("binish", "admin", 1).subscribe(
      data => {},
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
  }
}
