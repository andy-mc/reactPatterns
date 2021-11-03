import React from 'react';
import './TodoList.css';

const TodoList = ({
  error,
  loading,
  searchedTodos,
  totalTodos,
  searchValue,
  onError,
  onLoading,
  onEmpty,
  onEmptySearch,
  render,
  children,
}) => {
  const renderFunc = children || render;

  return (
    <div className="TodoList-container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !totalTodos && onEmpty()}
      {!loading && !!totalTodos && !searchedTodos.length && onEmptySearch(searchValue)}

      <section>
        <ul>{searchedTodos.map(renderFunc)}</ul>
      </section>
    </div>
  );
};

export { TodoList };
