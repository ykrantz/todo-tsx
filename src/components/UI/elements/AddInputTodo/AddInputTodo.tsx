import { useContext } from "react";
import todoContex from "../../../../contex/todoContex";
import InputTodo from "../../atom/InputTodo/InputTodo";
import "./AddInputTodo.css";

const AddInputTodo = () => {
  const todoCtx = useContext(todoContex);

  const handleAddTodo = (text?: string) => {
    if (typeof text === "undefined") return;

    todoCtx?.setCounter(todoCtx?.counter + 1);
    todoCtx?.setTodos([
      ...todoCtx?.todos,
      { id: todoCtx?.counter, text: text, complete: false },
    ]);
    todoCtx?.setInputText("");
  };

  const handleInputText = (text?: string) => {
    if (typeof text === "undefined") return;
    todoCtx?.setInputText(text);
  };

  return (
    <div className="AddInputTodo-container">
      <div className="AddInputTodo-InputAndAdd">
        <button
          className="AddInputTodo-buttton"
          onClick={() => handleAddTodo(todoCtx?.inputText)}
          disabled={todoCtx?.inputText === ""}
        >
          ➕
        </button>

        <div className="AddInputTodo-InputTodo-input">
          <InputTodo />
        </div>
        <button
          className="HomePage-buttton"
          onClick={() => handleInputText("")}
          disabled={todoCtx?.inputText === ""}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default AddInputTodo;
