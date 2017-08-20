import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaylistService from '../services/PlaylistService';
import CopyToClipboard from 'react-copy-to-clipboard';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import { ConfirmScreenStyles } from '../styles';
import {
    confirmPlaylist,
    playlistEditCodeChange
} from '../actions/PlaylistActions';

class ConfirmScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snackIsOpen: false,
            hasCopiedPlaylistId: false
        }
    }

    hasCopiedText() {
        this.setState({
            snackIsOpen: true,
            hasCopiedPlaylistId: true
        });
    }

    handleRequestClose() {
        this.setState({
            snackIsOpen: false
        });
    }

    handlePlaylistEditCodeChange(e, playlistEditCode) {
        this.props.playlistEditCodeChange(playlistEditCode);
    }

    confirmPlaylist() {
        this.props.confirmPlaylist({
            playlistId: this.props.playlistId,
            playlistEditCode: this.props.playlistEditCode
        });
    }

    render() {
        const { buttonStyle, textFieldStyle } = ConfirmScreenStyles;

        return (
            <div className='Screen-container'>
                <div className='Form-center'>
                    <h2>Great! Enter your Edit Code<br /> you'll need it later to edit your playlist!</h2>
                    <TextField
                        style={textFieldStyle}
                        hintText="My Secret DJ Code"
                        floatingLabelText="Playlist Edit Code"
                        onChange={this.handlePlaylistEditCodeChange.bind(this)}
                    />
                    <div className='Form-button-container'>
                        <CopyToClipboard
                            text={this.props.playlistEditCode}
                            onCopy={this.hasCopiedText.bind(this)}
                        >
                            <RaisedButton
                                style={buttonStyle}
                                label='Copy Id'
                            />
                        </CopyToClipboard>
                        <RaisedButton
                            style={buttonStyle}
                            disabled={!this.state.hasCopiedPlaylistId}
                            label='See Your Playlist'
                            onClick={this.confirmPlaylist.bind(this)}
                        />
                    </div>
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
    const {
        playlistId,
        playlistEditCode
    } = playlist;

    return {
        playlistId,
        playlistEditCode
    };
};

export default connect(mapStateToProps, {
    confirmPlaylist,
    playlistEditCodeChange
})(ConfirmScreen);
