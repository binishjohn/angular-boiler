import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// components
import { LoginComponent } from "./modules/login/components/login/login.component";
import { DashboardRfpComponent } from "./modules/dashboard-rfp/dashboard-rfp.component";
import { AppShellComponent } from "./modules/app-shell/app-shell.component";
import { ClientRfpsComponent } from "./modules/client-rfps/client-rfps.component";
import { RfpDetailsComponent } from "./modules/rfp-details/rfp-details.component";
// guards
import { CanActivateRouteGuard } from "./guards/can-activate-route.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: AppShellComponent,
    children: [
      { path: "dashboard", component: DashboardRfpComponent },
      { path: "rfp/client/:id", component: ClientRfpsComponent },
      { path: "rfp/details/:id", component: RfpDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
