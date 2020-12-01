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
  let _preventScroll = false;
  let _currentParagraph = 0;
  let _lastScrollTop = 0;
  const _paragraphs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  useEffect(() => {
    //FIXME: Fix Method
    const onScroll = (ev: Event) => {
      if (_preventScroll) {
        ev.preventDefault();
        _preventScroll = false;
        return;
      }

      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > _lastScrollTop && _currentParagraph < 5) {
        _currentParagraph++;
      } else if (_currentParagraph > 0) {
        _currentParagraph--;
      }
      _preventScroll = true;
      _paragraphs[_currentParagraph].current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      _lastScrollTop = st <= 0 ? 0 : st;
    };
    //window.addEventListener("scroll", onScroll);
    return () => {
      //window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const {
    palette: {
      color: { primary, secondaryText },
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
      <HowCanIHelpYouHeader ref={_paragraphs[0]}>
        <Typography variant="h3" align="center">
          Wie kann ich dir helfen?
        </Typography>
        <Spacer height="0.4em" />
        <Typography align="center">
          Vielleicht sagt dir ja eines meiner Fachgebiete zu, dann{" "}
          <Typography underline inline>
            <Link href="/contact">
              <a>kontaktiere</a>
            </Link>
          </Typography>{" "}
          mich gerne
        </Typography>
        <Spacer height="35px" />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
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
      <CategoryWrapper ref={_paragraphs[1]}>
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
      <CategoryWrapper ref={_paragraphs[2]}>
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
      <CategoryWrapper ref={_paragraphs[3]}>
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
      <CategoryWrapper ref={_paragraphs[4]}>
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
      <CategoryWrapper ref={_paragraphs[5]} latest>
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
