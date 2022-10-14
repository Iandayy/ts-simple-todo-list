import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import Todo from "../../models/todo";
import NewTodo from "../NewTodo/NewTodo";
import classes from "./Todos.module.css";

type Greet = {
  name: string;
};

function Todos(props: Greet) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addHandler = (content: string) => {
    const newTodo = new Todo(content);

    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <main className={classes.todos}>
      <strong>{props.name}' todo list</strong>
      <NewTodo onAdd={addHandler} />
      <TodoItem items={todos} onRemove={removeHandler} />
    </main>
  );
}

export default Todos;
