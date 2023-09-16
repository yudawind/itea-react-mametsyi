import { Button } from "../../components/Button/Button";
import useCookieConsent from "../../features/useCookieConsent";
import styled from "styled-components";

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

export const CookieMessage = () => {
    const { consentGiven, giveConsent } = useCookieConsent();
    return (
        <>
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
