import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/common';
import StartScreen from './components/StartScreen';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header title="time-our" />
                    <Switch>
                        <Route path='/' component={StartScreen} />
                        {/* <Route path='/roster' component={Roster} />
                    <Route path='/schedule' component={Schedule} /> */}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
