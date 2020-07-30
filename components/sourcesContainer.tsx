import React from "react";

export default class SourcesContainer extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignContent: "center",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
