import React from "react";

export default class SourcesContainer extends React.Component {
  render(): JSX.Element {
    return (
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
