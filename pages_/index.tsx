import React, { Component } from "react";
import Layout from "../components/Layout";
import Lebenslauf from "../components/Lebenslauf";
import Divider from "@material-ui/core/Divider";
import AdvancedSkills from "../components/AdvancedSkills";
import BasicSkills from "../components/BasicSkills";
import Project from "../components/Projects";
import LookedIntoSkills from "components/LookedIntoSkills";

export default class Index extends Component {
  render() {
    return (
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
    );
  }
}
