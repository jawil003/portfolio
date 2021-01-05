import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { generateGeneralTags, generateIndividualTags, provideImages } from "src/services/meta.service";
import {title} from "../../package.json";
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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
