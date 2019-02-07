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
            invalidPassword:false,
            button:"Login"
        }
    }
    updateValue(e){
        var value = e.target.value,
            property = e.target.id;
        this.setState((state)=>{
            var newState={
                ...state
            }
            newState[property]=value;
            return newState;
        })
    }
    validatePassword(e,login){
        console.log("validating password");
        var pass = this.state.password,
            isLongEnough=/.{9,}/,
            hasSpecialChar = /\W/,
            hasUpperCase = /[A-Z]/,
            invalid=false;
        invalid = 
            !isLongEnough.test(pass) || 
            !hasSpecialChar.test(pass) || 
            !hasUpperCase.test(pass);
        this.setState((state)=>{
                return {
                    ...state,
                    invalidPassword:invalid
                }                                
        });
        if(!invalid){
            console.log(this);
            login();
        }
    }
    render(){
        return (
            <div>
                <Header text={this.state.title}/>
                <form>
                    <Username label={this.state.userLabel} value={this.state.username} update={(e)=>this.updateValue(e)}/>
                    <Password label={this.state.passLabel} value={this.state.password} update={(e)=>this.updateValue(e)} invalid={this.state.invalidPassword}/>
                    <button type="button" className="loginButton blueStyle" onClick={(e)=>this.validatePassword(e,this.props.login)}>{this.state.button}</button>
                </form>                
            </div>
        )
    }
}