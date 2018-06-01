import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AddTodo from './Todos/AddTodo';
import TodoList from './Todos/TodoList';

const App = ({ todos }) => (
  <div>
    <AddTodo />
    <TodoList todos={todos}/>
  </div>
);

App.propTypes = {
  todos: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(App);
