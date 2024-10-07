/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <>
      {/* TODO FORM */}
      <form className={styles.modernForm}>
        <div className={styles.modernInputContainer}>
          <input
            type="text"
            className={styles.modernInput}
            onChange={(e) => setTodo({ name: e.target.value })}
            value={todo.name}
            placeholder="Enter todo item..."
          />

          <button onClick={handleSubmit} className={styles.modernInputButton}>
            Add
          </button>
        </div>
      </form>
    </>
  );
}
