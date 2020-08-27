interface Props {
  fontSize: "large" | "normal" | "small";
}
export const ZustandIcon: React.FC<Props> = ({
  fontSize,
}) => {
  return (
    <img
      style={{
        fontSize:
          fontSize === "small"
            ? "0.5rem"
            : fontSize === "normal"
            ? "1rem"
            : "100rem",
      }}
      width="calc(56px * 0.83)"
      height="56px"
      src="/pictures/zustandjs.jpg"
    />
  );
};
