interface Props {
  fontSize: "large" | "normal" | "small";
}
export const TensorflowIcon: React.FC<Props> = ({
  fontSize,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fontSize:
          fontSize === "small"
            ? "0.5rem"
            : fontSize === "normal"
            ? "1rem"
            : "3.5rem",
        ...{ msTransform: "rotate(360deg)" },
      }}
      width="1em"
      height="1em"
      transform="rotate(360)"
      viewBox="0 0 256 274"
    >
      <path
        fill="#E55B2D"
        d="M145.726 42.065v42.07l72.861 42.07v-42.07l-72.86-42.07zM0 84.135v42.07l36.43 21.03V105.17L0 84.135zm109.291 21.035l-36.43 21.034v126.2l36.43 21.035v-84.135l36.435 21.035v-42.07l-36.435-21.034V105.17z"
      ></path>
      <path
        fill="#ED8E24"
        d="M145.726 42.065L36.43 105.17v42.065l72.861-42.065v42.065l36.435-21.03v-84.14zM255.022 63.1l-36.435 21.035v42.07l36.435-21.035V63.1zm-72.865 84.135l-36.43 21.035v42.07l36.43-21.036v-42.07zm-36.43 63.104l-36.436-21.035v84.135l36.435-21.035V210.34z"
      ></path>
      <path
        fill="#F8BF3C"
        d="M145.726 0L0 84.135l36.43 21.035 109.296-63.105 72.861 42.07L255.022 63.1 145.726 0zm0 126.204l-36.435 21.03 36.435 21.036 36.43-21.035-36.43-21.03z"
      ></path>
    </svg>
  );
};
