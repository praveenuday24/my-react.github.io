import React from "react";
import styled from "styled-components";

const AccntdetailsWrapper=styled.div`
padding:0px 0px 17px 30px;
`;

const GiftId =styled.p`
    font-family: BerkeleyStd;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: 0.5px;
    color: #006778;
    text-decoration:underline;
    padding-bottom:15px;
    margin:0;
  }`;

  const ContributorName=styled.p`
    font-family: HelveticaNeue;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: normal;
    color: #505050;
    margin:0;
    padding-bottom:20px;
  }`;

  const ReceivedDetails=styled.div`
  display:flex;
  padding-bottom:20px;`;

  const TypeDetails=styled.div`
  display:flex;
  padding-bottom:17px;
  `;

  const DetailsCaption=styled.div`
    font-family: HelveticaNeue;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: normal;
    color: #505050;
  }`;

  const DetailsValue= styled.p` 
    font-family: HelveticaNeue;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: normal;
    color: #022737;
    margin:0;
  }`;

  const AccntDeatilsInnerWarp=styled.div`
  border-bottom:solid 2px #d4d4d4`;

  const Activity=styled.div`
    font-family: HelveticaNeue;
    font-size: 16px;
    font-weight: bold;
    font-stretch: condensed;
    letter-spacing: 0.5px;
    color: #006778;
    padding-top:20px;
  `;

  const DetailsSection=styled.div`
  &:nth-child(3n){
    margin-right:0px;
  }
  
  &:nth-child(3n-2){
    margin-right:144px;
  }
  &:nth-child(3n-1){
    margin-right:113px;
  }`;

  const AccntDetailsFullWrap=styled.div`
  height:240px;
  overflow:auto;
  padding-top:20px;
  &::-webkit-scrollbar-track
{
	
	border-radius: 3px;
	background-color: transparent;
}

&::-webkit-scrollbar
{
	width: 6px;
	background-color: transparent;
}

&::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color:transparent;
}

  `;

const AccntDetails =({accntDetailsData})=>{
    // console.log(accntDetailsData);
    let details=accntDetailsData.Contributions;

        return(
            <AccntdetailsWrapper>
            <AccntDetailsFullWrap>
                {details.map(item=>
                    <AccntDeatilsInnerWarp  key={item.index} >
                            <GiftId>{`Gift ID: ${item.id}`}</GiftId>
                            <ContributorName>{item.contributorname}</ContributorName>
                            <ReceivedDetails>
                                <DetailsSection>
                                    <DetailsCaption>Entered date</DetailsCaption>
                                    <DetailsValue>{item.enteredDate}</DetailsValue>
                                </DetailsSection>
                                <DetailsSection>
                                    <DetailsCaption>Received date</DetailsCaption>
                                    <DetailsValue>{item.receivedDate}</DetailsValue>
                                </DetailsSection>
                                <DetailsSection>
                                    <DetailsCaption>Number of shares</DetailsCaption>
                                    <DetailsValue>{item.NoOfShares}</DetailsValue>
                                </DetailsSection>                            
                            </ReceivedDetails>
                            <TypeDetails>
                                <DetailsSection>
                                    <DetailsCaption>Type</DetailsCaption>
                                    <DetailsValue>{item.Type}</DetailsValue>
                                </DetailsSection>
                                <DetailsSection>
                                    <DetailsCaption>Amount</DetailsCaption>
                                    <DetailsValue>{item.Amount}</DetailsValue>
                                </DetailsSection>
                                <DetailsSection>
                                    <DetailsCaption>Status</DetailsCaption>
                                    <DetailsValue>{item.Status}</DetailsValue>
                                </DetailsSection>
                            </TypeDetails>                            
                    </AccntDeatilsInnerWarp>)
        }
            </AccntDetailsFullWrap>
            <Activity>View Contribution Activity</Activity>
            </AccntdetailsWrapper>
        )
    }


export default AccntDetails;