import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class TaskService {
  private taskCollection: AngularFirestoreCollection<Task>;
  private taskDoc: AngularFirestoreDocument<Task>
  private tasksInProgress: Observable<Task[]>;
  private tasksCompleted: Observable<Task[]>;
  private task:Observable<Task>;
  
  list= [
  {id:'111',name:'Poner tejas en el cubo',cat:'house',desc:'Comprar las tejas y maderas para hacer el tejado del cubo',
  progress:0,completed:false,collapse:true},
  {id:'222',name:'Hacer escalera para cubo',cat:'house',desc:'Hacer una escalera de madera para el cubo',
  progress:0,completed:false,collapse:true},
  {id:'333',name:'Ordenar bastidor puerta',cat:'house',desc:'Mandar hacer el cuadro para la puerta del cubo',
  progress:0,completed:false,collapse:true},
  {id:'444',name:'Poner smart lock',cat:'smart',desc:'Mandar hacer modificaciones para el smart lock',
  progress:0,completed:false,collapse:true},
  {id:'555',name:'Hacer Todo List',cat:'Programming',desc:'Terminar la applicacion de todo list',
  progress:30,completed:false,collapse:true},
  {id:'666',name:'Iniciar aws certification',cat:'Programming',desc:'Reiniciar a estudiar para el examen de certificacion de aws associate architec',
  progress:50,completed:false,collapse:true},
  ];

  constructor(private afs: AngularFirestore) {
    this.taskCollection = this.afs.collection('tasks', ref => ref.orderBy('name', 'asc'));
   }

  //Get list of task in progress
  getTaskInProgress() :Observable<Task[]> {
    //Get task with id
    this.tasksInProgress = this.taskCollection.snapshotChanges().map(changes => {
       return changes.map(action =>{ 
         const data = action.payload.doc.data() as Task;
         data.id = action.payload.doc.id;
         return data;
       });
     });
     return this.tasksInProgress;
  }


  //Add a new task
  newTask(task: Task) {
    task.progress = 0;
    task.created_at = new Date();
    task.completed = false;
    task.collapse = false;
    this.taskCollection.add(task);
  }

  /*Get a client base on id
  getClient(id:string):Observable<Client>{
     this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
     this.client = this.clientDoc.snapshotChanges().map(action => {
       if(action.payload.exists === false){
         return null;
         }
       else{
         const data = action.payload.data() as Client;
         data.id = action.payload.id;
         return data;
       }
     }); 
     return this.client;
  }*/

  //Update a Task
  updateTask(task:Task){
    console.log("Task to update: "+task.id);
    this.taskDoc = this.afs.doc<Task>(`tasks/${task.id}`);
    this.taskDoc.update(task);
   }

   //Delete Task
   deleteTask( task:Task){
     console.log("Task to delete: "+task);
     this.taskDoc = this.afs.doc<Task>(`tasks/${task.id}`);
     this.taskDoc.delete();
   }

}
