import React from "react";

export default function Vector({ fill }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8501 5.31C11.5313 5.71927 11.1233 6.05038 10.6571 6.27814C10.191 6.50589 9.679 6.6243 9.16018 6.6243C8.64136 6.6243 8.12927 6.50589 7.66311 6.27814C7.19696 6.05038 6.78897 5.71927 6.47012 5.31C6.08921 5.80824 5.5761 6.18954 4.98916 6.41052C4.40222 6.63151 3.76509 6.6833 3.15017 6.56V7.04001C3.15017 9.70001 3.15017 12.37 3.15017 15.04C3.15017 15.73 3.37009 15.95 4.07009 15.96H5.85012V8.88C5.85012 8.16 6.05016 7.95999 6.76016 7.95999C8.39016 7.95999 10.0102 7.95999 11.6402 7.95999C12.2802 7.95999 12.5202 8.18999 12.5302 8.82999C12.5302 10.48 12.5302 12.14 12.5302 13.83C12.5302 14.37 12.1701 14.72 11.7101 14.62C11.2501 14.52 11.2001 14.25 11.2001 13.87V9.35999H7.2001V15.98H7.57009H14.2802C14.9202 15.98 15.1701 15.73 15.1701 15.1V8.67999C15.1585 8.58582 15.1671 8.49027 15.1952 8.39966C15.2233 8.30904 15.2704 8.22542 15.3333 8.15436C15.3961 8.08329 15.4735 8.0264 15.56 7.98743C15.6465 7.94846 15.7402 7.92828 15.8351 7.92828C15.93 7.92828 16.0237 7.94846 16.1103 7.98743C16.1968 8.0264 16.2741 8.08329 16.3369 8.15436C16.3998 8.22542 16.4469 8.30904 16.475 8.39966C16.5031 8.49027 16.5117 8.58582 16.5001 8.67999C16.5001 9.06999 16.5001 9.46001 16.5001 9.85001V15.1C16.523 15.4004 16.4802 15.7022 16.3749 15.9844C16.2696 16.2667 16.1043 16.5227 15.8903 16.7348C15.6763 16.9468 15.4188 17.1099 15.1356 17.2127C14.8525 17.3154 14.5503 17.3555 14.2501 17.33H4.07009C3.7677 17.3577 3.46294 17.3185 3.17739 17.2152C2.89184 17.1119 2.63247 16.947 2.41775 16.7323C2.20303 16.5176 2.03825 16.2583 1.93496 15.9727C1.83167 15.6872 1.79243 15.3824 1.82009 15.08V6.39999C1.82838 6.27962 1.80828 6.15899 1.76138 6.04782C1.71448 5.93665 1.64207 5.83807 1.55007 5.76001C1.21256 5.45647 0.943525 5.08458 0.760768 4.66907C0.57801 4.25355 0.485782 3.80391 0.490138 3.35001C0.490138 2.52001 0.490138 1.68001 0.490138 0.850006C0.490138 0.230006 0.720123 0 1.35012 0H16.9901C17.4901 0 17.8101 0.200005 17.8201 0.630005C17.8651 1.68357 17.8451 2.73891 17.7602 3.79001C17.7067 4.41367 17.4633 5.00593 17.0628 5.48694C16.6622 5.96795 16.1238 6.31456 15.5202 6.48001C14.9164 6.68619 14.2656 6.71179 13.6475 6.55371C13.0294 6.39563 12.4707 6.06072 12.0401 5.59C11.9689 5.5022 11.9054 5.40853 11.8501 5.31ZM7.16018 1.31C7.16018 2 7.16018 2.65 7.16018 3.31C7.16882 3.79631 7.34917 4.26387 7.66946 4.62991C7.98975 4.99596 8.42932 5.23688 8.91018 5.31C9.3692 5.37331 9.83562 5.26849 10.2234 5.01486C10.6112 4.76124 10.8942 4.37591 11.0202 3.92999C11.1412 3.07199 11.2013 2.20649 11.2001 1.34L7.16018 1.31ZM12.5001 1.31C12.5001 1.99 12.5001 2.64 12.5001 3.31C12.508 3.79338 12.6856 4.2586 13.0019 4.62424C13.3181 4.98987 13.7529 5.23262 14.2301 5.31C14.7039 5.36564 15.1821 5.25008 15.5782 4.98419C15.9742 4.7183 16.2622 4.31957 16.3902 3.85999C16.4877 3.02359 16.5345 2.18205 16.5302 1.34L12.5001 1.31ZM1.82009 1.31C1.82009 2.01 1.82009 2.66 1.82009 3.31C1.81682 3.80289 1.99575 4.27963 2.32241 4.64874C2.64908 5.01785 3.10048 5.25332 3.59011 5.31C4.06445 5.35615 4.53969 5.2314 4.9302 4.95822C5.32071 4.68505 5.60083 4.28141 5.72012 3.82001C5.78022 2.99777 5.78022 2.17224 5.72012 1.35001L1.82009 1.31Z"
        fill={fill}
      />
    </svg>
  );
}
