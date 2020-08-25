import React from "react";
interface Props {
  icon: JSX.Element;
  href: string;
}
export default class ProjectItem extends React.Component<
  Props
> {
  render() {
    return (
      <a
        href={this.props.href}
        target="_blank"
        rel="noreferrer"
      >
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
            margin: "30px",
          }}
        >
          <div>{this.props.icon}</div>
          <p
            style={{
              display: "inline-block",
              margin: "0px",
              marginTop: "1px",
              maxWidth: "300px",
              textAlign: "center",
            }}
          >
            {this.props.children}
          </p>
        </div>
      </a>
    );
  }
}
