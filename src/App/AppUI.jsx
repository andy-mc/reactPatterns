import React from "react";

import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyTodos } from "../EmptyTodos";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodoHeader } from "../TodoHeader";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";

function AppUI() {
  const {
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
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export { AppUI };
