import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'
import { routerMiddleware, push } from 'react-router-redux';
import { createHashHistory } from 'history';
import { Header } from './components/common';
import StartScreen from './components/StartScreen';
import JoinScreen from './components/JoinScreen';
import CreateScreen from './components/CreateScreen';
import SessionScreen from './components/SessionScreen';
import './App.css';

class App extends Component {
    render() {

        // Apply the middleware to the store
        const middleware = routerMiddleware(createHashHistory())
        const store = createStore(
            reducers,
            applyMiddleware(middleware)
        )

        // Dispatch from anywhere like normal.
        store.dispatch(push('/create'))
        // const store = createStore(reducers);

        return (
            <Provider store={this.store}>
                <HashRouter>
                    <div>
                        <Header title="time-our" />
                        <Switch>
                            <Route exact path='/' component={StartScreen} />
                            <Route exact path='/join' component={JoinScreen} />
                            <Route exact path='/create' component={CreateScreen} />
                            <Route exact path='/session' component={SessionScreen} />
                        </Switch>
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}

export default App;
