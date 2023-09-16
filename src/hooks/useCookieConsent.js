import { useEffect, useState } from 'react';

function useCookieConsent() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consentStatus = localStorage.getItem('consentGiven');
    if (consentStatus === 'true') {
      setConsentGiven(true);
    }
  }, []);
  
  const giveConsent = () => {
    setConsentGiven(true);
    localStorage.setItem('consentGiven', 'true');
  };

  return {
    consentGiven,
    giveConsent,
  };
}

export default useCookieConsent;
