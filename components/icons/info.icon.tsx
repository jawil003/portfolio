interface Props {
  color?: string;
  size?: string;
}
const InfoIcon: React.FC<Props> = ({
  size,
  color,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 426.667 426.667"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M213.333 0C95.467 0 0 95.467 0 213.333s95.467 213.333 213.333 213.333S426.667 331.2 426.667 213.333 331.2 0 213.333 0zm21.334 320H192V192h42.667v128zm0-170.667H192v-42.667h42.667v42.667z"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        data-original="#000000"
      />
    </svg>
  );
};

InfoIcon.defaultProps = {
  size: "100%",
  color: "#fff",
};

export default InfoIcon;
