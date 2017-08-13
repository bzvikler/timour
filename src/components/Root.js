import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Header } from './common';
import StartScreen from './StartScreen';
import JoinScreen from './JoinScreen';
import CreateScreen from './CreateScreen';
import PlaylistScreen from './PlaylistScreen';
import '../App.css';

class Root extends Component {
    render() {
        return (
            <HashRouter>
                <MuiThemeProvider>
                    <div>
                        <Header title={this.props.navTitle} />
                        <Switch>
                            <Route exact path='/' component={StartScreen} />
                            <Route exact path='/join' component={JoinScreen} />
                            <Route exact path='/create' component={CreateScreen} />
                            <Route exact path='/playlist/:id' component={PlaylistScreen} />
                        </Switch>
                    </div>
                </MuiThemeProvider>
            </HashRouter>
        );
    }
}

const mapStateToProps = ({ routing }) => {
    const { navTitle } = routing;
    return {
        navTitle
    }
}

export default connect(mapStateToProps, {})(Root);
