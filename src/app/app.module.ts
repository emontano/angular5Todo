import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
