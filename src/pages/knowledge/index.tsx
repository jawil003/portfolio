import Head from "next/head";
import React, {
  useRef,
  useState,
} from "react";
import CategoryCard from "../../components/elements/responsive/CategoryCard";
import CategoryCardWrapper from "../../components/elements/responsive/CategoryCardWrapper";
import CategoryHeader from "../../components/elements/responsive/CategoryHeader";
import FullScreenKnowledgeSection from "../../components/elements/generic/FullScreenKnowledgeSection";
import IconButton from "../../components/elements/generic/IconButton";
import DatabaseIcon from "../../components/icons/database.icon";
import DesktopIcon from "../../components/icons/desktop.icon";
import DisplayAndWebpageIcon from "../../components/icons/displayAndWebpage.icon";
import SmartphoneIcon from "../../components/icons/smartphone.icon";
import NavigationBar from "../../components/elements/generic/DesktopNavigationBar";
import BackTopButton from "../../components/elements/responsive/BackTopButton";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import DropIcon from "../../components/icons/drop.icon";
import { GetStaticProps } from "next";
import KnowledgeService from "src/services/knowledge.service";
import KnowledgeCategory from "src/model/KnowledgeCategory.model";
import FlexContainer from "src/components/elements/generic/FlexContainer";
import ReactDesign from "src/components/designs/react.design";
import BackgroundWrapper from "src/components/elements/generic/BackgroundWrapper";
import HeaderWithSpacer from "src/components/elements/responsive/HeaderWithSpacer";
import { generateIndividualTags } from "src/services/meta.service";
import { title } from "../../../package.json";
import HeaderService, {
  Header,
} from "src/services/header.service";
import TitleWithSubtitle from "src/components/elements/generic/TitleWithSubtitle";
import { useKnowledgeIcons } from "src/hooks/useIcons.hook";
import { css } from "@emotion/react";
import designSystem from "@style/designSystem";
import Spacer from "src/components/elements/generic/Spacer";

interface StaticProps {
  knowledgeCategories: KnowledgeCategory[];
  knowledgeHeader: Header;
}

/**
 * An Contact React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Contact: React.FC<StaticProps> = ({
  knowledgeCategories,
  knowledgeHeader: {
    title: knowledgeTitle,
    subtitle: knowledgeSubTitle,
  },
}) => {
  const getIcon = useKnowledgeIcons();

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
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y >= 0)
        setHideButton(true);
      else setHideButton(false);
    },
    [],
    undefined,
    false,
    300,
  );

  return (
    <>
      <Head>
        {generateIndividualTags({
          title: `${title} | Kenntnisse`,
          description:
            "Meine Kenntnisse im Bereich, Webentwicklung und vielem mehr.",
        })}
      </Head>
      <NavigationBar />
      <BackgroundWrapper
        background={
          <div
            css={css`
              & {
                display: grid;
                align-items: center;
                width: 100%;
                height: 100%;
                grid-template-rows: 100%;
              }
              @media (min-width: ${designSystem
                  .breakpoints
                  .tabletPortraitUp}) {
                & {
                  justify-content: end;
                  grid-template-columns: 50%;
                }
              }
              @media (max-width: ${designSystem
                  .breakpoints
                  .tabletPortraitUp}) {
                & {
                  justify-items: center;
                  justify-content: center;
                  grid-template-columns: 100%;
                  opacity: 0.3;
                }
              }
            `}
          >
            <div>
              <ReactDesign
                width="auto"
                height="100%"
              />
            </div>
          </div>
        }
      >
        <HeaderWithSpacer first>
          <FlexContainer justifyContent="center">
            <TitleWithSubtitle
              heading={knowledgeTitle}
              description={
                knowledgeSubTitle
              }
            >
              <FlexContainer
                justifyContent="center"
                columnGap="10px"
                rowGap="10px"
                wrap
              >
                <IconButton
                  key="Backend"
                  keyCode="1"
                  tooltipText="Backend"
                  tooltipOrientation="left"
                  onClick={() =>
                    paragraphs[1].current?.scrollIntoView(
                      {
                        behavior:
                          "smooth",
                        block: "start",
                      },
                    )
                  }
                >
                  <DatabaseIcon height="50%" />
                </IconButton>

                <IconButton
                  keyCode="3"
                  key="Web"
                  tooltipText="Web"
                  onClick={() =>
                    paragraphs[2].current?.scrollIntoView(
                      {
                        behavior:
                          "smooth",
                        block: "start",
                      },
                    )
                  }
                  color={
                    designSystem.colors
                      .palette.yellow
                      .base
                  }
                >
                  <DisplayAndWebpageIcon height="60%" />
                </IconButton>

                <IconButton
                  keyCode="2"
                  key="Mobile"
                  tooltipText="Mobile"
                  onClick={() =>
                    paragraphs[3].current?.scrollIntoView(
                      {
                        behavior:
                          "smooth",
                        block: "start",
                      },
                    )
                  }
                  color={
                    designSystem.colors
                      .palette.red.base
                  }
                >
                  <SmartphoneIcon height="50%" />
                </IconButton>

                <IconButton
                  key="Desktop"
                  keyCode="2"
                  tooltipText="Desktop"
                  onClick={() =>
                    paragraphs[4].current?.scrollIntoView(
                      {
                        behavior:
                          "smooth",
                        block: "start",
                      },
                    )
                  }
                  color={
                    designSystem.colors
                      .palette.green
                      .base
                  }
                >
                  <DesktopIcon height="50%" />
                </IconButton>
                <IconButton
                  keyCode="1"
                  key="Design"
                  tooltipText="Design"
                  onClick={() =>
                    paragraphs[5].current?.scrollIntoView(
                      {
                        behavior:
                          "smooth",
                        block: "start",
                      },
                    )
                  }
                  color={
                    designSystem.colors
                      .palette.orange
                      .base
                  }
                >
                  <DropIcon height="27px" />
                </IconButton>
              </FlexContainer>
            </TitleWithSubtitle>
          </FlexContainer>
        </HeaderWithSpacer>
      </BackgroundWrapper>
      {/* TODO: Find Out why Page becomes more than 100vw on Mobile Devices*/}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
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
            return [
              <FullScreenKnowledgeSection
                ref={paragraphs[index]}
                rowGap="30px"
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
                        icon={getIcon({
                          name: icon?.title as string,
                          height:
                            "100%",
                        })}
                      />
                    ),
                  )}
                </CategoryCardWrapper>
              </FullScreenKnowledgeSection>,
              index ===
              knowledgeCategories.length -
                1 ? undefined : (
                <Spacer
                  key={
                    title + "-spacer"
                  }
                  height="100px"
                />
              ),
            ];
          },
        )}
      </main>

      <BackTopButton
        hidden={hideButton}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      knowledgeCategories: await KnowledgeService.getAllKnowledgeCategoriesWithItems(),
      knowledgeHeader: await HeaderService.getKnowledge(),
    },
  };
};

export default Contact;
