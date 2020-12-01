import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import CategoryCard from "../components/CategoryCard";
import CategoryCardWrapper from "../components/CategoryCardWrapper";
import CategoryHeader from "../components/CategoryHeader";
import CategoryWrapper from "../components/CategoryWrapper";
import FlaskDesign from "../components/designs/flask.design";
import PrototypeDesign from "../components/designs/prototype.design";
import SettingsPageDesign from "../components/designs/settingsPage.design";
import Spacer from "../components/elements/Spacer";
import Typography from "../components/elements/Typography";
import HowCanIHelpYouHeader from "../components/HowCanIHelpYouHeader";
import AndroidIcon from "../components/icons/android.icon";
import DatabaseIcon from "../components/icons/database.icon";
import DesktopIcon from "../components/icons/desktop.icon";
import DisplayAndWebpageIcon from "../components/icons/displayAndWebpage.icon";
import JavaIcon from "../components/icons/java.icon";
import NodeIcon from "../components/icons/nodejs.icon";
import ReactIcon from "../components/icons/react.icon";
import SmartphoneIcon from "../components/icons/smartphone.icon";
import TypescriptIcon from "../components/icons/typescript.icon";
import SkillCategoriesItem from "../components/SkillCategoriesItem";
import useTheme from "../hooks/useTheme.hook";

interface Props {}

/**
 * An Contact React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Contact: React.FC<Props> = () => {
  const paragraphs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  useEffect(() => {
    let currentParagraph = 0;
    let lastScrollTop = 0;
    let hasScrolled = false;
    //FIXME: Fix Method
    const onScroll = (ev: Event) => {
      ev.preventDefault();
      if (hasScrolled) {
        hasScrolled = false;
        return;
      }
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && currentParagraph < 4) {
        currentParagraph++;
      } else if (currentParagraph > 0) {
        currentParagraph--;
      } else {
        return;
      }
      paragraphs[currentParagraph].current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      lastScrollTop = st <= 0 ? 0 : st;
      hasScrolled = true;
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const {
    palette: {
      color: { primary, secondary, secondaryText },
    },
  } = useTheme();
  return (
    <main
      style={{
        flex: 1,
        minHeight: "100%",
        display: "grid",
        backgroundColor: primary,
        color: secondaryText,
      }}
    >
      <Head>
        <title>Jannik Will | Kenntnisse</title>
      </Head>
      <HowCanIHelpYouHeader ref={paragraphs[0]}>
        <Typography variant="h3">Wie kann ich dir helfen?</Typography>
        <Typography>
          Vielleicht sagt dir ja eines meiner Fachgebiete zu, dann{" "}
          <Typography underline inline>
            <Link href="/contact">
              <a>kontaktiere</a>
            </Link>
          </Typography>{" "}
          mich gerne
        </Typography>
        <Spacer height="20px" />
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <SkillCategoriesItem icon={<DatabaseIcon height="50%" />} />
          <Spacer width="10px" />
          <SkillCategoriesItem
            icon={<DisplayAndWebpageIcon height="60%" />}
            color="var(--yellow)"
          />
          <Spacer width="10px" />
          <SkillCategoriesItem
            icon={<SmartphoneIcon height="50%" />}
            color="var(--red)"
          />
          <Spacer width="10px" />
          <SkillCategoriesItem
            icon={<DesktopIcon height="50%" />}
            color="var(--green)"
          />
        </div>
      </HowCanIHelpYouHeader>
      <CategoryWrapper ref={paragraphs[1]}>
        <CategoryHeader
          title="Prinzipien"
          description="Die Designprinzipien an denen sich mein Code orientiert"
        />
        <CategoryCardWrapper>
          <CategoryCard
            icon={<FlaskDesign height="100%" />}
            title="Test Driven Development"
            description="Die Entwicklung von Software auf Basis von getrennten Zuständigkeiten"
          />
          <CategoryCard
            icon={<SettingsPageDesign height="100%" />}
            title="Kommentierter Code"
            description="Die Entwicklung von Software auf Basis von verständlichen Kommentaren"
          />
          <CategoryCard
            icon={<PrototypeDesign height="100%" />}
            title="Prototyping"
            description="Die Entwicklung von Software auf Basis von Modellen"
          />
        </CategoryCardWrapper>
      </CategoryWrapper>
      <CategoryWrapper ref={paragraphs[2]}>
        <CategoryHeader
          title="Serversysteme"
          description="Meine Kenntnisse im Bereich der Serverentwicklung"
        />
        <CategoryCardWrapper>
          <CategoryCard
            icon={<NodeIcon width="100%" />}
            title="Node"
            description="Die Entwicklung von Software auf Basis von getrennten Zuständigkeiten"
          />
          <CategoryCard
            icon={<JavaIcon width="100%" />}
            title="Java"
            description="Die Entwicklung von Software auf Basis von verständlichen Kommentaren"
          />
        </CategoryCardWrapper>
      </CategoryWrapper>
      <CategoryWrapper ref={paragraphs[3]}>
        <CategoryHeader
          title="Webentwicklungskenntnisse"
          description="Meine Kenntnisse im Bereich der der Webentwicklung"
        />
        <CategoryCardWrapper>
          <CategoryCard
            icon={<TypescriptIcon width="84px" height="84px" />}
            title="Typescript"
            description="Die Entwicklung von Software auf Basis von getrennten Zuständigkeiten"
          />
          <CategoryCard
            icon={<ReactIcon width="84px" height="84px" />}
            title="React"
            description="Die Entwicklung von Software auf Basis von verständlichen Kommentaren"
          />
        </CategoryCardWrapper>
      </CategoryWrapper>
      <CategoryWrapper ref={paragraphs[4]}>
        <CategoryHeader
          title="Kenntnisse der mobilen Anwendungsenwicklung"
          description="Meine Kenntnisse im Bereich der der Mobile App Entwicklung"
        />
        <CategoryCardWrapper>
          <CategoryCard
            icon={<AndroidIcon width="84px" height="84px" />}
            title="Android JDK"
            description="Die Entwicklung von Software auf Basis von getrennten Zuständigkeiten"
          />
          <CategoryCard
            icon={<ReactIcon width="84px" height="84px" />}
            title="React Native"
            description="Die Entwicklung von Software auf Basis von verständlichen Kommentaren"
          />
        </CategoryCardWrapper>
      </CategoryWrapper>
      <CategoryWrapper ref={paragraphs[5]} latest>
        <CategoryHeader
          title="Desktopanwendungsentwicklung"
          description="Meine Kenntnisse im Bereich der Desktop Entwicklung für PC und Mac"
        />
        <CategoryCardWrapper>
          <CategoryCard
            icon={<FlaskDesign height="100%" />}
            title="Electron"
            description="Die Entwicklung von Software auf Basis von getrennten Zuständigkeiten"
          />
        </CategoryCardWrapper>
      </CategoryWrapper>
    </main>
  );
};

export default Contact;
