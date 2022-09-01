import { useContext } from "react";
import todoContex from "../../../../contex/todoContex";
import { HandleInputTextType } from "../../../../types/types";
import "./InputTodo.css";

const InputTodo = () => {
  const todoCtx = useContext(todoContex);

  const handleInputText = (text?: string) => {
    if (typeof text === "undefined") return;
    todoCtx?.setInputText(text);
  };

  return (
    <div className="InputTodo-input">
      <input
        type="text"
        value={todoCtx?.inputText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputText(e.currentTarget.value)
        }
      />
    </div>
  );
};

export default InputTodo;
