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
            username:"Username",
            password:"Password",
            button:"Login"
        }
    }
    render(){
        return (
            <div>
                <Header text={this.state.title}/>
                <form>
                    <Username/>
                    <Password/>
                    <button/>
                </form>                
            </div>
        )
    }
}