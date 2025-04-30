"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function ClientScripts() {
  useEffect(() => {
    // Calendly functionality for when needed
    const loadCalendly = () => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    };

    // Only load Calendly when button is clicked
    const calendarButton = document.getElementById("calendarButton");
    if (calendarButton) {
      calendarButton.addEventListener("click", loadCalendly);
    }

    return () => {
      if (calendarButton) {
        calendarButton.removeEventListener("click", loadCalendly);
      }
    };
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXX');
          `,
        }}
      />

      {/* Tawk.to - Load immediately on page load */}
      <Script
        id="tawkto-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68122902a34a48190eed2560/1iq3fp8ip';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />

      {/* Calendar button is separate from Tawk.to chat */}
      {/* <button
        id="calendarButton"
        className="fixed bottom-24 right-4 p-3 bg-purple text-white rounded-full shadow-lg z-40 hover:bg-white hover:text-black transition duration-300 ease-out"
        aria-label="Open calendar"
      >
        Calendar
      </button> */}
    </>
  );
}