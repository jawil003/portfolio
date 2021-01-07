import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import {
  generateGeneralTags,
  provideImages,
} from "src/services/meta.service";
/**
 * An  React Component.
 * @author
 * @version 0.1
 */

class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="de"
        style={{
          scrollSnapType: "y mandatory",
        }}
      >
        <Head>
          <link
            rel="stylesheet"
            href="/styles/index.css"
          />
          <link
            rel="shortcut icon"
            href="img/favicon.png"
            type="image/x-icon"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.GTM_ID}');`,
            }}
          />
          {generateGeneralTags(true)}
          {provideImages(
            "./img/icons",
            "icon",
          )}
        </Head>

        <body
          style={{
            minHeight: "100vh",
          }}
        >
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-596BQH3"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
