import { type } from "os";

type Todo = {
    text?: string;
    complete?: boolean;
    id?: number;
  };

type ChangeTodoType=(todo:Todo)=>void
type HandleInputTextType=(text:string)=>void