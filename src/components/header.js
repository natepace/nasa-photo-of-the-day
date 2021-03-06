import React from "react";
// import axios from 'axios';
import styled from 'styled-components';


function Header() {
    return (
        <div>
            <StyleHeader> NASA Picture of the Day</StyleHeader>
            <StyleMe> React App by Nate Pace</StyleMe>
        </div>
    )
}

const StyleHeader = styled.h1`

// font-weight: bold;
font-size:5rem;
display: flex;
justify-content: center;
color: white;
margin: 0 auto;
font-family: 'Space Mono', monospace;
`
const StyleMe = styled.h4`
color:white;
`

export default Header;

// import React, {useState, useEffect} from "react";
// import styled from "styled-components";


// function Header(){


//     return(<StyleHeader>Picture Of The Day!</StyleHeader>)
// }

// const StyleHeader = styled.h1`
// font-weight: bold;
// font-size:5rem;
// display: flex;
// justify-content: center;
// `
// export default Header; 