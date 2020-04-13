import React from "react";
import styled from "styled-components";

const BalanceCardWrapper=styled.div`
    padding:0;
  }`;

  const AccntType=styled.p`
    font-family: BerkeleyStd;
    font-size: 24px;
    line-height: 1.25;
    letter-spacing: 0.5px;
    color: #022737;
    margin-bottom:5px;
  }`;

  const AccntBalValue=styled.p`
    font-family: HelveticaNeue;
    font-size: 42px;
    font-weight: 300;
    line-height: normal;
    letter-spacing: normal;
    color: #69923a;
    margin:0;
  }`;
  const SummaryLink=styled.p`
    font-family: HelveticaNeue;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: #006778;
    padding-top:28px;
  }`;

  const BalanceCardInnerWrap=styled.div`
  
  box-shadow: 0 9px 21px 0 rgba(128, 152, 213, 0.08);
  margin-bottom:20px;
  background-color: #ffffff;
  height:172px;
  padding:20px 0 0 30px;
  &:nth-child(2){
    margin-bottom:0;
  }
  `
  ;

const Balancecard=({balancedata})=>{
    return(
        <BalanceCardWrapper className="col-4">
            {balancedata.map(item=>
                <BalanceCardInnerWrap className="col-12" key={item.id}>
                    <AccntType>{item.accnttype}</AccntType>
                    <AccntBalValue>{item.value}</AccntBalValue>
                    <SummaryLink>{item.text}</SummaryLink>
                </BalanceCardInnerWrap>
            )}
        </BalanceCardWrapper>
    )
}

export default Balancecard;