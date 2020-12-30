import Head from "next/head";
import Link from "next/link";
import React, {
  useRef,
  useState,
} from "react";
import CategoryCard from "../../components/elements/custom/CategoryCard";
import CategoryCardWrapper from "../../components/layout/CategoryCardWrapper";
import CategoryHeader from "../../components/elements/custom/CategoryHeader";
import FullScreenSection from "../../components/elements/custom/FullScreenSection";
import FlaskDesign from "../../components/designs/flask.design";
import IconButton from "../../components/elements/generic/IconButton";
import Spacer from "../../components/elements/generic/Spacer";
import Typography from "../../components/elements/generic/Typography";
import DatabaseIcon from "../../components/icons/database.icon";
import DesktopIcon from "../../components/icons/desktop.icon";
import DisplayAndWebpageIcon from "../../components/icons/displayAndWebpage.icon";
import SmartphoneIcon from "../../components/icons/smartphone.icon";
import useTheme from "../../hooks/useTheme.hook";
import NavigationBar from "../../components/layout/NavigationBar";
import Footer from "../../components/layout/Footer";
import ScrollSnapParagraph from "../../components/elements/generic/SnapScrollParagraph";
import BackTopButton from "../../components/elements/custom/BackTopButton";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import DropIcon from "../../components/icons/drop.icon";
import useBreakpoint, {
  breakpoints,
} from "../../hooks/useBreakpoints.hook";
import { GetStaticProps } from "next";
import KnowledgeService from "src/services/knowledge.service";
import KnowledgeCategory from "src/model/KnowledgeCategory.model";
import dynamic from "next/dynamic";
import FlexContainer from "src/components/elements/generic/FlexContainer";
import ReactDesign from "src/components/designs/react.design";
import BackgroundWrapper from "src/components/layout/BackgroundWrapper";
import HeaderWithSpacer from "src/components/layout/HeaderWithSpacer";

const AdobeXdIcon = dynamic(
  () =>
    import(
      "../../components/icons/adobeXd.icon"
    ),
);
const ElectronIcon = dynamic(
  () =>
    import(
      "../../components/icons/electron.icon"
    ),
);
const TypescriptIcon = dynamic(
  () =>
    import(
      "../../components/icons/typescript.icon"
    ),
);
const ReactIcon = dynamic(
  () =>
    import(
      "../../components/icons/react.icon"
    ),
);
const NodeIcon = dynamic(
  () =>
    import(
      "../../components/icons/nodejs.icon"
    ),
);
const JavaIcon = dynamic(
  () =>
    import(
      "../../components/icons/java.icon"
    ),
);
const AndroidIcon = dynamic(
  () =>
    import(
      "../../components/icons/android.icon"
    ),
);
const SettingsPageDesign = dynamic(
  () =>
    import(
      "../../components/designs/settingsPage.design"
    ),
);
const PrototypeDesign = dynamic(
  () =>
    import(
      "../../components/designs/prototype.design"
    ),
);
const AffinityDesignerIcon = dynamic(
  () =>
    import(
      "../../components/icons/affinityDesigner.icon"
    ),
);
const AffinityPhotoIcon = dynamic(
  () =>
    import(
      "../../components/icons/affinityPhoto.icon"
    ),
);

const getIconForName = (
  name?: string,
) => {
  switch (name) {
    case "ElectronIcon": {
      return (
        <ElectronIcon height="100%" />
      );
    }
    case "AdobeXdIcon": {
      return (
        <AdobeXdIcon height="100%" />
      );
    }
    case "TypescriptIcon": {
      return (
        <TypescriptIcon height="100%" />
      );
    }
    case "ReactIcon": {
      return (
        <ReactIcon height="100%" />
      );
    }
    case "NodeIcon": {
      return <NodeIcon height="100%" />;
    }
    case "JavaIcon": {
      return <JavaIcon height="100%" />;
    }
    case "AndroidIcon": {
      return (
        <AndroidIcon height="100%" />
      );
    }
    case "SettingsPageDesign": {
      return (
        <SettingsPageDesign height="100%" />
      );
    }
    case "PrototypeDesign": {
      return (
        <PrototypeDesign height="100%" />
      );
    }
    case "AffinityDesignerIcon": {
      return (
        <AffinityDesignerIcon height="100%" />
      );
    }
    case "AffinityPhotoIcon": {
      return (
        <AffinityPhotoIcon height="100%" />
      );
    }
    default: {
      return (
        <FlaskDesign height="100%" />
      );
    }
  }
};

