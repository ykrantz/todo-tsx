import { Todo, ChangeTodoType } from "../../../../types/types";
import "./TodoItemList.css";

// export declare TodoItemList

type AppProp = {
  todo: Todo;
  toggleTodo: ChangeTodoType;
  deleteTodo: ChangeTodoType;
};

// const Todo = ({ todo }: AppProp): JSX.Element => {
const TodoItemList: React.FC<AppProp> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="TodoItemList-todoItem">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggleTodo(todo)}
      />
      <span
        className={`TodoItemList-todoText ${todo.complete ? "completed" : ""}`}
      >
        {todo.id} : {todo.text}
      </span>
      <button
        className="TodoItemList-deleteButton"
        onClick={() => deleteTodo(todo)}
      >
        🗑️
      </button>
    </div>
  );
};

export default TodoItemList;
