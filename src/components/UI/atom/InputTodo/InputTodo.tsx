import { HandleInputTextType } from "../../../../types/types";
import "./InputTodo.css";

// export declare TodoItemList

type AppProp = {
  inputText: string;
  handleInputText: HandleInputTextType;
};

// const Todo = ({ todo }: AppProp): JSX.Element => {
const InputTodo: React.FC<AppProp> = ({ inputText, handleInputText }) => {
  return (
    <div className="InputTodo-input">
      <input
        type="text"
        value={inputText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputText(e.currentTarget.value)
        }
      />
    </div>
  );
};

export default InputTodo;
