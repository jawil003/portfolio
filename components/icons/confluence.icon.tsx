interface Props {
  fontSize: "large" | "normal" | "small";
}
export const ConfluenceIcon: React.FC<Props> = (
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
      viewBox="0 0 65 64"
      version="1.1"
    >
      <g id="Layer_2">
        <g id="Blue">
          <path
            d="M2.23,49.53C1.58,50.59 0.85,51.82 0.23,52.8C-0.321,53.732 -0.021,54.951 0.9,55.52L13.9,63.52C14.216,63.715 14.58,63.818 14.951,63.818C15.655,63.818 16.31,63.446 16.67,62.84C17.19,61.97 17.86,60.84 18.59,59.63C23.74,51.13 28.92,52.17 38.26,56.63L51.15,62.76C51.419,62.888 51.712,62.954 52.01,62.954C52.801,62.954 53.521,62.484 53.84,61.76L60.03,47.76C60.465,46.767 60.016,45.591 59.03,45.14C56.31,43.86 50.9,41.31 46.03,38.96C28.51,30.45 13.62,31 2.23,49.53Z"
            style={{
              fill: "url(#_Linear1)",
              fillRule: "nonzero",
            }}
          />
          <path
            d="M60.52,17.76C61.17,16.7 61.9,15.47 62.52,14.49C63.071,13.558 62.771,12.339 61.85,11.77L48.85,3.77C48.52,3.548 48.131,3.429 47.733,3.429C47.019,3.429 46.357,3.811 46,4.43C45.48,5.3 44.81,6.43 44.08,7.64C38.93,16.14 33.75,15.1 24.41,10.64L11.56,4.54C11.291,4.412 10.998,4.346 10.7,4.346C9.909,4.346 9.189,4.816 8.87,5.54L2.68,19.54C2.245,20.533 2.694,21.709 3.68,22.16C6.4,23.44 11.81,25.99 16.68,28.34C34.24,36.84 49.13,36.27 60.52,17.76Z"
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
          gradientTransform="matrix(-39.33,-22.6,22.6,-39.33,59.68,67.65)"
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
          gradientTransform="matrix(2371.5,682.635,-682.635,2371.5,187.58,-7.74211)"
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
