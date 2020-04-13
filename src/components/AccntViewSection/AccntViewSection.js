import React ,{Component}from "react";
import BreadCrum from "./BreadCrum/BreadCrum";
import AccntOverview from "./AccntOverview/AccntOverview";
import {staticData} from "../../data/statictxtData";
import {breadcrumData} from "../../data/braedcrumData";
import styled from "styled-components";


const AccntViewSectionWrapper=styled.div`
    background:#ffffff;
    padding:0 140px 50px;
`;

class AccntViewSection extends Component{

    state={
        staticData:staticData,
        breadcrumData:breadcrumData
    }
    render(){
    return(
        <AccntViewSectionWrapper>
            <BreadCrum breadCrumdata={this.state.breadcrumData}></BreadCrum>
            <AccntOverview accntdata={this.state.staticData}></AccntOverview>
        </AccntViewSectionWrapper>
    )
}
}

export default AccntViewSection;