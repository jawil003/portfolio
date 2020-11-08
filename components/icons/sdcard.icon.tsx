interface Props {
  color?: string;
  size?: string;
}
const SdCardIcon: React.FC<Props> = ({
  size,
  color,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 510 510"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M408 0H204L51 153v306c0 28.05 22.95 51 51 51h306c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zM255 153h-51V51h51v102zm76.5 0h-51V51h51v102zm76.5 0h-51V51h51v102z"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        data-original="#000000"
      />
    </svg>
  );
};

SdCardIcon.defaultProps = {
  size: "100%",
  color: "#fff",
};

export default SdCardIcon;
