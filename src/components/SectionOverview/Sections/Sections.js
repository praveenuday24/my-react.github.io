import React from "react";
import styled from "styled-components";
import './Sections.css';

const SectionWrapper=styled.ul`
    margin:0;
    padding:0;
    display:flex;
    padding-top:20px;
`;

const SectionList=styled.li`
    font-size:14px;
    color:#022737;
    list-style-type:none;
    margin-right:20px;
    font-family: HelveticaNeue;
    font-weight: bold;
    line-height: normal;
    letter-spacing: 0.5px;
    cursor:pointer;
   
`;

const Sections=({sectionlist,activeTab,onTabChange})=>{
    // console.log(sectionlist);

        return(
            <SectionWrapper>
            {sectionlist.map(item=>
            <SectionList key={item.id} className={`ItemPage-item ${activeTab===item.id && 'selected'}`}>
                <div onClick={()=>onTabChange(item.id)}>{item.name}</div>
            </SectionList>
            )}
        </SectionWrapper>
        )
    }

export default Sections;