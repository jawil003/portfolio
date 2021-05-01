import React from "react";
import designSystem from "../styles/designSystem";

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

/**
 * An WorldWideIcon React Component.
 * @author Jannik Will
 * @version 0.1
 */
const WorldWideIcon: React.FC<Props> = ({
  width,
  height,
  color,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 510.31 510.31"
      fill={color}
    >
      <path d="M228.776 510.31c22.365-6.196 43.498-26.141 60.683-57.709 4.159-7.64 7.971-15.759 11.427-24.287-22.893 4.863-47.156 7.783-72.109 8.622v73.374zM91.385 418.926c-17.268-5.591-33.399-12.401-48.019-20.359-10.2-5.552-19.425-11.539-27.658-17.887 21.762 51.16 62.764 92.161 113.924 113.923-6.349-8.233-12.335-17.458-17.888-27.659-7.958-14.62-14.768-30.751-20.359-48.018zM369.842 372.217c31.568-17.183 51.513-38.317 57.709-60.683h-73.374c-.839 24.953-3.759 49.216-8.622 72.109 8.528-3.455 16.647-7.267 24.287-11.426zM324.164 311.534h-95.388v95.388c29.361-1.052 57.55-5.183 83.279-12.109 6.926-25.728 11.058-53.917 12.109-83.279zM57.709 372.217c7.641 4.159 15.76 7.971 24.288 11.427-4.863-22.893-7.783-47.156-8.622-72.109H0c6.196 22.365 26.141 43.499 57.709 60.682zM15.708 212.39c8.233-6.348 17.458-12.335 27.658-17.887 14.62-7.958 30.751-14.768 48.019-20.36 5.591-17.268 12.401-33.398 20.359-48.018 5.552-10.2 11.539-19.425 17.887-27.658C78.471 120.229 37.47 161.23 15.708 212.39zM411.843 380.68c-8.233 6.348-17.458 12.335-27.658 17.887-14.62 7.958-30.751 14.768-48.018 20.359-5.591 17.268-12.401 33.399-20.36 48.019-5.552 10.2-11.539 19.425-17.887 27.658 51.16-21.762 92.161-62.764 113.923-113.923zM198.776 510.31v-73.374c-24.953-.839-49.216-3.76-72.109-8.622 3.456 8.527 7.268 16.646 11.427 24.287 17.183 31.568 38.317 51.513 60.682 57.709zM81.997 209.425c-8.528 3.456-16.647 7.268-24.288 11.427C26.141 238.036 6.196 259.169 0 281.534h73.374c.839-24.953 3.76-49.216 8.623-72.109zM115.497 394.814c25.729 6.926 53.918 11.057 83.279 12.109v-95.388h-95.388c1.051 29.361 5.183 57.55 12.109 83.279zM183.776 89.082c-16.751 9.529-32.398 26.98-45.683 51.386-4.159 7.641-7.971 15.76-11.427 24.287 18.275-3.882 37.433-6.503 57.109-7.839V89.082zM183.776 208.987v-22.022c-23.959 1.74-46.965 5.553-68.279 11.29-6.926 25.729-11.057 53.918-12.109 83.279h95.388v-37.307c-9.22-8.6-15-21.212-15-35.24zM228.776 255.842v25.693h95.388a405.22 405.22 0 00-1.738-25.675c-67.744-.001-87.567-.003-93.65-.018zM362.043 255.86h-9.499a434.914 434.914 0 011.634 25.675h73.374c-2.439-8.805-7.019-17.417-13.59-25.675h-51.919z" />
      <g>
        <path d="M510.31 196.707V32.154l-78.1 83.695zM291.875 115.849l-78.099-83.695v164.553zM389.47 161.651l-.416.412c-7.309 7.244-16.901 11.233-27.012 11.233-10.108 0-19.7-3.988-27.009-11.23l-.418-.414-22.246-23.84-85.035 88.039c.199.01.395.015.596.015h268.223c.201 0 .397-.005.596-.015l-85.035-88.04z" />
        <path d="M496.155 0H227.931a12 12 0 00-2.814.336l131.032 140.419c3.419 3.388 8.368 3.388 11.787 0L498.968.336A11.992 11.992 0 00496.155 0z" />
      </g>
    </svg>
  );
};

WorldWideIcon.defaultProps = {
  color:
    designSystem.colors.brand
      .secondaryText,
};

export default WorldWideIcon;
