import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './App';
import todos from '../reducers/todos';

const store = createStore(todos, devToolsEnhancer());

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;
