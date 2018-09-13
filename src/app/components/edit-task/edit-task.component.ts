import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { CategoryService } from '../../services/category.service';
import { MessagesService } from '../../services/messages.service';
import { Task } from '../../models/Task';
import { Cat } from '../../models/Cat';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  id: string;
  selectedTask: Task = {name: '', cat: '', desc: ''};
  selectedColor: string;
  catList: Cat[];

  constructor(private taskService: TaskService,
              private catService: CategoryService,
              private msgService: MessagesService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    // get id from url
    this.id = this.route.snapshot.params['id'];
    console.log('ID:' + this.id);
    // get the task from service
    this.taskService.getTask(this.id).subscribe(task => {
      this.selectedTask = task;
      this.catService.getCategories().subscribe(cats => {
        this.catList = cats;
        cats.forEach(cat => {
          if (this.selectedTask.cat === cat.cat_name) {
            this.selectedTask.color = cat.color;
            this.selectedColor = cat.color;
            return;
            }
          });
        });
    });
    console.log('Task ' + this.selectedTask.name + '   color: ' + this.selectedColor);
  }

  onSubmit({value, valid}: { value: Task, valid: boolean}) {
    if (!valid) {
      this.msgService.displayMessage('Please fill in all required fields', 'alert-danger');
      } else {
      // add id to task
      value.id = this.id;
      // update Client
      if (value.completed) {
        value.completed_at = new Date();
      }
      this.taskService.updateTask(value);
      this.msgService.displayMessageRedirect('Task updated', 'alert-success', '/');
      }
  }

}
