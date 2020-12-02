import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  completeTodo,
  deleteTodo,
  editMode,
  editTodo,
} from '../actions/todoActions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(todo.label);
  const myIput = useRef(null);

  const handlerCheck = () => dispatch(completeTodo(todo.id));

  const handlerDelete = () => dispatch(deleteTodo(todo.id));

  const handlerEditMode = () => dispatch(editMode(todo.id));

  const hadlerEditTodo = (e) => {
    if (e.key === 'Enter') {
      dispatch(editTodo(todo.id, inputValue));
      dispatch(editMode(todo.id));
    }
  };

  const handlerEditBlur = (e) => {
    dispatch(editTodo(todo.id, inputValue));
    dispatch(editMode(todo.id));
  };
  useEffect(() => {
    if (todo.editMode) {
      myIput.current.focus();
    }
  }, [todo.editMode]);

  return (
    <li className={todo.complete ? 'todos-complete' : ''}>
      <input
        type="checkbox"
        checked={todo.complete ? 'checked' : ''}
        onChange={handlerCheck}
      />
      {todo.editMode ? (
        <input
          ref={myIput}
          type="text"
          onKeyPress={hadlerEditTodo}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handlerEditBlur}
        />
      ) : (
        <span onDoubleClick={handlerEditMode}>{todo.label}</span>
      )}

      <button type="button" onClick={handlerDelete}></button>
    </li>
  );
};

export default Todo;
