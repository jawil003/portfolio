interface Props {
  fontSize: "large" | "normal" | "small";
}
export const BitbucketIcon: React.FC<Props> = (
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
      viewBox="0 0 63 63"
      version="1.1"
    >
      <g id="Layer_2">
        <g id="Blue">
          <path
            d="M24.7,43.51L37.75,43.51L40.9,25.12L21.23,25.12L24.7,43.51Z"
            style={{
              fill: "none",
              fillRule: "nonzero",
            }}
          />
          <path
            d="M2,6.26C1.991,6.26 1.983,6.26 1.974,6.26C0.877,6.26 -0.026,7.163 -0.026,8.26C-0.026,8.367 -0.017,8.474 0,8.58L8.49,60.12C8.707,61.417 9.835,62.379 11.15,62.39L51.88,62.39C52.866,62.403 53.722,61.684 53.88,60.71L62.37,8.59C62.387,8.484 62.396,8.377 62.396,8.27C62.396,7.173 61.493,6.27 60.396,6.27C60.387,6.27 60.379,6.27 60.37,6.27L2,6.26ZM37.75,43.51L24.75,43.51L21.23,25.12L40.9,25.12L37.75,43.51Z"
            style={{
              fill: "rgb(38,132,255)",
              fillRule: "nonzero",
            }}
          />
          <path
            d="M59.67,25.12L40.9,25.12L37.75,43.51L24.75,43.51L9.4,61.73C9.886,62.151 10.507,62.385 11.15,62.39L51.89,62.39C52.876,62.403 53.732,61.684 53.89,60.71L59.67,25.12Z"
            style={{
              fill: "url(#_Linear1)",
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
          gradientTransform="matrix(-31.02,24.21,-24.21,-31.02,64.01,30.27)"
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
