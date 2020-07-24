import React from "react";
import PlaceIcon from "@material-ui/icons/Place";
interface Props {
  icon: JSX.Element;
  href: string;
  title: string;
  place: string;
  startdate: string;
  enddate: string;
}
export default class LebenslaufItem extends React.Component<Props> {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            rowGap: "10px",
            alignItems: "center",
            alignContent: "flex-start",
            justifyItems: "center",
            width: "350px",
            height: "100%",
            gridTemplateRows: "auto auto 3.5em 1fr",
            padding: "30px",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "3 2 2px rgba(0,0,0,1",
          }}
        >
          <div>{this.props.icon}</div>

          <p
            style={{
              height: "3.5em",
              margin: "0px",
              display: "grid",
              alignContent: "center",
            }}
          >
            <p
              style={{
                margin: "0px",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              {this.props.title}
            </p>
          </p>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              columnGap: "5px",
              fontSize: "0.95em",
            }}
          >
            <PlaceIcon />
            <span>{this.props.place}</span>
          </div>

          <div
            style={{
              display: "grid",
              alignContent: "center",
              listStyle: "none",
              alignSelf: "stretch",
            }}
          >
            <ul
              style={{
                padding: "0px",
                textAlign: "center",
                display: "block",
                listStyleType: "none",
                fontSize: "0.9em",
              }}
            >
              {this.props.children}
            </ul>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            padding: "10px",
            fontSize: "0.7em",
            fontWeight: "bold",
          }}
        >
          {this.props.startdate}
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            padding: "10px",
            fontSize: "0.7em",
            fontWeight: "bold",
          }}
        >
          {this.props.enddate}
        </div>
      </div>
    );
  }
}
