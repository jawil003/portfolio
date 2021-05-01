import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";

/**
 * An  React Component.
 * @author
 * @version 0.1
 */

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link
            rel="stylesheet"
            href="index.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
