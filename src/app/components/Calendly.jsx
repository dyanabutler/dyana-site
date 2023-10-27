'use client'
import { useEffect } from 'react';

const CalendlyButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <button onClick={() => Calendly.initPopupWidget({ url: 'https://calendly.com/dyanabutler' })}
    className={`block bg-[#00B8A8] hover:bg-[#299E94] rounded-full px-5 py-2 w-full`}>
      Schedule Time With Me
    </button>
  );
};

export default CalendlyButton;


