import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
//import { FlashMessagesModule } from 'angular2-flash-messages';

import { environment } from '../environments/environment';
import {AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditTaskComponent } from '../app/components/edit-task/edit-task.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { TaskService } from './services/task.service';
import { AuthService } from './services/auth.service';
import { MessagesService } from './services/messages.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    TaskFormComponent,
    NavbarComponent,
    DashboardComponent,
    EditTaskComponent,
    CompletedTasksComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'todoList'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [TaskService, AuthService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
