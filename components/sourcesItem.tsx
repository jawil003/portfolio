import React from "react";
interface Props {
  href: string;
  title: string;
}
export default class SourcesItem extends React.Component<Props> {
  render() {
    return (
      <a
        href={this.props.href}
        style={{
          display: "block",
          padding: "30px",
          backgroundColor: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
        }}
      >
        {this.props.title}
      </a>
    );
  }
}
