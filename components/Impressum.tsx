import IndexItem from "./IndexItem";

const Impressum: React.FC = () => {
  return (
    <IndexItem title="Impressum">
      <p style={{ display: "grid" }}>
        <span>Jannik Will</span>
        <span>Ostkirchstraße 23</span>
        <span>44269 Dortmund</span>
        <span>Deutschland</span>
      </p>
    </IndexItem>
  );
};
export default Impressum;
