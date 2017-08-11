import React, { Component } from 'react';
import '../App.css';

class Hero extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="Hero">
                <h1 className="Hero-text">
                    {this.props.titleText}
                </h1>
            </div>
        )
    }
}

export default Hero;
