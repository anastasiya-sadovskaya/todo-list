import React from 'react';
import { connect } from 'react-redux';

import Button from '../layout/Button';

const AddTodo = ({ dispatch }) => {
  const nextID = 0;
  let input = '';
  return (
        <div>
            <input type="text" name="addTodo" ref={(text) => { input = text; }}/>
            <Button label='Add' onClickHandler = {() => {
                dispatch({
                    type: 'ADD_TODO',
                    id: nextID + 1,
                    text: input.value,
                });
                input.value = '';
            }} />
        </div>
  );
};

export default connect()(AddTodo);

