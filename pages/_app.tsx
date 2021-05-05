import { AppProps } from "next/app";
import React, {
  useEffect,
} from "react";
import { DefaultSeo } from "next-seo";
import { prepareClientPortals } from "@jesstelford/react-portal-universal";
import {
  css,
  Global,
} from "@emotion/react";
import globalStyles from "../styles/styles";
import designSystem from "../styles/designSystem";
import { ViewportProvider } from "../contexts/viewport-provider";
import { useViewport } from "../hooks/useViewport.hook";

if (typeof window !== "undefined") {
  // On the client, we have to run this once before React attempts a render.
  // Here in _app is a great place to do it as this file is only required once,
  // and right now (outside the constructor) is before React is invoked.
  prepareClientPortals();
}

/**
 * An App React Component.
 * @author Jannik Will
 * @version 0.1
 */
const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  useEffect(() => {}, []);
  const { height } = useViewport(
    true,
    true,
  );
  return (
    <>
      <ViewportProvider>
        {globalStyles}
        <Global
          styles={css`
            #__next {
              min-height: ${height}px;
              height: ${height}px;
              max-height: ${height}px;
            }
          `}
        />
        <DefaultSeo
          defaultTitle="Jannik Will"
          titleTemplate="Jannik Will | %s"
          title={undefined}
          description="Lerne mich und meine Fähigkeiten, sowie meine Erfahrungen im Bereich Softwareentwicklung kennen"
          openGraph={{
            type: "website",
            locale: "de",
            url: `${process.env.NEXT_PUBLIC_HOST_URL}`,
            images: [
              {
                url: `${process.env.NEXT_PUBLIC_HOST_URL}/img/Og_Preview.png`,
                width: 1200,
                height: 630,
                alt:
                  "Cover mit Text Lerne mich und meine Fähigkeiten, sowie meine Erfahrungen im Bereich Softwareentwicklung kennen",
              },
            ],
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType:
              "summary_large_image",
          }}
          additionalLinkTags={[
            {
              rel: "icon",
              href:
                "img/icons/favicon.png",
            },
          ]}
          robotsProps={{
            nosnippet: true,
            noimageindex: true,
            noarchive: true,
            maxSnippet: -1,
            maxImagePreview: "none",
            maxVideoPreview: -1,
          }}
        />

        <div
          css={css`
            & {
              z-index: ${designSystem
                .positioning.first};
              position: absolute;
              top: 0;
              left: 0;
            }
          `}
          id="modal"
        />

        <Component {...pageProps} />
      </ViewportProvider>
    </>
  );
};

export default MyApp;
