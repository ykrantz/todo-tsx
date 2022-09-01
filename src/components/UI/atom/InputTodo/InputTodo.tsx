import { useContext } from "react";
import todoContex from "../../../../contex/todoContex";
import { HandleInputTextType } from "../../../../types/types";
import "./InputTodo.css";

// export declare TodoItemList

type AppProp = {
  inputText: string;
  handleInputText: HandleInputTextType;
};

// const Todo = ({ todo }: AppProp): JSX.Element => {
// const InputTodo: React.FC<AppProp> = ({ inputText, handleInputText }) => {
const InputTodo = () => {
  const todoContext = useContext(todoContex);

  const handleInputText = (text?: string) => {
    if (typeof text === "undefined") return;
    todoContext?.setInputText(text);
  };

  return (
    <div className="InputTodo-input">
      <input
        type="text"
        value={todoContext?.inputText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputText(e.currentTarget.value)
        }
      />
    </div>
  );
};

export default InputTodo;
