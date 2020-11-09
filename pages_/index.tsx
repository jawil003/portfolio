import React, { Component } from "react";
import Layout from "../components/Layout";
import Lebenslauf from "../components/Lebenslauf";
import Divider from "@material-ui/core/Divider";
import AdvancedSkills from "../components/AdvancedSkills";
import BasicSkills from "../components/BasicSkills";
import Project from "../components/Projects";
import LookedIntoSkills from "components/LookedIntoSkills";
import Head from "next/head";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Jannik Will | Portfolio</title>
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
