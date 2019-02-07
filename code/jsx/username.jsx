// dependencies
import * as React from 'react';

export default function Username(props){
    return (
        <div>
            {/* <label for="name" className="formLabel">{props.label}</label> */}
            <input 
                type="text" 
                className="formInput" 
                id="username" 
                minLength="4" 
                placeholder={props.label} 
                value={props.value} 
                onChange={props.update} 
                required
            />
        </div>        
    )
}