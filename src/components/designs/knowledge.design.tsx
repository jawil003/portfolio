import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

/**
 * An KnowledgeDesign React Component.
 * @author Jannik Will
 * @version 0.1
 */
const KnowledgeDesign: React.FC<Props> = ({
  width,
  height,
  color,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      data-name="Layer 1"
      viewBox="0 0 787.067 428.128"
      fill={color}
    >
      <path
        fill="#f2f2f2"
        d="M384.646 608.214a400.444 400.444 0 01-3.775 51.454c-.083.6-.173 1.198-.256 1.797l-161.217-.9a66.264 66.264 0 01-1.39-1.807 76.647 76.647 0 01-4.211-6.233c-6.225-10.331-9.074-22.427-6.219-30.773l.051-.13a14.644 14.644 0 012.859-4.966c6.51-7.328 19.674-6.107 31.62-.191-10.715-11.729-19.247-26.528-19.895-39.738-.635-12.886 6.102-22.09 13.41-29.913.24-.258.48-.51.72-.761.116-.13.239-.251.355-.38 5.701-5.962 12.349-11.839 21.97-11.128 10.552.781 22.25 9.62 30.453 19.919 8.203 10.292 13.654 21.983 19.18 33.394 5.532 11.403 11.517 23.098 20.395 32.845-12.024-15.209-21.719-32.513-25.3-49.343s-.43-32.993 10.287-40.92a25.064 25.064 0 0110.978-4.429c.463-.077.932-.14 1.41-.194 9.92-1.13 21.764 2.302 31.841 10.503 11.099 9.03 18.793 22.417 22.621 35.125 3.829 12.708 4.237 24.942 4.113 36.769z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#fff"
        d="M279.168 660.898l-3.082-.017q-1.469-.918-2.95-1.815c-.612-.386-1.231-.757-1.85-1.136q-15.339-9.368-30.869-17.972-15.516-8.61-31.188-16.428a1.292 1.292 0 01-.743-1.477.372.372 0 01.052-.108c.145-.273.471-.387.946-.153 1.282.642 2.57 1.285 3.852 1.942q15.715 7.951 31.295 16.696 15.57 8.74 30.961 18.253c.216.131.432.27.648.4.978.606 1.95 1.21 2.928 1.815zM318.917 661.12l-1.906-.01c-.43-.602-.853-1.204-1.283-1.806q-15.152-21.248-30.298-42.496-24.804-34.787-49.593-69.574a1.228 1.228 0 01-.214-.42c-.141-.513.236-.814.72-.761a1.448 1.448 0 011.006.641l27.806 39.002 49.342 69.219c1.046 1.464 2.092 2.936 3.138 4.4.43.602.86 1.204 1.282 1.805zM361.386 650.05c-.098 3.213-.31 6.374-.588 9.506q-.08.899-.162 1.797l-2-.01c.061-.6.123-1.199.176-1.798.423-4.525.723-9.101.764-13.801a192.54 192.54 0 00-3.79-38.81 241.645 241.645 0 00-11.74-40.321 276.902 276.902 0 00-19.208-39.893 1.065 1.065 0 01-.177-.709c.083-.57.842-.739 1.41-.194a1.655 1.655 0 01.286.362q1.384 2.38 2.717 4.774a276.709 276.709 0 0118.384 40.033 240.501 240.501 0 0110.945 40.38 189.953 189.953 0 012.983 38.684z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#ccc"
        d="M919.865 567.547c0-7.732-29.102-14-65-14s-65 6.268-65 14c0 4.955 11.964 9.306 30 11.794v76.706a6.5 6.5 0 0013 0v-75.324c6.872.532 14.277.824 22 .824s15.128-.292 22-.824v75.324a6.5 6.5 0 0013 0V579.34c18.036-2.488 30-6.839 30-11.794z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <circle
        cx="655.586"
        cy="175.468"
        r="28"
        fill="#2f2e41"
      ></circle>
      <path
        fill="#a0616a"
        d="M585.905 415.034L573.645 415.034 567.813 367.746 585.907 367.746 585.905 415.034z"
      ></path>
      <path
        fill="#2f2e41"
        d="M564.888 411.53h23.644v14.887h-38.53a14.887 14.887 0 0114.886-14.886z"
      ></path>
      <path
        fill="#a0616a"
        d="M566.768 408.192L555.07 404.521 563.662 357.656 580.926 363.073 566.768 408.192z"
      ></path>
      <path
        fill="#2f2e41"
        d="M751.8 635.462h23.645v14.887h-38.531a14.887 14.887 0 0114.887-14.887z"
        transform="rotate(17.423 1422.855 -148.806)"
      ></path>
      <path
        fill="#2f2e41"
        d="M777.223 625.26a4.462 4.462 0 01-1.572-.286l-9.02-3.382a4.516 4.516 0 01-2.814-5.183c2.271-10.21 10.01-44.97 14.248-63.615 5.026-22.116 78.343-26.225 81.46-26.389l.257-.014 8.248 10.365c2.98 9.579 2.035 17.05-2.808 22.208-14.132 15.046-56.327 5.71-61.359 4.528l-22.427 58.871a4.513 4.513 0 01-4.213 2.897z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#2f2e41"
        d="M790.223 632.26a4.462 4.462 0 01-1.572-.286l-9.02-3.382a4.516 4.516 0 01-2.814-5.183c2.271-10.21 10.01-44.97 14.248-63.615 5.026-22.116 78.343-26.225 81.46-26.389l.257-.014 8.248 10.365c2.98 9.579 2.035 17.05-2.808 22.208-14.132 15.045-56.327 5.71-61.359 4.528l-22.427 58.871a4.513 4.513 0 01-4.213 2.897z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#a0616a"
        d="M764.128 488.24a10.527 10.527 0 01.885 1.402l49.32 5.196 7.1-9.734 16.09 8.795-13.944 23.621-60.487-15.423a10.496 10.496 0 111.036-13.857z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#6c63ff"
        d="M878.741 547.722a4.5 4.5 0 01-2.05-.5c-9.862-5.015-29.066-13.7-46.874-15.517a4.392 4.392 0 01-3.096-1.75 4.519 4.519 0 01-.833-3.511c1.607-8.896 5.293-31.547 4.818-49.701a24.596 24.596 0 0118.582-24.468 79.866 79.866 0 019.913-1.954 24.795 24.795 0 0127.56 28.762c-3.176 18.813-6.378 45.09-3.595 63.432a4.507 4.507 0 01-1.819 4.349 4.429 4.429 0 01-2.606.858z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#6c63ff"
        d="M831.619 499.87a4.496 4.496 0 01-1.787-.372l-12.848-5.562a4.506 4.506 0 01-2.342-5.917l9.932-22.942a11.5 11.5 0 1121.107 9.136l-9.931 22.942a4.51 4.51 0 01-4.131 2.716z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <circle
        cx="654.562"
        cy="182.019"
        r="24.561"
        fill="#a0616a"
      ></circle>
      <path
        fill="#2f2e41"
        d="M836.026 405.888a88.59 88.59 0 0038.326 12.629l-4.04-4.841a29.688 29.688 0 009.17 1.821c3.13-.049 6.41-1.254 8.187-3.832a9.342 9.342 0 00.625-8.63 17.694 17.694 0 00-5.566-6.96 33.14 33.14 0 00-30.845-5.512 19.806 19.806 0 00-9.212 5.91c-2.328 2.872-6.81 5.43-5.619 8.931z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#2f2e41"
        d="M865.158 386.067a75.485 75.485 0 00-27.463-17.759c-6.638-2.46-13.864-3.979-20.805-2.582s-13.504 6.198-15.44 13.008c-1.583 5.568.052 11.563 2.509 16.805s5.737 10.103 7.724 15.54a35.468 35.468 0 01-35.689 47.562c6.82.915 13.105 4.12 19.771 5.825s14.533 1.59 19.486-3.185c5.241-5.053 5.346-13.267 5.093-20.543l-1.13-32.445c-.192-5.515-.356-11.207 1.633-16.355s6.716-9.656 12.234-9.609c4.183.036 7.885 2.57 11.239 5.068s6.904 5.165 11.07 5.536 8.924-2.711 8.612-6.882"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#a0616a"
        d="M819.736 541.413a11.004 11.004 0 114.242-21.163 10.567 10.567 0 011.311.664l44.741-20.087 1.257-12.134 19.286-.516-.128 20.202a10.88 10.88 0 01-7.861 10.342l-52.322 14.893a10.26 10.26 0 01-.36 1.02 11.045 11.045 0 01-10.166 6.78z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#6c63ff"
        d="M888.94 498.08a4.496 4.496 0 01-1.763.476l-13.973.86a4.506 4.506 0 01-4.768-4.216l-1.533-24.952a11.5 11.5 0 1122.956-1.413l1.534 24.953a4.51 4.51 0 01-2.454 4.292z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#3f3d56"
        d="M779.57 536.936h79a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5h-79a3.5 3.5 0 01-3.5-3.5 3.5 3.5 0 013.5-3.5z"
        transform="rotate(180 715.836 422.468)"
      ></path>
      <path
        fill="#3f3d56"
        d="M745.07 537.436v-49a6.507 6.507 0 016.5-6.5h89a6.507 6.507 0 016.5 6.5v49a6.507 6.507 0 01-6.5 6.5h-89a6.507 6.507 0 01-6.5-6.5z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <circle
        cx="589.603"
        cy="277"
        r="6"
        fill="#fff"
      ></circle>
      <path
        fill="#ffb8b8"
        d="M483.247 455.273a10.056 10.056 0 00-15.32-1.744l-31.754-16.39 1.974 18.465 29.852 12.733a10.11 10.11 0 0015.248-13.064z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#ccc"
        d="M455.027 462.706a4.505 4.505 0 01-3.669.039l-30.162-13.084a46.373 46.373 0 01-23.462-22.698l-15.857-33.471a14.497 14.497 0 1122.9-17.78l27.874 51.713 25.736 19.441a4.515 4.515 0 011.587 4.922l-2.526 8.159a4.506 4.506 0 01-1.524 2.211 4.455 4.455 0 01-.897.548z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <circle
        cx="174.712"
        cy="93.631"
        r="24.561"
        fill="#ffb8b8"
      ></circle>
      <path
        fill="#ffb8b8"
        d="M184.661 415.827L196.92 415.827 202.753 368.539 184.658 368.539 184.661 415.827z"
      ></path>
      <path
        fill="#2f2e41"
        d="M388.5 648.26h38.531v14.887h-23.644A14.887 14.887 0 01388.5 648.26z"
        transform="rotate(179.997 304.535 537.733)"
      ></path>
      <path
        fill="#ffb8b8"
        d="M144.661 415.827L156.92 415.827 162.753 368.539 144.658 368.539 144.661 415.827z"
      ></path>
      <path
        fill="#2f2e41"
        d="M348.5 648.26h38.531v14.887h-23.644A14.887 14.887 0 01348.5 648.26z"
        transform="rotate(179.997 264.535 537.733)"
      ></path>
      <path
        fill="#2f2e41"
        d="M346.847 638.228a4.499 4.499 0 01-1.075-3.559l21.464-160.985 53.329 9.056 5.691-3.415L411.54 632.07a4.512 4.512 0 01-4.097 3.963l-16.147 1.346a4.5 4.5 0 01-4.867-4.742l4.181-72.742a.5.5 0 00-.982-.16l-20.683 76.7a4.508 4.508 0 01-4.345 3.329h-14.367a4.498 4.498 0 01-3.385-1.536z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#ccc"
        d="M383.779 484.952a3.533 3.533 0 00-4.516-.188l-10.662 8.293a4.496 4.496 0 01-7.087-2.307c-5.23-18.315-17.079-64.418-14.16-96.866 1.655-18.393 17.537-32.371 35.405-31.198 12.216.814 20.252 7.861 23.886 20.944 8.923 32.122 18.728 91.044 20.603 102.53a4.48 4.48 0 01-2.136 4.59 32.939 32.939 0 01-16.692 4.697c-7.12 0-15.655-2.479-24.641-10.495z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#ffb8b8"
        d="M387.802 496.379a10.056 10.056 0 00-10.979-10.827l-14.872-32.493-9.841 15.747 15.631 28.442a10.11 10.11 0 0020.06-.869z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#ccc"
        d="M361.01 484.812a4.505 4.505 0 01-2.912-2.234L342.44 453.67a46.373 46.373 0 01-4.454-32.339l8.178-36.123a14.497 14.497 0 1128.993.142l-9.981 57.893 8.253 31.18a4.515 4.515 0 01-1.788 4.852l-7.023 4.861a4.506 4.506 0 01-2.564.8 4.455 4.455 0 01-1.043-.123z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        d="M166.697 173.828L157.697 211.828 170.697 243.828 161.697 212.828 166.697 173.828z"
        opacity="0.2"
      ></path>
      <path
        fill="#2f2e41"
        d="M367.163 349.764a16.538 16.538 0 01-6.388-1.156c-.894-.344-1.822-.628-2.714-.972-7.882-3.045-13.074-11.44-13.26-19.887s4.189-16.646 10.685-22.05 14.91-8.177 23.335-8.819c9.075-.69 19.294 1.61 24.365 9.169 1.35 2.011 2.294 4.452 1.494 6.881a4.403 4.403 0 01-1.24 1.906c-2.265 2.015-4.523.5-6.832.366-3.173-.184-6.023 2.385-7.048 5.394s-.573 6.321.254 9.39a23.46 23.46 0 011.182 5.71 5.74 5.74 0 01-2.378 5.055c-1.983 1.199-4.587.505-6.571-.692s-3.699-2.86-5.842-3.74-5.022-.686-6.27 1.267a6.935 6.935 0 00-.792 2.288c-1.118 5.095-.861 4.795-1.98 9.89z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#e6e6e6"
        d="M580.115 433.115a4.32 4.32 0 01-.808-3.706 102.328 102.328 0 000-47.525 4.321 4.321 0 01.808-3.705 4.248 4.248 0 013.355-1.626h39.872a4.302 4.302 0 014.237 3.606 167.487 167.487 0 010 50.976 4.302 4.302 0 01-4.237 3.605H583.47a4.248 4.248 0 01-3.355-1.625zM518.434 292.497a4.318 4.318 0 01-.807-3.705 102.332 102.332 0 000-47.525 4.318 4.318 0 01.807-3.705 4.247 4.247 0 013.355-1.626h39.873a4.303 4.303 0 014.237 3.606 167.487 167.487 0 010 50.975 4.303 4.303 0 01-4.237 3.606h-39.873a4.247 4.247 0 01-3.355-1.626z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#6c63ff"
        d="M616.545 339.535a167.487 167.487 0 010-50.976 4.302 4.302 0 014.237-3.606h39.873a4.247 4.247 0 013.355 1.627 4.32 4.32 0 01.807 3.704 102.328 102.328 0 000 47.525 4.318 4.318 0 01-.807 3.705 4.247 4.247 0 01-3.355 1.626h-39.873a4.302 4.302 0 01-4.237-3.605z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#ff6584"
        d="M449.622 337.755a167.506 167.506 0 010-50.976 4.303 4.303 0 014.238-3.605h39.872a4.247 4.247 0 013.355 1.626 4.32 4.32 0 01.808 3.704 102.328 102.328 0 000 47.526 4.318 4.318 0 01-.808 3.704 4.247 4.247 0 01-3.355 1.626H453.86a4.303 4.303 0 01-4.238-3.605z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#6c63ff"
        d="M459.484 455.426a4.39 4.39 0 01-.82-3.766 104.001 104.001 0 000-48.305 4.392 4.392 0 01.82-3.766 4.318 4.318 0 013.41-1.653h40.528a4.373 4.373 0 014.307 3.665 170.238 170.238 0 010 51.813 4.373 4.373 0 01-4.307 3.665h-40.527a4.318 4.318 0 01-3.41-1.653z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#3f3d56"
        d="M219.049 664.064h773.294a1.19 1.19 0 100-2.382H219.049a1.19 1.19 0 100 2.382z"
        transform="translate(-206.467 -235.936)"
      ></path>
      <path
        fill="#fff"
        d="M495.601 419.758h-21.349a3.003 3.003 0 01-3-3v-1.274a3.003 3.003 0 013-3h21.35a3.003 3.003 0 013 3v1.274a3.003 3.003 0 01-3 3zM495.601 432.305h-21.349a3.003 3.003 0 01-3-3v-1.274a3.003 3.003 0 013-3h21.35a3.003 3.003 0 013 3v1.274a3.003 3.003 0 01-3 3zM481.462 307.85h-20.924a3.003 3.003 0 01-3-3v-1.172a3.003 3.003 0 013-3h20.924a3.003 3.003 0 013 3v1.172a3.003 3.003 0 01-3 3zM615.141 395.98h-20.923a3.003 3.003 0 01-3-3v-1.173a3.003 3.003 0 013-3h20.923a3.003 3.003 0 013 3v1.173a3.003 3.003 0 01-3 3zM615.141 410.793h-20.923a3.003 3.003 0 01-3-3v-1.172a3.003 3.003 0 013-3h20.923a3.003 3.003 0 013 3v1.172a3.003 3.003 0 01-3 3zM615.141 425.607h-20.923a3.003 3.003 0 01-3-3v-1.173a3.003 3.003 0 013-3h20.923a3.003 3.003 0 013 3v1.173a3.003 3.003 0 01-3 3zM481.462 320.195h-20.924a3.003 3.003 0 01-3-3v-1.172a3.003 3.003 0 013-3h20.924a3.003 3.003 0 013 3v1.172a3.003 3.003 0 01-3 3zM553.639 257.831h-20.923a3.003 3.003 0 01-3-3v-1.172a3.003 3.003 0 013-3h20.923a3.003 3.003 0 013 3v1.172a3.003 3.003 0 01-3 3zM649.113 310.865h-20.924a3.003 3.003 0 01-3-3v-1.173a3.003 3.003 0 013-3h20.924a3.003 3.003 0 013 3v1.173a3.003 3.003 0 01-3 3z"
        transform="translate(-206.467 -235.936)"
      ></path>
    </svg>
  );
};

export default KnowledgeDesign;
