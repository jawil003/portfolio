import React from "react";
interface Props {
  icon: JSX.Element;
}
export default class LebenslaufItem extends React.Component<Props> {
  render() {
    return (
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <div>{this.props.icon}</div>
        <p
          style={{
            display: "inline-block",
            margin: "0px",
            marginLeft: "20px",
            maxWidth: "300px",
            textAlign: "center",
          }}
        >
          {this.props.children}
        </p>
      </div>
    );
  }
}
