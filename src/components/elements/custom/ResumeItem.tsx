import React from "react";
import useTheme from "src/hooks/useTheme.hook";
import Spacer from "../generic/Spacer";
import Typography from "../generic/Typography";

interface Props {
  title: string;
  description: string;
  latest?: boolean;
  start_year?: number;
  end_year?: number;
}

/**
 * An ResumeItem React Component.
 * @author Jannik Will
 * @version 0.1
 */
const ResumeItem: React.FC<Props> = ({
  description,
  title,
  start_year,
  end_year,
  latest,
}) => {
  const {
    palette: {
      color: { secondary },
    },
  } = useTheme();
  return (
    <div style={{ position: "relative", display: "flex", minHeight: "200px" }}>
      <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
        <div
          style={{
            backgroundColor: "var(--darkwhite)",
            width: "3.5px",
            height: latest ? "calc(100% + 70px)" : "100%",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "grid",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            alignContent: "flex-start",
            color: "var(--darkwhite)",
          }}
        >
          {start_year ? (
            [
              <Typography
                key="start_year"
                align="center"
                variant="h6"
                color="var(--darkwhite)"
              >
                {start_year}
              </Typography>,
              <Typography
                key="end_year"
                align="center"
                variant="h6"
                color="var(--darkwhite)"
              >
                {end_year ? end_year : "heute"}
              </Typography>,
            ]
          ) : (
            <Typography
              key="end_year"
              align="center"
              variant="h6"
              color="var(--darkwhite)"
            >
              {end_year}
            </Typography>
          )}
        </div>
        <div
          style={{
            width: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            margin: "0px 20px",
          }}
        >
          <div
            style={{
              height: "25px",
              border: `5px solid ${"var(--darkwhite)"}`,
              borderRadius: "100%",
              backgroundColor: secondary,
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            color: "var(--darkwhite)",
          }}
        >
          <Typography
            maxLength="100px"
            bold="semi-bold"
            color={"var(--darkwhite)"}
            variant="h6"
          >
            {title}
          </Typography>
          <Spacer height="0.4em" />
          <Typography
            maxLength="150px"
            variant="b2"
            color={"var(--darkwhite)"}
            italic
          >
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

ResumeItem.defaultProps = { latest: false };

export default ResumeItem;