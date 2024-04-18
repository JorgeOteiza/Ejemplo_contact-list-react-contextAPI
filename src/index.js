import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ContextWrapper } from './AppContext.js';
import { TodoList } from './TodoList';
import reportWebVitals from './reportWebVitals';

const MyView = () => (
  <ContextWrapper>
    <TodoList />
  </ContextWrapper>
);

ReactDOM.render(<MyView />, document.getElementById('root'));

reportWebVitals();
