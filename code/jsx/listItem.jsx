// dependencies
import * as React from 'react';

//files
import GameIcon from './gameIcon'
import ThrashIcon from './trashIcon'

export default class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showDelete:false
        }
    }
    showHideDelete(){
        this.setState((state)=>{ 
            return {
                showDelete: !state.showDelete
            }
        })
    }
    render(){
        return(
            <div className="listItem" onClick={(e)=>this.showHideDelete()}>
                <div className="itemIcon">
                <GameIcon width={70} height={70} fill={"orange"}/>                
                </div>
                <p className="itemTitle">{this.props.title}</p>
                {this.state.showDelete ? 
                <div className="itemDelete" onClick={this.props.delete}>
                    <ThrashIcon width={70} height={70} fill={"white"}/>
                </div> : null }
            </div>
        )
    }
}