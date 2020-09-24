import React, { useState, useEffect, useCallback } from 'react';
import './App.scss';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function getLocalStorage(setToDos) {
  if (localStorage.getItem('todos') === null) localStorage.setItem('todos', JSON.stringify([]));
  else setToDos(JSON.parse(localStorage.getItem('todos')));
}

function App() {
  const [todoVal, setInputValue] = useState('');
  const [todos, setToDos] = useState([]);
  const [filterToDo, setStatusToDO] = useState('all');
  const [filteredToDoList, setfilteredToDoList] = useState([]);
  const getFromLocalStorage = useCallback(getLocalStorage.bind(null, setToDos), []);

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    let filteredToDos = todos;
    if (filterToDo === 'completed') filteredToDos = todos.filter(item => item.completed);
    else if (filterToDo === 'not completed') filteredToDos = todos.filter(item => !item.completed);
    setfilteredToDoList(filteredToDos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, filterToDo]);

  return (
    <div className="App">
      <header className="display-flex justify-content-center align-items-center">
        <h1>TO-DO List</h1>
      </header>
      <Form todoVal={todoVal} todos={todos} setToDos={setToDos} setInputValue={setInputValue} setStatusToDO={setStatusToDO} />
      <ToDoList todos={todos} setToDos={setToDos} filteredToDoList={filteredToDoList} />
    </div>
  );
}

export default App;
