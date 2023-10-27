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
    className={`bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full`}>
      Schedule time with me
    </button>
  );
};

export default CalendlyButton;
