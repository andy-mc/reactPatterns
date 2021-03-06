import React from 'react';
import { useTodos } from './useTodos';

import { CreateTodoButton } from '../CreateTodoButton';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoCounter } from '../TodoCounter';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptySearch } from '../EmptySearch';

function App() {
  const {
    addTodo,
    completeTodo,
    completedTodos,
    deleteTodo,
    error,
    loading,
    openModal,
    searchValue,
    searchedTodos,
    setOpenModal,
    setSearchValue,
    totalTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmpty={() => <EmptyTodos />}
        onEmptySearch={() => <EmptySearch searchText={searchValue} />}
        // render={(todo) => ... }
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export default App;
