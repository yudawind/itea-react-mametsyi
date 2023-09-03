import { Link } from "react-router-dom";
import styled from "styled-components";

import "../../styles/index.scss"

const StyledHeader = styled.header`
    color: #EEE;
    background-color: #141414;
    font-family: 'Roboto', sans-serif;

    padding: 30px;

    text-align: center;

    display: flex;
    gap: 20px;
    justify-content: center;

    a {
        color: #EEE;
        text-decoration: none;
    }
`

export const Header = () => {
    return (
        <StyledHeader>
            <Link to="/home">Home</Link>
            <Link to="/profile">Profile</Link>
        </StyledHeader>
    )

}