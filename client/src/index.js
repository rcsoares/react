import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Welcome from './components/Welcome';
import Signin from './components/auth/Signup';
import Feature from './components/Feature';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers'
import Signout from './components/auth/Signout'
import Signup from './components/auth/Signup'


const store = createStore(reducers, {
    auth: { authenticated: localStorage.getItem('token') }
}, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" component={Signup} />
                <Route path="/feature" component={Feature} />
                <Route path="/signout" component={Signout} />
                <Route path="/signin" component={Signin} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
