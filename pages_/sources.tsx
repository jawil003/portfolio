import { Component } from "react";
import Layout from "../components/Layout";
import IndexItem from "../components/IndexItem";
import {
  withTranslation,
  WithTranslation,
} from "next-translate";
import SourcesContainer from "../components/SourcesContainer";
import SourcesItem from "../components/SourcesItem";
class Sources extends Component<WithTranslation> {
  render() {
    return (
      <Layout>
        <div style={{ display: "grid" }}>
          <IndexItem
            title={this.props.i18n.t(
              "sources:graphicsources"
            )}
          >
            <SourcesContainer>
              <SourcesItem
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
                color="#8E44AD"
              />
              <SourcesItem
                color="#3498DB"
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              />
              <SourcesItem
                color="#4caf50"
                href="https://www.flaticon.com/authors/those-icons"
                title="Those Icons"
              />
            </SourcesContainer>
          </IndexItem>
          <IndexItem
            title={this.props.i18n.t(
              "sources:textsources"
            )}
          ></IndexItem>
        </div>
      </Layout>
    );
  }
}

export default withTranslation(Sources);
