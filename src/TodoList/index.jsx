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
  children,
}) => {
  const renderTodoFn = render || children;
  const hasRenderFn = typeof renderTodoFn === 'function';

  return (
    <div className="TodoList-container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !totalTodos && onEmpty()}
      {!loading && !!totalTodos && !searchedTodos.length && onEmptySearch()}

      <section>
        {hasRenderFn ? <ul>{searchedTodos.map(renderTodoFn)}</ul> : children}
      </section>
    </div>
  );
};
export { TodoList };
