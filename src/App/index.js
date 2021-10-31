import React, {useState} from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

function App() {
  const [test, setTest] =  useState('stateFromApp')
  
  return (
    <>
      <TodoHeader>
        <TodoCounter test={test}></TodoCounter>
        <TodoSearch test={test}></TodoSearch>
      </TodoHeader>
      <TodoList>
        <TodoItem test={test}></TodoItem>
      </TodoList>
    </>
  );
}

function TodoHeader({children}) {
  return (
    <header style={{border: "1px solid green"}}>
      {children}
    </header>
  );
}

function TodoList({children}) {
  return (
    <section className="TodoList-container" style={{border: "1px solid blue"}}>
      {children}
    </section>
  );
}

function TodoCounter({test}) {
  return (
    <div className="TodoCounter-container">
      <p>TodoCounter {test}</p>
    </div>
  );
}

function TodoSearch({test}) {
  return (
    <div className="TodoSearch-container">
      <p>TodoSearch {test}</p>
    </div>
  );
}

function TodoItem({test}) {
  return (
    <div className="TodoItem-container">
      <p>TodoItem {test}</p>
    </div>
  );
}

export default App;
