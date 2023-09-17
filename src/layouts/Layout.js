import styled from "styled-components";
import { Header } from "./Header";
import { CookieMessage } from "../features/cookie/CookieMessage";

const StContainer = styled.div`
  color: #141414;
  font-family: "Roboto", sans-serif;
  max-width: 1370px;
  margin: 0 auto;
  padding: 0 15px 30px;

  h1 {
    padding: 15px 0 0;
  }
`;

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <StContainer>{children}</StContainer>
      <CookieMessage />
    </>
  );
};
