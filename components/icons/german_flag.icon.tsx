interface Props {
  fontSize: "large" | "normal" | "small";
}
const GermanFlag: React.FC<Props> = (props: Props) => {
  return (
    <svg
      style={{
        fontSize:
          props.fontSize === "small"
            ? "0.5rem"
            : props.fontSize === "normal"
            ? "1rem"
            : "2.5rem",
      }}
      id="Capa_1"
      enableBackground="new 0 0 512 512"
      height="1em"
      width="1em"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="m512 200.946v-93.591c0-9.122-7.395-16.516-16.516-16.516h-478.968l-8.849 16.516v93.591l17.104 22.022h462.456z"
          fill="#5d5360"
        />
        <path
          d="m0 107.355v93.591l16.516 14.683v-124.79c-9.121 0-16.516 7.394-16.516 16.516z"
          fill="#4b3f4e"
        />
        <path
          d="m7.817 311.054v86.43c0 9.122 7.395 16.516 16.516 16.516h471.151l16.516-9.355v-93.591l-24.77-22.022h-462.456z"
          fill="#ffe07d"
        />
        <path
          d="m16.516 355.097v-58.724l-16.516 14.681v93.591c0 9.122 7.395 16.516 16.516 16.516h478.968c9.121 0 16.516-7.394 16.516-16.516h-445.935c-27.365 0-49.549-22.183-49.549-49.548z"
          fill="#ffd064"
        />
        <path
          d="m8.667 297 7.849 14.053h495.484v-110.107h-495.484l-7.849 17.387z"
          fill="#e5646e"
        />
        <path d="m0 200.946h16.516v110.107h-16.516z" fill="#db4655" />
      </g>
    </svg>
  );
};

export default GermanFlag;