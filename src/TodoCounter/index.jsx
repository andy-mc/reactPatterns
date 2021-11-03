import React from 'react';
import './TodoCounter.css';

const TodoCounter = ({ totalTodos, completedTodos, loading }) => (
  <h2 className={`TodoCounter ${loading && 'opacity-25'}`}>
    Has completado
    {completedTodos}
    {' '}
    de
    {totalTodos}
    {' '}
    TODOs
  </h2>
);

export { TodoCounter };
