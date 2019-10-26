import * as React from 'react';
import * as ReactDOM from 'react-dom';
import StoryPicker from './containers/StoryPicker';
import store from './store';
import { Provider } from 'react-redux';

// eslint-disable-next-line no-undef
ReactDOM.render(
    <Provider store={store}>
        <StoryPicker />
    </Provider>
    , document.getElementById('content'));
