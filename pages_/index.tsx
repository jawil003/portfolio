import React, { Component } from "react";
import { Layout } from "../components/layout/layout";
import Lebenslauf from "../components/lebenslauf";
import Divider from "@material-ui/core/Divider";
import AdvancedSkills from "../components/advancedSkills";
import BasicSkills from "../components/basicSkills";
import Project from "../components/projects";
import LookedIntoSkills from "components/lookedIntoSkills";

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
