import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const Header = (props) => {
    return (
        <Toolbar style={{justifyContent: 'center'}}>
            <ToolbarGroup>
                <h2>{props.title}</h2>
            </ToolbarGroup>
        </Toolbar>
    );
}

export { Header }
