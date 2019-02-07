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
    buildList(items){
        return items.forEach((item)=>{
            <ListItem title={item.title} delete={items.delete}/>
        })
    }
    deleteItem(idx){
        console.log("idx: ",idx);
        console.log("THIS: ",this);
        this.setState((state)=>{
            return{
                ...state,
                items:state.items.splice(idx,1)
            }            
        })
    }
    render(){
        return (
        <div>
            <BackArrow/>
            <Header text={this.state.title}/>
            {buildList(this.state.items)}
        </div>
        )
    }
}