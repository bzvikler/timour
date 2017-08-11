import React, { Component } from 'react';
import { Button } from './common';

class StartScreen extends Component {
    buttonClick() {
        console.log('hey');
    }

    render() {
        return (
            <div className="Screen-container">
                <Button onClick={this.buttonClick.bind(this)}>
                    Start a Session
                </Button>
                <p>Or</p>
                <Button>
                    Join a Session
                </Button>
            </div>
        );
    }
}

export default StartScreen;
