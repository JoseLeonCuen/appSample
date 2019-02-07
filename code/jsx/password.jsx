// dependencies
import * as React from 'react';

export default function Password(props){
    var warning={
        must:"The password must:",
        requirements:[
            "Be longer than 8 characters",
            "Contain at least one uppercase letter",
            "Contain at least one special character"
        ]
    }
    function requirements(requirements){        
        return requirements.map((req,idx)=> <li key={idx}>{req}</li>);
    }
    return (
        <div>
            {/* <label for="pass" className="formLabel">{props.label}</label> */}
            <input 
                type="password" 
                className="formInput" 
                id="password" minLength="9" 
                placeholder={props.label} 
                value={props.value}
                onChange={props.update}                
                required
            />   
            { props.invalid ? <label className="invalidPassword">
                <span>{warning.must}</span>
                <ul>{requirements(warning.requirements)}</ul>
            </label> : null}
        </div>
    )
}