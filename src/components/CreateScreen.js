import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { Button } from './common';
import { CreateScreenStyles } from '../styles';
import {
    playlistNameChange,
    djNameChange,
    playlistDateToLiveChange,
    createPlaylist
} from '../actions/PlaylistActions';

class CreateScreen extends Component {
    handlePlaylistNameChange(e, text) {
        this.props.playlistNameChange(text);
    }

    handleDjNameChange(e, text) {
        this.props.djNameChange(text);
    }

    handleDateChange(firstParam, date) {
        this.props.playlistDateToLiveChange(date);
    }

    handleCreateButtonClick() {
        this.props.createPlaylist({
            playlistName: this.props.playListName,
            djName: this.props.djName,
            playlistDateToLive: this.props.playlistDateToLive,
            user: this.props.user
        });
    }

    render() {
        const { dateFieldStyles, buttonStyles } = CreateScreenStyles;

        return (
            <div className='Screen-container'>
                <div className='Form-center'>
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
                    <DatePicker
                        style={dateFieldStyles}
                        hintText="Playlist Expiry Date"
                        onChange={this.handleDateChange.bind(this)}
                    />
                    <Button
                        style={buttonStyles}
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
    const { playListName, djName, playlistDateToLive } = playlist;

    return {
        user,
        playListName,
        playlistDateToLive,
        djName
    };
};

export default connect(mapStateToProps, {
    playlistNameChange,
    djNameChange,
    playlistDateToLiveChange,
    createPlaylist
})(CreateScreen);
