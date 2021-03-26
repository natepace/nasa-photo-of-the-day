import React from "react";
import styled from 'styled-components';

function Footer(props) {

    return (
        <div>
            <StyleTitle className="title">
                <h3>{props.title}</h3>
            </StyleTitle>

            <StyleDate className="date">
                <h3>{props.date}</h3>
            </StyleDate>
            <StyleInfo className="explanation">
                <p>{props.explanation}</p>
            </StyleInfo>
        </div>
    )

}

const StyleTitle = styled.h3`
display:flex;
justify-content: center;
color:white;
margin: 0 auto;
`
const StyleInfo = styled.p`
display:flex;
justify-content: center;
color:white;
margin: 0 auto;
`
const StyleDate = styled.h3`
display:flex;
justify-content: center;
color:white;
margin: 0 auto;
`
export default Footer;