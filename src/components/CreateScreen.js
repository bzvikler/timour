import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from './common';

class StartScreen extends Component {
    render() {
        return (
            <div className="Screen-container">
                <h1>Create</h1>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { user } = auth;

    return {
        user
    };
};

export default connect(mapStateToProps, {})(StartScreen);
