import React from "react";
interface Props {
  fontSize: "large" | "normal" | "small";
}
export const JiraIcon: React.FC<Props> = (
  props: Props
) => {
  return (
    <svg
      style={{
        fontSize:
          props.fontSize === "small"
            ? "0.5rem"
            : props.fontSize === "normal"
            ? "1rem"
            : "3.5rem",
        ...{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        },
      }}
      width="1em"
      height="1em"
      viewBox="0 0 74 76"
      version="1.1"
    >
      <g id="Layer_2">
        <g id="Blue">
          <path
            d="M72.4,35.76L36.64,0L0.88,35.76C-0.282,36.923 -0.282,38.837 0.88,40L36.64,75.76L72.4,40C73.562,38.837 73.562,36.923 72.4,35.76ZM36.64,49.08L25.44,37.88L36.64,26.68L47.84,37.88L36.64,49.08Z"
            style={{
              fill: "rgb(38,132,255)",
              fillRule: "nonzero",
            }}
          />
          <path
            d="M36.64,26.68C29.355,19.395 29.319,7.419 36.56,0.09L12.05,24.59L25.39,37.93L36.64,26.68Z"
            style={{
              fill: "url(#_Linear1)",
              fillRule: "nonzero",
            }}
          />
          <path
            d="M47.87,37.85L36.64,49.08C40.178,52.616 42.168,57.418 42.168,62.42C42.168,67.422 40.178,72.224 36.64,75.76L61.21,51.19L47.87,37.85Z"
            style={{
              fill: "url(#_Linear2)",
              fillRule: "nonzero",
            }}
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="_Linear1"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-15.64,15.64,-15.64,-15.64,34.64,15.35)"
        >
          <stop
            offset="0"
            style={{
              stopColor: "rgb(0,82,204)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.18"
            style={{
              stopColor: "rgb(0,82,204)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="1"
            style={{
              stopColor: "rgb(38,132,255)",
              stopOpacity: 1,
            }}
          />
        </linearGradient>
        <linearGradient
          id="_Linear2"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(383.538,-591.775,591.775,383.538,989.465,2323.06)"
        >
          <stop
            offset="0"
            style={{
              stopColor: "rgb(0,82,204)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="0.18"
            style={{
              stopColor: "rgb(0,82,204)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="1"
            style={{
              stopColor: "rgb(38,132,255)",
              stopOpacity: 1,
            }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
