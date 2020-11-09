interface Props {
  width?: string;
  height?: string;
}
const Spacer: React.FC<Props> = ({
  width,
  height,
}) => {
  return <div style={{ width, height }} />;
};

Spacer.defaultProps = {
  width: "100%",
  height: "100%",
};
export default Spacer;
