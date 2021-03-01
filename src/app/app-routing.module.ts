import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterLoginGuardService } from './Services/AfterLoginGuard/after-login-guard.service';
import { AuthGuardService } from './Services/AuthGuard/auth-guard.service';
import { LoginComponent } from './Views/Auth/login/login.component';
import { RegisterComponent } from './Views/Auth/register/register.component';
import { AccessControlComponent } from './Views/main/access-control/access-control.component';
import { ConfigurationComponent } from './Views/main/configuration/configuration.component';
import { MainMenuComponent } from './Views/main/main-menu/main-menu.component';
import { MainComponent } from './Views/main/main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate:[AfterLoginGuardService]},
  { path: 'register', component: RegisterComponent, canActivate:[AfterLoginGuardService]},
  { path: 'main', component: MainComponent,canActivate: [AuthGuardService],
    children: [
      { path: '', component:  MainMenuComponent},
      { path: 'configuration', component: ConfigurationComponent },
      { path: 'access-control', component: AccessControlComponent }
  ]},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
