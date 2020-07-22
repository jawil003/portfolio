import { Component } from "react";
import { Layout } from "components/layout";
import IndexItem from "components/layout/indexItem";

export default class Sources extends Component {
  render() {
    return (
      <Layout>
        <div style={{ display: "grid" }}>
          <IndexItem title="Grafiken">
            <ul>
              <li style={{ marginBottom: "5px" }}>
                <div>
                  <a
                    href="https://www.flaticon.com/authors/pixel-perfect"
                    title="Pixel perfect"
                  >
                    Pixel perfect
                  </a>{" "}
                </div>
              </li>
              <li>
                <div>
                  <a
                    href="https://www.flaticon.com/authors/freepik"
                    title="Freepik"
                  >
                    Freepik
                  </a>{" "}
                </div>
              </li>
            </ul>
          </IndexItem>
        </div>
      </Layout>
    );
  }
}
