import React, {useState, useEffect} from "react";
import styled from 'styled-components';

function Footer(){
    
    return (
    <div>
    <StyleFooter>Thanks for stopping by!</StyleFooter>
    </div>)
    
}

const StyleFooter = styled.h2`
display:flex;
justify-content: center;
`
export default Footer;