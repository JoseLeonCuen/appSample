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
    log(){  // This will change the log status of the user
        this.setState((state)=>{
        return {
            login:!state.login
        }})
    }
    render(){   // This displays a different component depending on the log status of the user
    return (<div>{this.state.login ? <List logout={(e)=>this.log()}/> : <Login login={(e)=>this.log()}/> }</div>)
    }
}