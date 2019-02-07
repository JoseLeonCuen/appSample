// dependencies
import * as React from 'react';

export default function backArrow(props){
    return (
        <button className="backArrow" onClick={props.logout}>
            ‹
        </button>
    )
}