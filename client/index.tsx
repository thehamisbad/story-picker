import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

// eslint-disable-next-line no-undef
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('content'));
