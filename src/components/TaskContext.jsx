import { useReducer, createContext } from "react";

// Creamos el contexto vacío
const TaskContext = createContext(null);

const TaskReducer = (state, action) => {
  // Aquí va el reducer que se definió anteriormente👆
};

// Creamos un componente que va a envolver nuestra aplicación en el contexto
export function TaskProvider({ children }) {
  // Creamos el state 'tasks' y el despachador 'taskActions'
  // adicionalmente pasamos como estado inicial un arreglo vacío
  const [tasks, taskActions] = useReducer(TaskReducer, []);
  return (
    /* Creamos el contexto con nuestro state y actions */
    <TaskContext.Provider value={{ tasks, taskActions }}>
      {children}
    </TaskContext.Provider>
  );
}

// Es necesario exportar el contexto para usarlo en otros componentes
export default TaskContext;
