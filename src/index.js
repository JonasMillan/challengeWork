import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App/App.js';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import configureStore from './store/configureStore';
import intialState from './reducers/initialState';

const store = configureStore(intialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
    );


serviceWorker.unregister();
