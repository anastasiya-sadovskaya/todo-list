import React from 'react';
// import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({ todos }) => (
  todos.map((todo, i) => (
    <Todo key={i} text={todo.text} />
  ))
);

export default TodoList;
