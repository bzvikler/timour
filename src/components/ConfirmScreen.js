import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { Button } from './common';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import { ConfirmScreenStyles } from '../styles';
import {
    playlistNameChange,
    djNameChange,
    playlistDateToLiveChange,
    createPlaylist
} from '../actions/PlaylistActions';

class ConfirmScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snackIsOpen: false
        }
    }

    handleButtonPress() {
        this.setState({
            snackIsOpen: true
        });
    }

    handleRequestClose() {
        this.setState({
            snackIsOpen: false
        });
    }

    render() {
        const { buttonStyle, textFieldStyle } = ConfirmScreenStyles;

        return (
            <div className='Screen-container'>
                <div className='Form-center'>
                    <h2>Great! Here's your DJ ID, <br /> save this to edit your playlist later!</h2>
                    <TextField
                        style={textFieldStyle}
                        inputStyle={{ textAlign: 'center'}}
                        id="text-field-default"
                        defaultValue={this.props.djId}
                        value={this.props.djId}
                    />
                    <RaisedButton
                        style={buttonStyle}
                        label='Copy Id'
                         onClick={this.handleButtonPress.bind(this)}
                    />
                    <RaisedButton
                        style={buttonStyle}
                        label='See Your Playlist'
                    />
                </div>
                <Snackbar
                    open={this.state.snackIsOpen}
                    message="DJ ID Copied to Your Clipboard!"
                    autoHideDuration={2000}
                    onRequestClose={this.handleRequestClose.bind(this)}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ playlist }) => {
    const { djId } = playlist;

    return {
        djId
    };
};

export default connect(mapStateToProps, {
})(ConfirmScreen);
