import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
import { MennuComponent } from './mennu/mennu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ReactiveFormsModule } from '@angular/forms';
import interactionPlugin from '@fullcalendar/interaction';
import { NewEventComponent } from './new-event/new-event.component';
import { FilterPipe } from './filter.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListToDosComponent,
    MennuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
    CalendarComponent,
    ExpensesComponent,
    NewEventComponent,
    FilterPipe    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
