import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * An  React Component.
 * @author
 * @version 0.1
 */

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="styles/index.css" />
          <link
            rel="shortcut icon"
            href="img/favicon.png"
            type="image/x-icon"
          />
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
