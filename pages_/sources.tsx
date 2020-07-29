import { Component } from "react";
import { Layout } from "../components/layout/layout";
import IndexItem from "../components/layout/indexItem";
import { withTranslation, WithTranslation } from "next-translate";
import SourcesContainer from "../components/sourcesContainer";
import SourcesItem from "../components/sourcesItem";
class Sources extends Component<WithTranslation> {
  render() {
    return (
      <Layout>
        <div style={{ display: "grid" }}>
          <IndexItem title={this.props.i18n.t("sources:graphicsources")}>
            <SourcesContainer>
              <SourcesItem
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
              />
              <SourcesItem
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
              />
              <SourcesItem
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
              />
              <SourcesItem
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
              />
              <SourcesItem
                href="https://www.flaticon.com/authors/pixel-perfect"
                title="Pixel perfect"
              />
            </SourcesContainer>
          </IndexItem>
          <IndexItem
            title={this.props.i18n.t("sources:textsources")}
          ></IndexItem>
        </div>
      </Layout>
    );
  }
}

export default withTranslation(Sources);
