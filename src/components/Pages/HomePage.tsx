import { useState } from "react";
import { Todo } from "../../types/types";
import InputTodo from "../UI/atom/InputTodo/InputTodo";
import TodosList from "../UI/atom/TodosList/TodosList";
import "./HomePage.css";

const initialTodosList: Todo[] = [
  { id: 1, text: "Wash dishes", complete: false },
  { id: 2, text: "Go to super market", complete: false },
];

const HomePage = () => {
  const [todos, setTodos] = useState(initialTodosList);
  const [inputText, setInputText] = useState("");
  const [counter, setCounter] = useState(todos.length + 1);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodosList: Todo[] = todos.map((todo: Todo) =>
      todo === selectedTodo ? { ...todo, complete: !todo.complete } : todo
    );

    setTodos(newTodosList);
  };

  const deleteTodo = (selectedTodo: Todo) => {
    const newTodosList: Todo[] = todos.filter(
      (todo: Todo) => todo !== selectedTodo
    );

    setTodos(newTodosList);
  };

  const handleInputText = (text: string) => {
    setInputText(text);
  };

  const handleAddTodo = (text: string) => {
    setCounter((currenCounter) => currenCounter + 1);
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: counter, text: text, complete: false },
    ]);
    setInputText("");
  };

  return (
    <div>
      <div className="HomePage-container">
        <h1>Todo List:</h1>
        <div className="HomePage-InputAndAdd">
          <button
            className="HomePage-buttton"
            onClick={() => handleAddTodo(inputText)}
            disabled={inputText === ""}
          >
            ➕
          </button>

          <div className="HomePage-InputTodo-input">
            <InputTodo
              handleInputText={handleInputText}
              inputText={inputText}
            />
          </div>
          <button
            className="HomePage-buttton"
            onClick={() => handleInputText("")}
            disabled={inputText === ""}
          >
            ❌
          </button>
        </div>
        <TodosList
          todosList={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default HomePage;
