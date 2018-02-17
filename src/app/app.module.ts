import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskServicesService } from './services/task-services.service';
import { TaskService } from './services/task.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    TaskFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
