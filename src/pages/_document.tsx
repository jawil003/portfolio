import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

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
          <meta charSet="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
          <meta name="description" content="Description"/>
          <meta name="keywords" content="Keywords"/>

          <meta name="theme-color" content="#fff"/>
          <meta name="mobile-web-app-capable" content="yes"/>

          <meta name="apple-mobile-web-app-title" content="Jannik Will"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="default"/>

          <meta name="msapplication-navbutton-color" content="#000"/>
          <meta name="msapplication-TileColor" content="#fff"/>
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png"/>
          <meta name="msapplication-config" content="browserconfig.xml"/>

          <meta name="application-name" content="Jannik Will"/>
          <meta name="msapplication-tooltip" content="Mein Portfolio"/>
          <meta name="msapplication-starturl" content="/"/>

          <meta name="msapplication-tap-highlight" content="no"/>

          <meta name="full-screen" content="yes"/>
          <meta name="browsermode" content="application"/>

          <meta name="nightmode" content="disable"/>

          <meta name="layoutmode" content="standard"/>
        </Head>

        <body
          style={{
            minHeight: "100vh",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
