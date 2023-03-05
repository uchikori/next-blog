import "@/styles/globals.css";
import { Layout } from "@/components/Layout";

//fontawesomeの設定
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from "next/script";
import * as gtag from "@/lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  //各ページのgtag発火イベント
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_MEASUREMENT_ID}');
            `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
