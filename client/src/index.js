import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import { createStore } from 'redux';
import reducers from './reducers'

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" exact component={Signup} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
