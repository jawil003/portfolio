import { css } from "@emotion/react";

interface Props {
  width?: string;
  height?: string;
}

const FigmaIcon: React.FC<Props> = ({
  width,
  height,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 200 300"
      css={css`
        & {
        }
      `}
    >
      <path
        d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
        className="st0"
      ></path>
      <path
        d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
        className="st1"
      ></path>
      <path
        d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
        className="st2"
      ></path>
      <path
        d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
        className="st3"
      ></path>
      <path
        d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
        className="st4"
      ></path>
    </svg>
  );
};

export default FigmaIcon;
