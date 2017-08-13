import React, { Component } from 'react';
import { Button } from './common';

class PlaylistScreen extends Component {
    render() {
        return (
            <div className="Screen-container">
                <h1>Playlist</h1>
                <h2>Id: {this.props.match.params.id}</h2>
            </div>
        );
    }
}

export default PlaylistScreen;
