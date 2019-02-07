// dependencies
import * as React from 'react';

// files
import Header from './header';
import Username from './username';
import Password from './password';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"Welcome",
            userLabel:"Username",
            passLabel:"Password",
            username:"",
            password:"",
            invalidUsername:false,
            invalidPassword:false,            
            tryToSubmit:false,
            button:"Login"
        }
    }
    updateValue(e){
        var value = e.target.value,
            property = e.target.id;
        if(property=="password"){
            this.validateForm(e);
        }
        this.setState((state)=>{
            var newState={
                ...state
            }
            newState[property]=value;
            return newState;
        })
    }
    validateForm(e,login){
        console.log("EVENT: ",e);
        var user = this.state.username,
            validUsername = /[a-zA-Z]{4,}/.test(user),
            pass = e.target.value,
            isLongEnough=/.{9,}/,
            hasSpecialChar = /\W/,
            hasUpperCase = /[A-Z]/,
            tryToSubmit=!!login || this.state.tryToSubmit,            
            invalidPassword = 
                !isLongEnough.test(pass) || 
                !hasSpecialChar.test(pass) || 
                !hasUpperCase.test(pass);
                console.log(pass);
        this.setState((state)=>{
                return {
                    ...state,
                    invalidPassword,
                    tryToSubmit
                }                                
        });
        console.log("invalid password: ",invalidPassword);
        console.log("valid username: ",validUsername);        
        if(!invalidPassword && validUsername && login){
            login();
        }
    }
    render(){
        return (
            <div>
                <Header text={this.state.title}/>
                <form>
                    <Username label={this.state.userLabel} value={this.state.username} update={(e)=>this.updateValue(e)}/>
                    <Password label={this.state.passLabel} value={this.state.password} update={(e)=>this.updateValue(e)} display={this.state.invalidPassword && this.state.tryToSubmit}/>
                    <button type="button" className="loginButton blueStyle" onClick={(e)=>this.validateForm(e,this.props.login)}>{this.state.button}</button>
                </form>                
            </div>
        )
    }
}