import React,{Component} from "react";
import Logo from "./Logo/Logo";
import Sections from "./Sections/Sections";
import {sectionData} from "../../data/sectiondata";
import styled  from 'styled-components';

const SectionOverviewWrapper = styled.div`
    display:flex;
    background:#ffffff;
    padding:5px 140px 14px;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid #eaeaea;
`;

class SectionOverview extends Component{

    state={
        sectionItems:sectionData,
        activeTab:0
    }

    handleTabChange=(id)=>{
        this.setState({
            activeTab: id
        })
    }

    render(){
        return(
            <SectionOverviewWrapper >
                <Logo></Logo>
                <Sections 
                    sectionlist={this.state.sectionItems} 
                    activeTab={this.state.activeTab}
                    onTabChange={this.handleTabChange}
                ></Sections>
            </SectionOverviewWrapper>
        )
    }
}

export  default SectionOverview;