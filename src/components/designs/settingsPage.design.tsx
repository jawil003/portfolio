import React from "react";

interface Props {
  width?: string;
  height?: string;
}

/**
 * An SettingsPageDesign React Component.
 * @author Jannik Will
 * @version 0.1
 */
const SettingsPageDesign: React.FC<Props> = ({
  width,
  height,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512"
    >
      <path
        fill="#e8edf2"
        d="M470.524 205.149a4.853 4.853 0 01-6.864 0l-11.963-11.963c-1.504-1.504-3.8-1.831-5.691-.859a64.274 64.274 0 01-9.617 3.995c-2.02.652-3.407 2.505-3.407 4.628v16.906a4.854 4.854 0 01-4.854 4.854h-23.214a4.854 4.854 0 01-4.854-4.854V200.95c0-2.123-1.387-3.976-3.407-4.628a64.187 64.187 0 01-9.617-3.995c-1.892-.972-4.188-.645-5.692.859l-11.963 11.963a4.853 4.853 0 01-6.864 0l-16.415-16.415a4.854 4.854 0 010-6.864l2.23-2.23H135l-1 4.112v276.089l1 5.408h322.952c8.284 0 15-6.716 15-15V202.721z"
      ></path>
      <path
        fill="#d9e7ec"
        d="M180.048 450.249V179.64H135l-1 4.112v276.089l1 5.408h60.048c-8.284 0-15-6.716-15-15z"
      ></path>
      <path
        fill="#fd4755"
        d="M358.064 169.908c1.504-1.504 1.831-3.8.859-5.692a64.274 64.274 0 01-3.995-9.617c-.652-2.02-2.505-3.407-4.628-3.407h-16.906a4.854 4.854 0 01-4.854-4.854v-23.214c0-.188.034-.365.055-.547H22.5c-8.284 0-15 6.716-15 15v42.064h340.831z"
      ></path>
      <path
        fill="#fb2b3a"
        d="M69 122.576H22.5c-8.284 0-15 6.716-15 15v42.064H54v-42.064c0-8.284 6.716-15 15-15z"
      ></path>
      <path
        fill="#b6c4cf"
        d="M135 465.249H22.5c-8.284 0-15-6.716-15-15V179.64H135z"
      ></path>
      <path
        fill="#9facba"
        d="M54 450.249V179.64H7.5v270.609c0 8.284 6.716 15 15 15H69c-8.284 0-15-6.716-15-15z"
      ></path>
      <path
        fill="#596c76"
        d="M135 465.249H22.5c-8.284 0-15-6.716-15-15v-85.498H135z"
      ></path>
      <path
        fill="#465a61"
        d="M54 450.249V364.75H7.5v85.499c0 8.284 6.716 15 15 15H69c-8.284 0-15-6.716-15-15z"
      ></path>
      <path
        fill="#b6c4cf"
        d="M504.5 146.338v-23.215a4.854 4.854 0 00-4.854-4.854H482.74c-2.123 0-3.976-1.387-4.628-3.407a64.242 64.242 0 00-3.995-9.618c-.972-1.892-.645-4.188.859-5.692l11.963-11.963a4.854 4.854 0 000-6.864L470.524 64.31a4.854 4.854 0 00-6.864 0l-11.963 11.963c-1.504 1.504-3.8 1.831-5.692.859a64.274 64.274 0 00-9.617-3.995c-2.02-.652-3.407-2.505-3.407-4.628V51.604a4.854 4.854 0 00-4.854-4.854h-23.215a4.854 4.854 0 00-4.854 4.854V68.51c0 2.123-1.387 3.976-3.407 4.628a64.187 64.187 0 00-9.617 3.995c-1.892.972-4.188.645-5.692-.859L369.38 64.312a4.854 4.854 0 00-6.864 0l-16.415 16.415a4.854 4.854 0 000 6.864l11.963 11.963c1.504 1.504 1.831 3.8.859 5.692a64.242 64.242 0 00-3.995 9.618c-.652 2.02-2.505 3.407-4.628 3.407h-16.906a4.854 4.854 0 00-4.854 4.854v23.215a4.854 4.854 0 004.854 4.854H350.3c2.123 0 3.976 1.387 4.628 3.407a64.23 64.23 0 003.995 9.617c.972 1.892.645 4.188-.859 5.692l-11.963 11.962a4.854 4.854 0 000 6.864l16.415 16.415a4.854 4.854 0 006.864 0l11.963-11.963c1.504-1.504 3.8-1.831 5.691-.859a64.274 64.274 0 009.617 3.995c2.02.652 3.407 2.505 3.407 4.628v16.907a4.854 4.854 0 004.854 4.854h23.215a4.854 4.854 0 004.854-4.854v-16.907c0-2.123 1.387-3.976 3.407-4.628a64.187 64.187 0 009.617-3.995c1.892-.972 4.188-.645 5.692.859l11.963 11.963a4.854 4.854 0 006.864 0l16.415-16.415a4.854 4.854 0 000-6.864l-11.963-11.962c-1.504-1.504-1.831-3.8-.859-5.692a64.274 64.274 0 003.995-9.617c.652-2.02 2.505-3.407 4.628-3.407h16.906a4.857 4.857 0 004.854-4.856z"
      ></path>
      <path
        fill="#9facba"
        d="M384.149 154.953c-3.671-5.865-5.801-12.793-5.801-20.222s2.13-14.358 5.801-20.222c7.155-22.343 25.844-39.522 49.063-44.539a4.787 4.787 0 01-.232-1.46V51.604a4.854 4.854 0 00-4.854-4.854h-23.214a4.854 4.854 0 00-4.854 4.854V68.51c0 2.123-1.387 3.976-3.407 4.628a64.23 64.23 0 00-9.617 3.995c-1.892.972-4.188.645-5.692-.859L369.38 64.312a4.853 4.853 0 00-6.864 0l-16.415 16.415a4.854 4.854 0 000 6.864l11.963 11.963c1.504 1.504 1.831 3.8.859 5.692a64.242 64.242 0 00-3.995 9.618c-.652 2.02-2.505 3.407-4.628 3.407h-16.906a4.854 4.854 0 00-4.854 4.854v23.214a4.854 4.854 0 004.854 4.854H350.3c2.123 0 3.976 1.387 4.628 3.407a64.23 64.23 0 003.995 9.617c.972 1.892.645 4.188-.859 5.692l-11.963 11.962a4.854 4.854 0 000 6.864l16.415 16.415a4.853 4.853 0 006.864 0l11.963-11.963c1.504-1.504 3.8-1.831 5.692-.859a64.274 64.274 0 009.617 3.995c2.02.652 3.407 2.505 3.407 4.628v16.906a4.854 4.854 0 004.854 4.854h23.214a4.854 4.854 0 004.854-4.854v-16.906c0-.506.084-.996.232-1.459-23.22-5.017-41.909-22.197-49.064-44.539z"
      ></path>
      <circle
        cx="416.52"
        cy="134.731"
        r="38.172"
        fill="#7a8c98"
      ></circle>
      <path
        fill="#596c76"
        d="M398.656 134.731c0-17.564 11.867-32.348 28.018-36.796a38.171 38.171 0 00-10.154-1.376c-21.082 0-38.172 17.09-38.172 38.172s17.09 38.172 38.172 38.172c3.517 0 6.92-.485 10.154-1.376-16.151-4.448-28.018-19.232-28.018-36.796z"
      ></path>
      <circle
        cx="416.52"
        cy="134.731"
        r="12.891"
        fill="#465a61"
      ></circle>
      <path
        fill="#00c27a"
        d="M427.5 416.251H175.417c-6.904 0-12.5-5.596-12.5-12.5s5.596-12.5 12.5-12.5H427.5c6.904 0 12.5 5.596 12.5 12.5 0 6.903-5.596 12.5-12.5 12.5z"
      ></path>
      <g>
        <path
          fill="#08b865"
          d="M193.917 403.751c0-6.904 5.596-12.5 12.5-12.5h-31c-6.904 0-12.5 5.596-12.5 12.5s5.596 12.5 12.5 12.5h31c-6.904 0-12.5-5.597-12.5-12.5z"
        ></path>
      </g>
      <g>
        <path
          fill="#00c27a"
          d="M425 350.751h-40c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15h40c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z"
        ></path>
        <path
          fill="#08b865"
          d="M391 335.751c0-8.284 6.716-15 15-15h-21c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15h21c-8.284 0-15-6.716-15-15z"
        ></path>
        <circle
          cx="425"
          cy="335.751"
          r="15"
          fill="#7a8c98"
        ></circle>
        <path
          fill="#596c76"
          d="M425 335.751c0-5.549 3.021-10.382 7.5-12.977a14.912 14.912 0 00-7.5-2.023c-8.284 0-15 6.716-15 15s6.716 15 15 15c2.735 0 5.292-.744 7.5-2.023-4.479-2.595-7.5-7.428-7.5-12.977z"
        ></path>
        <g>
          <path
            fill="#00c27a"
            d="M425 292.751h-40c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15h40c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z"
          ></path>
          <circle
            cx="385"
            cy="277.751"
            r="15"
            fill="#7a8c98"
          ></circle>
          <path
            fill="#596c76"
            d="M385 277.751c0-5.549 3.021-10.382 7.5-12.977a14.912 14.912 0 00-7.5-2.023c-8.284 0-15 6.716-15 15s6.716 15 15 15c2.735 0 5.292-.744 7.5-2.023-4.479-2.595-7.5-7.428-7.5-12.977z"
          ></path>
        </g>
      </g>
      <g>
        <path
          fill="#7a8c98"
          d="M239 419.751h-23a5 5 0 01-5-5v-23a5 5 0 015-5h23a5 5 0 015 5v23a5 5 0 01-5 5z"
        ></path>
      </g>
      <g>
        <path
          fill="#596c76"
          d="M226 414.751v-23a5 5 0 015-5h-15a5 5 0 00-5 5v23a5 5 0 005 5h15a5 5 0 01-5-5z"
        ></path>
      </g>
      <g>
        <circle
          cx="37.5"
          cy="151.108"
          r="7.5"
        ></circle>
        <circle
          cx="63.5"
          cy="151.108"
          r="7.5"
        ></circle>
        <circle
          cx="89.5"
          cy="151.108"
          r="7.5"
        ></circle>
        <path d="M39.5 217.251H103a7.5 7.5 0 000-15H39.5a7.5 7.5 0 000 15zM39.5 244.251H103a7.5 7.5 0 000-15H39.5a7.5 7.5 0 000 15zM39.5 271.251H103a7.5 7.5 0 000-15H39.5a7.5 7.5 0 000 15zM39.5 316.251H103a7.5 7.5 0 000-15H39.5a7.5 7.5 0 000 15zM39.5 343.251H103a7.5 7.5 0 000-15H39.5a7.5 7.5 0 000 15z"></path>
        <path d="M499.646 110.77h-15.001a72.18 72.18 0 00-3.017-7.263l10.615-10.614c4.815-4.816 4.815-12.653-.001-17.47l-16.415-16.416c-2.333-2.333-5.436-3.619-8.735-3.619s-6.402 1.285-8.735 3.619l-10.614 10.614a72.066 72.066 0 00-7.262-3.017v-15c0-6.812-5.542-12.354-12.354-12.354h-23.215c-6.812 0-12.354 5.542-12.354 12.354v15a72.066 72.066 0 00-7.262 3.017l-10.614-10.614c-2.333-2.333-5.436-3.619-8.735-3.619s-6.402 1.285-8.735 3.619l-16.416 16.416c-4.815 4.816-4.815 12.653.001 17.47l10.614 10.613a72.18 72.18 0 00-3.017 7.263h-15.001c-3.737 0-7.085 1.675-9.353 4.306H111a7.5 7.5 0 000 15h210.04v16.262c0 6.812 5.542 12.354 12.354 12.354h15.001a72.034 72.034 0 003.018 7.262l-6.187 6.187H15v-34.564c0-4.136 3.364-7.5 7.5-7.5H76a7.5 7.5 0 000-15H22.5c-12.407 0-22.5 10.093-22.5 22.5v312.673c0 12.407 10.093 22.5 22.5 22.5h435.452c12.407 0 22.5-10.093 22.5-22.5V416a7.5 7.5 0 00-15 0v34.249c0 4.136-3.365 7.5-7.5 7.5H142.5V187.14h194.836a12.271 12.271 0 003.462 6.897l16.415 16.416c2.333 2.333 5.436 3.618 8.735 3.618s6.402-1.285 8.735-3.618l10.614-10.614a72.027 72.027 0 007.262 3.017v15.001c0 6.812 5.542 12.354 12.354 12.354h23.215c6.812 0 12.354-5.542 12.354-12.354v-15.001a72.22 72.22 0 007.262-3.017l10.614 10.614a12.251 12.251 0 007.096 3.498V381a7.5 7.5 0 0015 0V205.828l11.791-11.791c4.815-4.817 4.815-12.654-.001-17.47l-10.614-10.614a72.267 72.267 0 003.018-7.262h15.001c6.812 0 12.354-5.542 12.354-12.354v-23.214c-.003-6.811-5.545-12.353-12.357-12.353zM127.5 457.749h-105c-4.136 0-7.5-3.364-7.5-7.5v-77.998h112.5zm0-100.498H15V187.14h112.5zM497 143.691h-14.26c-5.375 0-10.104 3.457-11.765 8.603a56.991 56.991 0 01-3.53 8.496c-2.475 4.819-1.579 10.614 2.228 14.421l10.091 10.091-12.672 12.673L457 187.883c-3.807-3.808-9.604-4.703-14.421-2.227a56.986 56.986 0 01-8.496 3.529c-5.146 1.662-8.603 6.39-8.603 11.765v14.26h-17.922v-14.26c0-5.375-3.457-10.104-8.603-11.765a57.126 57.126 0 01-8.494-3.528c-4.82-2.479-10.615-1.582-14.423 2.226l-10.092 10.092-12.672-12.673 10.091-10.091c3.807-3.807 4.703-9.603 2.227-14.422a56.93 56.93 0 01-3.529-8.495c-1.662-5.146-6.39-8.603-11.765-8.603h-14.26V125.77h14.26c5.375 0 10.104-3.457 11.765-8.603a56.967 56.967 0 013.529-8.495c2.476-4.819 1.581-10.615-2.227-14.423l-10.091-10.091 12.672-12.673 10.092 10.092c3.807 3.807 9.603 4.703 14.422 2.227a56.967 56.967 0 018.495-3.529c5.146-1.662 8.603-6.39 8.603-11.765V54.251h17.922V68.51c0 5.375 3.457 10.104 8.603 11.765a57.01 57.01 0 018.495 3.529c4.819 2.475 10.615 1.581 14.421-2.227l10.092-10.092 12.672 12.673-10.09 10.092c-3.808 3.808-4.703 9.604-2.227 14.422a56.967 56.967 0 013.529 8.495c1.662 5.146 6.39 8.603 11.766 8.603H497z"></path>
        <path d="M444.096 121.292a7.5 7.5 0 1013.478-6.584c-7.728-15.821-23.459-25.649-41.054-25.649-25.184 0-45.672 20.488-45.672 45.672s20.488 45.672 45.672 45.672a45.682 45.682 0 0040.104-23.808 7.5 7.5 0 00-13.165-7.189 30.688 30.688 0 01-26.939 15.998c-16.913 0-30.672-13.76-30.672-30.672s13.759-30.672 30.672-30.672c11.817-.001 22.383 6.602 27.576 17.232z"></path>
        <path d="M396.128 134.731c0 11.244 9.147 20.391 20.392 20.391s20.392-9.147 20.392-20.391-9.147-20.392-20.392-20.392-20.392 9.148-20.392 20.392zm25.784 0c0 2.973-2.418 5.391-5.392 5.391s-5.392-2.418-5.392-5.391 2.418-5.392 5.392-5.392 5.392 2.419 5.392 5.392zM165 346.251h164a7.5 7.5 0 000-15H165a7.5 7.5 0 000 15z"></path>
        <circle
          cx="39.5"
          cy="399.251"
          r="7.5"
        ></circle>
        <circle
          cx="103"
          cy="399.251"
          r="7.5"
        ></circle>
        <circle
          cx="39.5"
          cy="429.251"
          r="7.5"
        ></circle>
        <circle
          cx="103"
          cy="429.251"
          r="7.5"
        ></circle>
        <path d="M165 288.251h164a7.5 7.5 0 000-15H165a7.5 7.5 0 000 15zM425 313.251h-40c-12.407 0-22.5 10.093-22.5 22.5s10.093 22.5 22.5 22.5h40c12.407 0 22.5-10.093 22.5-22.5s-10.093-22.5-22.5-22.5zm-21.21 30H385c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5h18.79c-.833 2.347-1.29 4.871-1.29 7.5s.458 5.153 1.29 7.5zm21.21 0c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zM425 255.251h-40c-12.407 0-22.5 10.093-22.5 22.5s10.093 22.5 22.5 22.5h40c12.407 0 22.5-10.093 22.5-22.5s-10.093-22.5-22.5-22.5zm-40 30c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zm40 0h-18.79c.833-2.347 1.29-4.871 1.29-7.5s-.458-5.153-1.29-7.5H425c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5zM165 230.251h89a7.5 7.5 0 000-15h-89a7.5 7.5 0 000 15zM175.417 423.751h31.931a12.449 12.449 0 008.653 3.5h23c3.358 0 6.405-1.338 8.653-3.5H427.5c11.028 0 20-8.972 20-20s-8.972-20-20-20H248.594c-2.295-2.747-5.742-4.5-9.594-4.5h-23c-3.851 0-7.299 1.753-9.594 4.5h-30.99c-11.028 0-20 8.972-20 20s8.973 20 20.001 20zm76.083-25h176c2.757 0 5 2.243 5 5s-2.243 5-5 5h-176zm-33-4.5h18v18h-18zm-43.083 4.5H203.5v10h-28.083c-2.757 0-5-2.243-5-5s2.243-5 5-5z"></path>
        <circle
          cx="71.25"
          cy="399.251"
          r="7.5"
        ></circle>
        <circle
          cx="71.25"
          cy="429.251"
          r="7.5"
        ></circle>
      </g>
    </svg>
  );
};

export default SettingsPageDesign;
