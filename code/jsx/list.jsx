// dependencies
import * as React from 'react';

// files
import Header from './header';
import BackArrow from './backArrow';
import ListItem from './listItem';

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"List View",
            items:[
                { title:'Example 1' },
                { title:'Example 2' },
                { title:'Example 3' },
                { title:'Example 4' },
                { title:'Example 5' },
                { title:'Example 6' },
                { title:'Example 7' },
                { title:'Example 8' },
                { title:'Example 9' },
                { title:'Example 10' }
            ]
        }
    }    
    deleteItem(idx){
        this.setState((state)=>{
            var newState={
                ...state
            }
            newState.items.splice(idx,1);
            return newState;
        })
    }
    buildList(items){
        return items.map((item,idx)=> <ListItem key={idx} title={item.title} delete={()=>this.deleteItem(idx)}/> )
    }
    render(){
        return (
        <div>            
            <Header text={this.state.title} logout={this.props.logout}/>
            <div className="list">
                {this.buildList(this.state.items)}
            </div>
        </div>
        )
    }
}