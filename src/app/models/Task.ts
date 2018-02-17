export interface Task{
    id:string;
    taskName:string;
    cat?:string;
    desc?:string;
    percentage:number;
    created_at?:Date;
    completed:boolean;
}