import React, {useState, useEffect} from 'react';
import styled from "styled-components";

function Pic(props){
    const {bigPic} = props;
    
    return (
    <div class= "bigPic">
        
        <Styleimg src = {bigPic}/>
    </div>
    )
}
const Styleimg = styled.img`
width: 900px;
// border: 12px solid black;
// border-radius: 4px;
filter: drop-shadow(0px 0px 10px  #ffffff);
margin: 0 auto;
`
const Styletitle = styled.h3`
justify-content:center;
`

export default Pic;