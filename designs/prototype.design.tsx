import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

/**
 * An PrototypeDesign React Component.
 * @author Jannik Will
 * @version 0.1
 */
const PrototypeDesign: React.FC<Props> = ({
  width,
  height,
  color,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill={color}
    >
      <path
        fill="#b6c4cf"
        d="M474.195 415.238v40.812a5 5 0 01-5 5H288.55a5 5 0 01-5-5v-40.812H256V504.5h240.745a5 5 0 005-5v-84.262z"
      ></path>
      <path
        fill="#9facba"
        d="M288.55 461.05a5 5 0 01-5-5v-40.812H256V504.5h46.255v-43.45z"
      ></path>
      <path
        fill="#596c76"
        d="M491.745 7.5H256v407.738h27.55v-27.55h190.645v27.55h27.55V17.5c0-5.523-4.477-10-10-10z"
      ></path>
      <path
        fill="#465a61"
        d="M283.55 40.05a5 5 0 015-5h13.705V7.5H256v407.738h27.55z"
      ></path>
      <path
        fill="#b6c4cf"
        d="M283.55 96h190.645v291.688H283.55z"
      ></path>
      <path
        fill="#9facba"
        d="M283.55 108.411H330V259.73h-46.45z"
      ></path>
      <path
        fill="#596c76"
        d="M448.255 259.731V169.5a5 5 0 00-5-5H314.49a5 5 0 00-5 5v90.231z"
      ></path>
      <path
        fill="#465a61"
        d="M340.235 259.731V169.5a5 5 0 015-5H314.49a5 5 0 00-5 5v90.231z"
      ></path>
      <path
        fill="#7a8c98"
        d="M283.55 336.21h190.645v51.479H283.55z"
      ></path>
      <path
        fill="#596c76"
        d="M283.55 336.209H330v51.479h-46.45z"
      ></path>
      <path
        fill="#b6c4cf"
        d="M283.55 387.688v68.361a5 5 0 005 5h180.645a5 5 0 005-5v-68.361z"
      ></path>
      <path
        fill="#9facba"
        d="M330 456.05v-68.361h-46.45v68.361a5 5 0 005 5H335a5 5 0 01-5-5z"
      ></path>
      <path
        fill="#e8edf2"
        d="M283.55 284.731h190.645v51.479H283.55z"
      ></path>
      <path
        fill="#d9e7ec"
        d="M283.55 284.731H330v51.479h-46.45z"
      ></path>
      <path
        fill="#8d9ca8"
        d="M283.55 40.05v68.361h190.645V40.05a5 5 0 00-5-5H288.55a5 5 0 00-5 5z"
      ></path>
      <path
        fill="#7a8c98"
        d="M335 35.05h-46.45a5 5 0 00-5 5v68.362H330V40.05a5 5 0 015-5z"
      ></path>
      <path
        fill="#8d9ca8"
        d="M283.55 259.731h190.645v25H283.55z"
      ></path>
      <path
        fill="#7a8c98"
        d="M283.55 259.731H330v25h-46.45z"
      ></path>
      <path
        fill="#01d0fb"
        d="M334.49 232.73V191.5a2 2 0 012-2h84.765a2 2 0 012 2v41.23a2 2 0 01-2 2H336.49a2 2 0 01-2-2z"
      ></path>
      <path
        fill="#01c0fa"
        d="M365.235 232.73V191.5a2 2 0 012-2H336.49a2 2 0 00-2 2v41.23a2 2 0 002 2h30.745a2 2 0 01-2-2z"
      ></path>
      <path
        fill="#b6c4cf"
        d="M227.45 415.238v40.812c0 2.206-1.794 4-4 4H42.805c-2.206 0-4-1.794-4-4v-40.812h-28.55V499.5a5 5 0 005 5H256v-89.262z"
      ></path>
      <path
        fill="#9facba"
        d="M57 499.5v-38.45H42.805a5 5 0 01-5-5v-40.812h-27.55V499.5a5 5 0 005 5H62a5 5 0 01-5-5z"
      ></path>
      <path
        fill="#596c76"
        d="M20.255 7.5c-5.523 0-10 4.477-10 10v397.738h28.55v-26.55H227.45v26.55H256V7.5z"
      ></path>
      <path
        fill="#465a61"
        d="M37.805 40.05a5 5 0 015-5H57V17.5c0-5.523 4.477-10 10-10H20.255c-5.523 0-10 4.477-10 10v397.738h27.55z"
      ></path>
      <path
        fill="#01d0fb"
        d="M37.805 336.21H228.45v51.479H37.805z"
      ></path>
      <path
        fill="#01c0fa"
        d="M37.805 336.209H84v51.479H37.805z"
      ></path>
      <path
        fill="#7a8c98"
        d="M37.805 159.89H228.45v51.479H37.805z"
      ></path>
      <path
        fill="#596c76"
        d="M37.805 159.89H84v51.479H37.805z"
      ></path>
      <path
        fill="#99e6fc"
        d="M37.805 108.411H228.45v51.479H37.805z"
      ></path>
      <path
        fill="#62dbfb"
        d="M37.805 108.411H84v51.479H37.805z"
      ></path>
      <g>
        <path
          fill="#7a8c98"
          d="M37.805 284.731H228.45v51.479H37.805z"
        ></path>
      </g>
      <g>
        <path
          fill="#596c76"
          d="M37.805 284.731H84v51.479H37.805z"
        ></path>
      </g>
      <g>
        <path
          fill="#b6c4cf"
          d="M37.805 211.369H228.45v73.361H37.805z"
        ></path>
        <path
          fill="#9facba"
          d="M37.805 211.369H84v73.361H37.805z"
        ></path>
      </g>
      <g>
        <path
          fill="#e8edf2"
          d="M37.805 40.05v68.361H228.45V40.05a5 5 0 00-5-5H42.805a5 5 0 00-5 5z"
        ></path>
        <path
          fill="#d9e7ec"
          d="M89 35.05H42.805a5 5 0 00-5 5v68.362H84V40.05a5 5 0 015-5z"
        ></path>
      </g>
      <g>
        <path
          fill="#e8edf2"
          d="M37.805 387.688v68.361a5 5 0 005 5H223.45a5 5 0 005-5v-68.361z"
        ></path>
        <path
          fill="#d9e7ec"
          d="M84 456.05v-68.361H37.805v68.361a5 5 0 005 5H89a5 5 0 01-5-5z"
        ></path>
      </g>
      <g>
        <path d="M429.564 369.449h23.142c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-23.142a7.5 7.5 0 000 15zM305.039 374.408a7.5 7.5 0 007.5-7.5v-9.918c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v9.918a7.5 7.5 0 007.5 7.5zM324.874 374.408a7.5 7.5 0 007.5-7.5v-9.918c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v9.918a7.5 7.5 0 007.5 7.5zM344.71 374.408a7.5 7.5 0 007.5-7.5v-9.918c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v9.918a7.5 7.5 0 007.5 7.5zM364.546 374.408a7.5 7.5 0 007.5-7.5v-9.918c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v9.918a7.5 7.5 0 007.5 7.5z"></path>
        <circle
          cx="409.177"
          cy="361.949"
          r="7.5"
        ></circle>
        <circle
          cx="389.341"
          cy="362.107"
          r="7.5"
        ></circle>
        <path d="M308.344 443.44h59.507c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-59.507a7.5 7.5 0 000 15zM308.344 420.298h59.507c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-59.507a7.5 7.5 0 000 15z"></path>
        <circle
          cx="395.401"
          cy="412.798"
          r="7.5"
        ></circle>
        <circle
          cx="395.401"
          cy="435.94"
          r="7.5"
        ></circle>
        <circle
          cx="413.401"
          cy="412.798"
          r="7.5"
        ></circle>
        <circle
          cx="413.401"
          cy="435.94"
          r="7.5"
        ></circle>
        <circle
          cx="431.401"
          cy="412.798"
          r="7.5"
        ></circle>
        <circle
          cx="431.401"
          cy="435.94"
          r="7.5"
        ></circle>
        <circle
          cx="449.401"
          cy="412.798"
          r="7.5"
        ></circle>
        <circle
          cx="449.401"
          cy="435.94"
          r="7.5"
        ></circle>
        <path d="M429.564 317.97h23.142c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-23.142a7.5 7.5 0 000 15zM305.039 322.929a7.5 7.5 0 007.5-7.5v-9.918c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v9.918a7.5 7.5 0 007.5 7.5zM324.874 322.929a7.5 7.5 0 007.5-7.5v-9.918c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v9.918a7.5 7.5 0 007.5 7.5zM344.71 322.929a7.5 7.5 0 007.5-7.5v-9.918c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v9.918a7.5 7.5 0 007.5 7.5zM364.546 322.929a7.5 7.5 0 007.5-7.5v-9.918c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v9.918a7.5 7.5 0 007.5 7.5z"></path>
        <circle
          cx="409.177"
          cy="310.47"
          r="7.5"
        ></circle>
        <circle
          cx="389.341"
          cy="310.628"
          r="7.5"
        ></circle>
        <path d="M367.851 75.802h-59.507c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h59.507c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM367.851 52.66h-59.507c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h59.507c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path>
        <circle
          cx="395.401"
          cy="60.16"
          r="7.5"
        ></circle>
        <circle
          cx="395.401"
          cy="83.302"
          r="7.5"
        ></circle>
        <circle
          cx="413.401"
          cy="60.16"
          r="7.5"
        ></circle>
        <circle
          cx="413.401"
          cy="83.302"
          r="7.5"
        ></circle>
        <circle
          cx="431.401"
          cy="60.16"
          r="7.5"
        ></circle>
        <circle
          cx="431.401"
          cy="83.302"
          r="7.5"
        ></circle>
        <circle
          cx="449.401"
          cy="60.16"
          r="7.5"
        ></circle>
        <circle
          cx="449.401"
          cy="83.302"
          r="7.5"
        ></circle>
        <path d="M421.255 182H336.49c-5.238 0-9.5 4.262-9.5 9.5v41.23c0 5.238 4.262 9.5 9.5 9.5h84.765c5.238 0 9.5-4.262 9.5-9.5V191.5c0-5.238-4.262-9.5-9.5-9.5zm-5.5 45.23H341.99V197h73.765zM183.819 369.449h23.142a7.5 7.5 0 000-15h-23.142a7.5 7.5 0 000 15zM59.294 374.408a7.5 7.5 0 007.5-7.5v-9.918a7.5 7.5 0 00-15 0v9.918a7.5 7.5 0 007.5 7.5zM79.13 374.408a7.5 7.5 0 007.5-7.5v-9.918a7.5 7.5 0 00-15 0v9.918a7.5 7.5 0 007.5 7.5zM98.966 374.408a7.5 7.5 0 007.5-7.5v-9.918a7.5 7.5 0 00-15 0v9.918a7.5 7.5 0 007.5 7.5zM118.802 374.408a7.5 7.5 0 007.5-7.5v-9.918a7.5 7.5 0 00-15 0v9.918a7.5 7.5 0 007.5 7.5z"></path>
        <circle
          cx="163.432"
          cy="361.949"
          r="7.5"
        ></circle>
        <circle
          cx="143.596"
          cy="362.106"
          r="7.5"
        ></circle>
        <path d="M59.294 193.13h23.142a7.5 7.5 0 000-15H59.294a7.5 7.5 0 000 15zM206.961 198.089a7.5 7.5 0 007.5-7.5v-9.918a7.5 7.5 0 00-15 0v9.918a7.5 7.5 0 007.5 7.5zM187.125 198.089a7.5 7.5 0 007.5-7.5v-9.918a7.5 7.5 0 00-15 0v9.918a7.5 7.5 0 007.5 7.5zM167.289 198.089a7.5 7.5 0 007.5-7.5v-9.918a7.5 7.5 0 00-15 0v9.918a7.5 7.5 0 007.5 7.5zM147.453 198.089a7.5 7.5 0 007.5-7.5v-9.918a7.5 7.5 0 00-15 0v9.918a7.5 7.5 0 007.5 7.5z"></path>
        <circle
          cx="102.823"
          cy="185.63"
          r="7.5"
        ></circle>
        <circle
          cx="122.659"
          cy="185.472"
          r="7.5"
        ></circle>
        <path d="M183.819 317.97h23.142a7.5 7.5 0 000-15h-23.142a7.5 7.5 0 000 15zM59.294 322.929a7.5 7.5 0 007.5-7.5v-9.918a7.5 7.5 0 00-15 0v9.918a7.5 7.5 0 007.5 7.5zM79.13 322.929a7.5 7.5 0 007.5-7.5v-9.918a7.5 7.5 0 00-15 0v9.918a7.5 7.5 0 007.5 7.5zM98.966 322.929a7.5 7.5 0 007.5-7.5v-9.918a7.5 7.5 0 00-15 0v9.918a7.5 7.5 0 007.5 7.5zM118.802 322.929a7.5 7.5 0 007.5-7.5v-9.918a7.5 7.5 0 00-15 0v9.918a7.5 7.5 0 007.5 7.5z"></path>
        <circle
          cx="163.432"
          cy="310.47"
          r="7.5"
        ></circle>
        <circle
          cx="143.596"
          cy="310.627"
          r="7.5"
        ></circle>
        <path d="M62.599 267.121h59.507c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5H62.599a7.5 7.5 0 000 15zM62.599 243.979h59.507c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5H62.599a7.5 7.5 0 000 15z"></path>
        <circle
          cx="149.655"
          cy="236.479"
          r="7.5"
        ></circle>
        <circle
          cx="149.655"
          cy="259.621"
          r="7.5"
        ></circle>
        <circle
          cx="167.655"
          cy="236.479"
          r="7.5"
        ></circle>
        <circle
          cx="167.655"
          cy="259.621"
          r="7.5"
        ></circle>
        <circle
          cx="185.655"
          cy="236.479"
          r="7.5"
        ></circle>
        <circle
          cx="185.655"
          cy="259.621"
          r="7.5"
        ></circle>
        <circle
          cx="203.655"
          cy="236.479"
          r="7.5"
        ></circle>
        <circle
          cx="203.655"
          cy="259.621"
          r="7.5"
        ></circle>
        <path d="M122.106 75.802H62.599c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h59.507c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM122.106 52.66H62.599c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h59.507c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path>
        <circle
          cx="149.655"
          cy="60.16"
          r="7.5"
        ></circle>
        <circle
          cx="149.655"
          cy="83.302"
          r="7.5"
        ></circle>
        <circle
          cx="167.655"
          cy="60.16"
          r="7.5"
        ></circle>
        <circle
          cx="167.655"
          cy="83.302"
          r="7.5"
        ></circle>
        <circle
          cx="185.655"
          cy="60.16"
          r="7.5"
        ></circle>
        <circle
          cx="185.655"
          cy="83.302"
          r="7.5"
        ></circle>
        <circle
          cx="203.655"
          cy="60.16"
          r="7.5"
        ></circle>
        <circle
          cx="203.655"
          cy="83.302"
          r="7.5"
        ></circle>
        <path d="M82.436 126.651H59.294a7.5 7.5 0 000 15h23.142a7.5 7.5 0 000-15zM206.961 121.692a7.5 7.5 0 00-7.5 7.5v9.918a7.5 7.5 0 0015 0v-9.918a7.5 7.5 0 00-7.5-7.5zM187.125 121.692a7.5 7.5 0 00-7.5 7.5v9.918a7.5 7.5 0 0015 0v-9.918a7.5 7.5 0 00-7.5-7.5zM167.289 121.692a7.5 7.5 0 00-7.5 7.5v9.918a7.5 7.5 0 0015 0v-9.918a7.5 7.5 0 00-7.5-7.5zM147.453 121.692a7.5 7.5 0 00-7.5 7.5v9.918a7.5 7.5 0 0015 0v-9.918a7.5 7.5 0 00-7.5-7.5z"></path>
        <circle
          cx="102.823"
          cy="134.151"
          r="7.5"
        ></circle>
        <circle
          cx="122.659"
          cy="133.993"
          r="7.5"
        ></circle>
        <path d="M122.106 428.44H62.599c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h59.507c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM122.106 405.298H62.599c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h59.507c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path>
        <circle
          cx="149.655"
          cy="412.798"
          r="7.5"
        ></circle>
        <circle
          cx="149.655"
          cy="435.94"
          r="7.5"
        ></circle>
        <circle
          cx="167.655"
          cy="412.798"
          r="7.5"
        ></circle>
        <circle
          cx="167.655"
          cy="435.94"
          r="7.5"
        ></circle>
        <circle
          cx="185.655"
          cy="412.798"
          r="7.5"
        ></circle>
        <circle
          cx="185.655"
          cy="435.94"
          r="7.5"
        ></circle>
        <circle
          cx="203.655"
          cy="412.798"
          r="7.5"
        ></circle>
        <circle
          cx="203.655"
          cy="435.94"
          r="7.5"
        ></circle>
        <path d="M452.706 127.5h-23.142c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h23.142c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM305.039 122.541a7.5 7.5 0 00-7.5 7.5v9.918c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-9.918a7.5 7.5 0 00-7.5-7.5zM324.874 122.541a7.5 7.5 0 00-7.5 7.5v9.918c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-9.918a7.5 7.5 0 00-7.5-7.5zM344.71 122.541a7.5 7.5 0 00-7.5 7.5v9.918c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-9.918a7.5 7.5 0 00-7.5-7.5zM364.546 122.541a7.5 7.5 0 00-7.5 7.5v9.918c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-9.918a7.5 7.5 0 00-7.5-7.5z"></path>
        <circle
          cx="409.177"
          cy="135"
          r="7.5"
        ></circle>
        <circle
          cx="389.341"
          cy="135.157"
          r="7.5"
        ></circle>
        <path d="M491.745 0H20.255c-9.649 0-17.5 7.851-17.5 17.5v482c0 6.893 5.607 12.5 12.5 12.5h481.49c6.893 0 12.5-5.607 12.5-12.5v-482c0-9.649-7.85-17.5-17.5-17.5zM248.5 497H17.755v-74.262h12.55v33.312c0 6.893 5.607 12.5 12.5 12.5H166a7.5 7.5 0 000-15H45.305v-58.361H220.95v58.361H201a7.5 7.5 0 000 15h22.45c6.893 0 12.5-5.607 12.5-12.5v-33.312h12.55zm-27.55-329.61v36.479H45.305V167.39zm-175.645-15v-36.479H220.95v36.479zm175.645 66.479v58.361H45.305v-58.361zm0 73.361v36.479H45.305V292.23zm0 51.479v36.479H45.305v-36.479zm27.55 64.029h-12.55V87a7.5 7.5 0 00-15 0v13.911H45.305V42.55H220.95V52a7.5 7.5 0 0015 0V40.05c0-6.893-5.607-12.5-12.5-12.5H42.805c-6.893 0-12.5 5.607-12.5 12.5v367.688h-12.55V17.5c0-1.378 1.122-2.5 2.5-2.5H248.5zM494.245 497H263.5v-74.262h12.55v33.312c0 6.893 5.607 12.5 12.5 12.5h180.646c6.893 0 12.5-5.607 12.5-12.5v-33.312h12.55V497zm-27.55-229.77v10H291.05v-10zm-149.705-15V172h123.765v80.23zm149.705 40v36.479H291.05V292.23zm0 51.479v36.479H291.05v-36.479zm0 51.479v58.361H291.05v-58.361zm27.55 12.55h-12.55V224c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v28.23h-10.94V169.5c0-6.893-5.607-12.5-12.5-12.5H314.49c-6.893 0-12.5 5.607-12.5 12.5v82.73h-10.94V115.911h175.646V189c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5V40.05c0-6.893-5.607-12.5-12.5-12.5H288.55c-6.893 0-12.5 5.607-12.5 12.5v367.688H263.5V15h228.245c1.379 0 2.5 1.122 2.5 2.5zM291.05 100.911V42.55h175.646v58.361z"></path>
      </g>
    </svg>
  );
};

export default PrototypeDesign;
