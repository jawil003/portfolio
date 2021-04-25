import { AppProps } from "next/app";
import globalStyles from "../styles/styles";
import React from "react";
import { DefaultSeo } from "next-seo";

/**
 * An App React Component.
 * @author Jannik Will
 * @version 0.1
 */
const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      {globalStyles}
      <DefaultSeo
        defaultTitle="Jannik Will"
        titleTemplate="Jannik Will | %s"
        title={undefined}
        description="Lerne mich und meine Fähigkeiten, sowie meine Erfahrungen im Bereich Softwareentwicklung kennen"
        openGraph={{
          type: "website",
          locale: "de",
          url:
            "https://" +
            process.env
              .NEXT_PUBLIC_HOST_URL,
          images: [
            {
              url: `https://${process.env.NEXT_PUBLIC_HOST_URL}/img/Og_Preview.png`,
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

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
