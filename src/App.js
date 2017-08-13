import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import { routerMiddleware } from 'react-router-redux';
import { createHashHistory } from 'history';
import AuthService from './services/AuthService';
import Root from './components/Root';

class App extends Component {
    componentWillMount() {
        AuthService.initApp();
    }

    render() {
        const middleware = routerMiddleware(createHashHistory())
        const store = createStore(
            reducers,
            applyMiddleware(middleware, thunk)
        )

        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

export default App;
