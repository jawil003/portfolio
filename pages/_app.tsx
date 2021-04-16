import React, {
  useEffect,
} from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import BetaDialog from "../components/elements/BetaDialog";
import globalStyles from "../styles/styles";
import useViewportSizes from "use-viewport-sizes";
import designSystem from "@style/designSystem";
import { NotOptimized } from "components/elements/NotOptimized";
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
  const [
    vpWidth,
    _,
    updateVpSizes,
  ] = useViewportSizes({
    dimension: "w",
  });

  useEffect(() => {
    updateVpSizes?.();
  }, [updateVpSizes]);
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
            process.env
              .NEXT_PUBLIC_HOST_URL,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_HOST_URL}/img/Og_Preview.png`,
              width: 2130,
              height: 1118.25,
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

      {vpWidth >=
      designSystem.breakpoints
        .tabletPortraitUpNumber ? (
        <Component {...pageProps} />
      ) : (
        <NotOptimized />
      )}
      <BetaDialog />
    </>
  );
};

export default MyApp;
