/* eslint-disable react/prop-types */
import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button is clicked", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const strikeItem = item.done ? styles.completed : "";

  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemName}>
          <h3 className={strikeItem} onClick={() => handleClick(item.name)}>
            {item.name}
          </h3>
          <span>
            <button
              onClick={() => handleDelete(item)}
              className={styles.delete}
            >
              x
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
