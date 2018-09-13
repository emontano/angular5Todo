import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { LoginComponent } from '../app/components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NewTaskComponent } from '../app/components/new-task/new-task.component';
import { EditTaskComponent } from '../app/components/edit-task/edit-task.component';
import { CompletedTasksComponent } from '../app/components/completed-tasks/completed-tasks.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guards';

const routes:Routes =[
{ path: '', component: DashboardComponent ,canActivate:[AuthGuard]},
{ path: 'login', component: LoginComponent },
{ path: 'new-task', component: NewTaskComponent,canActivate:[AuthGuard] },
{ path: 'task/edit/:id', component: EditTaskComponent,canActivate:[AuthGuard] },
{ path: 'completed-tasks', component: CompletedTasksComponent,canActivate:[AuthGuard] },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
