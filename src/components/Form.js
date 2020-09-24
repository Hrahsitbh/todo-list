import React, { useCallback } from 'react';

function Form(props) {
    const { setInputValue, todos, setToDos, todoVal, setStatusToDO } = props;
    const inputHandlerText = useCallback((event) => { setInputValue(event.target.value) }, [setInputValue]);
    const submitToDO = event => {
        event.preventDefault();
        if (todoVal) {
            setToDos([...todos, { text: todoVal, completed: false, id: parseInt(Math.random() * 1000) }]);
            setInputValue('');
        }
    }
    const filterToDO = useCallback((event) => { setStatusToDO(event.target.value) }, [setStatusToDO]);
    return (
        <form className="display-flex justify-content-center align-items-center">
                <input value={todoVal} onChange={inputHandlerText} type="text" className="TODO-input" />
                <button onClick={submitToDO} className="todo-button" type="submit"><i className="fa fa-plus-square" /></button>
            <div className="select-todos mr-l15">
                <select onChange={filterToDO} name="todos" className="todo-filter">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="not completed">Not Completed</option>
                </select>
            </div>
        </form>
    );
}

export default Form;