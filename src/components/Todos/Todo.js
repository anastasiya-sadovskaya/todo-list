import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../layout/Button';

const Todo = ({
  text, completed, id, inEditing, onToggleTodoClick, onEditTodoClick, finishEditTodo, onDeleteTodoClick,
}) => {
  let input = '';
  return (
    <div>
      {inEditing ? <input type="text" defaultValue={text} ref={(newText) => { input = newText; }} onBlur={() => { finishEditTodo(id, input); }} autoFocus='true'/>
                 : <span style={{ textDecoration: completed ? 'line-through' : 'none' }} onClick={onToggleTodoClick}>{text}</span>}
      <Button label="Edit" onClickHandler={onEditTodoClick} />
      <Button label="Delete" onClickHandler={onDeleteTodoClick} />
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  inEditing: PropTypes.bool.isRequired,
  onToggleTodoClick: PropTypes.func.isRequired,
  onEditTodoClick: PropTypes.func.isRequired,
  finishEditTodo: PropTypes.func.isRequired,
  onDeleteTodoClick: PropTypes.func.isRequired,
};

export default connect(null, dispatch => ({
  finishEditTodo: (id, newValue) => {
    dispatch({
      type: 'FINISH_EDIT_TODO',
      id,
      text: newValue.value,
    });
  },
}))(Todo);

