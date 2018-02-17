import { Injectable } from '@angular/core';
import { Task } from '../models/Task';


@Injectable()
export class TaskService {

  taskList: Task[] = [
  {id:'111',taskName:'Poner tejas en el cubo',cat:'house',desc:'Comprar las tejas y maderas para hacer el tejado del cubo',
  percentage:0,completed:false},
  {id:'222',taskName:'Hacer escalera para cubo',cat:'house',desc:'Hacer una escalera de madera para el cubo',
  percentage:0,completed:false},
  {id:'333',taskName:'Ordenar bastidor puerta',cat:'house',desc:'Mandar hacer el cuadro para la puerta del cubo',
  percentage:0,completed:false},
  {id:'444',taskName:'Poner smart lock',cat:'smart',desc:'Mandar hacer modificaciones para el smart lock',
  percentage:0,completed:false},
  {id:'555',taskName:'Hacer Todo List',cat:'Programming',desc:'Terminar la applicacion de todo list',
  percentage:30,completed:false},
  {id:'666',taskName:'Iniciar aws certification',cat:'Programming',desc:'Reiniciar a estudiar para el examen de certificacion de aws associate architec',
  percentage:50,completed:false},
  ];

  constructor() { }

  getTaskList(){ 
    return this.taskList;
  }
}
