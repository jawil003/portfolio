import Head from "next/head";
import Link from "next/link";
import React from "react";
import CategoryCard from "../components/CategoryCard";
import CategoryCardWrapper from "../components/CategoryCardWrapper";
import CategoryHeader from "../components/CategoryHeader";
import CategoryWrapper from "../components/CategoryWrapper";
import FlaskDesign from "../components/designs/flask.design";
import Spacer from "../components/elements/Spacer";
import Typography from "../components/elements/Typography";
import Footer from "../components/Footer";
import HowCanIHelpYouHeader from "../components/HowCanIHelpYouHeader";
import DatabaseIcon from "../components/icons/database.icon";
import DesktopIcon from "../components/icons/desktop.icon";
import DisplayAndWebpageIcon from "../components/icons/displayAndWebpage.icon";
import SmartphoneIcon from "../components/icons/smartphone.icon";
import NavigationBar from "../components/NavigationBar";
import SkillCategories from "../components/SkillCategories";
import SkillCategoriesItem from "../components/SkillCategoriesItem";
import useTheme from "../hooks/useTheme.hook";

interface Props {}

/**
 * An Contact React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Contact: React.FC<Props> = () => {
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
      <HowCanIHelpYouHeader>
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
      <CategoryWrapper>
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
            icon={<FlaskDesign height="100%" />}
            title="Kommentierter Code"
            description="Die Entwicklung von Software auf Basis von verständlichen Kommentaren"
          />
          <CategoryCard
            icon={<FlaskDesign height="100%" />}
            title="Prototyping"
            description="Die Entwicklung von Software auf Basis von Modellen"
          />
        </CategoryCardWrapper>
      </CategoryWrapper>
      <CategoryWrapper>
        <CategoryHeader
          title="Serversysteme"
          description="Meine Kenntnisse im Bereich der Serverentwicklung"
        />
        <CategoryCardWrapper>
          <CategoryCard
            icon={<FlaskDesign height="100%" />}
            title="Node"
            description="Die Entwicklung von Software auf Basis von getrennten Zuständigkeiten"
          />
          <CategoryCard
            icon={<FlaskDesign height="100%" />}
            title="Java"
            description="Die Entwicklung von Software auf Basis von verständlichen Kommentaren"
          />
        </CategoryCardWrapper>
      </CategoryWrapper>
      <CategoryWrapper>
        <CategoryHeader
          title="Webentwicklungskenntnisse"
          description="Meine Kenntnisse im Bereich der der Webentwicklung"
        />
        <CategoryCardWrapper>
          <CategoryCard
            icon={<FlaskDesign height="100%" />}
            title="Typescript"
            description="Die Entwicklung von Software auf Basis von getrennten Zuständigkeiten"
          />
          <CategoryCard
            icon={<FlaskDesign height="100%" />}
            title="React"
            description="Die Entwicklung von Software auf Basis von verständlichen Kommentaren"
          />
        </CategoryCardWrapper>
      </CategoryWrapper>
      <CategoryWrapper>
        <CategoryHeader
          title="Kenntnisse der mobilen Anwendungsenwicklung"
          description="Meine Kenntnisse im Bereich der der Mobile App Entwicklung"
        />
        <CategoryCardWrapper>
          <CategoryCard
            icon={<FlaskDesign height="100%" />}
            title="Android JDK"
            description="Die Entwicklung von Software auf Basis von getrennten Zuständigkeiten"
          />
          <CategoryCard
            icon={<FlaskDesign height="100%" />}
            title="React Native"
            description="Die Entwicklung von Software auf Basis von verständlichen Kommentaren"
          />
        </CategoryCardWrapper>
      </CategoryWrapper>
      <CategoryWrapper latest>
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
