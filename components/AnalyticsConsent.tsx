import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-LHE974JLDV';
const CONSENT_KEY = 'ga-consent';

type ConsentState = 'pending' | 'granted' | 'denied';

const loadGoogleAnalytics = () => {
  if (document.getElementById('ga-gtag')) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.id = 'ga-gtag';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args) {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
};

export function AnalyticsConsent() {
  const [consent, setConsent] = useState<ConsentState>('pending');

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'granted' || stored === 'denied') {
      setConsent(stored);
    }
  }, []);

  useEffect(() => {
    if (consent === 'granted') {
      loadGoogleAnalytics();
    }
  }, [consent]);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'granted');
    setConsent('granted');
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'denied');
    setConsent('denied');
  };

  if (consent !== 'pending') return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[95%] max-w-xl -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-white/90">
          We use Google Analytics for basic, anonymised usage insights. Accept to enable tracking.
        </p>
        <div className="flex items-center gap-2">
          <button
            className="rounded-full bg-white/10 px-3 py-1 text-white transition hover:bg-white/20"
            type="button"
            onClick={handleDecline}
          >
            Skip
          </button>
          <button
            className="rounded-full bg-primary px-3 py-1 font-semibold text-white transition hover:bg-primary/90"
            type="button"
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
