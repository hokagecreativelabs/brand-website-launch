"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function ClientScripts() {
  useEffect(() => {
    const loadCalendly = () => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    };

    const chatButton = document.getElementById("chatButton");
    if (chatButton) {
      chatButton.addEventListener("click", loadCalendly);
    }

    return () => {
      if (chatButton) {
        chatButton.removeEventListener("click", loadCalendly);
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

      {/* Tawk.to - Lazy Load on Interaction */}
      <Script
        id="tawkto-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/67dd42619b1c5d190de9b5e0/1ims4mjdm';
              s1.charSet='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />

      <button
        id="chatButton"
        className="fixed bottom-4 right-4 p-2 bg-blue-600 text-white rounded-full"
      >
        Chat with Us
      </button>
    </>
  );
}
