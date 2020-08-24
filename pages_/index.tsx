import React, { Component } from "react";
import { Layout } from "../components/layout/layout";
import Lebenslauf from "../components/lebenslauf";
import Divider from "@material-ui/core/Divider";
import AdvancedSkills from "../components/advancedSkills";
import BasicSkills from "../components/basicSkills";
import Contact from "../components/contact";
import Project from "../components/projects";

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
          <Contact />
          <Divider />
          <Project />
        </div>
      </Layout>
    );
  }
  s;
}