interface Props {}

interface StaticProps {
  knowledgeCategories: KnowledgeCategory[];
}

/**
 * An Contact React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Contact: React.FC<
  Props & StaticProps
> = ({ knowledgeCategories }) => {
  const {
    palette: {
      color: { primary, secondaryText },
    },
  } = useTheme();

  const [
    hideButton,
    setHideButton,
  ] = useState(true);

  const paragraphs = Array.of(
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  );
  const { width } = useBreakpoint();
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y === 0)
        setHideButton(true);
      else setHideButton(false);
    },
    [hideButton],
    undefined,
    false,
    300,
  );

  return (
    <>
      <Head>
        <title>
          Jannik Will | Kenntnisse
        </title>
      </Head>
      {width < breakpoints.lg ? (
        <NavigationBar />
      ) : (
        <ScrollSnapParagraph
          ref={paragraphs[0]}
          align="start"
        >
          <NavigationBar />
        </ScrollSnapParagraph>
      )}
      <BackgroundWrapper
        background={
          <div
            style={{
              position: "absolute",
              right:
                width >= breakpoints.lg
                  ? 0
                  : undefined,
              left:
                width < breakpoints.lg
                  ? 0
                  : undefined,
              top: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems:
                width >= breakpoints.lg
                  ? "center"
                  : "flex-end",
              justifyContent:
                width >= breakpoints.lg
                  ? "flex-end"
                  : "flex-start",
            }}
          >
            <div
              style={{
                padding: "50px",
                paddingTop: "150px",
                paddingRight: "0px",
                display: "flex",
                justifyContent:
                  "center",
                alignItems: "center",
                height: "100%",
                width: "auto",
                position: "relative",
                overflow: "hidden",
                right:
                  width < breakpoints.lg
                    ? "70%"
                    : 0,
              }}
            >
              <ReactDesign height="100%" />
            </div>
          </div>
        }
      >
        <HeaderWithSpacer first>
          <Typography
            variant="h3"
            align={
              width > breakpoints.lg
                ? "left"
                : "center"
            }
          >
            Wie kann ich dir helfen?
          </Typography>
          <Spacer height="0.4em" />
          <Typography
            wordSpacing={11}
            align={
              width > breakpoints.lg
                ? "left"
                : "center"
            }
          >
            Vielleicht sagt dir ja eines
            meiner Fachgebiete zu, dann{" "}
            <Typography
              underline
              inline
            >
              <Link href="/contact">
                <a>kontaktiere</a>
              </Link>
            </Typography>{" "}
            mich gerne
          </Typography>
          <Spacer height="12px" />
          <FlexContainer
            justifyContent="center"
            columnGap="10px"
            rowGap="10px"
            wrap
          >
            <IconButton
              key="Backend"
              tooltipText="Backend"
              tooltipOrientation="left"
              onClick={() =>
                paragraphs[2].current?.scrollIntoView(
                  {
                    behavior: "smooth",
                    block: "start",
                  },
                )
              }
            >
              <DatabaseIcon height="50%" />
            </IconButton>

            <IconButton
              key="Web"
              tooltipText="Web"
              tooltipOrientation={
                width > 1350
                  ? "bottom"
                  : "top"
              }
              onClick={() =>
                paragraphs[3].current?.scrollIntoView(
                  {
                    behavior: "smooth",
                    block: "start",
                  },
                )
              }
              color="var(--yellow)"
            >
              <DisplayAndWebpageIcon height="60%" />
            </IconButton>

            <IconButton
              key="Mobile"
              tooltipText="Mobile"
              tooltipOrientation={
                width > 1350
                  ? "bottom"
                  : width > 1160
                  ? "top"
                  : "right"
              }
              onClick={() =>
                paragraphs[4].current?.scrollIntoView(
                  {
                    behavior: "smooth",
                    block: "start",
                  },
                )
              }
              color="var(--red)"
            >
              <SmartphoneIcon height="50%" />
            </IconButton>

            <IconButton
              key="Desktop"
              tooltipOrientation={
                width > 1350
                  ? "bottom"
                  : width > 1160
                  ? "right"
                  : "bottom"
              }
              tooltipText="Desktop"
              onClick={() =>
                paragraphs[5].current?.scrollIntoView(
                  {
                    behavior: "smooth",
                    block: "start",
                  },
                )
              }
              color="var(--green)"
            >
              <DesktopIcon height="50%" />
            </IconButton>
            <IconButton
              key="Design"
              tooltipText="Design"
              tooltipOrientation={
                width > 1350
                  ? "right"
                  : "bottom"
              }
              onClick={() =>
                paragraphs[6].current?.scrollIntoView(
                  {
                    behavior: "smooth",
                    block: "start",
                  },
                )
              }
              color="var(--orange)"
            >
              <DropIcon height="27px" />
            </IconButton>
          </FlexContainer>
        </HeaderWithSpacer>
      </BackgroundWrapper>
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: primary,
          color: secondaryText,
        }}
      >
        {knowledgeCategories.map(
          (
            {
              title,
              description,
              items,
            },
            index,
          ) => {
            if (width < breakpoints.lg)
              return (
                <FullScreenSection
                  key={title + "-snap"}
                  latest={
                    index ===
                    knowledgeCategories.length -
                      1
                      ? true
                      : false
                  }
                >
                  <CategoryHeader
                    key={
                      title + "-header"
                    }
                    title={title}
                    description={
                      description
                    }
                  />
                  <div style={{maxWidth: "100vw", overflowX: "scroll"}}>
                    <CategoryCardWrapper
                      key={
                        title +
                        "-wrapper"
                      }
                    >
                      {items.map(
                        ({
                          title,
                          description,
                          icon,
                        }) => (
                          <CategoryCard
                            key={
                              title +
                              "-card"
                            }
                            title={
                              title
                            }
                            description={
                              description
                            }
                            icon={getIconForName(
                              icon?.title,
                            )}
                          />
                        ),
                      )}
                    </CategoryCardWrapper>
                  </div>
                </FullScreenSection>
              );
            return (
              <ScrollSnapParagraph
                key={title}
                ref={
                  paragraphs[index + 1]
                }
              >
                <FullScreenSection
                  key={title + "-snap"}
                  latest={
                    index ===
                    knowledgeCategories.length -
                      1
                      ? true
                      : false
                  }
                >
                  <CategoryHeader
                    key={
                      title + "-header"
                    }
                    title={title}
                    description={
                      description
                    }
                  />
                  <CategoryCardWrapper
                    key={
                      title + "-wrapper"
                    }
                  >
                    {items.map(
                      ({
                        title,
                        description,
                        icon,
                      }) => (
                        <CategoryCard
                          key={
                            title +
                            "-card"
                          }
                          title={title}
                          description={
                            description
                          }
                          icon={getIconForName(
                            icon?.title,
                          )}
                        />
                      ),
                    )}
                  </CategoryCardWrapper>
                </FullScreenSection>
              </ScrollSnapParagraph>
            );
          },
        )}
      </main>
      <Footer />{" "}
      <BackTopButton
        hidden={hideButton}
        onClick={() => {
          if (width < breakpoints.lg)
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          else
            paragraphs[0].current?.scrollIntoView(
              {
                behavior: "smooth",
                block: "start",
              },
            );
        }}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      knowledgeCategories: await KnowledgeService.getAllKnowledgeCategoriesWithItems(),
    },
  };
};

export default Contact;
