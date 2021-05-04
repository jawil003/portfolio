import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import { ServerPortal } from "@jesstelford/react-portal-universal/server";

/**
 * An  React Component.
 * @author
 * @version 0.1
 */

class MyDocument extends Document {
  static async getInitialProps(
    ctx: any,
  ) {
    const portals = new ServerPortal();
    const originalRenderPage =
      ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (
          props: any,
        ) =>
          portals.collectPortals(
            <App {...props} />,
          ),
      });

    const {
      html,
      ...props
    } = await Document.getInitialProps(
      ctx,
    );

    const htmlWithPortals = portals.appendUniversalPortals(
      html,
    );

    return {
      html: htmlWithPortals,
      ...props,
    };
  }

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
