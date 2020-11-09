import React from "react";
import Layout from "../components/Layout";
import Lebenslauf from "../components/Lebenslauf";
import Divider from "@material-ui/core/Divider";
import AdvancedSkills from "../components/AdvancedSkills";
import BasicSkills from "../components/BasicSkills";
import Project from "../components/Projects";
import LookedIntoSkills from "components/LookedIntoSkills";
import Head from "next/head";
import { useTranslation } from "next-translate";
import generateMetaTags from "../components/MetaTags";
const Index: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        {generateMetaTags(
          t("intro:social.title"),
          t("intro:social.description"),
          "pictures/background-dortmund/jpg/background_dortmund-min.jpg"
        )}
      </Head>
      <Layout>
        <div style={{ display: "grid" }}>
          <Lebenslauf />
          <Divider />
          <AdvancedSkills />
          <Divider />
          <BasicSkills />
          <Divider />
          <LookedIntoSkills />
          <Divider />
          <Project />
        </div>
      </Layout>
    </>
  );
};
export default Index;
