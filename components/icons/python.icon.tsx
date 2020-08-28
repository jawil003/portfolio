interface Props {
  fontSize: "large" | "normal" | "small";
}
export const PythonLogo: React.FC<Props> = ({
  fontSize,
}) => {
  return (
    <svg
      style={{
        fontSize:
          fontSize === "small"
            ? "0.5rem"
            : fontSize === "normal"
            ? "1rem"
            : "3.5rem",
      }}
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 134 126"
    >
      <g fillRule="nonzero" transform="translate(6 1)">
        <path
          fill="url(#_Linear1)"
          d="M60.51 6.398c-4.583.021-8.961.412-12.812 1.094-11.347 2.004-13.407 6.2-13.407 13.937v10.219h26.813v3.406H24.229c-7.793 0-14.616 4.684-16.75 13.594-2.462 10.213-2.571 16.586 0 27.25 1.906 7.938 6.457 13.594 14.25 13.594h9.219v-12.25c0-8.85 7.657-16.657 16.75-16.657h26.781c7.455 0 13.406-6.138 13.406-13.625V21.429c0-7.266-6.13-12.725-13.406-13.937-4.606-.767-9.385-1.115-13.969-1.094zm-14.5 8.219c2.77 0 5.031 2.298 5.031 5.125 0 2.816-2.261 5.093-5.031 5.093-2.779 0-5.031-2.277-5.031-5.093 0-2.827 2.252-5.125 5.031-5.125z"
        ></path>
        <path
          fill="url(#_Linear2)"
          d="M91.229 35.054V46.96c0 9.231-7.826 17-16.75 17H47.698c-7.336 0-13.407 6.279-13.407 13.625v25.532c0 7.266 6.319 11.54 13.407 13.625 8.487 2.495 16.626 2.946 26.781 0 6.75-1.955 13.406-5.888 13.406-13.625V92.898H61.104v-3.406h40.187c7.793 0 10.697-5.436 13.407-13.594 2.799-8.399 2.68-16.476 0-27.25-1.926-7.757-5.604-13.594-13.407-13.594H91.229zM76.166 99.71c2.78 0 5.032 2.278 5.032 5.094 0 2.827-2.252 5.125-5.032 5.125-2.769 0-5.031-2.298-5.031-5.125 0-2.816 2.262-5.094 5.031-5.094z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="_Linear1"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="scale(81.2332) rotate(40.98 -.071 .131)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5A9FD4"></stop>
          <stop offset="1" stopColor="#306998"></stop>
        </linearGradient>
        <linearGradient
          id="_Linear2"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="scale(-38.1867) rotate(55.006 1.625 -3.26)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFD43B"></stop>
          <stop offset="1" stopColor="#FFE873"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
