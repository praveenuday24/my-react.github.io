import React from "react";
import styled from "styled-components";
import './AccntType.css';
import {accntDetailsData} from "../../../../data/AccntDetailsData";

// console.log(accntDetailsData.contributions.length);

const AccntTypeWrapper=styled.ul`
    display:flex;
    padding:0;
    border-top:solid 2px rgba(0, 103, 120, 0.1);
    margin:0;
`;

const AccntTypeList=styled.li`
    width:150px;
    text-align:center;
    list-style:none;
    font-family: HelveticaNeue;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 0.5px;
    color: #505050;
    background:#eaeaea;
    padding:20px 15px;
    border-left:solid 1px #d9d9d9;
    cursor:pointer;
    &:nth-child(4){
        width:193px;
    }
`;

const AccntType =({accntTypeData,accntActiveTab,onTabChange})=>{
    

    return(
        <AccntTypeWrapper >
            {accntTypeData.map(item=>
                <AccntTypeList className={`ItemPage-item ${accntActiveTab===item.id && 'Accntselected'}`} key={item.id} >
                    <div onClick={()=>onTabChange(item.id)}>{item.accntname}({accntDetailsData[item.accntname].length})</div>
                </AccntTypeList>
            )}
        </AccntTypeWrapper>
    )
}

export default AccntType;