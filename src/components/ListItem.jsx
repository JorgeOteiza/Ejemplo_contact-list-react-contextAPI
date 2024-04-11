import React, { useContext } from "react";
import TaskContext from "./TaskContext.jsx";

export default function ListItem({ task, index }) {
  const { taskActions } = useContext(TaskContext);

  return (
    <li>
      {task}
      <button onClick={() => taskActions({ type: "remove", index })}>
        {/* Icono de papelera */}
        <i className="bi bi-trash3"></i>
      </button>
    </li>
  );
}
