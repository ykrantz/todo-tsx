import { type } from "os";
import { createContext } from "react";
import { ChangeTodoType, HandleInputTextType, Todo } from "../types/types";

type AppContexType={
    todos:Todo[],
    setTodos:(todosList:Todo[])=>void
   inputText:string,
    setInputText:(text:string)=>void,
    counter:number,
     setCounter:(num:number)=>void
    

}

export default createContext<AppContexType|null>(null);