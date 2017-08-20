import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { CreateScreenStyles } from '../styles';
import {
    playlistNameChange,
    djNameChange,
    playlistDateToLiveChange,
    createPlaylist
} from '../actions/PlaylistActions';

class CreateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistDateEntered: false
        }
        console.log(this.state);
    }

    handlePlaylistNameChange(e, text) {
        this.props.playlistNameChange(text);
    }

    handleDjNameChange(e, text) {
        this.props.djNameChange(text);
    }

    handleDateChange(e, date) {
        this.setState({
            playlistDateEntered: true
        });
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
                    <h2>Let's get some info for your playlist!</h2>
                    <TextField
                        floatingLabelText='Playlist Name'
                        hintText="Awesome Playlist"
                        onChange={this.handlePlaylistNameChange.bind(this)}
                        value={this.props.playListName}
                    />
                    <TextField
                        floatingLabelText='DJ Name'
                        hintText="DJ Awesome"
                        onChange={this.handleDjNameChange.bind(this)}
                        value={this.props.djName}
                    />
                    <DatePicker
                        style={dateFieldStyles}
                        hintText="Playlist Expiry Date"
                        onChange={this.handleDateChange.bind(this)}
                    />
                    <div className='Form-button-container'>
                        <RaisedButton
                            style={buttonStyles}
                            label='Create'
                            onClick={this.handleCreateButtonClick.bind(this)}
                            disabled={!this.state.playlistDateEntered}
                        />
                    </div>
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
