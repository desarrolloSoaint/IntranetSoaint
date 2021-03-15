import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterLoginGuardService } from './Services/AfterLoginGuard/after-login-guard.service';
import { AuthGuardService } from './Services/AuthGuard/auth-guard.service';
import { RoleGuardService } from './Services/RoleGuard/role-guard.service';
import { LoginComponent } from './Views/Auth/login/login.component';
import { RegisterComponent } from './Views/Auth/register/register.component';
import { AccessControlComponent } from './Views/main/access-control/access-control.component';
import { ActiveAfternoonPauseComponent } from './Views/main/access-control/active-afternoon-pause/active-afternoon-pause.component';
import { ActivePauseComponent } from './Views/main/access-control/active-pause/active-pause.component';
import { EntryTimeComponent } from './Views/main/access-control/entry-time/entry-time.component';
import { LunchTimeComponent } from './Views/main/access-control/lunch-time/lunch-time.component';
import { UsersHistoryComponent } from './Views/main/access-control/users-history/users-history.component';
import { ConfigurationComponent } from './Views/main/configuration/configuration.component';
import { IndexComponent } from './Views/main/configuration/index/index.component';
import { CreateScheduleComponent } from './Views/main/configuration/schedule/create-schedule/create-schedule.component';
import { SchedulesTableComponent } from './Views/main/configuration/schedule/schedules-table/schedules-table.component';
import { UpdateScheduleComponent } from './Views/main/configuration/schedule/update-schedule/update-schedule.component';
import { MainMenuComponent } from './Views/main/main-menu/main-menu.component';
import { MainComponent } from './Views/main/main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate:[AfterLoginGuardService]},
  { path: 'register', component: RegisterComponent, canActivate:[AfterLoginGuardService]},
  { path: 'main', component: MainComponent,canActivate: [AuthGuardService],
    children: [
      { path: '', component:  MainMenuComponent,canActivate: [AuthGuardService]},
      { path: 'configuration', component: ConfigurationComponent,canActivate: [RoleGuardService],
        children:[
          { path: '', component:  IndexComponent,canActivate: [RoleGuardService]},
          { path: 'schedules-table', component:  SchedulesTableComponent,canActivate: [RoleGuardService]},
          { path: 'add-schedule', component: CreateScheduleComponent,canActivate: [RoleGuardService] },
          { path: 'update-schedule/:id', component: UpdateScheduleComponent,canActivate: [RoleGuardService] },
        ]},
      { path: 'access-control', component: AccessControlComponent,canActivate: [AuthGuardService],
        children:[
          { path: 'users-history', component:  UsersHistoryComponent,canActivate: [RoleGuardService]},
          { path: 'entry-time', component:  EntryTimeComponent,canActivate: [AuthGuardService]},
          { path: 'lunch-time', component:  LunchTimeComponent,canActivate: [AuthGuardService]},
          { path: 'active-pause', component:  ActivePauseComponent,canActivate: [AuthGuardService]},
          { path: 'active-afternoon-pause', component:  ActiveAfternoonPauseComponent,canActivate: [AuthGuardService]},
        ]}
  ]},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
