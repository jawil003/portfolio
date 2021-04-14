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
} from "../services/meta.service";
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
          {generateGeneralTags(true)}
          <link
            rel="shortcut icon"
            href="img/favicon.png"
            type="image/x-icon"
          />
          {provideImages(
            "./img/icons",
            "icon",
          )}
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
