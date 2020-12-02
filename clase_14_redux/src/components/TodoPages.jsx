import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { clearComplete } from '../actions/todoActions';

const TodoPages = () => {
  const todosList = useSelector((state) => state.todosList);
  const dispatch = useDispatch();
  const completes = todosList.filter((todo) => todo.complete);

  const handlerCompletes = () => {
    dispatch(clearComplete());
  };
  return (
    <div className="todos">
      <div className="todos-header">
        <h3 className="todos-title">TODO NUC</h3>
        <div>
          <p>
            Tienes <span className="todos-count"></span> Items por hacer!!
          </p>

          {completes.length > 0 ? (
            <button
              type="button"
              className="todos-clear"
              onClick={handlerCompletes}
            >
              Borra Completados
            </button>
          ) : null}
        </div>
        <TodoForm />
        <TodoList todos={todosList} />
      </div>
    </div>
  );
};

export default TodoPages;
