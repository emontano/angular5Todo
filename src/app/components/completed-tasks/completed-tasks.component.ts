import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs/Observable';
import { Task } from '../../models/Task';


@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {
  taskList: Task[];

  constructor(private taskService: TaskService,
              private catService: CategoryService) 
              { }

  ngOnInit() {
    this.taskService.getTasksCompleted().subscribe(tasks => {
      this.taskList = tasks

      this.catService.getCategories().subscribe(cats => {
        tasks.forEach(task =>{
          console.log("Category to find:" + task.cat)
          cats.forEach(cat => {
            if (cat.cat_name == task.cat) {
                task.color = cat.color;
                return;
              }
            });
          });
        });
      });
    }

}
