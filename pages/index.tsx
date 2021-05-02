import { css } from "@emotion/react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React, {
  RefObject,
  useState,
} from "react";
import { IndexContactForm } from "../components/index/index-contact-form/index-contact.form";

import { IndexIconLink } from "../components/index/index-iconlink/index-iconlink";
import { IndexKnowledgeSection } from "../components/index/index-knowledgesection/index-knowledgesection";
import { IndexResumeContainer } from "../components/index/index-resumecontainer";
import { IndexResumeColorContainer } from "../components/index/index-resumecontainer/index-resumecontainer-colorcontainer/index-resumecontainer-colorcontainer";
import { FlexContainer } from "../components/shared/flexcontainer/flexcontainer";
import { HeaderWithIcon } from "../components/shared/headerwithicon/headerwithicon";
import { NavigationBar } from "../components/shared/navigationbar/navigationbar";
import { Spacer } from "../components/shared/spacer/spacer";
import { TitleWithSubtitle } from "../components/shared/titlewithsubtitle/titlewithsubtitle";
import { Typography } from "../components/shared/typography";
import PersonWithLaptop from "../designs/personWithLaptop.design";
import { useSocialLogos } from "../hooks/useIcons.hook";
import { SocialItem } from "../interfaces/socialItem.type";
import KnowledgeItem from "../model/KnowledgeItem.model";
import ResumeItemType from "../model/ResumeItem.model";
import HeaderService, {
  Header,
} from "../services/header.service";
import KnowledgeService from "../services/knowledge.service";
import ResumeService from "../services/resume.service";
import SocialItemsService from "../services/SocialItems.service";
import designSystem from "../styles/designSystem";

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
        arrow
        icon={
          <PersonWithLaptop
            css={css`
              & {
                min-width: 558px;
              }
            `}
            width="100%"
          />
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
                  // eslint-disable-next-line @typescript-eslint/no-shadow
                  icon: { title },
                }) => (
                  <IndexIconLink
                    key={name}
                    external
                    href={href}
                  >
                    {getIcon({
                      name: title,
                      height: "100%",
                    })}
                  </IndexIconLink>
                ),
              )}
            </FlexContainer>
          </TitleWithSubtitle>
        </FlexContainer>
      </HeaderWithIcon>
      <Spacer height="120px" />
      <Typography
        bold="semi-bold"
        variant="h4"
        align="center"
      >
        Das sind meine Kenntnisse
      </Typography>
      <Spacer height="60px" />
      <IndexKnowledgeSection
        ref={paragraphs[1]}
        items={knowledgeItems}
      />

      <Spacer height="120px" />
      <IndexResumeColorContainer
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
          <IndexResumeContainer
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
      </IndexResumeColorContainer>
      <FlexContainer
        justifyContent="center"
        alignItems="center"
        css={css`
          @media (max-width: ${designSystem
              .breakpoints.phoneOnly}) {
            && {
              padding: 50px 2em;
            }
          }
          & {
            min-height: 100vh;
            padding: 50px 0;
          }
          & > *:first-of-type {
            width: 100%;
            max-width: 400px;
          }
        `}
      >
        <IndexContactForm />
      </FlexContainer>
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
