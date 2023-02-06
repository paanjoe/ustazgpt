import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { gtagURL } from "../components/constant";

function MyApp({ Component, pageProps, session }: any) {
  const gTagURL = gtagURL + process.env.GOOGLE_ANALYTICS;
  return (
    <>
      <Script src={gTagURL} strategy="afterInteractive">
        {
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.GOOGLE_ANALYTICS});
          `
        }
      </Script>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
