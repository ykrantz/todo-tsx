import { ChangeTodoType, Todo } from "../../../../types/types";
import TodoItemList from "../TodoItemList/TodoItemList";
// import TodoItemList from "../Todo/Todo";
import "./TodosList.css";

type Props = {
  todosList: Todo[];
  toggleTodo: ChangeTodoType;
  deleteTodo: ChangeTodoType;
};

const TodosList: React.FC<Props> = ({
  todosList,
  toggleTodo,
  deleteTodo,
}): JSX.Element => {
  return (
    <div className="TodosList-list">
      {todosList.map((todo: Todo) => (
        <TodoItemList
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodosList;
