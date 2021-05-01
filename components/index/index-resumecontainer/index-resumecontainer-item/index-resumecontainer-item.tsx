import React from "react";
import designSystem from "../../../../styles/designSystem";
import { Spacer } from "../../../shared/spacer/spacer";
import { Typography } from "../../../shared/typography";

export interface Props {
  title: string;
  description: string;
  latest?: boolean;
  start_year: number | null;
  end_year: number | null;
}

/**
 * An ResumeItem React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const IndexResumeContainerItem: React.FC<Props> = ({
  description,
  title,
  start_year,
  end_year,
  latest,
}) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        minHeight: "200px",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor:
              designSystem.colors
                .palette.white.dark,
            width: "3.5px",
            height: latest
              ? "calc(100% + 70px)"
              : "100%",
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
            color:
              designSystem.colors.brand
                .primary,
          }}
        >
          {start_year ? (
            [
              <Typography
                key="start_year"
                align="center"
                variant="h6"
                color={
                  designSystem.colors
                    .brand.primary
                }
              >
                {start_year}
              </Typography>,
              <Typography
                key="end_year"
                align="center"
                variant="h6"
                color={
                  designSystem.colors
                    .brand.primary
                }
              >
                {end_year || "heute"}
              </Typography>,
            ]
          ) : (
            <Typography
              key="end_year"
              align="center"
              variant="h6"
              color={
                designSystem.colors
                  .brand.primary
              }
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
            justifyContent:
              "flex-start",
            margin: "0px 20px",
          }}
        >
          <div
            style={{
              height: "25px",
              border: `5px solid ${designSystem.colors.brand.primary}`,
              borderRadius: "100%",
              backgroundColor:
                designSystem.colors
                  .brand.secondary,
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent:
              "flex-start",
            alignItems: "flex-start",
            color:
              designSystem.colors.brand
                .primary,
          }}
        >
          <Typography
            maxLength="100px"
            bold="semi-bold"
            color={
              designSystem.colors.brand
                .primary
            }
            variant="h6"
          >
            {title}
          </Typography>
          <Spacer height="0.4em" />
          <Typography
            maxLength="150px"
            variant="b2"
            color={
              designSystem.colors.brand
                .primary
            }
            italic
          >
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

IndexResumeContainerItem.defaultProps = {
  latest: false,
};
