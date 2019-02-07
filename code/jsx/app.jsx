// dependencies
import * as React from 'react';

// files
import Login from './login';
import List from './list';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login:false
        }
    }
    login(){        
        this.setState({
            login:true
        })
    }
    logout(){
        this.setState({
            login:false
        })
    }
    render(){
    return (<div>{this.state.login ? <List logout={(e)=>this.logout()}/> : <Login login={(e)=>this.login()}/> }</div>)
    }
}