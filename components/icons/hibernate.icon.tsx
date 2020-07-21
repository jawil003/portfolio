interface Props {
  fontSize: "large" | "normal" | "small";
}
const HibernateIcon: React.FC<Props> = (props: Props) => {
  return (
    <svg
      style={{
        fontSize:
          props.fontSize === "small"
            ? "0.5rem"
            : props.fontSize === "normal"
            ? "1rem"
            : "3.5rem",
      }}
      width="1em"
      height="1em"
      viewBox="0 0 256 267"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M153.671 178.933l-.932 2.757 49.137 83.342 2.781 1.968L256 178.22l-51.342-89.137-50.986 89.85zM50.273.304L0 89.084l52.234 89.849 49.738-89.85-.134-3.63L52.565 2.11 50.273.304z"
        fill="#59666C"
      />
      <path
        d="M50.273.304l51.7 88.78h102.684L152.601.304H50.273zM52.234 178.933L102.864 267h101.793l-50.986-88.067H52.234z"
        fill="#BCAE79"
      />
    </svg>
  );
};
export default HibernateIcon;