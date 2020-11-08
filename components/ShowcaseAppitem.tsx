interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}
const ShowcaseAppitem: React.FC<Props> = ({
  icon,
  title,
  description,
  color,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto, auto, auto",
        rowGap: "10px",
        maxWidth: "200px",
      }}
    >
      <div
        style={{
          display: "grid",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            backgroundColor: color,
            display: "grid",
            justifyItems: "center",
            alignItems: "center",
            gridTemplateColumns: "100%",
            gridTemplateRows: "100%",
          }}
        >
          {icon}
        </div>
      </div>
      <h4
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.25em",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          color: "darkgrey",
          textAlign: "center",
        }}
      >
        {description}
      </p>
    </div>
  );
};

ShowcaseAppitem.defaultProps = { color: "var(--red)" };
export default ShowcaseAppitem;
