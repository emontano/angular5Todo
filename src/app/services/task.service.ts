import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/Task';

@Injectable()
export class TaskService {
  private inProgressTaskCollection: AngularFirestoreCollection<Task>;
  private completedTaskCollection: AngularFirestoreCollection<Task>;
  private taskDoc: AngularFirestoreDocument<Task>;
  private tasksInProgress: Observable<Task[]>;
  private tasksCompleted: Observable<Task[]>;
  private task: Observable<Task>;

  postUrl = 'https://us-central1-todolist-416b2.cloudfunctions.net/todoHelloWorld';

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    // Collection of task in progress
    this.inProgressTaskCollection = this.afs.collection('tasks', ref =>
      ref.where('completed', '==', false).orderBy('cat', 'asc').orderBy('name', 'asc') );
    // Collection of completed tasks
    this.completedTaskCollection = this.afs.collection('tasks', ref => ref.where('completed', '==', true));
    console.log('HttpService call: ' + this.getFunction());
   }

   getFunction(): Observable<any> {
      return this.http.get<any> (this.postUrl);
   }


  // Get list of tasks in progress
  getTasksInProgress(): Observable<Task[]> {
    // Get task with id
    this.tasksInProgress = this.inProgressTaskCollection.snapshotChanges().map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as Task;
         data.id = action.payload.doc.id;
         return data;
       });
     });
     return this.tasksInProgress;
  }

  // Get list of tasks completed
  getTasksCompleted(): Observable<Task[]> {
    // Get task without id
    this.tasksCompleted = this.completedTaskCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
          const data = action.payload.doc.data() as Task;
          data.id = action.payload.doc.id;
          return data;
        });
      });
    return this.tasksCompleted;
  }


  // Add a new task
  newTask(task: Task) {
    task.progress = 0;
    task.created_at = new Date();
    task.completed = false;
    task.collapse = false;
    this.inProgressTaskCollection.add(task);
  }

  // Get a Task base on id
  getTask(id: string): Observable<Task> {
     this.taskDoc = this.afs.doc<Task>(`tasks/${id}`);
     this.task = this.taskDoc.snapshotChanges().map(action => {
       if (action.payload.exists === false) {
         return null;
         } else {
         const data = action.payload.data() as Task;
         data.id = action.payload.id;
         return data;
       }
     });
     return this.task;
  }

  // Update a Task
  updateTask(task: Task) {
    console.log('Task to update: ' + task.id);
    this.taskDoc = this.afs.doc<Task>(`tasks/${task.id}`);
    this.taskDoc.update(task);
   }

   // Delete Task
   deleteTask( task: Task) {
     console.log('Task to delete: ' + task);
     this.taskDoc = this.afs.doc<Task>(`tasks/${task.id}`);
     this.taskDoc.delete();
   }

}
