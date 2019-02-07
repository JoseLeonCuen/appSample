
// dependencies
import * as React from 'react';

// files
import BackArrow from './backArrow';

export default function Header(props){
    return (
        <h1 className="topHeader blueStyle">
        {props.logout ? <BackArrow logout={props.logout}/> : null }
            {props.text}
        </h1>
    );
}