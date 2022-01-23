import React from 'react';
import './TodoList.css';

const TodoList = ({
  error,
  loading,
  searchedTodos,
  totalTodos,
  onError,
  onLoading,
  onEmpty,
  onEmptySearch,
  render,
}) => (
  <div className="TodoList-container">
    {error && onError()}
    {loading && onLoading()}
    {!loading && !totalTodos && onEmpty()}
    {!loading && !!totalTodos && !searchedTodos.length && onEmptySearch()}

    <section>
      <ul>{searchedTodos.map(render)}</ul>
    </section>
  </div>
);

export { TodoList };
