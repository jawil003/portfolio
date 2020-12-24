import React from "react";

interface Props {
  width?: string;
  height?: string;
}

const BlobMobileDesign: React.FC<Props> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 359 640"
    >
      <path
        fill="#00739D"
        fillRule="evenodd"
        d="M346.65-112.788c85.911 14.28 117.471 119.946 182.116 178.3 54.867 49.528 129.113 73.84 167.306 137.121 45.326 75.1 94.096 165.415 65.295 248.27-28.758 82.73-132.739 104.4-205.062 153.807-69.528 47.497-126.077 139.747-209.655 129.503-84.434-10.35-112.212-119.708-175.365-176.696C117.836 509.286 29.806 494.78 6.017 426.833c-23.86-68.154 29.756-135.923 47.413-205.94C72.85 143.892 62.084 56.31 114.504-3.344 172.391-69.218 260.14-127.167 346.65-112.788z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default BlobMobileDesign;
