import React from "react";
import styled from "styled-components";

const BreadCrumHead = styled.h5`
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #505050;
    paddingright:5px;
  }`;

  const BreadCrumWrapper=styled.div`
  padding:37px 0 50px;
  display:flex;
  `;

  const Seperator =styled.span`
  padding:0 5px 0 5px`;


const BreadCrum=({breadCrumdata})=>{
    // console.log(breadCrumdata);

    return(
        <BreadCrumWrapper>
            {breadCrumdata.map(item=>
                <BreadCrumHead key={item.id} className="ItemPage-item">
                    {item.name} 
                    <Seperator> > </Seperator>
                </BreadCrumHead>
                )}
        </BreadCrumWrapper>
    )
}

export default BreadCrum ;