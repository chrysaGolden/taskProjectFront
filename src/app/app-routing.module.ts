import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ErrorComponent } from './error/error.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { FooterComponent } from './footer/footer.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MennuComponent } from './mennu/mennu.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewEventComponent } from './new-event/new-event.component';


//welcome
const routes: Routes = [
  {path:'', component: LoginComponent}, //canActivate in conditions, only when a user is logged in, RouteGuardService
  {path:'login', component: LoginComponent},
  {path:'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'todos', component: ListToDosComponent, canActivate:[RouteGuardService]},
  {path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path:'todos/:id', component: TodoComponent, canActivate:[RouteGuardService]},
  {path:'calendar', component: CalendarComponent, canActivate:[RouteGuardService]},
  {path:'expenses', component: ExpensesComponent, canActivate:[RouteGuardService]},
  {path:'new-event', component: NewEventComponent, canActivate:[RouteGuardService]},

  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
