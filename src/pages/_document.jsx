import {ColorModeScript} from "@chakra-ui/react";
import Document, {Html, Head, Main, NextScript} from "next/document";

import colorMode from "@/theme/colorMode";
import Script from "next/script";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <Script id="google-tag-manager" strategy="afterInteractive">
                        {` (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-N7SL9B4');`}
                    </Script>
                    <link
                        rel="shortcut icon"
                        href="/favicon/favicon.ico"
                        type="image/x-icon"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicon/site.webmanifest"/>
                </Head>
                <body>
                <ColorModeScript
                    initialColorMode={colorMode.config.initialColorMode}
                />

                <Main/>
                <NextScript/>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7SL9B4" height="0" width="0" style="display: none; visibility: hidden;" />`,
                    }}
                />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
