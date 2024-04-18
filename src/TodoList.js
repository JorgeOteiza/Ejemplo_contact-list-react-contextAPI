import React, { useContext } from 'react';
import { AppContext } from './AppContext.js';

export const TodoList = () => {
  const { store, actions } = useContext(AppContext);
  return (
    <div>
      {store.todos.map((task, i) => (
        <li key={i}>{task}</li>
      ))}
      <button onClick={() => actions.addTask("I am the task " + store.todos.length)}>
        + add
      </button>
    </div>
  );
}
