import React,{Component} from 'react';
import {accntDetailsData} from "../../data/AccntDetailsData"; 

class AccntHeader extends Component{

    
    state={
        accntname:accntDetailsData.accntname
    }
    render(){
    return(
        <div>
            <select defaultValue={this.state.accntname}></select>
        </div>
    )
    }
}

export default AccntHeader;
