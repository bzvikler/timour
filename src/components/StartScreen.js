import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './common';

class StartScreen extends Component {
    startSession() {
        console.log('hey');
    }

    joinSession() {

    }

    render() {
        return (
            <div className="Screen-container">
                <Link to='/create'>
                    <Button onClick={this.startSession.bind(this)}>
                        Start a Session
                    </Button>
                </Link>
                <p>Or</p>
                <Link to="/join">
                    <Button onClick={this.joinSession.bind(this)}>
                        Join a Session
                    </Button>
                </Link>
            </div>
        );
    }
}

export default StartScreen;
