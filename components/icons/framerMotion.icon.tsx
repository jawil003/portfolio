interface Props {
  fontSize: "large" | "normal" | "small";
}
export const FramerMotionIcon: React.FC<Props> = ({
  fontSize,
}) => {
  return (
    <svg
      width="1em"
      height="1em"
      style={{
        fontSize:
          fontSize === "small"
            ? "0.5rem"
            : fontSize === "normal"
            ? "1rem"
            : "3.5rem",
      }}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="black"
        d="M0 14V1l6.5 6.5L13 1v13l-3.25-3.25L6.5 14l-3.25-3.25z"
      ></path>
    </svg>
  );
};
