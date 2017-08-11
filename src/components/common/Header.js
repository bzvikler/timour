import React from 'react';

const Header = (props) => {
    return (
        <div className="Header-container">
            <p className="Header-text">
                {props.title}
            </p>
        </div>
    );
}

export { Header }
