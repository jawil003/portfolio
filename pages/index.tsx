import React, {
  RefObject,
  useEffect,
  useState,
} from "react";
import Spacer from "../components/elements/Spacer";
import IconLink from "../components/elements/IconLink";
import HeaderWithIcon from "../components/elements/HeaderWithIcon";
import NavigationBar from "../components/elements/DesktopNavigationBar";
import TitleWithSubtitle from "../components/elements/TitleWithSubtitle";
import { GetStaticProps } from "next";
import SocialItemsService, {
  SocialItem,
} from "services/SocialItems.service";
import { useSocialLogos } from "hooks/useIcons.hook";
import HeaderService, {
  Header,
} from "services/header.service";
import designSystem from "@style/designSystem";
import PersonWithLaptop from "components/designs/personWithLaptop.design";
import Typography from "components/elements/Typography";
import ResumeService from "services/resume.service";
import ResumeItemType from "model/ResumeItem.model";
import ColorContainer from "components/elements/ColorContainer";
import ResumeContainer from "components/elements/ResumeContainer";
import FlexContainer from "components/elements/FlexContainer";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import KnowledgeSection from "components/elements/KnowledgeSection";
import KnowledgeService from "services/knowledge.service";
import KnowledgeItem from "model/KnowledgeItem.model";
import { NextSeo } from "next-seo";

interface ServerSideProps {
  indexHeader: Header;
  socialItems: SocialItem[];
  resumeItems: ResumeItemType[];
  knowledgeItems: KnowledgeItem[];
}
/**
 * An Index React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Index: React.FC<ServerSideProps> = ({
  socialItems,
  indexHeader: { title, subtitle },
  resumeItems,
  knowledgeItems,
}) => {
  const paragraphs: [
    RefObject<HTMLHeadingElement>,
    ...RefObject<HTMLDivElement>[]
  ] = [
    React.createRef<HTMLHeadingElement>(),
    React.createRef(),
    React.createRef(),
  ];
  //const paragraphIndex = 0;
  const scrollToNextSection = () => {
    //TODO: Add logic to jump to next Paragraph on Scroll
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      scrollToNextSection,
    );
    return () =>
      window.removeEventListener(
        "scroll",
        scrollToNextSection,
      );
  }, []);
  const getIcon = useSocialLogos();

  const [
    backgroundIsWhite,
    setBackgroundIsWhite,
  ] = useState(true);
  useScrollPosition(
    () => {
      const pos = paragraphs?.[2].current?.getBoundingClientRect();
      if (!pos) return;
      const height =
        pos.bottom - pos.top;
      if (
        pos.top <= 50 &&
        pos.top > height * -1
      ) {
        setBackgroundIsWhite(false);
      } else {
        setBackgroundIsWhite(true);
      }
      console.debug(
        `Element is ${pos.top} and ${pos.bottom}`,
      );
    },
    undefined,
    undefined,
    true,
  );
  return (
    <>
      <NextSeo title="Kenntnisse" />
      <NavigationBar
        backgroundIsWhite={
          backgroundIsWhite
        }
      />

      <HeaderWithIcon
        icon={
          <PersonWithLaptop width="100%" />
        }
        ref={paragraphs[0]}
        first
      >
        <FlexContainer justifyContent="center">
          <TitleWithSubtitle
            heading={title}
            description={subtitle}
          >
            <Spacer height="8px" />
            <FlexContainer
              justifyContent="center"
              columnGap="8px"
            >
              {socialItems.map(
                ({
                  href,
                  name,
                  icon: { title },
                }) => (
                  <IconLink
                    key={name}
                    external
                    href={href}
                  >
                    {getIcon({
                      name: title,
                      height: "100%",
                    })}
                  </IconLink>
                ),
              )}
            </FlexContainer>
          </TitleWithSubtitle>
        </FlexContainer>
      </HeaderWithIcon>
      <Spacer height="120px" />
      <Typography
        variant="h4"
        align="center"
      >
        Das sind meine Kenntnisse
      </Typography>
      <Spacer height="60px" />
      <KnowledgeSection
        ref={paragraphs[1]}
        items={knowledgeItems}
      />

      <Spacer height="120px" />
      <ColorContainer
        color={
          designSystem.colors.brand
            .secondary
        }
      >
        <div
          style={{
            flex: 1,
            position: "relative",
            left: "-20px",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              width:
                "calc(100vw + 20px)",
            }}
          >
            <svg
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fill: "#ffffff",
                width: "282%",
                height: "137px",
                transform: "scaleX(-1)",
              }}
            >
              <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
            </svg>
          </div>
          <ResumeContainer
            ref={paragraphs[2]}
            items={resumeItems}
            title="Und das meine praktischen Erfahrungen"
          />

          <div
            style={{
              backgroundColor: "#fff",
              overflow: "hidden",
              width:
                "calc(100vw + 20px)",
            }}
          >
            <svg
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fill:
                  designSystem.colors
                    .brand.secondary,
                width: "282%",
                height: "137px",
                transform: "scaleX(-1)",
              }}
            >
              <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
            </svg>
          </div>
        </div>
      </ColorContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      socialItems: SocialItemsService.getAll(),
      indexHeader: HeaderService.getIndex(),
      resumeItems: ResumeService.getAllResumeItems(),
      knowledgeItems: KnowledgeService.getAll(),
    },
  };
};

export default Index;
