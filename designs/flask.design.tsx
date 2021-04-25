import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

/**
 * An FlaskDesign React Component.
 * @author Jannik Will
 * @version 0.1
 */
const FlaskDesign: React.FC<Props> = ({
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
        fill="#f9f7f8"
        fillRule="evenodd"
        d="M55.278 347.715c31.719-19.106 113.638-10.517 160.522 27.298 45.212-23.811 90.253-38.551 134.983-37.503l-70.666-93.09c-10.8-14.202-22.053-42.718-22.11-67.351l-.312-134.703H156.132l-.312 134.703c-.057 24.633-11.31 53.15-22.081 67.351z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#a1d4ff"
        fillRule="evenodd"
        d="M22.539 407.186C125.887 421.36 178.1 382.808 215.8 346.666c-46.884-37.814-128.803-18.057-160.522 1.049l-12.756 16.781c-8.872 11.708-15.873 26.788-19.983 42.69z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#22a6fe"
        fillRule="evenodd"
        d="M78.295 504.5h257.238c21.77 0 36.793-7.824 46.374-20.013 21.855-34.639 6.406-95.641-9.723-118.8l-21.401-28.176c-52.128-29.962-89.771-14.655-134.983 9.156-47.508 25.03-103.377 59.443-193.262 60.52-11.791 45.297-.453 97.313 55.757 97.313z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#f9f7f8"
        fillRule="evenodd"
        d="M421.534 266.786c13.606 9.099 35.716 9.099 49.35 0V78.593h-98.7v188.193c13.634-9.099 35.715-9.099 49.35 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#a1d4ff"
        fillRule="evenodd"
        d="M372.184 88.599h100.741c11.452 0 20.834-10.091 20.834-22.422 0-12.359-9.382-22.45-20.834-22.45H370.143c-11.48 0-20.834 10.091-20.834 22.45 0 12.331 9.354 22.422 20.834 22.422zM156.132 52.373H262.259c12.359 0 22.45-10.091 22.45-22.45 0-12.331-10.119-22.422-22.45-22.422h-110.69c-12.33 0-22.45 10.091-22.45 22.422 0 12.359 10.091 22.45 22.45 22.45zM187.114 258.792c0 10.942 8.872 19.814 19.785 19.814 10.941 0 19.814-8.872 19.814-19.814s-8.872-19.786-19.814-19.786c-10.913 0-19.785 8.844-19.785 19.786zM254.35 431.082c0 16.781 13.606 30.387 30.358 30.387 16.781 0 30.387-13.606 30.387-30.387s-13.606-30.359-30.387-30.359c-16.752 0-30.358 13.578-30.358 30.359zM113.529 466.572c10.204 0 18.481-8.277 18.481-18.482 0-10.176-8.277-18.454-18.481-18.454s-18.481 8.277-18.481 18.454c-.001 10.205 8.276 18.482 18.481 18.482z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#dddaec"
        fillRule="evenodd"
        d="M258.007 177.069l-.312-124.696h-31.35l.312 124.696c.057 24.633 11.31 53.15 22.11 67.351l58.761 77.414c13.521 1.871 27.751 6.775 43.256 15.676l-70.666-93.09c-10.801-14.201-22.054-42.718-22.111-67.351z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#0593fc"
        fillRule="evenodd"
        d="M371.305 364.496l-20.522-26.986c-15.505-8.901-29.735-13.805-43.256-15.676l11.934 15.676c30.613 40.366 38.182 166.99-29.536 166.99h45.608c21.77 0 36.793-7.824 46.374-20.013-6.094-8.22-9.723-18.369-9.723-29.339v-89.462z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#80b4fb"
        fillRule="evenodd"
        d="M284.709 29.922c0-12.331-10.119-22.422-22.45-22.422h-31.265c12.302.028 22.365 10.12 22.365 22.422 0 12.359-10.091 22.45-22.45 22.45h31.351c12.358.001 22.449-10.091 22.449-22.45z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#dddaec"
        fillRule="evenodd"
        d="M470.884 256.78V88.599h-25.341v174.983c9.127.114 18.339-2.154 25.341-6.802z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#80b4fb"
        fillRule="evenodd"
        d="M493.759 66.177c0-12.359-9.382-22.45-20.834-22.45H447.64c11.423.028 20.777 10.12 20.777 22.45 0 12.331-9.382 22.422-20.834 22.422h25.341c11.452 0 20.835-10.091 20.835-22.422z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#eb5468"
        fillRule="evenodd"
        d="M372.184 365.687v89.462c0 10.97 3.628 21.118 9.723 29.339 8.816 11.849 22.818 19.673 38.579 20.013h2.098c26.645-.567 48.301-22.564 48.301-49.351V256.78c-13.634 9.099-35.744 9.099-49.35 0-13.634-9.099-35.716-9.099-49.35 0v108.907z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#a1d4ff"
        fillRule="evenodd"
        d="M421.534 346.468c9.751 0 17.659-7.909 17.659-17.66 0-9.78-7.908-17.688-17.659-17.688-9.779 0-17.688 7.909-17.688 17.688 0 9.751 7.908 17.66 17.688 17.66z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#e5384f"
        fillRule="evenodd"
        d="M470.884 455.149V256.78c-7.001 4.649-16.214 6.917-25.341 6.803v191.566c0 22.762-15.647 42.066-36.679 47.707a48.935 48.935 0 0011.622 1.644h2.098c26.644-.567 48.3-22.564 48.3-49.351z"
        clipRule="evenodd"
      ></path>
      <path d="M163.685 407.141l-.085.085a7.498 7.498 0 00-.03 10.606 7.478 7.478 0 005.318 2.212 7.476 7.476 0 005.288-2.182l.085-.085a7.498 7.498 0 00.03-10.606 7.5 7.5 0 00-10.606-.03zM224.896 383.146l-.085.085a7.5 7.5 0 005.303 12.803 7.474 7.474 0 005.303-2.197l.085-.085a7.5 7.5 0 000-10.606 7.5 7.5 0 00-10.606 0zM234.213 258.792c0-15.045-12.24-27.286-27.286-27.286-15.061 0-27.313 12.24-27.313 27.286 0 15.061 12.253 27.314 27.313 27.314 15.046 0 27.286-12.253 27.286-27.314zm-39.599 0c0-6.774 5.524-12.286 12.313-12.286 6.774 0 12.286 5.511 12.286 12.286 0 6.79-5.511 12.314-12.286 12.314-6.789 0-12.313-5.524-12.313-12.314zM284.709 393.223c-20.875 0-37.858 16.983-37.858 37.859 0 20.891 16.983 37.887 37.858 37.887 20.891 0 37.886-16.996 37.886-37.887 0-20.875-16.995-37.859-37.886-37.859zm0 60.747c-12.604 0-22.858-10.267-22.858-22.887 0-12.604 10.254-22.859 22.858-22.859 12.62 0 22.886 10.255 22.886 22.859 0 12.62-10.266 22.887-22.886 22.887zM113.529 422.137c-14.326 0-25.981 11.643-25.981 25.954 0 14.327 11.655 25.982 25.981 25.982s25.981-11.655 25.981-25.982c0-14.312-11.655-25.954-25.981-25.954zm0 36.935c-6.055 0-10.981-4.926-10.981-10.982 0-6.04 4.926-10.954 10.981-10.954s10.981 4.914 10.981 10.954c0 6.056-4.926 10.982-10.981 10.982zM404.722 387.2l-.085.085a7.5 7.5 0 005.303 12.803 7.474 7.474 0 005.303-2.197l.085-.085a7.5 7.5 0 000-10.606 7.5 7.5 0 00-10.606 0zM420.725 444.473l-.085.085a7.498 7.498 0 00-.03 10.606 7.478 7.478 0 005.318 2.212 7.476 7.476 0 005.288-2.182l.085-.085a7.498 7.498 0 00.03-10.606 7.5 7.5 0 00-10.606-.03zM421.534 353.968c13.873 0 25.16-11.287 25.16-25.16 0-13.889-11.287-25.188-25.16-25.188-13.889 0-25.188 11.299-25.188 25.188 0 13.873 11.299 25.16 25.188 25.16zm0-35.348c5.602 0 10.16 4.57 10.16 10.188 0 5.602-4.558 10.16-10.16 10.16-5.617 0-10.188-4.558-10.188-10.16 0-5.618 4.57-10.188 10.188-10.188z"></path>
      <path d="M472.925 36.227H370.143c-15.624 0-28.334 13.436-28.334 29.95 0 14.527 9.855 26.664 22.875 29.359v247.84L286.086 239.88c-10.075-13.249-20.527-40.372-20.58-62.83l-.293-117.325c15.133-1.489 26.995-14.286 26.995-29.804C292.209 13.423 278.773 0 262.259 0h-110.69c-16.515 0-29.95 13.423-29.95 29.922 0 15.517 11.863 28.315 26.995 29.804V177.05c-.052 22.436-10.786 49.569-20.848 62.834l-25.058 32.996a7.501 7.501 0 0011.946 9.073l25.061-33c11.003-14.506 22.699-43.238 23.553-69.089h25.462a7.5 7.5 0 000-15h-25.379l.063-24.997h25.317a7.5 7.5 0 000-15h-25.279l.063-24.997h25.216a7.5 7.5 0 000-15h-25.179l.063-24.997h86.6v117.208c.062 26.573 12.519 56.87 23.93 71.875l52.917 69.681c-17.871-5.739-35.407-6.694-53.721-3.063-19.13 3.791-37.225 12.075-56.797 22.25-39.41-28.311-98.047-22.141-137.213-8.94l14.663-19.092a7.5 7.5 0 00-11.897-9.137l-45.526 59.277c-11.658 15.199-20.404 36.102-23.996 57.349-3.869 22.885-1.571 44.467 6.47 60.769 7.64 15.488 24.12 33.95 59.25 33.95h257.238c18.876 0 34.649-5.623 46.191-16.317 10.264 10.083 24.32 16.317 39.81 16.317 31.347 0 56.85-25.503 56.85-56.852V204.197a7.5 7.5 0 00-15 0v48.215c-11.265 5.47-27.619 4.862-37.687-1.871-12.654-8.445-30.919-10.281-46.013-5.509v-28.914h25.098a7.5 7.5 0 000-15h-25.098v-25.025h25.098a7.5 7.5 0 000-15h-25.098v-24.997h25.098a7.5 7.5 0 000-15h-25.098V96.1h83.7v73.486a7.5 7.5 0 0015 0V95.537c13.02-2.695 22.875-14.833 22.875-29.359 0-16.515-12.711-29.951-28.334-29.951zm-321.356 8.646c-8.244 0-14.95-6.707-14.95-14.951 0-8.228 6.707-14.922 14.95-14.922h110.69c8.244 0 14.95 6.694 14.95 14.922 0 8.244-6.707 14.951-14.95 14.951zM48.471 369.065l12.11-15.767c30.111-17.327 97.718-32.201 140.776-7.43l-1.686.902c-43.488 23.296-92.546 49.548-166.947 52.625 3.967-11.503 9.407-22.065 15.747-30.33zM335.533 497H78.295c-22.015 0-37.423-8.608-45.797-25.585-7.858-15.93-8.299-36.906-4.008-56.862 80.632-2.283 134.661-31.202 178.263-54.559 50.111-26.844 86.429-46.289 139.046-16.681l18.884 24.866v86.97a56.496 56.496 0 007.789 28.671c-8.845 8.75-21.242 13.18-36.939 13.18zm81.831-233.986c8.081 5.404 18.454 8.106 28.834 8.105 5.865 0 11.731-.865 17.185-2.591v186.62c0 23.077-18.774 41.852-41.85 41.852s-41.85-18.774-41.85-41.852V261.147c11.258-5.462 27.611-4.854 37.681 1.867zM472.925 81.1H370.143c-7.353 0-13.334-6.694-13.334-14.922 0-8.244 5.982-14.95 13.334-14.95h102.782c7.353 0 13.334 6.707 13.334 14.95 0 8.227-5.982 14.922-13.334 14.922z"></path>
    </svg>
  );
};

export default FlaskDesign;