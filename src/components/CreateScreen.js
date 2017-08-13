import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import { Button } from './common';
import {
    playlistNameChange,
    djNameChange,
    createPlaylist
} from '../actions/PlaylistActions';

class StartScreen extends Component {
    handlePlaylistNameChange(e, text) {
        this.props.playlistNameChange(text);
    }

    handleDjNameChange(e, text) {
        this.props.djNameChange(text);
    }

    handleCreateButtonClick() {
        this.props.createPlaylist({
            playlistName: this.props.playListName,
            djName: this.props.djName,
            user: this.props.user
        });
    }

    render() {
        return (
            <div className='Screen-container'>
                <div className='Form-create'>
                    <TextField
                        floatingLabelText='Playlist Name'
                        onChange={this.handlePlaylistNameChange.bind(this)}
                        value={this.props.playListName}
                    />
                    <TextField
                        floatingLabelText='DJ Name'
                        onChange={this.handleDjNameChange.bind(this)}
                        value={this.props.djName}
                    />
                    <Button
                        style={{marginTop: 50}}
                        text='Create'
                        onClick={this.handleCreateButtonClick.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ auth, playlist }) => {
    const { user } = auth;
    const { playListName, djName } = playlist;

    return {
        user,
        playListName,
        djName
    };
};

export default connect(mapStateToProps, {
    playlistNameChange,
    djNameChange,
    createPlaylist
})(StartScreen);
