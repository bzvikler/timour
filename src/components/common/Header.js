import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const Header = (props) => {
    return (
        <Toolbar style={{justifyContent: 'center'}}>
            <ToolbarGroup>
                <ToolbarTitle text={props.title}/>
            </ToolbarGroup>
        </Toolbar>
    );
}

export { Header }
