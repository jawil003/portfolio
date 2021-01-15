import React from "react";

interface Props {
  minWidth?: string;
  width?: string;
  height?: string;
}

/**
 * An ReactDesign React Component.
 * @author Jannik Will
 * @version 0.1
 */
const ReactDesign: React.FC<Props> = ({
  minWidth,
  width,
  height,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ minWidth }}
      width={width}
      height={height}
      viewBox="0 0 842 630"
      fill="#fff"
    >
      <path d="M0 0H842V630H0z"></path>
      <path
        fill="#F2F2F2"
        d="M618.538 295.385l6.144-2.411c.588-.232 1.168-.482 1.783-.723a53.385 53.385 0 01-27.241-22.523 53.519 53.519 0 01-7.229-34.63 53.48 53.48 0 0115.952-31.566 53.33 53.33 0 0132.143-14.673l-4.28 21.613 16.247-21.363h.142a53.37 53.37 0 0135.264 20.658 53.532 53.532 0 0110.356 39.58c-.134 1.009-.348 1.992-.535 2.983 5.002-3.956 9.692-8.323 13.206-13.396 7.133-10.306 9.55-23.006 12.011-38.554 4.877-30.793 9.273-61.926 13.233-93.041a53.36 53.36 0 01-29.473-22.27 53.504 53.504 0 01-7.979-36.101c.223-1.626.535-3.207.892-4.77.089-.392.178-.785.276-1.17.384-1.509.812-2.991 1.311-4.465.08-.24.187-.464.268-.696.446-1.224.891-2.43 1.471-3.573.196-.446.392-.893.597-1.313a51.986 51.986 0 011.98-3.742c.241-.401.499-.785.74-1.187a46.097 46.097 0 011.73-2.617c.321-.447.633-.893.963-1.33l.241-.349a53.325 53.325 0 0130.535-19.653 53.258 53.258 0 0136.021 4.47l-5.564 28.124 16.05-21.113a53.148 53.148 0 0117.321 28.25 53.217 53.217 0 01-2.768 33.033h.062c-.151.358-.338.697-.49 1.054-.294.661-.598 1.313-.892 1.965-.41.83-.891 1.643-1.293 2.447-.339.607-.669 1.215-1.034 1.786-.526.893-1.097 1.697-1.668 2.528-.338.482-.651.982-.998 1.455-.892 1.242-1.891 2.43-2.907 3.572-.357.402-.74.769-1.115 1.161a52.323 52.323 0 01-2.211 2.251c-.473.447-.972.893-1.463 1.304a33.7 33.7 0 01-2.166 1.786c-.527.42-1.062.822-1.597 1.215-.775.562-1.56 1.089-2.354 1.616-.535.348-1.07.697-1.614 1.027-.891.545-1.828 1.045-2.764 1.536-.472.241-.892.509-1.418.742a53.59 53.59 0 01-4.324 1.884c-.277.107-.571.187-.848.286-1.23.446-2.47.893-3.727 1.205-.544.152-1.097.277-1.65.411-1.025.25-2.059.482-3.103.679-.594.107-1.209.205-1.845.295-1.026.151-2.06.268-3.104.357-.615.053-1.221.107-1.845.143a61.643 61.643 0 01-3.389.053 2.074 2.074 0 00-.223 0 3166.03 3166.03 0 01-5.279 39.296 53.382 53.382 0 0116.079-14.402 53.26 53.26 0 0141.951-5.018 53.328 53.328 0 0119.013 10.203l-13.982 23.738 22.48-14.816a53.358 53.358 0 0110.254 39.438 52.517 52.517 0 01-4.012 14.236 53.409 53.409 0 01-20.484 23.805 53.29 53.29 0 01-59.941-2.16 53.424 53.424 0 01-18.723-25.217c-.205 1.321-.401 2.679-.606 3.983-2.176 13.709-4.878 30.775-14.473 44.654-6.5 9.431-15.453 16.397-24.156 22.523a314.846 314.846 0 01-17.37 11.405 53.363 53.363 0 01-21.873 12.271 334.762 334.762 0 01-29.15 13.226l-6.197 2.429c-5.573 2.179-11.28 4.412-16.942 6.788.891.08 1.783.151 2.675.267a53.382 53.382 0 0129.811 14.493 53.516 53.516 0 0115.54 29.313l-37.727 20.639 37.612-1.688a52.87 52.87 0 01-10.184 22.934 53.367 53.367 0 01-34.744 20.25 53.32 53.32 0 01-38.999-9.765l1.873 3.492a572.625 572.625 0 013.673 6.877c16.345 31.025 17.531 57.817 3.344 75.456l-11.592-9.333c13.813-17.165 2.854-44.449-4.904-59.184-1.177-2.233-2.39-4.466-3.567-6.752-10.495-19.496-22.399-41.591-17.629-65.105 7.134-35.455 45.521-50.459 76.401-62.516zM174.401 463.48l-4.797-1.884c-.464-.179-.892-.384-1.373-.563a41.697 41.697 0 0021.264-17.595 41.806 41.806 0 005.64-27.043 41.776 41.776 0 00-12.455-24.649 41.66 41.66 0 00-25.096-11.465l3.344 16.879-12.68-16.682h-.116a41.656 41.656 0 00-15.385 5.314 41.732 41.732 0 00-12.181 10.808 41.791 41.791 0 00-8.102 30.925c.107.795.277 1.554.419 2.331a49.821 49.821 0 01-10.308-10.476c-5.555-8.037-7.463-17.968-9.39-30.105a2492.355 2492.355 0 01-10.272-72.634 41.669 41.669 0 0023.004-17.4 41.778 41.778 0 006.217-28.192 42.206 42.206 0 00-.704-3.724l-.214-.893a42.85 42.85 0 00-1.026-3.465c-.062-.188-.142-.366-.214-.545a42.727 42.727 0 00-1.141-2.813c-.161-.34-.312-.688-.473-1.027a42.751 42.751 0 00-1.542-2.912 13.475 13.475 0 00-.58-.893 48.927 48.927 0 00-1.355-2.045c-.25-.348-.491-.705-.749-1.045l-.188-.268a41.689 41.689 0 00-23.842-15.356 41.647 41.647 0 00-28.135 3.46l4.352 21.97-12.546-16.486a41.521 41.521 0 00-13.527 22.061 41.57 41.57 0 002.158 25.799h-.045c.116.277.259.545.383.822.232.518.464 1.027.714 1.536.32.643.66 1.277 1.016 1.902.259.482.517.955.803 1.42.41.67.892 1.322 1.302 1.974.267.375.508.768.784 1.134a42.555 42.555 0 002.265 2.795c.277.313.58.599.892.893a78.456 78.456 0 001.73 1.786c.365.358.758.688 1.141 1.018.553.495 1.115.968 1.686 1.42.41.322.829.635 1.248.947.606.438 1.222.893 1.837 1.259.419.277.838.545 1.266.804.705.429 1.427.813 2.158 1.197.374.196.731.402 1.106.589a42.029 42.029 0 003.38 1.465c.213.089.445.143.66.223.953.349 1.925.67 2.915.947.419.116.892.214 1.284.312.803.197 1.605.384 2.425.536l1.436.232c.803.117 1.614.206 2.425.277.482.045.955.081 1.445.108.892.044 1.783.053 2.675.044h.17a2427.128 2427.128 0 004.12 30.731 41.673 41.673 0 00-12.545-11.269 41.602 41.602 0 00-47.627 3.999l10.825 18.433-17.549-11.565a41.65 41.65 0 00-8.025 30.802 40.95 40.95 0 003.147 11.128 41.715 41.715 0 0015.999 18.59 41.62 41.62 0 0046.811-1.685A41.727 41.727 0 0081.29 387.98c.16 1.027.313 2.072.473 3.108 1.694 10.716 3.808 24.041 11.298 34.901 5.082 7.359 12.073 12.798 18.868 17.585a253.63 253.63 0 0013.563 8.93 41.775 41.775 0 0017.085 9.592c7.419 3.805 15.016 7.27 22.774 10.324l4.833 1.902c4.351 1.697 8.81 3.439 13.206 5.296-.696.063-1.4.116-2.105.215a41.675 41.675 0 00-23.275 11.303 41.788 41.788 0 00-12.143 22.875l29.426 16.075-29.372-1.313a41.799 41.799 0 008.8 18.888 41.715 41.715 0 0016.817 12.279 41.666 41.666 0 0020.647 2.614 41.676 41.676 0 0019.338-7.703c-.491.893-.972 1.786-1.463 2.724a388.163 388.163 0 00-2.871 5.358c-12.76 24.23-13.687 45.163-2.604 58.944l9.033-7.288c-10.789-13.396-2.229-34.714 3.834-46.226.892-1.741 1.864-3.501 2.818-5.269 8.195-15.182 17.486-32.481 13.786-50.852-5.538-27.631-35.543-39.313-59.655-48.762z"
      ></path>
      <path
        fill="#53C1DE"
        d="M598.822 295.707a373.54 373.54 0 00-17.834-5.627 364.392 364.392 0 002.756-12.19c13.5-65.65 4.672-118.538-25.476-135.944-28.909-16.701-76.187.714-123.946 42.323a381.956 381.956 0 00-13.794 12.681 355.547 355.547 0 00-9.185-8.493c-50.033-44.502-100.155-63.247-130.313-45.788-28.882 16.745-37.451 66.463-25.279 128.684a330.142 330.142 0 004.093 18.379c-7.089 2.019-13.946 4.171-20.509 6.466-58.665 20.443-96.134 52.593-96.134 85.896 0 34.393 40.224 68.892 101.332 89.808a330.912 330.912 0 0014.981 4.698 369.94 369.94 0 00-4.352 19.808c-11.592 61.14-2.532 109.688 26.27 126.326 29.756 17.2 79.691-.483 128.306-43.047 3.843-3.366 7.695-6.939 11.592-10.672a365.761 365.761 0 0014.972 13.682c47.099 40.59 93.628 56.987 122.394 40.296 29.72-17.228 39.377-69.383 26.84-132.828a291.51 291.51 0 00-3.326-14.834 322.91 322.91 0 0010.308-3.224c63.524-21.076 104.863-55.156 104.863-90.013 0-33.428-38.681-65.748-98.532-86.387h-.027z"
      ></path>
      <path
        fill="#fff"
        d="M585.046 449.602a308.369 308.369 0 01-9.31 2.92 555.813 555.813 0 00-28.061-70.312 556.919 556.919 0 0026.973-69.285 344.585 344.585 0 0116.47 5.207c51.282 17.674 82.562 43.814 82.562 63.962 0 21.434-33.786 49.307-88.634 67.508zm-22.757 45.172c5.547 28.051 6.332 53.415 2.676 73.232-3.3 17.817-9.934 29.695-18.137 34.455-17.469 10.118-54.813-3.036-95.091-37.75a343.128 343.128 0 01-13.937-12.727 557.382 557.382 0 0046.448-59.068 552.233 552.233 0 0075.054-11.61 309.876 309.876 0 013.005 13.396l-.018.072zM332.125 600.728c-17.067 6.038-30.657 6.207-38.869 1.465-17.478-10.101-24.745-49.119-14.829-101.364a368.538 368.538 0 014.039-18.424 557.428 557.428 0 0074.68 10.833 575.814 575.814 0 0047.572 58.853 285.459 285.459 0 01-10.558 9.744c-21.499 18.826-43.051 32.151-62.035 38.893zm-79.932-151.26c-27.027-9.252-49.338-21.273-64.639-34.384-13.741-11.788-20.679-23.496-20.679-32.99 0-20.21 30.086-45.993 80.253-63.506a330.829 330.829 0 0119.074-6.011 569.483 569.483 0 0027.009 70.089 577.69 577.69 0 00-27.339 71.089 284.884 284.884 0 01-13.679-4.287zm26.796-182.67c-10.415-53.308-3.505-93.523 13.901-103.597 18.538-10.717 59.53 4.573 102.741 43.002a308.15 308.15 0 018.311 7.68 567.73 567.73 0 00-47.197 58.515 577.304 577.304 0 00-73.949 11.511 329.222 329.222 0 01-3.807-17.102v-.009zm239.072 59.113a755.609 755.609 0 00-16.844-27.757c17.683 2.242 34.616 5.207 50.524 8.85a505.621 505.621 0 01-17.736 47.789 809.958 809.958 0 00-15.944-28.882zm-97.516-95.086a508.188 508.188 0 0132.61 39.42 694.495 694.495 0 00-65.495 0c10.762-14.218 21.793-27.435 32.885-39.411v-.009zm-98.086 95.246a704.89 704.89 0 00-15.65 28.704c-6.892-16.37-12.786-32.472-17.602-48.021 15.81-3.572 32.672-6.439 50.239-8.645a680.551 680.551 0 00-17.005 27.962h.018zm17.486 141.687a502.618 502.618 0 01-51.05-8.225c4.896-15.816 10.924-32.267 17.968-48.994a698.684 698.684 0 0015.703 28.721 678.607 678.607 0 0017.361 28.498h.018zm81.269 67.276c-11.235-12.093-22.426-25.489-33.34-39.966 10.611.423 21.418.635 32.422.635a736.77 736.77 0 0033.447-.751 503.227 503.227 0 01-32.547 40.082h.018zM534.183 409.69a503.296 503.296 0 0118.655 48.816 499.864 499.864 0 01-51.719 8.832 841.807 841.807 0 0017.014-28.248 732.295 732.295 0 0016.05-29.4zm-36.559 17.558a781.996 781.996 0 01-26.582 42.957c-16.443 1.179-33.43 1.786-50.746 1.786-17.317 0-34.018-.536-50.176-1.589a678.077 678.077 0 01-27.099-43.02 654.346 654.346 0 01-23.639-44.725 676.23 676.23 0 0123.568-44.743 663.521 663.521 0 0126.867-42.868 668.605 668.605 0 0150.461-1.902c17.085 0 34.081.661 50.55 1.911a732.826 732.826 0 0126.751 42.698 766.134 766.134 0 0123.889 44.538 710.934 710.934 0 01-23.818 44.921l-.026.036zm48.838-264.761c18.556 10.717 25.77 53.941 14.115 110.625a324.156 324.156 0 01-2.496 11.03 566.197 566.197 0 00-74.091-11.727 558.321 558.321 0 00-46.841-58.55 357.738 357.738 0 0112.742-11.708c40.911-35.66 79.147-49.735 96.571-39.67z"
      ></path>
      <path
        fill="#53C1DE"
        d="M420.278 332.529a49.432 49.432 0 0127.495 8.353A49.55 49.55 0 01466 363.126a49.631 49.631 0 012.816 28.638 49.588 49.588 0 01-13.544 25.379 49.474 49.474 0 01-25.339 13.565 49.42 49.42 0 01-28.594-2.821 49.497 49.497 0 01-22.21-18.256 49.619 49.619 0 01-8.34-27.537 49.637 49.637 0 013.764-18.969 49.57 49.57 0 0110.728-16.082 49.498 49.498 0 0116.057-10.744 49.409 49.409 0 0118.94-3.77"
      ></path>
      <path
        fill="#3F3D56"
        d="M432.69 18.183c0 2.932-.868 5.799-2.494 8.237a14.814 14.814 0 01-6.643 5.46 14.784 14.784 0 01-16.132-3.214 14.84 14.84 0 012.243-22.81 14.788 14.788 0 018.224-2.498 14.71 14.71 0 0110.488 4.321 14.77 14.77 0 014.314 10.504z"
      ></path>
      <path
        fill="#3F3D56"
        d="M406.064 21.925a14.865 14.865 0 01-.241-13.92A14.81 14.81 0 01417.202.009a14.781 14.781 0 00-11.025 4.374 14.835 14.835 0 00-2.792 16.954 14.827 14.827 0 009.039 7.687 14.78 14.78 0 006.035.52 14.784 14.784 0 01-7.196-2.18 14.82 14.82 0 01-5.199-5.438zM439.039 38.831h-39.654v61.953h39.654V38.831z"
      ></path>
      <path
        fill="#000"
        d="M439.039 38.831h-39.654v61.953h39.654V38.831z"
        opacity="0.1"
      ></path>
      <path
        fill="#A0616A"
        d="M336.744 263.601s-4.236 11.654-14.267 13.244c-10.032 1.59-15.864 4.233-15.864 4.233l23.791 15.352 12.689-1.589s1.587-16.415 6.875-20.121c5.287-3.707-13.224-11.119-13.224-11.119zM508.556 263.601s4.235 11.654 14.267 13.244c10.032 1.59 15.863 4.233 15.863 4.233l-23.79 15.352-12.689-1.589s-1.587-16.415-6.875-20.121c-5.288-3.707 13.224-11.119 13.224-11.119z"
      ></path>
      <path
        fill="#3F3D56"
        d="M392.778 160.879s-6.34 3.179-8.453 9.538c0 0-11.592 3.706-17.977 13.762 0 0-7.936 8.476-8.988 12.709-1.052 4.233-13.18 29.65-13.18 29.65s-12.162 39.715-18.502 43.948c0 0 20.09-4.233 23.79 15.888 0 0 4.753 0 10.041-18.531 5.287-18.531 17.976-41.305 17.976-41.305s4.227-15.879 7.927-18.531c3.701-2.653 9.515-14.825 14.803-11.61 5.287 3.215 40.18-.536 40.18-.536s20.598 9.502 21.115 15.852c.517 6.35 4.227 6.886 4.753 12.182.526 5.296 20.09 47.118 20.09 47.118s3.7 11.61 4.761 14.29c0 0 11.592-28.061 26.965-12.173 0 0-.535-10.592-5.288-16.969-4.752-6.376-25.377-56.12-25.377-56.12s-2.114-7.413-4.227-9.53c-2.113-2.116-18.512-19.067-24.325-19.067 0 0-3.166-7.939-6.867-9.002l-59.217-1.563zM345.197 291.134a25.708 25.708 0 01-13.027 1.628 25.747 25.747 0 01-12.137-5.012 50.223 50.223 0 00-11.226-6.52c-5.609-2.268-12.314-3.947-14.356-.152-3.701 6.886 44.932 23.828 44.932 23.828s6.349-3.707 5.814-13.772zM500.103 291.134a25.739 25.739 0 0025.163-3.384 50.23 50.23 0 0111.227-6.52c5.609-2.268 12.314-3.947 14.356-.152 3.701 6.886-44.933 23.828-44.933 23.828s-6.348-3.707-5.813-13.772z"
      ></path>
      <path
        fill="#A0616A"
        d="M410.059 73.795c-.196 1.84-.803 3.831-2.372 4.805-1.284.804-2.907.741-4.387 1.045a10.23 10.23 0 00-6.973 6.046 15.664 15.664 0 00-.669 9.422c.35 1.535.803 3.045 1.355 4.519 1.552 4.394 3.425 8.752 6.323 12.405a52.594 52.594 0 008.292 7.832c1.882 1.536 3.826 3.099 6.144 3.822 1.572.416 3.19.632 4.815.643 2.007.09 4.147.152 5.885-.848 2.676-1.545 3.469-4.957 4.923-7.698 1.23-2.322 3.067-4.296 4.217-6.663a26.339 26.339 0 001.784-5.823l2.47-10.985c.891-3.991 1.712-8.493-.526-11.913a2.042 2.042 0 00-.66-.688c-.431-.17-.9-.216-1.356-.134a14.642 14.642 0 01-8.159-1.866 3.507 3.507 0 01-1.025-.804 4.224 4.224 0 01-.624-1.893 19.83 19.83 0 00-1.142-3.975 2.678 2.678 0 00-.775-1.196 2.808 2.808 0 00-1.258-.42 101.9 101.9 0 00-11.529-1.206c-1.267-.062-3.175-.571-4.049.554-.873 1.125-.597 3.68-.704 5.02z"
      ></path>
      <path
        fill="#000"
        d="M410.059 73.795c-.196 1.84-.803 3.831-2.372 4.805-1.284.804-2.907.741-4.387 1.045a10.23 10.23 0 00-6.973 6.046 15.664 15.664 0 00-.669 9.422c.35 1.535.803 3.045 1.355 4.519 1.552 4.394 3.425 8.752 6.323 12.405a52.594 52.594 0 008.292 7.832c1.882 1.536 3.826 3.099 6.144 3.822 1.572.416 3.19.632 4.815.643 2.007.09 4.147.152 5.885-.848 2.676-1.545 3.469-4.957 4.923-7.698 1.23-2.322 3.067-4.296 4.217-6.663a26.339 26.339 0 001.784-5.823l2.47-10.985c.891-3.991 1.712-8.493-.526-11.913a2.042 2.042 0 00-.66-.688c-.431-.17-.9-.216-1.356-.134a14.642 14.642 0 01-8.159-1.866 3.507 3.507 0 01-1.025-.804 4.224 4.224 0 01-.624-1.893 19.83 19.83 0 00-1.142-3.975 2.678 2.678 0 00-.775-1.196 2.808 2.808 0 00-1.258-.42 101.9 101.9 0 00-11.529-1.206c-1.267-.062-3.175-.571-4.049.554-.873 1.125-.597 3.68-.704 5.02z"
        opacity="0.1"
      ></path>
      <path
        fill="#743600"
        d="M402.899 80.11a23.982 23.982 0 00-6.358-1.001c-5.101-.125-10.558 1.634-13.5 5.805a13.715 13.715 0 00-2.042 10.243 21.06 21.06 0 004.637 9.521 28.644 28.644 0 013.566 4.679c1.409 2.68 1.454 5.886 1.837 8.931.892 7.252 3.977 14.066 5.199 21.273 1.221 7.207.169 15.558-5.511 20.139-.954.768-2.113 1.581-2.193 2.804-.125 1.956 2.416 2.787 4.369 2.974 5.84.554 11.833 1.099 17.504-.41 2.345-.626 4.61-1.599 7-2.046 6.063-1.134 12.162 1.197 18.235 2.314a80.67 80.67 0 0013.295 1.08 7.061 7.061 0 003.059-.402 2.452 2.452 0 001.551-2.447 4.246 4.246 0 00-1.052-1.786c-3.067-3.795-4.004-8.841-4.842-13.655l-2.809-16.174c-1.507-8.645-2.907-18.04 1.177-25.801 2.934-5.581 8.347-9.511 11.441-15.003a8.805 8.805 0 001.382-5.609c-.464-2.76-2.952-4.733-5.502-5.885a20.666 20.666 0 00-15.533-.572c.089 3.867-.892 7.779-1.525 11.61l-1.079 6.252a79.385 79.385 0 01-2.417 10.895 11.451 11.451 0 01-1.935 3.948 10.184 10.184 0 01-3.415 2.491 20.313 20.313 0 01-9.042 2.072 12.043 12.043 0 01-3.994-.616 16.955 16.955 0 01-5.502-3.876 9.012 9.012 0 01-1.454-1.581 8.878 8.878 0 01-.989-2.384 49.619 49.619 0 01-1.704-6.68c-.267-1.733-.356-3.492-.481-5.243-.348-5.17-.348-10.886-1.373-15.86z"
      ></path>
      <path
        fill="#A0616A"
        d="M397.54 182.59s-2.114 28.069 11.101 32.829c13.215 4.76 1.588-23.3 1.588-23.3l-4.236-8.466-8.453-1.063zM442.472 182.59s2.114 28.069-11.101 32.829c-13.215 4.76-1.588-23.3-1.588-23.3l4.236-8.466 8.453-1.063z"
      ></path>
      <path
        fill="#000"
        d="M385.903 88.906l-4.227 6.886s3.701 23.827 4.227 28.06a55.573 55.573 0 002.122 9.002s.526 12.709.526 17.478c0 4.769 2.675 12.708 2.675 12.708a57.966 57.966 0 002.675 13.236c2.114 5.823 4.227 12.708 4.227 12.708s2.675-7.412 13.215 3.706a6.416 6.416 0 000-9.002s-3.165-14.289-3.165-21.71c0-7.422-5.823-42.868-5.823-42.868s-3.781-40.296-16.452-30.204z"
        opacity="0.1"
      ></path>
      <path
        fill="#743600"
        d="M384.851 88.343l-4.227 6.886s3.701 23.827 4.227 28.06a55.272 55.272 0 002.131 9.003s.526 12.708.526 17.468 2.675 12.709 2.675 12.709a57.744 57.744 0 002.675 13.235c2.114 5.832 4.236 12.709 4.236 12.709s2.675-7.413 13.215 3.706a6.416 6.416 0 000-8.993s-3.175-14.29-3.175-21.711c0-7.422-5.814-42.868-5.814-42.868s-3.78-40.269-16.469-30.204z"
      ></path>
      <path
        fill="#000"
        d="M454.635 84.637l2.675 3.153s3.112 18.022-3.763 40.795l-2.113 20.648s-3.701 17.478-4.227 21.711c-.526 4.233-.526 4.76-1.587 6.35a2.045 2.045 0 000 2.679l-3.175 11.61s-4.752-5.823-14.267 1.59c0 0-2.675-4.233-.535-7.94 2.14-3.706 2.114-5.296 1.588-6.358-.527-1.063 2.113-6.35 2.113-7.413 0-1.063 3.727-25.399 3.727-25.399s1.587-23.827 3.175-31.767c.972-4.885.954-15.772.784-23.434-.169-7.984 9.479-12.307 15.159-6.698.134.143.294.277.446.473z"
        opacity="0.1"
      ></path>
      <path
        fill="#743600"
        d="M456.222 83.548l2.675 3.152s3.112 18.031-3.763 40.796l-2.113 20.648s-3.701 17.477-4.227 21.711c-.526 4.233-.535 4.769-1.587 6.358a2.036 2.036 0 000 2.679l-3.156 11.646s-4.753-5.832-14.268 1.581c0 0-2.675-4.233-.526-7.94 2.149-3.706 2.114-5.295 1.587-6.349-.526-1.054 2.114-6.359 2.114-7.413 0-1.054 3.7-25.417 3.7-25.417s1.588-23.827 3.175-31.775c1.587-7.949.526-31.767.526-31.767s8.462-5.823 15.863 2.09z"
      ></path>
      <path
        fill="#A0616A"
        d="M420.795 76.17c11.682 0 21.151-9.484 21.151-21.183 0-11.7-9.469-21.184-21.151-21.184-11.681 0-21.151 9.484-21.151 21.184 0 11.7 9.47 21.184 21.151 21.184z"
      ></path>
      <path
        fill="#000"
        d="M431.825 23.184a14.822 14.822 0 01-5.328 7.062 14.789 14.789 0 01-22.394-6.669c8.257-3.33 16.692-.366 16.692-.366 4.218-1.482 7.874-1.348 11.03-.026z"
        opacity="0.1"
      ></path>
      <path
        fill="#3F3D56"
        d="M420.795 24.274s-40.706-14.29-30.656 55.067c0 0 8.988 5.823 15.854 2.117 0 0-4.753-48.182 13.75-46.065 18.503 2.116 15.328 45.01 15.328 45.01s10.576 3.171 13.75-2.678c3.175-5.85-1.061-62.944-28.026-53.451z"
      ></path>
      <path
        fill="#000"
        d="M419.743 32.214c-12.698-1.447-14.446 20.781-14.267 34.874.151-14.012 2.505-33.044 14.267-31.695 13.206 1.51 15.373 23.81 15.524 36.437.152-11.592-1.114-37.964-15.524-39.616zM390.139 76.162a142.516 142.516 0 01-1.579-18.335 136.035 136.035 0 001.579 21.514s8.988 5.823 15.854 2.117c0 0-.107-1.143-.232-3.064-6.839 3.457-15.622-2.232-15.622-2.232zM448.821 74.617c-2.96 5.43-12.332 3.045-13.598 2.679-.063 1.965-.152 3.144-.152 3.144s10.576 3.17 13.75-2.68c.651-1.196.99-4.581.892-9.109-.089 2.903-.401 5.073-.892 5.966z"
        opacity="0.1"
      ></path>
      <path
        fill="#F2F2F2"
        d="M222.018 38.242l-16.273 10.333 9.88-17.996a16.037 16.037 0 00-9.809-3.519h-.268a19.214 19.214 0 01-3.37-.25l-5.52 3.501 2.363-4.304a19.673 19.673 0 01-9.648-7.333l-9.871 6.252 6.242-11.36c-5.778-6.94-13.554-11.2-22.123-11.2-10.264 0-19.403 6.118-25.306 15.648a18.952 18.952 0 01-7.151 6.772 18.915 18.915 0 01-9.578 2.265h-.553c-11.333 0-20.509 12.87-20.509 28.749s9.185 28.739 20.509 28.739a15.317 15.317 0 007.134-1.786c7.392-3.85 17.094-3.92 24.834-.483a25.822 25.822 0 0021.115.045c7.687-3.367 17.272-3.295 24.62.482a15.345 15.345 0 007.071 1.787c11.334 0 20.509-12.87 20.509-28.74a36.532 36.532 0 00-4.298-17.602z"
      ></path>
      <path
        fill="#000"
        d="M191.335 80.297a30.277 30.277 0 00-17.585 1.91 25.824 25.824 0 01-21.106-.044c-7.749-3.438-17.45-3.367-24.843.483a15.318 15.318 0 01-7.133 1.786c-10.068 0-18.441-10.164-20.188-23.56a19.26 19.26 0 005.029-5.43c5.939-9.52 15.043-15.655 25.306-15.655 10.264 0 19.297 6.046 25.2 15.468a19.433 19.433 0 007.157 6.803 19.407 19.407 0 009.571 2.405h.232c8.025.008 14.98 6.448 18.36 15.834z"
        opacity="0.03"
      ></path>
      <path
        fill="#F2F2F2"
        d="M647.42 59.283l-8.088 5.153 4.931-8.931a8.017 8.017 0 00-4.913-1.786h-.125a9.607 9.607 0 01-1.685-.125l-2.756 1.786 1.16-2.197a9.814 9.814 0 01-4.816-3.653l-4.922 3.126 3.112-5.662a14.412 14.412 0 00-11.03-5.59c-5.127 0-9.684 3.053-12.626 7.805a9.416 9.416 0 01-8.347 4.465h-.276c-5.653 0-10.237 6.421-10.237 14.29 0 7.867 4.584 14.333 10.237 14.333a7.681 7.681 0 003.567-.893 14.75 14.75 0 0112.385-.241 12.936 12.936 0 0010.531 0 14.767 14.767 0 0112.279.241 7.668 7.668 0 003.567.893c5.653 0 10.236-6.412 10.236-14.334a18.128 18.128 0 00-2.184-8.68z"
      ></path>
      <path
        fill="#000"
        d="M632.127 80.261a15.136 15.136 0 00-8.765.956 12.928 12.928 0 01-10.531 0 14.765 14.765 0 00-12.395.24 7.613 7.613 0 01-3.566.894c-5.03 0-9.203-5.064-10.077-11.744a9.74 9.74 0 002.515-2.68c2.943-4.75 7.508-7.796 12.626-7.796 5.119 0 9.622 3.01 12.564 7.707a9.68 9.68 0 008.347 4.59h.133c4.004-.062 7.437 3.153 9.149 7.833z"
        opacity="0.03"
      ></path>
      <path
        fill="#F2F2F2"
        d="M116.209 192.744l13.073 8.288-7.919-14.423a12.906 12.906 0 017.892-2.814h.205c.896.014 1.791-.052 2.675-.196l4.414 2.804-1.917-3.447a15.858 15.858 0 007.731-5.876l7.909 5.019-4.94-9.101c4.628-5.555 10.861-8.931 17.718-8.931 8.23 0 15.551 4.894 20.286 12.503a15.163 15.163 0 005.716 5.423 15.13 15.13 0 007.66 1.82h.446c9.077 0 16.433 10.306 16.433 23.024 0 12.717-7.356 23.032-16.433 23.032a12.33 12.33 0 01-5.734-1.438 23.689 23.689 0 00-19.894-.384 20.718 20.718 0 01-16.942 0 23.725 23.725 0 00-19.724.384 12.388 12.388 0 01-5.663 1.403c-9.086 0-16.443-10.307-16.443-23.033a29.323 29.323 0 013.451-14.057z"
      ></path>
      <path
        fill="#000"
        d="M140.776 226.44a24.355 24.355 0 0114.088 1.536 20.739 20.739 0 0016.943 0 23.686 23.686 0 0119.902.384 12.31 12.31 0 005.725 1.438c8.07 0 14.775-8.136 16.175-18.871a15.568 15.568 0 01-4.03-4.358c-4.735-7.627-12.056-12.503-20.286-12.503-8.231 0-15.453 4.84-20.188 12.396a15.557 15.557 0 01-13.376 7.368h-.205c-6.473-.063-12.038 5.099-14.748 12.61z"
        opacity="0.03"
      ></path>
    </svg>
  );
};

ReactDesign.defaultProps = {
  width: "842px",
  height: "630px",
};

export default ReactDesign;
