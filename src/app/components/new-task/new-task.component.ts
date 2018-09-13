import { Component, OnInit,ViewChild } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CategoryService } from '../../services/category.service';
import { MessagesService } from '../../services/messages.service';
import { Cat } from '../../models/Cat';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  
  task:Task ={name:'',cat:'',desc:''};
  catList: Cat[];

  @ViewChild('taskForm') form: any;

  constructor(private taskService: TaskService, 
              private catService: CategoryService,
              private msgService: MessagesService) { }

  ngOnInit() {
    this.catService.getCategories().subscribe(cats => this.catList = cats);
  }

  onSubmit({value, valid}:{value:Task, valid:boolean}){
    console.log(value,valid);
    
    if(!valid){
      this.msgService.displayMessage('Please fill in all fields','alert-danger');
      }
    else{
      // add New Task
      this.taskService.newTask(value);
      this.msgService.displayMessageRedirect('New Task added','alert-success py-2','/');
      }
  }



}
