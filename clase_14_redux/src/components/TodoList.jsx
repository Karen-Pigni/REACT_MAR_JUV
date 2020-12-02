import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <ul className="todos-list">
      {todos?.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
