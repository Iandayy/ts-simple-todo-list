import { useState } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAdd: (content: string) => void }> = (props) => {
  const [value, setValue] = useState("");

  const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    props.onAdd(value);
    setValue("");
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="content">Todo</label>
      <input id="content" type="text" value={value} onChange={valueHandler} />
      <button>Submit</button>
    </form>
  );
};

export default NewTodo;
