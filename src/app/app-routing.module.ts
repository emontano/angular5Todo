import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { LoginComponent } from '../app/components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskFormComponent } from '../app/components/task-form/task-form.component';
import { EditTaskComponent } from '../app/components/edit-task/edit-task.component';
import { CompletedTasksComponent } from '../app/components/completed-tasks/completed-tasks.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes:Routes =[
{ path: '', component: DashboardComponent },
{ path: 'login', component: LoginComponent },
{ path: 'new-task', component: TaskFormComponent },
{ path: 'task/edit/:id', component: EditTaskComponent },
{ path: 'completed-tasks', component: CompletedTasksComponent },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
