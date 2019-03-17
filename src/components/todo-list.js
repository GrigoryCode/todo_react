import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem label="Drink" /></li>
      <li><TodoListItem
      label="Build"
      important /></li>
    </ul>
  );
};

export default TodoList;
