import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

/**
 * An KnowledgeIcon React Component.
 * @author Jannik Will
 * @version 0.1
 */
const KnowledgeIcon: React.FC<Props> = ({
  width,
  height,
  color,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512.118 512.118"
      fill={color}
    >
      <path d="M492.721 386.924a19.52 19.52 0 00-6.481 1.126l-189.16 66.488H158.562v-30h100.927c11.045 0 20.032-8.986 20.032-20.032s-8.986-20.032-20.032-20.032H126.5c-38.898 0-75.468 15.147-102.973 42.652L.043 450.611v61.507h319.824l181.303-88.322c6.624-3.227 10.904-10.074 10.904-17.442.001-12.001-10.045-19.43-19.353-19.43zM195.603 285.483l18.574 38.579h83.764l18.575-38.579v-23.714H195.603zM182.864 210.769c6.745 5.333 11.081 12.803 12.345 21h121.713c1.283-8.213 5.633-15.696 12.388-21.043 28.5-22.561 44.845-56.324 44.845-92.63C374.154 52.978 321.177 0 256.059 0c-1.521 0-3.064.03-4.588.087-30.592 1.163-59.196 14.061-80.541 36.319-21.332 22.245-33.04 51.359-32.966 81.979.088 36.219 16.453 69.892 44.9 92.384zM63.368 103.35h44.594v30H63.368z"></path>
      <path
        d="M93.492 10.86h30v44.594h-30z"
        transform="rotate(-60 108.494 33.158)"
      ></path>
      <path
        d="M86.195 188.542h44.594v30H86.195z"
        transform="rotate(-30 108.482 203.545)"
      ></path>
      <path d="M404.152 103.35h44.594v30h-44.594z"></path>
      <path
        d="M381.325 18.157h44.594v30h-44.594z"
        transform="rotate(-30 403.62 33.174)"
      ></path>
      <path
        d="M388.622 181.245h30v44.594h-30z"
        transform="rotate(-60 403.63 203.552)"
      ></path>
    </svg>
  );
};

export default KnowledgeIcon;
