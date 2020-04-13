import React from "react";
import moment from 'moment';
import styled from "styled-components";


const AccntOverviewWrapper=styled.div`
text-align:left;
`;
const Header=styled.h3`
    font-family: BerkeleyStd;
    font-size: 42px;
    line-height: 1.14;
    letter-spacing: 0.5px;
    color: #022737;
    margin:0;
    padding-bottom:15px;
  }`;
  const FundName=styled.p`
    font-family: HelveticaNeue;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: normal;
    color: #022737;
    margin:0;
  }`;
  const Balance=styled.p` 
    font-family: HelveticaNeue;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: normal;
    color: #505050;
    margun:0;
  }`;

const AccntOverview =({accntdata})=>{

    let newDate=new Date();
    let formattedDate=moment(newDate).format('DD/MM/YYYY'); 

    return(
        <AccntOverviewWrapper>
            <Header>Account Overview</Header>
            <FundName>{accntdata.accountdetails[0].fundname}</FundName>
            <Balance>Balance as of {formattedDate}</Balance>
        </AccntOverviewWrapper>
    )

}

export default AccntOverview ;