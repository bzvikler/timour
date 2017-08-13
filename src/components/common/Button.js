import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Button = ({ text, onClick, style }) => {
    return (
        <RaisedButton style={style} label={text} onClick={onClick} />
    );
};

export { Button };
