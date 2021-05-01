import { css } from "@emotion/react";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

export interface Props {
  value: {
    label: string;
    value: string;
  }[];
  title: string;
  placeholder: string;
  onChange?: (
    e: React.MouseEvent<
      HTMLLIElement,
      MouseEvent
    >,
    value: {
      label: string;
      value: string;
    },
  ) => void;
  required?: boolean;
  error?: boolean;
}

/**
 * An Select React Component in the Anywhere School Design System Specification.
 * @author Jannik Will
 * @version 0.1
 */
export const Select: React.FC<Props> = ({
  value,
  title,
  placeholder,
  onChange,
  required,
  error,
}) => {
  const [
    selected,
    setSelected,
  ] = useState(value?.[0]);
  const [open, setOpen] = useState(
    false,
  );
  return (
    <div
      css={css`
        & {
          position: relative;
        }
      `}
    >
      <div
        css={css`
          & {
            min-width: 16.666666666666668em;
            background-color: var(
              --white
            );
            border: 2px solid
              ${error
                ? "#B74A66"
                : "#3d899b"};
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            padding: 8px 10px;
          }
        `}
      >
        <span
          css={css`
            & {
              font-weight: 400;
              font-size: 0.6666666666666666em;

              font-style: normal;
              color: ${error
                ? "#B74A66"
                : "#3d899b"};
            }
          `}
        >
          {title}
          {required ? "*" : undefined}
        </span>
        <div
          css={css`
            & {
              display: flex;
            }
          `}
        >
          <input
            value={selected.label}
            css={css`
              & {
                font-size: 1em;
                border: none;
                background-color: var(
                  --white
                );
                outline: none;
                color: var(--black);
                font-style: normal;
                font-weight: 400;
                flex: 1;

                height: 2.6666666666666665em;
              }
              &::placeholder,
              &:-ms-input-placeholder,
              &::-ms-input-placeholder {
                color: #3d899b;
                opacity: 0.4;
              }
            `}
            placeholder={placeholder}
          />
          <div
            css={css`
              & {
                min-width: 30px;
                max-width: 30px;
                height: 100%;
              }
            `}
          >
            <MdArrowDropDown
              css={css`
                & {
                  transform: ${open
                    ? ""
                    : "rotate(180deg)"};
                }
              `}
              onClick={() =>
                setOpen((prev) => !prev)
              }
              color="var(--greenblue)"
              size="30px"
            />
          </div>
        </div>
      </div>
      {open ? (
        <ul
          css={css`
            & {
              position: absolute;
              border: 2px solid #3d899b;
              border-top: none;
              border-radius: 0px 0px
                12px 12px;
              width: 100%;
              margin: 0px;
              padding: 0px;
              box-sizing: border-box;
              list-style-type: none;
              overflow: hidden;
              margin-top: -0.5em;
              background-color: var(
                --white
              );
            }
          `}
        >
          {value.map(
            (
              {
                label,
                value: localValue,
              },
              index,
            ) => (
              <li
                aria-hidden="true"
                css={css`
                  & {
                    padding: 15px 15px;
                    box-sizing: border-box;
                    color: var(--black);
                  }

                  &:hover {
                    background-color: var(
                      --greenblue
                    );
                    color: var(--white);
                  }
                `}
                onClick={(e) => {
                  onChange?.(e, {
                    label,
                    value: localValue,
                  });
                  setSelected(
                    value[index],
                  );
                  setOpen(false);
                }}
              >
                {label}
              </li>
            ),
          )}
        </ul>
      ) : undefined}
    </div>
  );
};

Select.defaultProps = {
  required: false,
  error: false,
};
