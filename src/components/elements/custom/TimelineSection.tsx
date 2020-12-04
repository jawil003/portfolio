import React from "react";

interface Props {
  year: "string";
  title: string;
  description: string;
  latest?: boolean;
}

/**
 * An TimelineSection React Component.
 * @author Jannik Will
 * @version 0.1
 */
const TimelineSection: React.FC<Props> = ({
  latest,
  year,
  title,
  description,
}) => {
  return (
    <div
      style={{
        height: latest ? "calc(100vh - 70px)" : "100vh",
        display: "grid",
        gridTemplateColumns: "8px 1fr 8px",
        gridTemplateRows: "85%",
        alignContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--darkbluelight)",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            borderTop: "5px solid var(--darkbluelight)",
            width: "100%",
            borderRadius: "100%",
            transform: "rotate(-25deg)",
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "var(--darkbluelight)",
        }}
      />
    </div>
  );
};

TimelineSection.defaultProps = { latest: false };

export default TimelineSection;
