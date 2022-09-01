import { useState } from "react";
import TodoContex from "../../contex/todoContex";
import { Todo } from "../../types/types";
import TodosList from "../UI/elements/TodosList/TodosList";
import AddInputTodo from "../UI/elements/AddInputTodo/AddInputTodo";
import "./HomePage.css";

const initialTodosList: Todo[] = [
  // { id: 1, text: "Wash dishes", complete: false },
  // { id: 2, text: "Go to super market", complete: false },
];

const HomePage = () => {
  const [todos, setTodos] = useState(initialTodosList);
  const [inputText, setInputText] = useState("");
  const [counter, setCounter] = useState(todos.length + 1);

  return (
    <div>
      <TodoContex.Provider
        value={{
          todos,
          setTodos,
          inputText,
          setInputText,
          counter,
          setCounter,
        }}
      >
        <div className="HomePage-container">
          <h1>Todo List:</h1>
          <AddInputTodo />

          <TodosList />
        </div>
      </TodoContex.Provider>
    </div>
  );
};

export default HomePage;
