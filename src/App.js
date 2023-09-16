import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./const";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Error } from "./pages/Error";
import "./styles/index.scss"
import useCookieConsent from "./features/useCookieConsent";
import styled from "styled-components";
import { Button } from "./components/Button/Button";

const StyleCookie = styled.div`
    position: fixed;
    padding:20px;
    background:#FFF;
    border:1px solid #000;
    bottom:0;
    left:0;
    box-shadow: 2px -2px 5px 5px #0004;
    z-index:100;
`

export const App = () => {
  const { consentGiven, giveConsent } = useCookieConsent();
  const {home, profile} = ROUTES;

    return (
      <>
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={profile} element={<Profile />} />
          <Route path="/" element={<Navigate to={home} />} />
          <Route path="*" element={<Error />} />
        </Routes>

        {!consentGiven ? (
          <StyleCookie>
            <div className="cookie-consent__message">
              <p>Ми використовуємо файли cookie. Погодьтеся з нашою політикою:</p>
            </div>
            <div className="cookie-consent__buttons">
              <Button onClick={giveConsent}>Погодитися</Button>
            </div>
          </StyleCookie>) : ('')}
      </>
      
    )
}