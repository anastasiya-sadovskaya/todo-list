import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, completed, onClickHandler }) => (
        <div style={{ textDecoration: completed ? 'line-through' : 'none' }} onClick={onClickHandler}>{text}</div>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Todo;

