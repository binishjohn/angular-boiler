import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// components
import { LoginComponent } from "./modules/login/components/login/login.component";

// guards
import { CanActivateRouteGuard } from "./guards/can-activate-route.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: LoginComponent }
  // {
  //   path: "dashboard",
  //   component: LoginComponent,
  //   canActivate: [CanActivateRouteGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
