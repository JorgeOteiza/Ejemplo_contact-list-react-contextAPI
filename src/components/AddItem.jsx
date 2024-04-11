import { useContext } from "react";
import TaskContext from "./TaskContext.jsx";

export default function AddItem() {
  // Hacemos uso del contexto y accedemos a la función 'taskActions'
  const { taskActions } = useContext(TaskContext);
  function handleAddTask(e) {
    e.preventDefault();
    // Llamamos al actions especificándole 'type'
    // asi como también la tarea que se va a agregar
    let textbox = e.target.elements.task;
    taskActions({ type: "add", payload: textbox.value });
    textbox.value = "";
  }
  return (
    <li>
      <form onSubmit={handleAddTask}>
        <input name="task" type="text"/>
        <button type="submit">+</button>
      </form>
    </li>
  );
}