interface Props {
  color?: string;
  size?: string;
}
const TwoPeopleIcon: React.FC<Props> = ({
  size,
  color,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 561 561"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M382.5 255c43.35 0 76.5-33.15 76.5-76.5S425.85 102 382.5 102 306 135.15 306 178.5s33.15 76.5 76.5 76.5zm-204 0c43.35 0 76.5-33.15 76.5-76.5S221.85 102 178.5 102 102 135.15 102 178.5s33.15 76.5 76.5 76.5zm0 51C119.85 306 0 336.6 0 395.25V459h357v-63.75C357 336.6 237.15 306 178.5 306zm204 0c-7.65 0-15.3 0-25.5 2.55 30.6 20.4 51 51 51 86.7V459h153v-63.75C561 336.6 441.15 306 382.5 306z"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        data-original="#000000"
      />
    </svg>
  );
};

TwoPeopleIcon.defaultProps = {
  size: "100%",
  color: "#fff",
};

export default TwoPeopleIcon;
