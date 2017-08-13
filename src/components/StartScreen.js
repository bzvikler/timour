import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navCreateRoom, navJoinRoom } from '../actions/NavActions';
import { loginUser } from '../actions/AuthActions';
import { Button } from './common';

class StartScreen extends Component {
    startSession() {
        this.props.loginUser();
    }

    joinSession() {
        this.props.navJoinRoom();
    }

    render() {
        return (
            <div className="Screen-container">
                <Button text="Create a Playlist" onClick={this.startSession.bind(this)} />
                <p>Or</p>
                <Button text="Suggest a Song" onClick={this.joinSession.bind(this)} />
            </div>
        );
    }
}

export default connect(null, {
    navCreateRoom,
    navJoinRoom,
    loginUser
})(StartScreen);
