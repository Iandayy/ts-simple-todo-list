import Todo from "../../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ items: Todo[]; onRemove: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <li
          className={classes.item}
          key={item.id}
          onClick={props.onRemove.bind(null, item.id)}
        >
          {item.content}
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
