import React from 'react';
import ToDo from './ToDo';

function ToDoList(props) {
    const { todos, setToDos, filteredToDoList } = props;
    const deleteToDo = (id) => {
        let newTodoList = todos.filter(item => item.id !== id);
        setToDos(newTodoList);
    };
    const markToDoComplete = (id) => {
        let todoList = todos.map(item => {
            if (item.id === id)  item.completed = !item.completed;
            return item;
        });
        setToDos(todoList);
    };
    return (
        <div className="toDo-container">
            <ul className="toDo-list">
                {
                    filteredToDoList.length > 0 && filteredToDoList.map((item) => {
                        return (
                            <ToDo key={item.id} id={item.id} completed={item.completed} text={item.text} deleteToDo={deleteToDo} markToDoComplete={markToDoComplete} />
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default ToDoList;