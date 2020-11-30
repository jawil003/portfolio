import Head from "next/head";
import Link from "next/link";
import React from "react";
import CategoryCard from "../components/CategoryCard";
import CategoryCardWrapper from "../components/CategoryCardWrapper";
import CategoryHeader from "../components/CategoryHeader";
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
      <Spacer height="100px" />
      <CategoryHeader
        title="Prinzipien"
        description="Die Designprinzipien an denen sich mein Code orientiert"
      />
      <CategoryCardWrapper>
        <CategoryCard
          icon={<FlaskDesign width="100%" />}
          title="Test Driven Development"
          description="Test"
        />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </CategoryCardWrapper>
    </main>
  );
};

export default Contact;
