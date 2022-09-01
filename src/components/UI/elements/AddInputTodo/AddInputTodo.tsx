import { useContext } from "react";
import todoContex from "../../../../contex/todoContex";
import InputTodo from "../../atom/InputTodo/InputTodo";
import "./AddInputTodo.css";

// type AppProp = {
//   inputText: string;
//   handleInputText: HandleInputTextType;
// };

// const Todo = ({ todo }: AppProp): JSX.Element => {
// const AddInputTodo: React.FC<AppProp> = ({  }) => {
const AddInputTodo = () => {
  const todoContext = useContext(todoContex);

  const handleAddTodo = (text?: string) => {
    if (typeof text === "undefined") return;

    todoContext?.setCounter(todoContext?.counter + 1);
    todoContext?.setTodos([
      ...todoContext?.todos,
      { id: todoContext?.counter, text: text, complete: false },
    ]);
    todoContext?.setInputText("");
  };

  const handleInputText = (text?: string) => {
    if (typeof text === "undefined") return;
    todoContext?.setInputText(text);
  };

  return (
    <div className="AddInputTodo-container">
      <div className="AddInputTodo-InputAndAdd">
        <button
          className="AddInputTodo-buttton"
          onClick={() => handleAddTodo(todoContext?.inputText)}
          disabled={todoContext?.inputText === ""}
        >
          ➕
        </button>

        <div className="AddInputTodo-InputTodo-input">
          <InputTodo
          // handleInputText={handleInputText}
          // inputText={todoContext?.inputText}
          />
        </div>
        <button
          className="HomePage-buttton"
          onClick={() => handleInputText("")}
          disabled={todoContext?.inputText === ""}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default AddInputTodo;
