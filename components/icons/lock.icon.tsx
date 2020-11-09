interface Props {
  color?: string;
  size?: string;
}
const LockIcon: React.FC<Props> = ({
  size,
  color,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 535.5 535.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M420.75 178.5h-25.5v-51c0-71.4-56.1-127.5-127.5-127.5s-127.5 56.1-127.5 127.5v51h-25.5c-28.05 0-51 22.95-51 51v255c0 28.05 22.95 51 51 51h306c28.05 0 51-22.95 51-51v-255c0-28.05-22.95-51-51-51zm-153 229.5c-28.05 0-51-22.95-51-51s22.95-51 51-51 51 22.95 51 51-22.95 51-51 51zm79.05-229.5H188.7v-51c0-43.35 35.7-79.05 79.05-79.05 43.35 0 79.05 35.7 79.05 79.05v51z"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        data-original="#000000"
      />
    </svg>
  );
};

LockIcon.defaultProps = {
  size: "100%",
  color: "#fff",
};

export default LockIcon;
