
// dependencies
import * as React from 'react';

export default function Header(props){
    return (
        <h1 className="topHeader blueStyle">
            {props.text}
        </h1>
    );
}