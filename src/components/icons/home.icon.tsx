import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

/**
 * An HomeIcon React Component.
 * @author Jannik Will
 * @version 0.1
 */
const HomeIcon: React.FC<Props> = ({ width, height, color }) => {
  return (
    <svg
      viewBox="0 0 511 511.999"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
    >
      <path d="M498.195 222.695l-.035-.035L289.305 13.813C280.402 4.905 268.566 0 255.977 0c-12.59 0-24.426 4.902-33.332 13.809L13.898 222.55c-.07.07-.14.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.445 13.238 31.277 13.746.48.047.965.07 1.453.07h8.324v153.7C54.832 487.254 79.578 512 110 512h81.71c8.282 0 15-6.715 15-15V376.5c0-13.879 11.29-25.168 25.169-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.285 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.16v-153.7h7.719c12.586 0 24.422-4.902 33.332-13.808 18.36-18.371 18.367-48.254.023-66.637zm0 0" />
    </svg>
  );
};

export default HomeIcon;
