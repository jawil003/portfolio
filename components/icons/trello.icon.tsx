import React from "react";
interface Props {
  fontSize: "large" | "normal" | "small";
}
export const TrelloIcon: React.FC<Props> = (
  props: Props
) => {
  return (
    <svg
      style={{
        fontSize:
          props.fontSize === "small"
            ? "0.5rem"
            : props.fontSize === "normal"
            ? "1rem"
            : "3.5rem",
      }}
      width="1em"
      height="1em"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
    >
      <path
        style={{ fill: "#0277BD" }}
        d="M448,0H64C28.672,0,0,28.672,0,64v384c0,35.328,28.672,64,64,64h384c35.36,0,64-28.672,64-64V64
	C512,28.64,483.328,0,448,0z"
      />
      <g>
        <path
          style={{ fill: "#ECEFF1" }}
          d="M224,384c0,17.664-14.336,32-32,32H96c-17.696,0-32-14.336-32-32V96c0-17.696,14.304-32,32-32h96
		c17.664,0,32,14.304,32,32V384z"
        />
        <path
          style={{ fill: "#ECEFF1" }}
          d="M448,256c0,17.664-14.336,32-32,32h-96c-17.696,0-32-14.336-32-32V96c0-17.696,14.304-32,32-32h96
		c17.664,0,32,14.304,32,32V256z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
