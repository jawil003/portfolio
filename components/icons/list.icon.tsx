interface Props {
  color?: string;
  size?: string;
}
const ListIcon: React.FC<Props> = ({
  size,
  color,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 459 459"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M408 0H51C22.95 0 0 22.95 0 51v357c0 28.05 22.95 51 51 51h357c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zM153 357h-51v-51h51v51zm0-102h-51v-51h51v51zm0-102h-51v-51h51v51zm204 204H178.5v-51H357v51zm0-102H178.5v-51H357v51zm0-102H178.5v-51H357v51z"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        data-original="#000000"
      />
    </svg>
  );
};

ListIcon.defaultProps = {
  size: "100%",
  color: "#fff",
};

export default ListIcon;
