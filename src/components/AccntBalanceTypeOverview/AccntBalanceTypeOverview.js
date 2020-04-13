import React,{Component} from "react";
import BalanceCard from "./BalanceCard/BalanceCard"
import AccntTypeOverview from "./AccntTypeOverview/AccntTypeOverview";
import {balancedata} from "../../data/balanceData";
import styled from "styled-components";

const AccntBalanaceTypeOverviewwrapper=styled.div`
padding:50px 140px;
backgroung:#eaeaea`;

class AccntBalanaceTypeOverview extends Component{
    
    state={
        balancedata:balancedata
    }

    

    render(){
        return(
            <AccntBalanaceTypeOverviewwrapper className="row">
                <BalanceCard  
                balancedata={this.state.balancedata}
                ></BalanceCard>
                <AccntTypeOverview></AccntTypeOverview>
            </AccntBalanaceTypeOverviewwrapper>
        )
    }

}

export default AccntBalanaceTypeOverview;