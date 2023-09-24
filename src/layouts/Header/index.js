import { Link } from "react-router-dom";
import styled from "styled-components";

import "../../styles/index.scss";

const StyledHeader = styled.header`
  color: #eee;
  background-color: #141414;
  font-family: "Roboto", sans-serif;

  padding: 30px;

  text-align: center;

  display: flex;
  gap: 20px;
  justify-content: center;

  a {
    color: #eee;
    text-decoration: none;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/home">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/search-title">Search Title</Link>
    </StyledHeader>
  );
};
