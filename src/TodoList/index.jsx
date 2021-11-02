import React from 'react';
import './TodoList.css';

const TodoList = ({
  error,
  loading,
  searchedTodos,
  onError,
  onLoading,
  onEmpty,
  render,
}) => (
  <div className="TodoList-container">
    {error && onError()}
    {loading && onLoading()}
    {!loading && !searchedTodos.length && onEmpty()}

    <section>
      <ul>{searchedTodos.map(render)}</ul>
    </section>
  </div>
);

export { TodoList };
