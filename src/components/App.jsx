import { useContext } from "react";
import "./App.css";
import TaskContext from "./TaskContext.jsx";
import ListItem from "./ListItem.jsx";
import AddItem from "./AddItem.jsx";

import React, { useContext } from 'react';
import { AppContext } from '../AppContext.js';

export const TodoList = () => {
	const context = useContext(AppContext)
	return <div>
		{context.store.todos.map((task, i) => (<li key={i}>{task}</li>))}
		<button onClick={() => context.actions.addTask("I am the task " + context.store.todos.length)}> + add </button>
	</div>
}
export default function App() {
  const {tasks} = useContext(TaskContext);

  return (
    <main>
      <h2>Todo list</h2>
      <ul className="list-group w-50">
        <AddItem />
        {tasks.map((task, index) => (
          <ListItem key={index} task={task} index={index} />
        ))}
      </ul>
    </main>
  );
}
