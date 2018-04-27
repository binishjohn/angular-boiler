import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

// routes
import { AppRoutingModule } from "./app.routing";
// components
import { AppComponent } from "./app.component";
import { LoginComponent } from "./modules/login/components/login/login.component";
// services
import { AuthenticationInterceptor } from "./services/interceptor.service";
import { UserDataService } from "./services/user.service";
import { AuthenticationService } from "./services/authentication.service";
// guards
import { CanActivateRouteGuard } from "./guards/can-activate-route.guard";
import { NavigationComponent } from "./modules/navigation/navigation.component";
import { DashboardRfpComponent } from './modules/dashboard-rfp/dashboard-rfp.component';
import { AppShellComponent } from './modules/app-shell/app-shell.component';
import { RfpComponent } from './modules/rfp/rfp.component';
import { ClientRfpsComponent } from './modules/client-rfps/client-rfps.component';
import { RfpDetailsComponent } from './modules/rfp-details/rfp-details.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, NavigationComponent, DashboardRfpComponent, AppShellComponent, RfpComponent, ClientRfpsComponent, RfpDetailsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    AuthenticationService,
    // CanActivateRouteGuard,
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
