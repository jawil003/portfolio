import React from "react";

interface Props {
  width?: string;
  height?: string;
}

/**
 * An ReactDesign React Component.
 * @author Jannik Will
 * @version 0.1
 */
const ReactDesign: React.FC<Props> = ({
  width,
  height,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 836 654"
    >
      <g clipPath="url(#clip0)">
        <path
          fill="#F2F2F2"
          d="M685.038 295.758l6.144-2.412c.588-.232 1.168-.482 1.783-.723a53.385 53.385 0 01-27.241-22.523 53.516 53.516 0 01-7.229-34.63 53.485 53.485 0 0115.952-31.566 53.329 53.329 0 0132.143-14.672l-4.28 21.612 16.247-21.362h.142a53.37 53.37 0 0135.264 20.658 53.53 53.53 0 0110.356 39.58c-.134 1.009-.348 1.991-.535 2.983 5.002-3.957 9.692-8.324 13.206-13.397 7.133-10.306 9.55-23.005 12.011-38.554 4.877-30.793 9.273-61.926 13.233-93.04a53.361 53.361 0 01-29.473-22.27 53.504 53.504 0 01-7.979-36.102c.223-1.625.535-3.206.892-4.769.089-.393.178-.786.276-1.17.384-1.51.812-2.992 1.311-4.465.08-.242.187-.465.268-.697.446-1.223.891-2.43 1.471-3.572.196-.447.392-.893.597-1.313a51.986 51.986 0 011.98-3.742c.241-.402.499-.786.74-1.188a46.1 46.1 0 011.73-2.617c.321-.446.633-.893.963-1.33l.241-.349a53.325 53.325 0 0130.535-19.652 53.258 53.258 0 0136.021 4.47l-5.564 28.123 16.05-21.112a53.148 53.148 0 0117.321 28.249 53.216 53.216 0 01-2.768 33.034h.062c-.151.357-.339.696-.49 1.054-.294.66-.598 1.312-.892 1.964-.41.83-.891 1.644-1.293 2.447-.339.608-.669 1.215-1.034 1.787-.526.893-1.097 1.696-1.668 2.527-.338.482-.651.982-.998 1.456-.892 1.241-1.891 2.429-2.907 3.572-.357.402-.74.768-1.115 1.161a52.378 52.378 0 01-2.211 2.25c-.473.447-.972.894-1.463 1.304a33.67 33.67 0 01-2.166 1.787c-.527.42-1.062.821-1.597 1.214-.775.563-1.56 1.09-2.354 1.617-.535.348-1.07.696-1.614 1.027-.891.544-1.828 1.045-2.764 1.536-.472.241-.892.509-1.418.741a52.89 52.89 0 01-4.324 1.884c-.277.108-.571.188-.848.286-1.23.447-2.47.893-3.727 1.206-.544.152-1.097.277-1.65.411-1.025.25-2.059.482-3.103.678a45.82 45.82 0 01-1.845.295c-1.026.152-2.06.268-3.103.357-.616.054-1.222.107-1.846.143a60.666 60.666 0 01-3.389.054 1.66 1.66 0 00-.223 0 3165.872 3165.872 0 01-5.279 39.295 53.366 53.366 0 0116.079-14.401 53.28 53.28 0 0141.951-5.019 53.315 53.315 0 0119.013 10.204l-13.982 23.738 22.48-14.817a53.36 53.36 0 0110.254 39.439 52.5 52.5 0 01-4.012 14.235 53.409 53.409 0 01-20.484 23.805 53.283 53.283 0 01-59.941-2.159 53.422 53.422 0 01-18.723-25.218c-.205 1.322-.401 2.679-.606 3.983-2.176 13.709-4.878 30.776-14.473 44.654-6.5 9.431-15.453 16.397-24.156 22.523a314.272 314.272 0 01-17.37 11.405 53.351 53.351 0 01-21.873 12.271 334.762 334.762 0 01-29.15 13.226l-6.197 2.43c-5.573 2.179-11.28 4.411-16.942 6.787.891.08 1.783.152 2.675.268a53.374 53.374 0 0129.811 14.492 53.52 53.52 0 0115.54 29.313l-37.727 20.639 37.612-1.688a52.878 52.878 0 01-10.184 22.935 53.367 53.367 0 01-34.744 20.25 53.325 53.325 0 01-38.999-9.766l1.873 3.492c1.248 2.304 2.479 4.6 3.673 6.877 16.345 31.025 17.531 57.818 3.344 75.456l-11.592-9.333c13.813-17.165 2.854-44.448-4.904-59.184-1.177-2.233-2.39-4.465-3.567-6.752-10.495-19.495-22.399-41.59-17.629-65.105 7.134-35.455 45.521-50.459 76.401-62.515zM240.901 463.853l-4.797-1.885c-.464-.178-.892-.384-1.373-.562a41.704 41.704 0 0021.264-17.596 41.803 41.803 0 00-6.815-51.692 41.653 41.653 0 00-25.096-11.464l3.344 16.879-12.68-16.683h-.116a41.64 41.64 0 00-15.385 5.315 41.718 41.718 0 00-12.181 10.808 41.791 41.791 0 00-8.102 30.924c.107.795.277 1.554.419 2.331a49.816 49.816 0 01-10.308-10.475c-5.555-8.038-7.463-17.969-9.389-30.106a2493.588 2493.588 0 01-10.273-72.634 41.664 41.664 0 0023.004-17.4 41.777 41.777 0 006.217-28.191 42.228 42.228 0 00-.704-3.725l-.214-.893a42.85 42.85 0 00-1.026-3.465c-.062-.187-.142-.366-.214-.545a42.951 42.951 0 00-1.141-2.813c-.161-.339-.312-.688-.473-1.027a42.728 42.728 0 00-1.542-2.911 13.218 13.218 0 00-.58-.893 48.313 48.313 0 00-1.355-2.046c-.25-.348-.491-.705-.749-1.044l-.188-.268a41.683 41.683 0 00-23.842-15.356 41.636 41.636 0 00-28.135 3.46l4.352 21.97-12.546-16.487a41.521 41.521 0 00-13.526 22.062 41.568 41.568 0 002.157 25.798h-.045c.116.277.259.545.383.822.232.518.464 1.027.714 1.536.321.643.66 1.277 1.016 1.902.259.483.518.956.803 1.42.41.67.892 1.322 1.302 1.974.267.375.508.768.784 1.134a42.734 42.734 0 002.265 2.796c.277.312.58.598.892.893a84.31 84.31 0 001.73 1.786c.366.357.758.687 1.141 1.018.553.494 1.115.967 1.686 1.42.41.321.829.634 1.248.947.606.437 1.222.893 1.837 1.259.419.277.838.545 1.266.804.705.428 1.427.812 2.158 1.196.375.197.731.402 1.106.59a41.594 41.594 0 003.379 1.464c.214.09.446.143.66.224.954.348 1.926.669 2.916.946.419.116.892.215 1.284.313.803.196 1.605.384 2.425.536l1.436.232a44.51 44.51 0 002.425.277c.482.044.955.08 1.445.107.892.045 1.783.054 2.675.045h.17a2423.323 2423.323 0 004.119 30.73 41.672 41.672 0 00-12.544-11.268 41.583 41.583 0 00-32.768-3.959 41.631 41.631 0 00-14.86 7.958l10.826 18.433-17.549-11.566a41.655 41.655 0 00-8.025 30.803 40.943 40.943 0 003.148 11.127 41.71 41.71 0 0015.998 18.59 41.62 41.62 0 0046.812-1.684 41.729 41.729 0 0014.624-19.692c.161 1.027.313 2.072.473 3.108 1.694 10.717 3.808 24.042 11.298 34.901 5.083 7.359 12.073 12.798 18.868 17.585a253.647 253.647 0 0013.563 8.931 41.798 41.798 0 0017.085 9.592c7.419 3.804 15.016 7.269 22.774 10.323l4.833 1.903c4.351 1.697 8.81 3.438 13.206 5.296-.696.062-1.4.116-2.105.214a41.681 41.681 0 00-23.275 11.303 41.795 41.795 0 00-12.143 22.875l29.426 16.075-29.372-1.312a41.809 41.809 0 008.8 18.888 41.72 41.72 0 0016.817 12.278 41.644 41.644 0 0020.647 2.614 41.676 41.676 0 0019.338-7.703c-.491.894-.972 1.787-1.463 2.724a394.124 394.124 0 00-2.871 5.359c-12.76 24.229-13.687 45.163-2.604 58.943l9.033-7.288c-10.789-13.396-2.229-34.713 3.835-46.225.891-1.742 1.863-3.501 2.817-5.269 8.195-15.183 17.486-32.482 13.786-50.852-5.538-27.632-35.543-39.313-59.655-48.762z"
        ></path>
        <path
          fill="#53C1DE"
          d="M665.322 296.079a373.527 373.527 0 00-17.834-5.626 364.45 364.45 0 002.756-12.191c13.5-65.65 4.672-118.538-25.476-135.944-28.909-16.7-76.187.715-123.946 42.323a381.068 381.068 0 00-13.794 12.682 352.024 352.024 0 00-9.185-8.493c-50.033-44.502-100.155-63.248-130.312-45.788-28.883 16.745-37.452 66.462-25.28 128.683a330.176 330.176 0 004.093 18.38c-7.089 2.018-13.946 4.17-20.509 6.465-58.665 20.443-96.134 52.594-96.134 85.897 0 34.392 40.224 68.892 101.332 89.807a330.912 330.912 0 0014.981 4.698 369.94 369.94 0 00-4.352 19.808c-11.592 61.14-2.532 109.688 26.27 126.326 29.756 17.201 79.691-.482 128.306-43.046 3.843-3.367 7.695-6.939 11.592-10.672a366.482 366.482 0 0014.972 13.682c47.099 40.59 93.628 56.987 122.394 40.295 29.72-17.227 39.377-69.383 26.84-132.827a291.27 291.27 0 00-3.326-14.834 325.49 325.49 0 0010.308-3.224c63.524-21.077 104.864-55.157 104.864-90.013 0-33.428-38.682-65.749-98.533-86.388h-.027z"
        ></path>
        <path
          fill="#fff"
          d="M651.546 449.974a308.353 308.353 0 01-9.31 2.921 555.694 555.694 0 00-28.061-70.312 557.04 557.04 0 0026.973-69.285 344.592 344.592 0 0116.47 5.206c51.282 17.674 82.562 43.815 82.562 63.963 0 21.433-33.786 49.306-88.634 67.507zm-22.756 45.172c5.546 28.052 6.331 53.415 2.675 73.233-3.3 17.816-9.934 29.694-18.137 34.454-17.469 10.119-54.813-3.036-95.091-37.75a342.358 342.358 0 01-13.937-12.726 557.484 557.484 0 0046.448-59.068 552.39 552.39 0 0075.054-11.61 308.062 308.062 0 013.005 13.396l-.017.071zM398.625 601.101c-17.067 6.037-30.657 6.207-38.869 1.464-17.478-10.1-24.745-49.119-14.829-101.364a368.783 368.783 0 014.039-18.424 557.105 557.105 0 0074.68 10.833 575.826 575.826 0 0047.572 58.854 285.431 285.431 0 01-10.558 9.743c-21.499 18.826-43.051 32.151-62.035 38.894zM318.693 449.84c-27.027-9.252-49.338-21.273-64.639-34.383-13.741-11.789-20.678-23.497-20.678-32.99 0-20.211 30.085-45.994 80.252-63.507a330.819 330.819 0 0119.074-6.01 569.407 569.407 0 0027.009 70.088 577.813 577.813 0 00-27.339 71.089 284.884 284.884 0 01-13.679-4.287zm26.796-182.67c-10.415-53.307-3.505-93.523 13.901-103.597 18.538-10.716 59.53 4.573 102.741 43.002a306.581 306.581 0 018.311 7.681 567.718 567.718 0 00-47.197 58.514 577.334 577.334 0 00-73.949 11.512 329.028 329.028 0 01-3.807-17.103v-.009zm239.072 59.113a757.298 757.298 0 00-16.844-27.757c17.683 2.242 34.616 5.207 50.524 8.851a505.705 505.705 0 01-17.736 47.788 810.832 810.832 0 00-15.944-28.882zm-97.516-95.086a508.204 508.204 0 0132.61 39.421 694.495 694.495 0 00-65.495 0c10.762-14.218 21.793-27.436 32.885-39.412v-.009zm-98.086 95.247a705.52 705.52 0 00-15.65 28.703c-6.892-16.37-12.786-32.472-17.602-48.02 15.81-3.573 32.672-6.439 50.239-8.645a680.312 680.312 0 00-17.005 27.962h.018zm17.486 141.687a502.9 502.9 0 01-51.05-8.226c4.896-15.816 10.924-32.267 17.968-48.994a698.721 698.721 0 0015.703 28.722 679.252 679.252 0 0017.361 28.498h.018zm81.269 67.275c-11.235-12.092-22.426-25.488-33.34-39.965a814.06 814.06 0 0032.422.634c11.295 0 22.444-.25 33.447-.75a503.39 503.39 0 01-32.547 40.081h.018zm112.969-125.343a503.278 503.278 0 0118.655 48.815 499.867 499.867 0 01-51.719 8.833 843.829 843.829 0 0017.014-28.248 732.295 732.295 0 0016.05-29.4zm-36.559 17.558a782.753 782.753 0 01-26.582 42.957c-16.443 1.179-33.43 1.786-50.746 1.786-17.317 0-34.018-.536-50.176-1.59a677.77 677.77 0 01-27.099-43.019 654.603 654.603 0 01-23.639-44.726 676.48 676.48 0 0123.568-44.743 663.521 663.521 0 0126.867-42.868 668.605 668.605 0 0150.461-1.902c17.085 0 34.081.661 50.55 1.911a732.826 732.826 0 0126.751 42.698 766.785 766.785 0 0123.889 44.538 710.167 710.167 0 01-23.818 44.922l-.026.036zm48.838-264.762c18.556 10.717 25.77 53.942 14.115 110.625a323.613 323.613 0 01-2.496 11.03 566.026 566.026 0 00-74.091-11.726 558.218 558.218 0 00-46.841-58.55 356.797 356.797 0 0112.742-11.708c40.911-35.661 79.147-49.736 96.571-39.671z"
        ></path>
        <path
          fill="#53C1DE"
          d="M486.778 332.901a49.44 49.44 0 0127.495 8.353 49.558 49.558 0 0118.227 22.245 49.629 49.629 0 01-10.728 54.016 49.46 49.46 0 01-25.339 13.565 49.412 49.412 0 01-28.594-2.821 49.502 49.502 0 01-22.21-18.255 49.619 49.619 0 01-8.34-27.537 49.638 49.638 0 013.764-18.97 49.565 49.565 0 0110.728-16.081 49.466 49.466 0 0116.057-10.744 49.41 49.41 0 0118.94-3.771z"
        ></path>
        <path
          fill="#3F3D56"
          d="M499.19 18.556c0 2.932-.868 5.798-2.494 8.236a14.814 14.814 0 01-6.643 5.46 14.782 14.782 0 01-16.132-3.213 14.84 14.84 0 012.244-22.81 14.785 14.785 0 018.223-2.498 14.71 14.71 0 0110.488 4.32 14.77 14.77 0 014.314 10.505z"
        ></path>
        <path
          fill="#3F3D56"
          d="M472.564 22.298a14.865 14.865 0 01-.24-13.92A14.81 14.81 0 01483.702.381a14.781 14.781 0 00-11.025 4.374 14.835 14.835 0 00-2.792 16.954 14.828 14.828 0 009.039 7.687c1.954.588 4.009.765 6.035.52a14.786 14.786 0 01-7.196-2.18 14.82 14.82 0 01-5.199-5.438zM505.539 39.204h-39.654v61.952h39.654V39.204z"
        ></path>
        <path
          fill="#000"
          d="M505.539 39.204h-39.654v61.952h39.654V39.204z"
          opacity="0.1"
        ></path>
        <path
          fill="#A0616A"
          d="M403.244 263.973s-4.236 11.655-14.267 13.245c-10.032 1.589-15.864 4.233-15.864 4.233l23.791 15.352 12.689-1.59s1.587-16.415 6.875-20.121c5.287-3.706-13.224-11.119-13.224-11.119zM575.056 263.973s4.236 11.655 14.267 13.245c10.032 1.589 15.863 4.233 15.863 4.233l-23.79 15.352-12.689-1.59s-1.587-16.415-6.875-20.121c-5.288-3.706 13.224-11.119 13.224-11.119z"
        ></path>
        <path
          fill="#3F3D56"
          d="M459.278 161.252s-6.34 3.179-8.453 9.538c0 0-11.592 3.706-17.977 13.762 0 0-7.936 8.475-8.988 12.708-1.052 4.234-13.179 29.651-13.179 29.651s-12.163 39.715-18.503 43.948c0 0 20.09-4.233 23.79 15.888 0 0 4.753 0 10.041-18.532 5.288-18.531 17.976-41.304 17.976-41.304s4.227-15.879 7.928-18.532c3.7-2.652 9.514-14.825 14.802-11.61s40.18-.536 40.18-.536 20.598 9.503 21.115 15.852c.517 6.35 4.227 6.886 4.753 12.182.526 5.296 20.09 47.119 20.09 47.119s3.7 11.61 4.761 14.289c0 0 11.592-28.06 26.965-12.173 0 0-.535-10.592-5.288-16.968-4.752-6.377-25.377-56.121-25.377-56.121s-2.114-7.413-4.227-9.529c-2.113-2.117-18.512-19.067-24.325-19.067 0 0-3.166-7.94-6.866-9.003l-59.218-1.562zM411.697 291.507a25.73 25.73 0 01-25.164-3.385 50.22 50.22 0 00-11.226-6.519c-5.609-2.269-12.314-3.948-14.356-.152-3.701 6.885 44.932 23.827 44.932 23.827s6.349-3.706 5.814-13.771zM566.603 291.507a25.73 25.73 0 0025.163-3.385 50.226 50.226 0 0111.227-6.519c5.609-2.269 12.314-3.948 14.356-.152 3.701 6.885-44.933 23.827-44.933 23.827s-6.348-3.706-5.813-13.771z"
        ></path>
        <path
          fill="#A0616A"
          d="M476.559 74.168c-.196 1.84-.803 3.83-2.372 4.804-1.284.804-2.907.742-4.387 1.045a10.23 10.23 0 00-6.973 6.046 15.664 15.664 0 00-.669 9.422c.35 1.535.803 3.045 1.355 4.519 1.552 4.394 3.425 8.752 6.323 12.405a52.637 52.637 0 008.292 7.832c1.882 1.536 3.826 3.099 6.144 3.823 1.572.415 3.19.631 4.815.643 2.007.089 4.147.152 5.886-.849 2.675-1.545 3.468-4.956 4.922-7.698 1.23-2.322 3.067-4.296 4.217-6.662a26.371 26.371 0 001.784-5.823l2.47-10.985c.891-3.992 1.712-8.493-.526-11.914a2.041 2.041 0 00-.66-.687c-.431-.17-.9-.217-1.356-.134a14.643 14.643 0 01-8.159-1.867 3.507 3.507 0 01-1.025-.804 4.224 4.224 0 01-.624-1.893 19.826 19.826 0 00-1.142-3.974 2.67 2.67 0 00-.775-1.197 2.808 2.808 0 00-1.258-.42 101.923 101.923 0 00-11.529-1.205c-1.266-.063-3.175-.572-4.049.553-.873 1.126-.597 3.68-.704 5.02z"
        ></path>
        <path
          fill="#000"
          d="M476.559 74.168c-.196 1.84-.803 3.83-2.372 4.804-1.284.804-2.907.742-4.387 1.045a10.23 10.23 0 00-6.973 6.046 15.664 15.664 0 00-.669 9.422c.35 1.535.803 3.045 1.355 4.519 1.552 4.394 3.425 8.752 6.323 12.405a52.637 52.637 0 008.292 7.832c1.882 1.536 3.826 3.099 6.144 3.823 1.572.415 3.19.631 4.815.643 2.007.089 4.147.152 5.886-.849 2.675-1.545 3.468-4.956 4.922-7.698 1.23-2.322 3.067-4.296 4.217-6.662a26.371 26.371 0 001.784-5.823l2.47-10.985c.891-3.992 1.712-8.493-.526-11.914a2.041 2.041 0 00-.66-.687c-.431-.17-.9-.217-1.356-.134a14.643 14.643 0 01-8.159-1.867 3.507 3.507 0 01-1.025-.804 4.224 4.224 0 01-.624-1.893 19.826 19.826 0 00-1.142-3.974 2.67 2.67 0 00-.775-1.197 2.808 2.808 0 00-1.258-.42 101.923 101.923 0 00-11.529-1.205c-1.266-.063-3.175-.572-4.049.553-.873 1.126-.597 3.68-.704 5.02z"
          opacity="0.1"
        ></path>
        <path
          fill="#743600"
          d="M469.399 80.482a23.986 23.986 0 00-6.358-1c-5.101-.126-10.558 1.634-13.5 5.804a13.715 13.715 0 00-2.042 10.244 21.062 21.062 0 004.636 9.52 28.56 28.56 0 013.567 4.68c1.409 2.679 1.454 5.885 1.837 8.931.892 7.251 3.977 14.066 5.199 21.273 1.221 7.207.169 15.557-5.511 20.139-.954.768-2.113 1.58-2.194 2.804-.124 1.956 2.417 2.786 4.37 2.974 5.84.554 11.833 1.098 17.504-.411 2.345-.625 4.61-1.599 7-2.045 6.063-1.134 12.162 1.197 18.235 2.313a80.671 80.671 0 0013.295 1.081 7.092 7.092 0 003.059-.402 2.457 2.457 0 001.551-2.447 4.25 4.25 0 00-1.052-1.786c-3.068-3.796-4.004-8.842-4.842-13.656l-2.809-16.173c-1.507-8.645-2.907-18.04 1.177-25.801 2.934-5.582 8.346-9.511 11.441-15.004a8.805 8.805 0 001.382-5.608c-.464-2.76-2.952-4.734-5.502-5.886a20.665 20.665 0 00-15.533-.571c.089 3.867-.892 7.778-1.525 11.61l-1.079 6.251a79.439 79.439 0 01-2.417 10.896 11.473 11.473 0 01-1.935 3.947 10.2 10.2 0 01-3.415 2.492 20.34 20.34 0 01-9.042 2.072 12.044 12.044 0 01-3.994-.617 16.927 16.927 0 01-5.502-3.875 9.047 9.047 0 01-1.454-1.581 8.884 8.884 0 01-.989-2.385 49.542 49.542 0 01-1.704-6.68c-.267-1.732-.356-3.492-.481-5.242-.348-5.171-.348-10.887-1.373-15.861z"
        ></path>
        <path
          fill="#A0616A"
          d="M464.04 182.962s-2.114 28.07 11.101 32.83c13.215 4.76 1.587-23.301 1.587-23.301l-4.235-8.466-8.453-1.063zM508.972 182.962s2.114 28.07-11.101 32.83c-13.215 4.76-1.588-23.301-1.588-23.301l4.236-8.466 8.453-1.063z"
        ></path>
        <path
          fill="#000"
          d="M452.403 89.278l-4.227 6.886s3.701 23.827 4.227 28.061a55.622 55.622 0 002.122 9.002s.526 12.708.526 17.477 2.675 12.709 2.675 12.709a57.97 57.97 0 002.676 13.235c2.113 5.823 4.226 12.709 4.226 12.709s2.675-7.413 13.215 3.706a6.417 6.417 0 000-9.002s-3.165-14.29-3.165-21.711c0-7.421-5.823-42.868-5.823-42.868s-3.781-40.295-16.452-30.204z"
          opacity="0.1"
        ></path>
        <path
          fill="#743600"
          d="M451.351 88.716l-4.227 6.886s3.701 23.827 4.227 28.06a55.285 55.285 0 002.131 9.002s.526 12.709.526 17.469c0 4.76 2.675 12.708 2.675 12.708a57.752 57.752 0 002.675 13.236c2.114 5.831 4.236 12.708 4.236 12.708s2.675-7.412 13.215 3.706a6.415 6.415 0 000-8.993s-3.175-14.289-3.175-21.711c0-7.421-5.814-42.867-5.814-42.867s-3.78-40.27-16.469-30.204z"
        ></path>
        <path
          fill="#000"
          d="M521.135 85.01l2.675 3.152s3.112 18.022-3.763 40.796l-2.113 20.648s-3.701 17.477-4.227 21.71c-.526 4.234-.526 4.761-1.587 6.35a2.048 2.048 0 000 2.679l-3.175 11.61s-4.752-5.822-14.267 1.59c0 0-2.675-4.233-.535-7.939 2.14-3.707 2.114-5.296 1.588-6.359-.527-1.063 2.113-6.35 2.113-7.413 0-1.062 3.727-25.399 3.727-25.399s1.587-23.827 3.175-31.766c.971-4.886.954-15.772.784-23.435-.169-7.984 9.479-12.306 15.159-6.698.134.143.294.277.446.474z"
          opacity="0.1"
        ></path>
        <path
          fill="#743600"
          d="M522.722 83.92l2.675 3.153s3.112 18.031-3.763 40.795l-2.113 20.648s-3.701 17.478-4.227 21.711c-.526 4.233-.535 4.769-1.587 6.359a2.036 2.036 0 000 2.679l-3.157 11.646s-4.752-5.832-14.267 1.58c0 0-2.675-4.233-.526-7.939 2.149-3.706 2.114-5.296 1.587-6.35-.526-1.054 2.114-6.359 2.114-7.412 0-1.054 3.7-25.417 3.7-25.417s1.588-23.828 3.175-31.776c1.587-7.948.526-31.767.526-31.767s8.462-5.823 15.863 2.09z"
        ></path>
        <path
          fill="#A0616A"
          d="M487.295 76.543c11.682 0 21.151-9.484 21.151-21.184 0-11.7-9.469-21.183-21.151-21.183-11.681 0-21.151 9.484-21.151 21.183 0 11.7 9.47 21.184 21.151 21.184z"
        ></path>
        <path
          fill="#000"
          d="M498.325 23.557a14.822 14.822 0 01-5.328 7.062 14.79 14.79 0 01-22.394-6.67c8.257-3.33 16.692-.365 16.692-.365 4.218-1.483 7.874-1.349 11.03-.027z"
          opacity="0.1"
        ></path>
        <path
          fill="#3F3D56"
          d="M487.295 24.646s-40.706-14.289-30.656 55.068c0 0 8.988 5.823 15.854 2.116 0 0-4.753-48.181 13.75-46.065 18.503 2.117 15.328 45.011 15.328 45.011s10.576 3.17 13.75-2.679c3.175-5.85-1.061-62.944-28.026-53.45z"
        ></path>
        <path
          fill="#000"
          d="M486.243 32.586c-12.698-1.447-14.446 20.782-14.267 34.875.151-14.013 2.505-33.044 14.267-31.696 13.206 1.51 15.373 23.81 15.524 36.438.152-11.592-1.114-37.965-15.524-39.617zM456.639 76.534A142.513 142.513 0 01455.06 58.2a136.036 136.036 0 001.579 21.515s8.988 5.822 15.854 2.116c0 0-.107-1.143-.232-3.063-6.839 3.456-15.622-2.233-15.622-2.233zM515.321 74.99c-2.96 5.43-12.332 3.045-13.598 2.678-.063 1.965-.152 3.144-.152 3.144s10.576 3.17 13.75-2.68c.651-1.196.99-4.58.892-9.109-.089 2.903-.401 5.073-.892 5.966z"
          opacity="0.1"
        ></path>
        <path
          fill="#F2F2F2"
          d="M288.518 38.614l-16.273 10.333 9.88-17.995a16.037 16.037 0 00-9.809-3.52h-.268a19.204 19.204 0 01-3.37-.25l-5.52 3.502 2.363-4.305a19.673 19.673 0 01-9.648-7.332l-9.871 6.251 6.242-11.36C246.466 7 238.69 2.74 230.121 2.74c-10.264 0-19.403 6.118-25.307 15.647a18.943 18.943 0 01-7.15 6.773 18.916 18.916 0 01-9.578 2.265h-.553c-11.333 0-20.509 12.87-20.509 28.748 0 15.879 9.185 28.74 20.509 28.74a15.319 15.319 0 007.134-1.787c7.392-3.849 17.094-3.92 24.834-.482a25.824 25.824 0 0021.115.044c7.687-3.366 17.272-3.295 24.62.483a15.345 15.345 0 007.071 1.786c11.333 0 20.509-12.87 20.509-28.74a36.531 36.531 0 00-4.298-17.602z"
        ></path>
        <path
          fill="#000"
          d="M257.835 80.67a30.273 30.273 0 00-17.584 1.91 25.83 25.83 0 01-21.107-.044c-7.749-3.439-17.45-3.367-24.843.482a15.318 15.318 0 01-7.133 1.786c-10.067 0-18.441-10.163-20.188-23.56a19.26 19.26 0 005.029-5.43c5.939-9.52 15.043-15.655 25.306-15.655 10.264 0 19.297 6.046 25.2 15.468a19.433 19.433 0 007.157 6.803 19.407 19.407 0 009.571 2.405h.232c8.025.009 14.98 6.448 18.36 15.834z"
          opacity="0.03"
        ></path>
        <path
          fill="#F2F2F2"
          d="M713.92 59.655l-8.088 5.153 4.931-8.93a8.017 8.017 0 00-4.913-1.787h-.125a9.607 9.607 0 01-1.685-.125l-2.756 1.786 1.16-2.197a9.814 9.814 0 01-4.816-3.652l-4.922 3.126 3.112-5.663a14.412 14.412 0 00-11.03-5.59c-5.127 0-9.684 3.054-12.626 7.805a9.417 9.417 0 01-8.347 4.465h-.276c-5.653 0-10.237 6.422-10.237 14.29 0 7.868 4.584 14.334 10.237 14.334a7.681 7.681 0 003.567-.893 14.75 14.75 0 0112.385-.242 12.936 12.936 0 0010.531 0 14.767 14.767 0 0112.279.242 7.668 7.668 0 003.567.893c5.653 0 10.236-6.413 10.236-14.334a18.128 18.128 0 00-2.184-8.68z"
        ></path>
        <path
          fill="#000"
          d="M698.627 80.633a15.137 15.137 0 00-8.765.956 12.935 12.935 0 01-10.531 0 14.765 14.765 0 00-12.395.241 7.614 7.614 0 01-3.567.893c-5.029 0-9.202-5.064-10.076-11.744a9.756 9.756 0 002.515-2.679c2.943-4.751 7.508-7.796 12.626-7.796 5.119 0 9.622 3.01 12.564 7.707a9.68 9.68 0 008.347 4.59h.133c4.004-.062 7.437 3.153 9.149 7.832z"
          opacity="0.03"
        ></path>
        <path
          fill="#F2F2F2"
          d="M182.709 193.117l13.073 8.287-7.919-14.423a12.9 12.9 0 017.892-2.813h.205c.896.013 1.791-.052 2.675-.197l4.414 2.805-1.917-3.448a15.858 15.858 0 007.731-5.876l7.909 5.019-4.94-9.1c4.628-5.555 10.861-8.931 17.718-8.931 8.23 0 15.551 4.894 20.286 12.503a15.16 15.16 0 0013.376 7.243h.446c9.077 0 16.433 10.306 16.433 23.023 0 12.718-7.356 23.033-16.433 23.033-2-.008-3.967-.501-5.734-1.438a23.672 23.672 0 00-19.894-.384 20.734 20.734 0 01-16.942 0 23.727 23.727 0 00-19.724.384 12.387 12.387 0 01-5.663 1.402c-9.086 0-16.443-10.306-16.443-23.032a29.317 29.317 0 013.451-14.057z"
        ></path>
        <path
          fill="#000"
          d="M207.276 226.812a24.364 24.364 0 0114.088 1.536 20.721 20.721 0 0016.943 0 23.707 23.707 0 0119.902.384 12.31 12.31 0 005.725 1.438c8.07 0 14.775-8.136 16.175-18.87a15.572 15.572 0 01-4.03-4.359c-4.735-7.627-12.056-12.503-20.286-12.503-8.231 0-15.453 4.841-20.188 12.396a15.543 15.543 0 01-13.376 7.368h-.205c-6.473-.062-12.038 5.099-14.748 12.61z"
          opacity="0.03"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path
            fill="#fff"
            d="M0 0H988V653H0z"
            transform="translate(.5 .337)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default ReactDesign;