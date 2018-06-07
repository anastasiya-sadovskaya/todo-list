import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({
  todos, toggleClick, startEditTodo, deleteTodo,
}) => (
  <ul>
  {
    todos.map((todo, i) => (
      <Todo key={i} {...todo} onToggleTodoClick={() => toggleClick(todo.id)} onEditTodoClick={() => startEditTodo(todo.id)} onDeleteTodoClick={() => deleteTodo(todo.id) }/>
    ))
  }
</ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleClick: PropTypes.func.isRequired,
  startEditTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};


export default connect(null, dispatch => ({
  toggleClick: (id) => {
    dispatch({
      type: 'TOGGLE_TODO',
      id,
    });
  },
  startEditTodo: (id) => {
    dispatch({
      type: 'START_EDIT_TODO',
      id,
    });
  },
  deleteTodo: (id) => {
    dispatch({
      type: 'DELETE_TODO',
      id,
    });
  },
}))(TodoList);
