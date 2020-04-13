import React from "react";
import vanguardLogo from "../../../assets/vcep-logo.png";
import styled from "styled-components";

const LogoWrapper=styled.img`
height:60px;
width:143px;
`;


const Logo = () =>{
    return(
        <div>
            <LogoWrapper src={vanguardLogo} alt="vanguard-logo"></LogoWrapper>
        </div>
    )
}

export default Logo;