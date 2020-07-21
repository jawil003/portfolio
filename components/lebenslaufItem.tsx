import React from "react";
import Link from "next/link";
interface Props {
  icon: JSX.Element;
  href: string;
}
export default class LebenslaufItem extends React.Component<Props> {
  render() {
    return (
      <Link href={this.props.href}>
        <a target="_blank">
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
        </a>
      </Link>
    );
  }
}
