import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../layout/Button';

const AddTodo = ({ dispatch }) => {
  let nextID = 1;
  let input = '';
  return (
        <div>
            <input type="text" name="addTodo" ref={(text) => { input = text; }}/>
            <Button label='Add' onClickHandler = {() => {
                dispatch({
                    type: 'ADD_TODO',
                    id: nextID++,
                    text: input.value,
                });
                input.value = '';
            }} />
        </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);

