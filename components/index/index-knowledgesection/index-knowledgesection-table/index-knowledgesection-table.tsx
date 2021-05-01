import { css } from "@emotion/react";
import React from "react";
import designSystem from "../../../../styles/designSystem";
import { Typography } from "../../../shared/typography";

export interface Props {
  title: string;
  description: string;
  items: string[];
  color?: string;
}

/**
 * An KnowledgeTable React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const IndexKnowledgeTable: React.FC<Props> = ({
  title,
  description,
  items,
  color,
}) => {
  return (
    <div
      css={css`
        & {
          padding: 40px;
          min-height: 430px;
          width: 300px;
          background-color: ${color};
          border-radius: 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 40px;
        }
      `}
    >
      <div>
        <Typography
          color={
            designSystem.colors.brand
              .primary
          }
          variant="h5"
        >
          {title}
        </Typography>
        <Typography
          css={css`
            & {
              margin: 0px;
            }
          `}
          variant="b2"
          color={
            designSystem.colors.brand
              .primary
          }
        >
          {description}
        </Typography>
      </div>
      <ul
        css={css`
          & {
            padding-left: 20px;
          }
        `}
      >
        {items.map((i) => (
          <li
            css={css`
              & {
                color: ${designSystem
                  .colors.brand
                  .primary};
              }
            `}
            key={i}
          >
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
};

IndexKnowledgeTable.defaultProps = {
  color:
    designSystem.colors.brand.secondary,
};
