import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Button = ({ text, onClick }) => {
    return (
        <RaisedButton label={text} onClick={onClick} />
    );
};

export { Button };
