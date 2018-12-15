import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { TaskService } from '../../services/task.service';
import { CategoryService } from '../../services/category.service';
import { MessagesService } from '../../services/messages.service';
import { Task } from '../../models/Task';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskList: Task[];
  p: Number = 1;

  constructor(private catService: CategoryService,
              private taskService: TaskService,
              private msgService: MessagesService,
              ) { }

  ngOnInit() {
     this.taskService.getTasksInProgress().subscribe(tasks => {
        this.taskList = tasks;

        this.catService.getCategories().subscribe(cats => {
          tasks.forEach(task => {
              console.log('Category to find:' + task.cat );
              cats.forEach(cat => {
                if (cat.cat_name === task.cat) {
                    task.color = cat.color;
                    return;
                  }
              });
          });
          });
    });
  }

  onCompleteClick(id: string) {
    if (confirm('Are you sure, It can\'t be undone?')) {
      // get the client from service
      this.taskService.getTask(id).subscribe(task => {
      if (task != null && !task.completed) {
          task.completed = true;
          task.completed_at = new Date();
          console.log('Complete task: ' + task.id + ':' + task.name);
          this.taskService.updateTask(task);
          this.msgService.displayMessage('Task Completed', 'alert-success');
          }
      });
    }
  }

  onDeleteClick(id: string) {
    if (confirm('Are you sure, It can\'t be undone?')) {
      // get the client from service
      this.taskService.getTask(id).subscribe(task => {
      if (task != null) {
          console.log(task);
          this.taskService.deleteTask(task);
          this.msgService.displayMessage('Task Deleted', 'alert-success');
          }
      });
    }
  }

}

