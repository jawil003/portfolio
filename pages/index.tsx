import React, { Component } from "react";
import { Layout } from "components/layout";
import Lebenslauf from "components/lebenslauf";
import Divider from "@material-ui/core/Divider";
import Skills from "components/skills";
import Contact from "components/contact";

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <div style={{ display: "grid" }}>
          <Lebenslauf />
          <Divider />
          <Skills />
          <Divider />
          <Contact />
        </div>
      </Layout>
    );
  }
}