import React from "react";
import PlaceIcon from "@material-ui/icons/Place";
interface Props {
  icon: JSX.Element;
  href: string;
  title: string;
  place: string;
  startdate?: string;
  enddate?: string;
}
const LebenslaufItem: React.FC<Props> = ({
  href,
  icon,
  place,
  title,
  enddate,
  startdate,
  children,
}) => {
  return (
    <div
      style={{
        position: "relative",
        margin: "30px",
      }}
    >
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
          gridTemplateRows:
            "auto auto 3.5em 1fr auto ",
          padding: "30px",
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "3 2 2px rgba(0,0,0,1",
        }}
      >
        <div>{icon}</div>

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
            {title}
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
          <a
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
            href={href}
          >
            <PlaceIcon fontSize="small" />
            <span style={{ textAlign: "center" }}>
              {place}
            </span>
          </a>
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
            {children}
          </ul>
        </div>
        <div
          style={{
            alignSelf: "start",
            fontSize: "0.68em",
          }}
        >
          {enddate
            ? `${startdate} - ${enddate}`
            : startdate}
        </div>
      </div>
    </div>
  );
};

export default LebenslaufItem;
