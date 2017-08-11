import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/common';
import StartScreen from './components/StartScreen';
import JoinScreen from './components/JoinScreen';
import CreateScreen from './components/CreateScreen';
import SessionScreen from './components/SessionScreen';
import './App.css';

class App extends Component {
    render() {
        return (
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
        );
    }
}

export default App;
