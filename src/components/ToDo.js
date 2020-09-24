import React, { useCallback } from 'react';
import './ToDo.scss';

function ToDo(props) {
    const { text, id, deleteToDo, markToDoComplete, completed } = props;
    const deleteItem = useCallback(() => deleteToDo(id), [id, deleteToDo]);
    const markComplete = useCallback(() => markToDoComplete(id), [id, markToDoComplete]);
    return (
        <div className="toDo mr-25 display-flex justify-content-center">
            <li className={`toDo-item ${completed ? 'completed' : ''}`}>{text}</li>
            <button onClick={markComplete} className="complete-btn"><i className="fa fa-check" /></button>
            <button onClick={deleteItem} className="delete-btn"><i className="fa fa-trash" /></button>
        </div>
    );
}

export default ToDo;