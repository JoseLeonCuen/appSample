// dependencies
import * as React from 'react';

export default function Password(props){
    var warning={
        must:"The password must:",
        requirements:[
            "Be at least 9 characters long",
            "Contain at least one uppercase letter",
            "Contain at least one special character"
        ]
    }
    function requirements(requirements){        
        return requirements.map((req,idx)=> <li key={idx}>{req}</li>);
    }
    return (
        <div>
            <input 
                type="password" 
                className="formInput" 
                id="password" minLength="9" 
                placeholder={props.label} 
                value={props.value}
                onChange={props.update}                
                required
            />   
            { props.display ? <div className="invalidPassword">
                <span>{warning.must}</span>
                <ul className="passwordRequirements">{requirements(warning.requirements)}</ul>
            </div> : null}
        </div>
    )
}