import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { TaskService } from '../../services/task.service';
import { MessagesService } from '../../services/messages.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskList: any;

  constructor(private taskService: TaskService,private msgService: MessagesService) { }

  ngOnInit() {
    this.taskList = this.taskService.getTaskInProgress().subscribe(tasks =>{
      this.taskList = tasks;
    });
  }

}

