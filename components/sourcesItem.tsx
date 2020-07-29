import React from "react";
interface Props {
  href: string;
  title: string;
}
let count: number = -1;
export default class SourcesItem extends React.Component<
  Props
> {
  private static colors = [
    "#E74C3C",
    "#3498DB",
    "#4caf50",
    "#8E44AD",
    "#F39C12",
  ];
  constructor(props: Props) {
    super(props);
  }
  componentWillMount() {
    if (count === SourcesItem.colors.length - 1) {
      count = -1;
    }
    count++;
  }
  componentWillUnmount() {
    count = -1;
  }
  render() {
    return (
      <a
        href={this.props.href}
        style={{
          textAlign: "center",
          display: "block",
          padding: "30px",
          width: "150px",
          margin: "0px 20px",
          backgroundColor:
            SourcesItem.colors[
              count > SourcesItem.length
                ? Math.round(
                    count / SourcesItem.length
                  )
                : count
            ],
        }}
      >
        {this.props.title}
      </a>
    );
  }
}
