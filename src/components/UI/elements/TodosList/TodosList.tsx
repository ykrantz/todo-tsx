import { useContext } from "react";
import todoContex from "../../../../contex/todoContex";
import { ChangeTodoType, Todo } from "../../../../types/types";
import TodoItemList from "../../atom/TodoItemList/TodoItemList";
// import TodoItemList from "../Todo/Todo";
import "./TodosList.css";

const TodosList = () => {
  const todoCtx = useContext(todoContex);

  const toggleTodo = (selectedTodo: Todo) => {
    if (todoCtx?.todos === undefined) return;

    const newTodosList: Todo[] = todoCtx?.todos.map((todo: Todo) =>
      todo === selectedTodo ? { ...todo, complete: !todo.complete } : todo
    );

    todoCtx?.setTodos(newTodosList);
  };

  const deleteTodo = (selectedTodo: Todo) => {
    if (todoCtx?.todos === undefined) return;

    const newTodosList: Todo[] = todoCtx?.todos.filter(
      (todo: Todo) => todo !== selectedTodo
    );

    todoCtx?.setTodos(newTodosList);
  };

  return (
    <div className="TodosList-list">
      {todoCtx?.todos.map((todo: Todo) => (
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
