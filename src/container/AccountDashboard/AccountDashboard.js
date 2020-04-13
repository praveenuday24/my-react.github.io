import React,{Component} from "react";
import SectionOverview from "../../components/SectionOverview/SectionOverview";
import {accntModeData} from "../../data/accntModeData";
import ModeOfAccnt from "../../components/ModeOfAccnt/ModeOfAccnt";
import AccntViewSection from "../../components/AccntViewSection/AccntViewSection";
import AccntBalanaceTypeOverview from "../../components/AccntBalanceTypeOverview/AccntBalanceTypeOverview";
import styled from "styled-components";
import AccntHeader from "../../components/AccntHeader/AccntHeader";

const AccountDashboardWrapper=styled.div``;

class AccountDashboard extends Component{

    state={
        accntModeData:accntModeData,
        accntActiveTab:3
    }
    handleAccntTabChange=(tab_id)=>{
        this.setState({
            accntActiveTab:tab_id
        })
    }

    render(){
    return(
        <AccountDashboardWrapper>
            <AccntHeader></AccntHeader>
            <SectionOverview></SectionOverview>
            <AccntViewSection></AccntViewSection>
            <AccntBalanaceTypeOverview></AccntBalanaceTypeOverview>
            <ModeOfAccnt 
            modedata={this.state.accntModeData}    
            accntActiveTab={this.state.accntActiveTab}
            onTabChange={this.handleAccntTabChange}>></ModeOfAccnt>

        </AccountDashboardWrapper>
    )
    }

}



export default AccountDashboard;