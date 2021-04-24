import designSystem from "../../styles/designSystem";
import React from "react";

export interface Props {
  width?: string;
  height?: string;
  color?: string;
}

/**
 * An BlankCanvasDesign React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const BlankCanvasDesign: React.FC<Props> = ({
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
      viewBox="0 0 998.95 833.99"
    >
      <defs>
        <linearGradient
          id="8849c9b4-5ff8-40d0-8d32-f1e3227b06d9"
          x1="499.14"
          x2="499.14"
          y1="857.42"
          y2="171.42"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            stopColor="gray"
            stopOpacity="0.25"
          ></stop>
          <stop
            offset="0.54"
            stopColor="gray"
            stopOpacity="0.12"
          ></stop>
          <stop
            offset="1"
            stopColor="gray"
            stopOpacity="0.1"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill={color}
        d="M424.35 62.67c29.21-26 75.06-31.33 116.8-29.26 131.09 6.52 249.42 69.8 351.78 141.39 37.06 25.91 73.54 53.84 97.59 89.53 49 72.65 34.44 173.29-33.64 233.14-23.17 20.36-51.25 36-80.08 49.81-51.26 24.6-106.57 44.35-164.75 50-41.48 4-83.48.75-124.73-4.84C472.09 576.78 359 542.22 264.17 483.1c-41.58-25.93-80.77-58.17-97.91-100.1s-6.17-95.13 36.29-120c17.56-10.27 38.56-14.91 59.11-19.27 30.26-6.41 61-12.73 88.3-25.76 28.21-13.46 61.6-39.49 56-69.29-5.96-31.93-10.78-60.01 18.39-86.01z"
        opacity="0.1"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill="none"
        stroke="#535461"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M684.95 668.89s25.06-44.39 62.79-57.18a77.24 77.24 0 0039.12-29.26 129.52 129.52 0 0011.54-20.76"
      ></path>
      <path
        fill={color}
        d="M922.66 586.49c-4.3 4.18-24.33 8.49-24.33 8.49s4.91-19.89 9.21-24.06a10.85 10.85 0 0115.12 15.57zM911.33 622.48c-5.88 1.17-25-6.09-25-6.09s14.94-14 20.81-15.2a10.85 10.85 0 014.23 21.29zM870.08 661.42c-5.67-2-18.54-17.9-18.54-17.9s20-4.56 25.64-2.6a10.85 10.85 0 11-7.1 20.5zM832.23 683.86c-5.91-1-21.29-14.51-21.29-14.51s18.91-7.88 24.82-6.9a10.85 10.85 0 11-3.53 21.41zM869.59 600.85c0 6 10.84 23.37 10.84 23.37s10.86-17.37 10.86-23.36a10.85 10.85 0 10-21.7 0zM825.66 627.65c1.8 5.72 17.34 19.06 17.34 19.06s5.16-19.83 3.37-25.55a10.85 10.85 0 00-20.71 6.49zM786.54 659.55c.8 5.94 13.87 21.72 13.87 21.72s8.44-18.67 7.64-24.61a10.85 10.85 0 00-21.51 2.89z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        d="M922.66 586.49c-4.3 4.18-24.33 8.49-24.33 8.49s4.91-19.89 9.21-24.06a10.85 10.85 0 0115.12 15.57zM911.33 622.48c-5.88 1.17-25-6.09-25-6.09s14.94-14 20.81-15.2a10.85 10.85 0 014.23 21.29zM870.08 661.42c-5.67-2-18.54-17.9-18.54-17.9s20-4.56 25.64-2.6a10.85 10.85 0 11-7.1 20.5zM832.23 683.86c-5.91-1-21.29-14.51-21.29-14.51s18.91-7.88 24.82-6.9a10.85 10.85 0 11-3.53 21.41zM869.59 600.85c0 6 10.84 23.37 10.84 23.37s10.86-17.37 10.86-23.36a10.85 10.85 0 10-21.7 0zM825.66 627.65c1.8 5.72 17.34 19.06 17.34 19.06s5.16-19.83 3.37-25.55a10.85 10.85 0 00-20.71 6.49zM786.54 659.55c.8 5.94 13.87 21.72 13.87 21.72s8.44-18.67 7.64-24.61a10.85 10.85 0 00-21.51 2.89z"
        opacity="0.25"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill="none"
        stroke="#535461"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M686.39 667.99s4.92-50.74 34.24-77.72a77.24 77.24 0 0023.9-42.61 129.14 129.14 0 002.14-23.67"
      ></path>
      <path
        fill={color}
        d="M865.56 539.92c-2.24 5.56-18.8 17.62-18.8 17.62s-3.56-20.18-1.32-25.73a10.85 10.85 0 1120.12 8.11zM869.79 577.41c-4.9 3.45-25.36 4.57-25.36 4.57s8-18.87 12.87-22.32a10.85 10.85 0 0112.49 17.75zM847.86 629.73c-6 .5-24.2-8.86-24.2-8.86s16.41-12.26 22.34-12.77a10.85 10.85 0 011.82 21.63zM822.35 665.58c-5.8 1.5-25.34-4.64-25.34-4.64s14.09-14.87 19.89-16.37a10.85 10.85 0 115.45 21zM822.87 574.54c2.42 5.48 19.38 17 19.38 17s2.89-20.28.46-25.76a10.85 10.85 0 00-19.84 8.78zM793.57 616.85c3.95 4.5 23.57 10.4 23.57 10.4s-3.31-20.22-7.27-24.72a10.85 10.85 0 10-16.3 14.32zM770.73 661.87c3.14 5.11 21.48 14.23 21.48 14.23s.15-20.48-3-25.59a10.85 10.85 0 10-18.49 11.36z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <ellipse
        cx="374.17"
        cy="814.05"
        fill={color}
        opacity="0.1"
        rx="118.88"
        ry="19.93"
      ></ellipse>
      <ellipse
        cx="608.16"
        cy="661.06"
        fill={color}
        opacity="0.1"
        rx="118.88"
        ry="19.93"
      ></ellipse>
      <path
        fill="#b77b7f"
        d="M616.05 398.03L615.94 401.92 609.18 640.44 597.82 640.44 603.39 401.92 603.5 397.43 616.05 398.03z"
      ></path>
      <path
        fill="#dda2a6"
        d="M681.82 600.09L673.31 600.07 546.87 599.8 540.13 599.79 543.72 588.73 680.92 588.73 681.82 600.09z"
      ></path>
      <path
        d="M616.05 398.03L615.94 401.92 603.39 401.92 603.5 397.43 616.05 398.03z"
        opacity="0.1"
      ></path>
      <path
        fill="#b77b7f"
        d="M599.77 392.2H620.84V400.13H599.77z"
      ></path>
      <path
        d="M547.99 588.73L546.87 599.8 540.13 599.79 543.72 588.73 547.99 588.73z"
        opacity="0.1"
      ></path>
      <path
        fill="#dda2a6"
        d="M566.14 392.05L565.79 395.49 537.74 672.13 524.89 671.52 554.45 395.49 554.78 392.35 566.14 392.05z"
      ></path>
      <path
        d="M681.82 600.09L673.31 600.07 672.16 588.73 680.92 588.73 681.82 600.09z"
        opacity="0.1"
      ></path>
      <path
        fill="#dda2a6"
        d="M695.27 671.52L682.41 672.13 654.37 395.49 654.02 392.05 665.37 392.35 665.7 395.49 695.27 671.52z"
      ></path>
      <path
        fill="#fff"
        d="M466.6 119.3H749.96V391H466.6z"
      ></path>
      <path
        fill="#dda2a6"
        d="M714.33 61.44v65.61h-11.05V61.44a5.53 5.53 0 1111.05 0z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        d="M602.75 88.07H613.81V94.03999999999999H602.75z"
        opacity="0.1"
      ></path>
      <path
        fill="#dda2a6"
        d="M718.67 125.56v21.66H699v-21.66a2.68 2.68 0 012.69-2.69H716a2.69 2.69 0 012.67 2.69z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <circle
        cx="608.28"
        cy="103.61"
        r="4.18"
        opacity="0.1"
      ></circle>
      <circle
        cx="608.28"
        cy="102.71"
        r="4.18"
        fill="#b77b7f"
      ></circle>
      <path
        d="M598.42 111.53H618.15V114.22H598.42z"
        opacity="0.1"
      ></path>
      <path
        d="M590.35 115.12H626.22V121.10000000000001H590.35z"
        opacity="0.1"
      ></path>
      <path
        fill="#dda2a6"
        d="M590.35 113.32H626.22V119.3H590.35z"
      ></path>
      <path
        d="M535.72 384h150.65a6.5 6.5 0 016.5 6.5v1.42H529.22v-1.42a6.5 6.5 0 016.5-6.5z"
        opacity="0.1"
      ></path>
      <path
        d="M554.78 392.35L566.14 392.05 565.79 395.49 554.45 395.49 554.78 392.35z"
        opacity="0.1"
      ></path>
      <path
        d="M599.77 392.2H620.84V395.49H599.77z"
        opacity="0.1"
      ></path>
      <path
        d="M665.7 395.49L654.37 395.49 654.02 392.05 665.37 392.35 665.7 395.49z"
        opacity="0.1"
      ></path>
      <path
        fill="#dda2a6"
        d="M535.72 385.77h150.65a6.5 6.5 0 016.5 6.5v1.42H529.22v-1.42a6.5 6.5 0 016.5-6.5z"
      ></path>
      <path
        fill="url(#8849c9b4-5ff8-40d0-8d32-f1e3227b06d9)"
        d="M603.21 292.64c-2.27-1.2-27-19.88-27-19.88l-39.91-25.31s-.21-.6-.59-1.63c10.95-12.43 8.56-30.47-2.58-43.15-13.5-15.38-74.5-48.49-92.88-20.17-2.57 4-2.66 8.54-3.33 12.94-1.57 10.27-6.63 20.22-14.57 28.6-6.12 6.47-14.15 12.43-17.67 19.75 0-.09-.07-.18-.1-.28a18.36 18.36 0 00-1.83 5c-1.75 8.93 4.25 17.49 7.44 26.18a47.5 47.5 0 012.32 9.08c.08-.62.15-1.23.22-1.85a58.06 58.06 0 01.79 13.36c-22.15 4.51-22.16 42.4-22.16 42.4s-2.73 15.06-2.27 20.49.45 17.17.45 20-2.73 20.48-3 22.6a.51.51 0 010 .09c-.4 2.32-4.55 13.5 5.48 16 .7.18 1.44.33 2.21.47.43 9.05 1.21 28 .52 32.22 0 0 3.65 25.46 6.68 31.93a73.44 73.44 0 006.7 10.82 11.92 11.92 0 01-1.54 4.39c-1.55 2.23-.75 4.06 1.84 4.85-.09.77-.19 1.64-.3 2.62-1.11 9.82-2.77 29.34.05 39.23 3.87 13.56 4.1 18.08 4.1 18.08s0 4.06 1.6 6.32 4.55 23.28 4.55 26.67 7.74 33.89 5.46 41.12-.45 17.4-.45 17.4-1.37 17.85-3 21.69-2.28 65.75.22 81.79 4.1 29.37 4.1 29.37-1.59 14.69-.23 16.72 3.87 14.24 2.05 14.91-2.73 5.65-2.73 5.65a50.39 50.39 0 003.11 4.23 17 17 0 01-2.05-.87c.72 1 1.8 2.42 3.13 4l-1.25 16.25a2.72 2.72 0 002 2.85 22.87 22.87 0 0022.62-6.36c11.38-11.52 15.25-9.94 17.3-16.94.22-.75.41-1.49.57-2.19 1.47-6.24-5.18-10.88-10.47-8.22.73-4.94 1.3-10.55.75-13.72-1.14-6.55-.91-23.72-.91-23.72l-1.59-82.25s2.95-16.27 6.37-22.59 3-28.47 3-28.47l3.87-72.76 3.64-35.47s3.64-12.2 8.19 1.36c0 0-2.5 27.33-1.36 33.89s2.73 38.41 1.59 45.41-6.14 45.42-3 55.13S486 694.15 485.3 698s-3 87.21-3 87.21 6.15 16 1.6 21.24-.23 26-.23 26 .55.39 1.49.93l-.13 1.73-1.43 18.69a2.74 2.74 0 002 2.86 22.86 22.86 0 0022.62-6.36c11.38-11.53 15.25-9.94 17.3-16.95.22-.75.41-1.48.58-2.19 1.6-6.81-6.5-11.75-11.92-7.3l-.27.23a9.41 9.41 0 01-.89.67 4.3 4.3 0 01-.45.29c1.14-5.16 2.8-14 2-18.14-1.14-6.1 1.13-24.62 1.13-24.62s6.6-22.15 6.83-31l1.82-70.49s-.22-28.7.69-35.7 8.19-67.56 15.47-85.64c5.59-13.84 8.09-49.16 6.61-67.07-.08-.88-.16-1.73-.26-2.52 8.93-6.59 9.82-17.55 9.82-17.55s-8.2-15.66-16.09-22.29-9.59-18.03-9.31-22.88a11.88 11.88 0 00-2.73-8.13s-3.64-11.75-6.07-12.95a1.9 1.9 0 01-.53-.4c-1.65-1.77-.38-6.83-.38-6.83v-.16c.29-1.17 2-8.75 1.49-10.69-.61-2.1.3-12.05.3-12.05s5.77-17.17 4.86-30.73 11.84-12.35 11.84-12.35l39.37-.41h4.48a31.53 31.53 0 004.31-4.46c7.5-.89 22.67-3.72 24.37-12 2.31-10.99-7.1-22.14-9.38-23.35zM420.81 418l.27-6.89c.93.8 1.55 1.31 1.55 1.31a10.78 10.78 0 01.07 5.52 5.89 5.89 0 01-3.41 3.82 4.14 4.14 0 00-.55.29l-.38-3.89zm142.8-121c-1.67-.75-7.29-.6-10.18-.6s-7.58-2.41-7.58-2.41c-1-1.95-6.53-3.11-11.45-3.77-3.74-9.22-9-18.21-9.71-27.82 0-.35 0-.7-.05-1.05l.57 1s22.92 14.62 25.5 19c2 3.34 11.63 10.8 16.09 14.14a4.59 4.59 0 01-2.45 1.64 1.35 1.35 0 01-.74-.13z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill="#67647e"
        d="M525.76 831.22c-.17.7-.35 1.43-.57 2.17-2 7-5.83 5.38-17 16.81a22.38 22.38 0 01-22.27 6.32 2.7 2.7 0 01-2-2.84l1.41-18.54.67-8.92s17.84 5 26.92-1.35a10.77 10.77 0 00.88-.67 2.75 2.75 0 00.2-.2 7.29 7.29 0 0111.76 7.22zM469.76 824.22c-.17.7-.35 1.43-.57 2.17-2 7-5.83 5.38-17 16.81a22.38 22.38 0 01-22.27 6.32 2.7 2.7 0 01-2-2.84l1.41-18.54.67-8.92s17.84 5 26.92-1.35a10.77 10.77 0 00.88-.67 2.75 2.75 0 00.2-.2 7.29 7.29 0 0111.76 7.22z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        d="M451.33 827l.72 9.64c-10.24 10.23-22.43-5-26-10 9.39 4.84 25.28.36 25.28.36zM511.52 830.92l1.34-.89c-9.35 14.22-23.24 7.66-27.57 5.11l.67-8.92s17.84 5 26.92-1.35c-.71 3.48-1.36 6.05-1.36 6.05z"
        opacity="0.1"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill="#444053"
        d="M540 561.69c-7.18 17.93-14.35 78-15.25 85s-.67 35.42-.67 35.42l-1.8 69.89c-.23 8.75-6.73 30.72-6.73 30.72s-2.24 18.38-1.12 24.43-2.91 22-2.91 22l1.34-.9c-11.21 17-28.92 4.26-28.92 4.26s-4.26-20.62.23-25.78-1.57-21.07-1.57-21.07 2.24-82.72 2.91-86.53-2.69-15.47-5.83-25.11 1.8-47.75 2.92-54.7-.45-38.56-1.57-45.06 1.34-33.63 1.34-33.63c-4.48-13.45-8.07-1.34-8.07-1.34l-3.59 35.19-3.81 72.19s.45 22-2.91 28.25-6.28 22.41-6.28 22.41l1.57 81.61s-.22 17 .9 23.53-2.47 23.32-2.47 23.32C445.16 855.36 425 823.3 425 823.3s.9-4.93 2.69-5.6-.67-12.78-2-14.8.22-16.59.22-16.59-1.57-13.22-4-29.14-1.79-77.34-.22-81.15 2.91-21.52 2.91-21.52-1.79-10.09.45-17.27-5.38-37.43-5.38-40.8-2.91-24.21-4.48-26.45-1.57-6.28-1.57-6.28-.22-4.48-4-17.93c-2.78-9.82-1.14-29.18-.05-38.93.39-3.61.73-5.91.73-5.91s128.57-20.85 133.7-16.14c1.2 1.11 2 4.92 2.47 10.35 1.53 17.76-.99 52.86-6.47 66.55z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        d="M491.34 662.49c.6 0 14.8 1.2 20 .15s-20-.15-20-.15zM492.39 670.86S512 674.3 513 672.51s-20.61-1.65-20.61-1.65zM432.46 667.27s10.16.45 15.69 3-15.69-3-15.69-3z"
        opacity="0.1"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill="#efb7b9"
        d="M395.54 415.9s1.64 31.23.75 36.76c0 0 3.58 25.26 6.57 31.68s9.42 14.5 9.42 14.5l8.82-62-2.1-21.24z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <circle
        cx="387.68"
        cy="206.09"
        r="34.52"
        fill="#efb7b9"
      ></circle>
      <path
        fill="#efb7b9"
        d="M470.27 255.23s-10.76 21.08-21.52 30.94 64.56 21.07 66.35 21.07-13.45-44.83-10.76-50.24-34.07-1.77-34.07-1.77z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        d="M546.49 495.14a22.43 22.43 0 01-5.54 3.1c-13.74 5.38-28.69 12.85-38.85 9.87s-31.68 0-31.68 0-43.35-3.59-52-1.5c-3.94.95-7 .91-9 .23.39-3.61.73-5.91.73-5.91S538.87 480.08 544 484.79c1.22 1.11 2 4.92 2.49 10.35z"
        opacity="0.1"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill="#a36468"
        d="M555.9 475.22s-1.19 14.95-14.95 20.33-28.69 12.85-38.85 9.87-31.68 0-31.68 0-43.35-3.59-52-1.5-13.16-.59-10.47-4.48 2.4-16.74 2.4-22.12-3-27.2-.31-31.09 5.08-18.83 10.46-21.23a5.86 5.86 0 003.36-3.79 10.84 10.84 0 00-.07-5.47s-.91-.75-2.16-1.86c-3.17-2.83-8.53-8.08-6.81-9.8 2.39-2.4 0-17.94 0-17.94s-5.68-11.95-3.58-16.43-18.24-28.1-18.24-28.1 0-40.64 24.51-42.44c0 0 17.34.6 19.43-7.17s15.84-12.26 15.84-12.26l31.39 6.88s27.79 6 32.88 2.39 9 4.78 9 4.78 17.33.9 19.12 4.49-5.67 38.55-5.67 38.55-12.56-1.19-11.66 12.26-4.84 30.49-4.84 30.49-.9 9.86-.3 11.95c.56 1.93-1.18 9.45-1.46 10.61v.15s-1.25 5 .37 6.78a2 2 0 00.52.4c2.4 1.19 6 12.85 6 12.85a11.83 11.83 0 012.69 8.07c-.29 4.79 1.5 16.14 9.27 22.72s15.81 22.11 15.81 22.11z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill="#a36468"
        d="M422.59 406v1.27l-.54 14s-18.39 1.49-28.4-1-5.8-13.6-5.4-15.9a.37.37 0 000-.09c.29-2.1 3-19.58 3-22.42s0-14.5-.45-19.88 2.2-20.37 2.2-20.37l1.94-2.38L416 347.3z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        d="M422.54 407.3l-.54 14s-18.39 1.49-28.4-1-5.8-13.6-5.4-15.9z"
        opacity="0.1"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        d="M423.86 421.22a10.84 10.84 0 00-.07-5.47s-.91-.75-2.16-1.86c15.83-2.21 78.52-10.81 99.63-11.75v.15s-1.25 5 .37 6.78zM523.62 432s3.89 22-10.61 29.74c-.01.04 8.22-10.87 10.61-29.74zM428.72 462.37s35-6 41.85-1.34-41.85 1.34-41.85 1.34zM511.52 326.22s-5.38 22.12-1.35 27.2 1.35-27.2 1.35-27.2zM410.19 308.14s4.93 8.22 1.94 16.74-1.94-16.74-1.94-16.74zM400 380.18s6.28 3.73 4.19 9.56-4.19-9.56-4.19-9.56zM399.43 363.14s5.82 3.14 6.57 7.77-6.57-7.77-6.57-7.77zM485.81 541.88s36.62 3.74 43.94-4.93c0 .05-33.03 6.58-43.94 4.93zM422.59 539.79s39.31 9.27 47.08 1.94c0 0-33.78 2.54-47.08-1.94zM488.65 554s16.44 0 24.06.45-24.06-.45-24.06-.45zM425.28 561s8.07 9.12 17.19 7.48-17.19-7.48-17.19-7.48z"
        opacity="0.1"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill="#e3787d"
        d="M441.13 187.65c-2.53 3.93-2.62 8.48-3.28 12.84-1.54 10.19-6.53 20.06-14.34 28.38-7.17 7.62-17 14.53-18.86 23.84-1.76 8.84 4.21 17.35 7.34 26 8.25 22.69-3.27 46.49-6.63 69.91-.93 6.47.19 14.74 8.16 16.89 2.49.68 5.34.59 7.58 1.67 3 1.44 3.92 4.43 4.47 7.12a108.82 108.82 0 012.06 29.28c-.36 5.5-.76 11.83 4.44 15.61 2.36 1.73 5.54 2.61 8.61 3.44 8.19 2.21 18.78 4 24.3-1.19 2.32-2.17 3.19-5.23 6.08-6.95 4.33-2.57 10.47-.83 15.92-.56 11.19.56 21.47-6 25.88-13.91s4-17 2.4-25.53-4.46-17-4.66-25.66c-.07-3 .2-6.05 1.92-8.71 3.33-5.15 11.08-7.49 16.38-11.54 9.93-7.6 9.9-20.05 6.29-30.47s-10.09-20.41-10.89-31.18a11.87 11.87 0 011.47-7.53c1.42-2.19 3.9-3.83 6-5.64 14.49-12.24 12.78-32.34.8-46.1-13.26-15.25-73.34-48.1-91.44-20.01z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <g opacity="0.1">
        <path
          d="M413.83 288.13c1.13-9.09.92-18.1-2.29-26.95-1.58-4.34-3.87-8.65-5.54-13a18.76 18.76 0 00-1.8 5c-1.76 8.84 4.21 17.35 7.34 26a47.28 47.28 0 012.29 8.95zM427.18 386.05a109.22 109.22 0 00-2.05-29.28c-.56-2.69-1.48-5.67-4.48-7.11-2.24-1.08-5.09-1-7.58-1.67a10.33 10.33 0 01-7-5.78c-.46 2.28-.86 4.55-1.19 6.83-.93 6.47.19 14.74 8.16 16.89 2.49.67 5.34.58 7.58 1.66 3 1.44 3.92 4.43 4.48 7.12a110.81 110.81 0 011.92 13.52c.07-.74.11-1.46.16-2.18zM512.42 382.5c-4.42 7.94-14.7 14.47-25.89 13.91-5.45-.28-11.59-2-15.91.56-2.89 1.71-3.77 4.78-6.09 6.95-5.52 5.15-16.11 3.4-24.3 1.19-3.07-.84-6.24-1.71-8.61-3.44a10.8 10.8 0 01-4.25-6.9c.06 3.07 0 6.15-.19 9.22-.36 5.5-.76 11.83 4.44 15.62 2.37 1.72 5.54 2.6 8.61 3.43 8.19 2.21 18.78 4 24.3-1.19 2.32-2.17 3.2-5.23 6.09-7 4.32-2.57 10.46-.83 15.91-.56 11.19.56 21.47-6 25.89-13.91 4.24-7.64 4.05-16.28 2.57-24.53a26.87 26.87 0 01-2.57 6.65zM531.36 236.28c-2.14 1.8-4.62 3.45-6 5.64a11.87 11.87 0 00-1.47 7.53 40.06 40.06 0 002.06 9.6 39.94 39.94 0 015.45-4.84c9.8-8.27 12.18-20.14 9-31.22a28.54 28.54 0 01-9.04 13.29zM528.45 311.05c-5.29 4.05-13.05 6.4-16.37 11.55-1.73 2.66-2 5.73-1.93 8.7a60.08 60.08 0 001.28 10.4 9.62 9.62 0 01.65-1.17c3.32-5.15 11.08-7.49 16.37-11.54 9.07-6.94 9.83-17.92 7.15-27.71a20.76 20.76 0 01-7.15 9.77z"
          transform="translate(-100.52 -33.01)"
        ></path>
      </g>
      <path
        fill="#efb7b9"
        d="M582.8 332.35s25.86-1.34 28.1-12.25-7-22-9.26-23.17S575 277.2 575 277.2l-39.3-25.1s-18.83-54-23-33.33 12.11 48.12 12.11 48.12 22.56 14.5 25.1 18.83S568 301.41 568 301.41z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill="#a36468"
        d="M596.7 314.71c-6.12 15.55-14.05 21.68-14.05 21.68h-4.41l-38.77.4-4.47-12.21 6.28-26.46 3.88.16s4.64 2.39 7.47 2.39 8.38-.15 10 .59a1.23 1.23 0 00.73.11c1.47-.15 3-2.35 3-2.35s36.47.15 30.34 15.69z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        d="M596.7 314.71c-6.12 15.55-14.05 21.68-14.05 21.68h-4.41c2.3-6.16 7.15-18.8 9-21.72 1.81-2.76-14.43-9.63-23.93-13.34 1.47-.15 3-2.35 3-2.35s36.52.19 30.39 15.73z"
        opacity="0.1"
        transform="translate(-100.52 -33.01)"
      ></path>
      <ellipse
        cx="90.82"
        cy="763.14"
        fill={color}
        opacity="0.1"
        rx="44.18"
        ry="8.64"
      ></ellipse>
      <ellipse
        cx="827.28"
        cy="706.15"
        fill={color}
        opacity="0.1"
        rx="32.18"
        ry="6.29"
      ></ellipse>
      <ellipse
        cx="966.77"
        cy="731.64"
        fill={color}
        opacity="0.1"
        rx="32.18"
        ry="6.29"
      ></ellipse>
      <ellipse
        cx="750.78"
        cy="784.14"
        fill={color}
        opacity="0.1"
        rx="32.18"
        ry="6.29"
      ></ellipse>
      <path
        fill={color}
        d="M233.09 556.31s7.24 9.47-3.34 23.75-19.29 26.34-15.75 35.25c0 0 15.95-26.53 28.94-26.9s4.44-16.14-9.85-32.1z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        d="M233.09 556.31a11.79 11.79 0 011.48 3c12.67 14.89 19.42 28.78 7.24 29.13-11.34.32-24.95 20.61-28.21 25.73a9.44 9.44 0 00.39 1.17s15.95-26.53 28.94-26.9 4.45-16.17-9.84-32.13z"
        opacity="0.1"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill="#ffd037"
        d="M246.54 568.37c0 3.33-.37 6-.83 6s-.84-2.7-.84-6 .47-1.76.93-1.76.74-1.61.74 1.76z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill="#ffd037"
        d="M251.16 572.35c-2.92 1.59-5.47 2.56-5.69 2.15s2-2 4.89-3.62 1.77-.43 2 0 1.72-.13-1.2 1.47z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill={color}
        d="M194.88 556.31s-7.24 9.47 3.34 23.75 19.29 26.34 15.78 35.25c0 0-16-26.53-29-26.9s-4.41-16.14 9.88-32.1z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        d="M194.88 556.31a11.79 11.79 0 00-1.48 3c-12.67 14.89-19.42 28.78-7.24 29.13 11.34.32 25 20.61 28.21 25.73a11.41 11.41 0 01-.38 1.17s-16-26.53-29-26.9-4.4-16.17 9.89-32.13z"
        opacity="0.1"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill="#ffd037"
        d="M181.43 568.37c0 3.33.37 6 .83 6s.84-2.7.84-6-.47-1.76-.93-1.76-.74-1.61-.74 1.76z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill="#ffd037"
        d="M176.81 572.35c2.93 1.59 5.47 2.56 5.7 2.15s-2-2-4.9-3.62-1.77-.43-2 0-1.72-.13 1.2 1.47z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <ellipse
        cx="113.46"
        cy="643.07"
        fill={color}
        opacity="0.1"
        rx="75.65"
        ry="11.61"
      ></ellipse>
      <path
        fill="#65617d"
        d="M252.92 602.56l-.36 3-.51 4.17-.21 1.74-.51 4.18-.22 1.74-.51 4.17-5.78 47.44c-.52 4.24-7.44 7.54-15.8 7.54H199c-8.36 0-15.27-3.3-15.79-7.54l-5.79-47.45-.51-4.17-.21-1.74-.52-4.18-.21-1.74-.51-4.17-.36-3c-.29-2.4 3.45-4.42 8.18-4.42h61.52c4.67.01 8.42 2.03 8.12 4.43z"
        transform="translate(-100.52 -33.01)"
      ></path>
      <path
        fill="#9d9cb5"
        d="M152.03 572.5L151.53 576.68 75.39 576.68 74.89 572.5 152.03 572.5z"
      ></path>
      <path
        fill="#9d9cb5"
        d="M151.31 578.42L150.81 582.59 76.12 582.59 75.61 578.42 151.31 578.42z"
      ></path>
      <path
        fill="#9d9cb5"
        d="M150.59 584.33L150.08 588.5 76.84 588.5 76.33 584.33 150.59 584.33z"
      ></path>
      <circle
        cx="179.99"
        cy="124.52"
        r="31.5"
        fill={color}
        opacity="0.1"
      ></circle>
      <circle
        cx="113.99"
        cy="49.52"
        r="19.5"
        fill={color}
        opacity="0.1"
      ></circle>
      <circle
        cx="12"
        cy="93.02"
        r="12"
        fill={color}
        opacity="0.1"
      ></circle>
    </svg>
  );
};

BlankCanvasDesign.defaultProps = {
  color:
    designSystem.colors.brand.secondary,
};
