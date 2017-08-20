import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { navCreateRoom, navJoinRoom } from '../actions/NavActions';
import { loginUser } from '../actions/AuthActions';

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
                <RaisedButton
                    label='Create a Playlist'
                    onClick={this.startSession.bind(this)}
                />
                <p>Or</p>
                <RaisedButton
                    label='Suggest a Song'
                    onClick={this.joinSession.bind(this)}
                />
            </div>
        );
    }
}

export default connect(null, {
    navCreateRoom,
    navJoinRoom,
    loginUser
})(StartScreen);
