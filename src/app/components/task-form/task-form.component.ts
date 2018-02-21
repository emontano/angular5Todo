import { Component, OnInit,ViewChild } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/task.service';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  task:Task ={name:'',cat:'',desc:''};

  @ViewChild('clientForm') form: any;

  constructor(private taskService: TaskService, private msgService: MessagesService) { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:Task, valid:boolean}){

  }



}
