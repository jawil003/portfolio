import React from "react";
import Layout from "../components/Layout";
import IndexItem from "../components/IndexItem";
import SourcesContainer from "../components/SourcesContainer";
import SourcesItem from "../components/SourcesItem";
import Head from "next/head";
import { useTranslation } from "next-translate";
import generateMetaTags from "components/MetaTags";
const Sources: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        {generateMetaTags(
          t("sources:social.title"),
          t("sources:social.description"),
          "pictures/background-dortmund/jpg/background_dortmund-min.jpg"
        )}
      </Head>
      <Layout>
        <div style={{ display: "grid" }}>
          <IndexItem
            title={t("sources:graphicsources")}
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
            title={t("sources:textsources")}
          ></IndexItem>
        </div>
      </Layout>
    </>
  );
};

export default Sources;
