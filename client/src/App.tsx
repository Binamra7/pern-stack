import React from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import Todos from './components/Todos';

function App() {
  return (
    <>
      <InputTodo />
      <Todos/>
    </>
  );
}

export default App;
