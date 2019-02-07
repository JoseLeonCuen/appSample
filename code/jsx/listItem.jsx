// dependencies
import * as React from 'react';

//files
// import controller from '../gameIcon.svg'
// import trash from '../trashIcon.svg'

export default function ListItem(props){
    return(
        <div>
            <img className="itemIcon" src={controller}/>
            <span className="itemTitle">{props.title}</span>
            <div className="deleteButton" onClick={props.delete}>
                <img className="deleteIcon" src={trash}/>
            </div>
        </div>
    )
}