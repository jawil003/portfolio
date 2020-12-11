import React from "react";
import useTheme from "src/hooks/useTheme.hook";

interface Props {
  backgroundColor: "primary" | "secondary";
  date: string;
  description: string;
  icon: JSX.Element;
  direction?: "ltr" | "rtl";
  first?: boolean;
  latest?: boolean;
}

/**
 * An ResumeItem React Component.
 * @author Jannik Will
 * @version 0.1
 */
const ResumeItem: React.FC<Props> = ({
  backgroundColor,
  description,
  icon,
  date,
  first,
  latest,
}) => {
  const {
    palette: {
      color: { primary, secondary },
    },
  } = useTheme();
  return (
    <div
      style={{
        margin: "auto",
        paddingTop: first ? "70px" : undefined,
        paddingBottom: latest ? "70px" : undefined,
        borderTopLeftRadius: first ? "20px" : undefined,
        borderTopRightRadius: first ? "20px" : undefined,
        borderBottomLeftRadius: latest ? "20px" : undefined,
        borderBottomRightRadius: latest ? "20px" : undefined,
        width: "calc(100%)",
        display: "flex",

        height: "200px",
      }}
    >
      <div
        style={{
          flex: 0,
          padding: "20px",
          color: "primary" ? primary : secondary,
          fontSize: "1.2em",
          display: "flex",
          alignItems: first ? "flex-start" : latest ? "flex-end" : "center",
        }}
      >
        {date}
      </div>
      <div
        style={{
          borderLeft: `2.5px solid ${
            backgroundColor === "primary" ? secondary : primary
          }`,

          width: "2.5px",
          height: "100%",
        }}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            color: backgroundColor === "primary" ? secondary : primary,
            padding: "20px",
            opacity: 0.75,
            display: "flex",
            alignItems: first ? "flex-start" : latest ? "flex-end" : "center",
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

ResumeItem.defaultProps = { direction: "ltr", first: false, latest: false };

export default ResumeItem;
