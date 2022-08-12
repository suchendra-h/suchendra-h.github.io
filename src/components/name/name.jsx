import { motion } from "framer-motion";
import "./name.css";

function NameBrand() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 0.2)",
    },
  };
  const svg_d =
    "M 108.057 22.119 L 98.438 31.738 Q 80.128 50.049 71.925 61.231 A 30.865 30.865 0 0 1 70.419 67.484 Q 69.415 70.365 67.823 73.389 A 53.278 53.278 0 0 1 66.82 75.156 Q 65.392 77.557 64.386 78.511 A 5.079 5.079 0 0 1 64.381 78.516 A 11.322 11.322 0 0 1 63.825 79.01 Q 62.988 79.703 62.473 79.776 A 0.836 0.836 0 0 1 62.354 79.785 A 17.572 17.572 0 0 1 57.326 79.014 Q 55.041 78.333 52.637 77.051 Q 47.853 74.499 47.533 72.245 A 2.285 2.285 0 0 1 47.51 71.924 A 5.494 5.494 0 0 1 47.889 70.078 Q 48.896 67.309 52.582 62.876 A 73.561 73.561 0 0 1 53.565 61.719 A 61.878 61.878 0 0 1 56.721 58.271 A 56.697 56.697 0 0 1 56.934 58.057 A 89.967 89.967 0 0 0 62.205 43.485 A 65.725 65.725 0 0 0 64.454 26.807 A 32.382 32.382 0 0 0 64.437 25.821 Q 64.387 24.182 64.185 21.582 A 18.32 18.32 0 0 0 63.396 17.574 A 24.678 24.678 0 0 0 62.11 14.307 A 157.215 157.215 0 0 1 42.53 55.908 A 89.909 89.909 0 0 1 36.306 64.206 Q 32.956 68.14 29.547 71.016 A 39.934 39.934 0 0 1 24.122 74.902 A 21.926 21.926 0 0 1 19.544 76.97 A 17.263 17.263 0 0 1 14.356 77.783 A 25.989 25.989 0 0 1 11.213 77.604 Q 9.574 77.404 8.202 76.98 A 12.324 12.324 0 0 1 6.397 76.27 Q 0.001 73.096 0.001 65.576 Q 0.001 60.693 2.491 56.641 A 12.239 12.239 0 0 1 3.635 55.076 Q 4.341 54.263 5.123 53.708 A 6.955 6.955 0 0 1 5.567 53.418 A 27.899 27.899 0 0 0 11.043 56.496 A 20.255 20.255 0 0 0 18.848 58.106 A 20.041 20.041 0 0 0 28.35 55.584 Q 33.409 52.889 38.428 47.315 A 71.116 71.116 0 0 0 44.28 39.747 Q 47.062 35.648 49.822 30.619 A 173.342 173.342 0 0 0 55.323 19.629 A 475.702 475.702 0 0 0 57.471 14.893 A 386.646 386.646 0 0 0 59.425 10.449 A 12.156 12.156 0 0 0 52.324 6.997 A 16.921 16.921 0 0 0 49.952 6.836 A 25.124 25.124 0 0 0 40.339 8.648 A 23.794 23.794 0 0 0 35.303 11.475 A 19.427 19.427 0 0 0 31.678 14.782 A 12.788 12.788 0 0 0 28.565 23.193 A 11.947 11.947 0 0 0 30.385 29.444 Q 31.402 31.131 32.988 32.752 A 23.718 23.718 0 0 0 33.594 33.35 Q 32.056 35.455 29.074 37.023 A 21.751 21.751 0 0 1 27.784 37.647 A 5.259 5.259 0 0 1 25.587 38.135 Q 24.707 38.135 23.633 37.716 A 9.375 9.375 0 0 1 23.023 37.451 A 7.913 7.913 0 0 1 20.601 35.655 A 9.067 9.067 0 0 1 20.46 35.498 A 10.062 10.062 0 0 1 17.921 28.613 A 19.866 19.866 0 0 1 18.652 23.16 A 17.968 17.968 0 0 1 19.337 21.192 A 24.964 24.964 0 0 1 23.194 14.819 A 31.826 31.826 0 0 1 28.883 9.473 A 42.954 42.954 0 0 1 35.792 5.322 A 39.742 39.742 0 0 1 43.6 2.594 A 31.737 31.737 0 0 1 50.758 1.758 Q 56.774 1.758 61.149 3.549 A 18.598 18.598 0 0 1 62.94 4.395 A 18.589 18.589 0 0 1 71.024 13.382 Q 74.268 20.462 74.268 31.934 A 97.135 97.135 0 0 1 74.012 38.794 Q 73.756 42.407 73.243 46.387 A 104.19 104.19 0 0 1 78.367 41.037 Q 87.513 32.056 105.421 17.334 A 262.397 262.397 0 0 0 108.582 14.746 A 220.291 220.291 0 0 0 111.524 12.256 A 99.631 99.631 0 0 1 112.709 9.372 Q 114.427 5.386 115.677 3.714 A 7.628 7.628 0 0 1 115.87 3.467 A 19.839 19.839 0 0 1 117.05 2.116 Q 119.091 0 120.655 0 Q 122.657 0 123.389 1.001 A 4.674 4.674 0 0 1 123.806 1.678 Q 124.001 2.07 124.076 2.445 A 2.361 2.361 0 0 1 124.122 2.905 A 3.563 3.563 0 0 1 123.95 3.974 A 4.903 4.903 0 0 1 123.609 4.785 Q 123.096 5.762 122.315 6.885 A 48.873 48.873 0 0 1 118.8 11.231 A 291.068 291.068 0 0 0 113.966 64.111 A 17.695 17.695 0 0 1 113.282 69.201 A 12.195 12.195 0 0 1 106.104 77.1 A 18.858 18.858 0 0 1 98.938 78.655 A 21.746 21.746 0 0 1 98.389 78.662 Q 92.139 78.662 87.647 75.684 Q 85.889 74.512 84.913 72.998 Q 90.235 68.555 100.489 43.018 A 338.533 338.533 0 0 0 108.057 22.119 Z M 411.674 60.79 A 40.288 40.288 0 0 0 410.938 67.92 Q 410.938 77.173 417.715 79.269 A 15.41 15.41 0 0 0 422.266 79.883 A 8.403 8.403 0 0 0 423.061 79.844 Q 425.766 79.588 429.106 77.613 A 33.096 33.096 0 0 0 432.178 75.537 A 42.009 42.009 0 0 0 433.491 74.524 A 48.001 48.001 0 0 0 437.354 71.045 A 65.329 65.329 0 0 0 442.091 65.772 A 51.255 51.255 0 0 0 442.556 65.183 Q 444.543 62.636 446.705 59.229 A 30.765 30.765 0 0 0 447.636 57.668 Q 448.589 55.949 448.931 54.686 A 4.907 4.907 0 0 0 449.122 53.418 A 2.855 2.855 0 0 0 449.089 52.971 Q 448.866 51.571 447.146 51.602 A 4.582 4.582 0 0 0 446.925 51.611 Q 445.362 53.955 443.458 55.908 Q 439.957 59.606 436.636 61.166 A 11.122 11.122 0 0 1 431.885 62.305 Q 428.858 62.305 427.637 59.522 Q 427.051 58.252 426.881 56.665 A 18.692 18.692 0 0 1 426.865 56.518 Q 426.761 55.468 426.726 53.975 A 68.099 68.099 0 0 1 426.71 52.417 Q 426.71 50.38 427.912 45.752 A 115.416 115.416 0 0 1 428.76 42.676 A 45.597 45.597 0 0 0 430.869 42.876 A 35.563 35.563 0 0 0 433.375 42.969 Q 435.499 42.969 436.426 41.846 Q 437.58 40.372 438.103 38.162 A 16.123 16.123 0 0 0 438.477 35.645 A 49.012 49.012 0 0 1 434.717 35.791 Q 432.862 35.791 431.007 35.693 A 150.145 150.145 0 0 1 431.428 34.482 A 165.321 165.321 0 0 1 434.766 25.83 Q 439.93 13.172 444.119 6.281 A 40.755 40.755 0 0 1 447.022 2.051 Q 446.152 1.355 445.352 0.918 A 7.011 7.011 0 0 0 444.288 0.44 A 4.103 4.103 0 0 0 442.75 0.147 A 1.693 1.693 0 0 0 441.766 0.462 A 2.473 2.473 0 0 0 441.309 0.879 A 69.503 69.503 0 0 0 440.367 2.085 Q 439.559 3.142 438.677 4.369 A 137.069 137.069 0 0 0 436.915 6.885 A 184.688 184.688 0 0 0 430.707 16.555 A 221.04 221.04 0 0 0 421.094 34.473 A 64.131 64.131 0 0 1 419.509 34.156 Q 413.876 32.964 401.368 29.541 A 238.88 238.88 0 0 0 402.112 27.161 Q 403.19 23.645 404.042 20.46 A 136.149 136.149 0 0 0 405.567 14.209 Q 408.057 3.027 406.934 1.953 A 4.193 4.193 0 0 0 405.706 1.14 Q 405.038 0.845 404.195 0.707 A 9.968 9.968 0 0 0 402.589 0.586 A 41.954 41.954 0 0 1 402.541 1.088 Q 401.445 11.894 394.288 27.734 A 72.164 72.164 0 0 0 392.367 27.331 Q 389.962 26.861 387.802 26.62 A 38.517 38.517 0 0 0 383.546 26.367 A 32.735 32.735 0 0 0 364.258 32.568 Q 360.255 35.449 357.105 39.258 Q 353.956 43.067 351.783 47.29 A 41.695 41.695 0 0 0 348.463 55.957 A 38.737 38.737 0 0 0 347.763 59.224 A 31.119 31.119 0 0 0 347.315 64.38 A 33.114 33.114 0 0 0 347.498 67.934 A 24.713 24.713 0 0 0 348.145 71.533 Q 349.995 79.003 355.787 81.133 A 15.139 15.139 0 0 0 361.036 81.983 A 17.77 17.77 0 0 0 365.034 81.524 Q 368.356 80.759 371.643 78.72 A 33.393 33.393 0 0 0 376.758 74.756 A 47.555 47.555 0 0 0 378.341 73.21 Q 390.265 61.015 399.61 34.766 A 221.228 221.228 0 0 1 408.765 37.744 A 137.564 137.564 0 0 0 418.262 40.674 A 153.917 153.917 0 0 0 416.923 43.871 Q 413.038 53.456 411.674 60.79 Z M 302.833 62.305 A 9.63 9.63 0 0 0 305.905 61.765 Q 308.251 60.976 310.889 59.033 A 29.775 29.775 0 0 0 316.966 52.832 A 34.282 34.282 0 0 0 317.823 51.611 Q 320.063 51.417 319.972 53.505 A 3.91 3.91 0 0 1 319.971 53.516 A 4.473 4.473 0 0 1 319.809 54.518 Q 319.532 55.561 318.786 57.021 A 30.197 30.197 0 0 1 317.945 58.545 A 68.74 68.74 0 0 1 316.046 61.603 Q 315.108 63.026 314.186 64.243 A 41.788 41.788 0 0 1 314.063 64.404 A 52.312 52.312 0 0 1 310.394 68.688 A 57.92 57.92 0 0 1 309.815 69.287 A 38.626 38.626 0 0 1 304.835 73.584 A 26.417 26.417 0 0 1 300.45 76.14 Q 297.645 77.411 294.909 77.699 A 15.259 15.259 0 0 1 293.311 77.783 Q 289.297 77.783 286.779 76.439 A 7.357 7.357 0 0 1 283.741 73.486 A 5.922 5.922 0 0 1 283.068 71.556 Q 282.957 70.914 282.957 70.197 A 9.497 9.497 0 0 1 282.96 69.971 A 19.698 19.698 0 0 1 276.299 75.124 A 27.632 27.632 0 0 1 271.143 77.002 A 20.765 20.765 0 0 1 267.221 77.632 A 24.591 24.591 0 0 1 265.577 77.686 A 16.197 16.197 0 0 1 262.221 77.35 A 13.59 13.59 0 0 1 260.133 76.734 Q 257.667 75.781 255.909 74.072 Q 252.296 70.508 252.296 64.551 A 17.851 17.851 0 0 1 253.803 57.538 Q 254.862 55.043 256.666 52.503 A 36.136 36.136 0 0 1 258.008 50.733 A 42.172 42.172 0 0 1 269.228 40.983 A 50.234 50.234 0 0 1 272.413 39.209 A 43.555 43.555 0 0 1 285.488 34.935 A 39.923 39.923 0 0 1 291.553 34.473 Q 295.899 34.473 295.411 38.33 A 35.052 35.052 0 0 0 284.14 40.09 A 30.903 30.903 0 0 0 275.831 44.385 A 25.816 25.816 0 0 0 272.565 47.205 A 19.919 19.919 0 0 0 270.093 50.293 Q 268.216 53.209 268.037 55.965 A 8.931 8.931 0 0 0 268.018 56.543 A 9.772 9.772 0 0 0 268.227 58.663 Q 268.894 61.652 271.692 62.12 A 6.741 6.741 0 0 0 272.803 62.207 Q 279.688 62.207 286.671 53.613 A 44.724 44.724 0 0 0 288.275 51.485 Q 290.007 49.052 292.073 45.619 A 143.351 143.351 0 0 0 292.359 45.142 A 3674.407 3674.407 0 0 1 293.909 42.545 Q 295.813 39.358 297.231 37.003 A 1179.875 1179.875 0 0 1 297.681 36.255 Q 299.757 32.813 301.929 29.224 A 1754.4 1754.4 0 0 1 305.093 24.019 A 1531.709 1531.709 0 0 1 306.104 22.363 Q 310.718 14.826 312.041 12.93 A 14.828 14.828 0 0 1 312.208 12.695 A 7.34 7.34 0 0 1 313.353 11.421 Q 314.704 10.254 316.358 10.254 A 6.081 6.081 0 0 1 317.95 10.45 A 4.077 4.077 0 0 1 320.411 12.256 Q 315.04 20.703 310.401 30.176 Q 305.762 39.649 303.956 43.994 A 111.486 111.486 0 0 0 302.258 48.308 Q 299.999 54.452 299.863 57.678 A 9.535 9.535 0 0 0 299.854 58.081 A 8.871 8.871 0 0 0 299.968 59.57 Q 300.436 62.305 302.833 62.305 Z M 668.414 77.476 A 1.619 1.619 0 0 0 669.385 75.928 A 77.52 77.52 0 0 1 669.418 74.816 A 83.324 83.324 0 0 1 671.827 57.91 Q 675.342 52.637 682.032 47.949 A 51.516 51.516 0 0 1 684.8 46.144 Q 687.86 44.296 690.154 43.633 A 8.459 8.459 0 0 1 692.481 43.262 A 0.037 0.037 0 0 1 692.52 43.307 Q 692.52 43.62 690.696 46.08 A 121.866 121.866 0 0 1 690.137 46.826 A 80.952 80.952 0 0 0 689.031 48.344 Q 684.237 55.082 682.435 60.691 A 20.801 20.801 0 0 0 681.348 67.041 A 20.272 20.272 0 0 0 681.399 68.503 Q 681.53 70.31 681.995 71.805 A 9.524 9.524 0 0 0 684.278 75.733 A 8.757 8.757 0 0 0 686.207 77.21 Q 687.687 78.05 689.599 78.42 A 17.244 17.244 0 0 0 692.872 78.711 A 15.066 15.066 0 0 0 694.784 78.588 Q 697.439 78.249 700.158 76.971 A 26.577 26.577 0 0 0 704.493 74.365 A 34.694 34.694 0 0 0 709.522 69.873 A 53.781 53.781 0 0 0 709.807 69.561 A 48.98 48.98 0 0 0 713.648 64.771 A 51.328 51.328 0 0 0 714.167 64.017 Q 714.949 62.857 715.762 61.523 A 88.736 88.736 0 0 0 717.481 58.569 A 41.224 41.224 0 0 0 717.761 58.06 Q 719.019 55.728 719.358 54.326 A 3.927 3.927 0 0 0 719.483 53.418 A 2.855 2.855 0 0 0 719.45 52.971 Q 719.228 51.571 717.507 51.602 A 4.582 4.582 0 0 0 717.286 51.611 Q 715.772 53.906 713.917 55.908 A 41.927 41.927 0 0 1 712.838 57.044 Q 709.458 60.471 706.391 61.872 A 9.835 9.835 0 0 1 702.296 62.842 A 4.288 4.288 0 0 1 702.186 62.841 Q 699.821 62.78 699.342 60.087 A 8.838 8.838 0 0 1 699.219 58.545 Q 699.219 56.6 700.888 52.002 A 92.653 92.653 0 0 1 701.954 49.219 A 595.095 595.095 0 0 0 704.053 43.897 A 45.431 45.431 0 0 0 704.37 43.059 Q 705.119 41.014 705.323 39.771 A 30.098 30.098 0 0 0 705.368 39.488 Q 705.567 38.196 705.567 37.402 Q 705.567 36.881 705.412 36.299 A 6.413 6.413 0 0 0 705.128 35.474 A 1.022 1.022 0 0 0 704.994 35.245 Q 704.363 34.424 701.881 34.424 Q 699.073 34.424 695.313 35.449 Q 683.79 38.574 675.098 47.119 A 97.584 97.584 0 0 1 675.222 46.781 Q 676.159 44.239 677.348 41.446 A 162.755 162.755 0 0 1 679.981 35.596 A 2.815 2.815 0 0 0 678.598 34.585 A 4.188 4.188 0 0 0 677.589 34.375 Q 677.112 34.338 676.458 34.329 A 32.672 32.672 0 0 0 676.002 34.326 A 3.641 3.641 0 0 0 675.602 34.349 Q 675.183 34.395 674.726 34.536 A 6.963 6.963 0 0 0 673.878 34.863 A 21.437 21.437 0 0 0 671.342 36.323 Q 669.686 37.424 667.964 38.944 A 47.525 47.525 0 0 0 664.698 42.139 A 47.058 47.058 0 0 0 664.662 42.177 A 50.623 50.623 0 0 0 660.352 47.461 A 46.848 46.848 0 0 0 656.739 53.418 Q 655.176 56.494 654.249 59.644 Q 653.321 62.793 653.321 65.967 Q 653.321 69.141 654.591 71.436 Q 658.008 77.881 666.114 77.881 Q 667.603 77.881 668.414 77.476 Z M 199.406 12.604 A 4.486 4.486 0 0 0 195.118 9.912 A 8.367 8.367 0 0 0 193.291 10.133 Q 189.794 10.918 184.571 14.502 A 59.383 59.383 0 0 0 181.799 16.579 A 75.384 75.384 0 0 0 178.126 19.702 A 81.409 81.409 0 0 0 177.298 20.462 A 89.942 89.942 0 0 0 171.607 26.27 A 82.915 82.915 0 0 0 165.552 33.887 Q 162.696 37.94 160.548 42.163 A 54.833 54.833 0 0 0 160.414 42.427 A 49.948 49.948 0 0 0 157.13 50.684 A 33.251 33.251 0 0 0 156.976 51.221 A 29.774 29.774 0 0 0 155.86 59.204 A 35.849 35.849 0 0 0 156.028 62.746 A 27.289 27.289 0 0 0 156.739 66.846 Q 159.425 77.783 172.217 77.783 A 30.545 30.545 0 0 0 181.533 76.363 A 32.831 32.831 0 0 0 192.383 70.361 Q 196.339 67.139 199.171 63.159 A 73.696 73.696 0 0 0 199.907 62.106 Q 201.356 59.993 202.247 58.345 A 19.145 19.145 0 0 0 203.052 56.69 A 38.921 38.921 0 0 0 203.406 55.825 Q 203.915 54.53 204.052 53.842 A 2.241 2.241 0 0 0 204.102 53.418 A 2.855 2.855 0 0 0 204.069 52.971 Q 203.847 51.571 202.127 51.602 A 4.582 4.582 0 0 0 201.905 51.611 Q 198.292 57.129 192.872 59.912 A 22.973 22.973 0 0 1 191.955 60.363 A 19.996 19.996 0 0 1 187.965 61.743 A 24.092 24.092 0 0 1 185.872 62.127 A 18.501 18.501 0 0 1 183.375 62.305 Q 182.18 62.305 181.163 62.197 A 13.683 13.683 0 0 1 179.688 61.963 Q 175.912 61.132 174.676 56.446 A 18.073 18.073 0 0 1 174.171 53.369 A 72.791 72.791 0 0 0 185.889 44.531 A 85.956 85.956 0 0 0 186.956 43.537 Q 194.808 36.09 198.12 29.068 A 23.399 23.399 0 0 0 200.538 19.043 A 28.369 28.369 0 0 0 200.522 18.092 Q 200.405 14.605 199.406 12.604 Z M 218.347 75.172 A 23.409 23.409 0 0 0 224.512 69.971 L 224.512 71.167 A 3.088 3.088 0 0 0 224.605 71.893 Q 224.697 72.274 224.882 72.693 A 7.473 7.473 0 0 0 225.294 73.486 A 7.48 7.48 0 0 0 228.278 76.397 Q 230.815 77.783 234.864 77.783 A 15.259 15.259 0 0 0 236.461 77.699 Q 239.198 77.411 242.003 76.14 A 26.417 26.417 0 0 0 246.387 73.584 A 38.626 38.626 0 0 0 251.368 69.287 A 57.92 57.92 0 0 0 251.947 68.688 A 52.312 52.312 0 0 0 255.616 64.404 Q 256.628 63.081 257.674 61.497 A 73.391 73.391 0 0 0 259.547 58.496 A 29.296 29.296 0 0 0 260.406 56.95 Q 261.573 54.678 261.573 53.418 A 2.855 2.855 0 0 0 261.54 52.971 Q 261.318 51.571 259.597 51.602 A 4.582 4.582 0 0 0 259.376 51.611 A 34.282 34.282 0 0 1 258.519 52.832 A 29.775 29.775 0 0 1 252.442 59.033 Q 249.804 60.976 247.458 61.765 A 9.63 9.63 0 0 1 244.385 62.305 A 2.436 2.436 0 0 1 242.906 61.865 Q 241.959 61.172 241.7 59.388 A 10.498 10.498 0 0 1 241.602 57.886 A 17.056 17.056 0 0 1 241.76 55.693 Q 242.133 52.839 243.388 48.744 A 96.366 96.366 0 0 1 244.776 44.58 A 327.394 327.394 0 0 1 245.631 42.188 A 255.898 255.898 0 0 1 246.436 39.99 A 151.531 151.531 0 0 1 246.91 38.733 Q 247.14 38.132 247.356 37.585 A 84.753 84.753 0 0 1 247.852 36.353 A 83.525 83.525 0 0 0 247.95 36.115 Q 248.502 34.764 248.682 34.18 A 18.437 18.437 0 0 0 247.017 33.832 A 14.545 14.545 0 0 0 244.727 33.643 A 2.986 2.986 0 0 0 244.563 33.647 Q 244.183 33.668 243.645 33.781 A 13.129 13.129 0 0 0 243.091 33.911 Q 242.042 34.18 240.723 35.742 A 4.231 4.231 0 0 0 240.145 35.387 Q 238.455 34.522 235.206 34.522 Q 225.05 34.522 215.528 38.965 A 49.62 49.62 0 0 0 210.387 41.74 A 39.568 39.568 0 0 0 200.684 50.098 A 28.939 28.939 0 0 0 197.23 55.208 A 20.08 20.08 0 0 0 194.825 64.6 Q 194.825 70.508 198.438 74.121 A 12.021 12.021 0 0 0 203.969 77.268 A 16.512 16.512 0 0 0 208.204 77.783 A 20.124 20.124 0 0 0 218.347 75.172 Z M 463.366 75.172 A 23.409 23.409 0 0 0 469.532 69.971 L 469.532 71.167 A 3.088 3.088 0 0 0 469.624 71.893 Q 469.717 72.274 469.901 72.693 A 7.473 7.473 0 0 0 470.313 73.486 A 7.48 7.48 0 0 0 473.297 76.397 Q 475.834 77.783 479.883 77.783 A 15.259 15.259 0 0 0 481.481 77.699 Q 484.217 77.411 487.023 76.14 A 26.417 26.417 0 0 0 491.407 73.584 A 38.626 38.626 0 0 0 496.387 69.287 A 57.92 57.92 0 0 0 496.966 68.688 A 52.312 52.312 0 0 0 500.635 64.404 Q 501.647 63.081 502.693 61.497 A 73.391 73.391 0 0 0 504.566 58.496 A 29.296 29.296 0 0 0 505.426 56.95 Q 506.592 54.678 506.592 53.418 A 2.855 2.855 0 0 0 506.559 52.971 Q 506.337 51.571 504.617 51.602 A 4.582 4.582 0 0 0 504.395 51.611 A 34.282 34.282 0 0 1 503.538 52.832 A 29.775 29.775 0 0 1 497.462 59.033 Q 494.823 60.976 492.478 61.765 A 9.63 9.63 0 0 1 489.405 62.305 A 2.436 2.436 0 0 1 487.925 61.865 Q 486.979 61.172 486.72 59.388 A 10.498 10.498 0 0 1 486.622 57.886 A 17.056 17.056 0 0 1 486.78 55.693 Q 487.153 52.839 488.407 48.744 A 96.366 96.366 0 0 1 489.796 44.58 A 327.394 327.394 0 0 1 490.65 42.188 A 255.898 255.898 0 0 1 491.456 39.99 A 151.531 151.531 0 0 1 491.93 38.733 Q 492.16 38.132 492.375 37.585 A 84.753 84.753 0 0 1 492.872 36.353 A 83.525 83.525 0 0 0 492.97 36.115 Q 493.522 34.764 493.702 34.18 A 18.437 18.437 0 0 0 492.036 33.832 A 14.545 14.545 0 0 0 489.747 33.643 A 2.986 2.986 0 0 0 489.582 33.647 Q 489.203 33.668 488.665 33.781 A 13.129 13.129 0 0 0 488.111 33.911 Q 487.061 34.18 485.743 35.742 A 4.231 4.231 0 0 0 485.164 35.387 Q 483.474 34.522 480.225 34.522 Q 470.069 34.522 460.548 38.965 A 49.62 49.62 0 0 0 455.407 41.74 A 39.568 39.568 0 0 0 445.704 50.098 A 28.939 28.939 0 0 0 442.249 55.208 A 20.08 20.08 0 0 0 439.844 64.6 Q 439.844 70.508 443.458 74.121 A 12.021 12.021 0 0 0 448.989 77.268 A 16.512 16.512 0 0 0 453.223 77.783 A 20.124 20.124 0 0 0 463.366 75.172 Z M 618.786 75.172 A 23.409 23.409 0 0 0 624.952 69.971 L 624.952 71.167 A 3.088 3.088 0 0 0 625.044 71.893 Q 625.136 72.274 625.321 72.693 A 7.473 7.473 0 0 0 625.733 73.486 A 7.48 7.48 0 0 0 628.717 76.397 Q 631.254 77.783 635.303 77.783 A 15.259 15.259 0 0 0 636.901 77.699 Q 639.637 77.411 642.443 76.14 A 26.417 26.417 0 0 0 646.827 73.584 A 38.626 38.626 0 0 0 651.807 69.287 A 57.92 57.92 0 0 0 652.386 68.688 A 52.312 52.312 0 0 0 656.055 64.404 Q 657.067 63.081 658.113 61.497 A 73.391 73.391 0 0 0 659.986 58.496 A 29.296 29.296 0 0 0 660.845 56.95 Q 662.012 54.678 662.012 53.418 A 2.855 2.855 0 0 0 661.979 52.971 Q 661.757 51.571 660.037 51.602 A 4.582 4.582 0 0 0 659.815 51.611 A 34.282 34.282 0 0 1 658.958 52.832 A 29.775 29.775 0 0 1 652.882 59.033 Q 650.243 60.976 647.898 61.765 A 9.63 9.63 0 0 1 644.825 62.305 A 2.436 2.436 0 0 1 643.345 61.865 Q 642.399 61.172 642.14 59.388 A 10.498 10.498 0 0 1 642.042 57.886 A 17.056 17.056 0 0 1 642.2 55.693 Q 642.573 52.839 643.827 48.744 A 96.366 96.366 0 0 1 645.216 44.58 A 327.394 327.394 0 0 1 646.07 42.188 A 255.898 255.898 0 0 1 646.876 39.99 A 151.531 151.531 0 0 1 647.35 38.733 Q 647.579 38.132 647.795 37.585 A 84.753 84.753 0 0 1 648.292 36.353 A 83.525 83.525 0 0 0 648.389 36.115 Q 648.942 34.764 649.122 34.18 A 18.437 18.437 0 0 0 647.456 33.832 A 14.545 14.545 0 0 0 645.167 33.643 A 2.986 2.986 0 0 0 645.002 33.647 Q 644.623 33.668 644.085 33.781 A 13.129 13.129 0 0 0 643.531 33.911 Q 642.481 34.18 641.163 35.742 A 4.231 4.231 0 0 0 640.584 35.387 Q 638.894 34.522 635.645 34.522 Q 625.489 34.522 615.967 38.965 A 49.62 49.62 0 0 0 610.827 41.74 A 39.568 39.568 0 0 0 601.124 50.098 A 28.939 28.939 0 0 0 597.669 55.208 A 20.08 20.08 0 0 0 595.264 64.6 Q 595.264 70.508 598.878 74.121 A 12.021 12.021 0 0 0 604.409 77.268 A 16.512 16.512 0 0 0 608.643 77.783 A 20.124 20.124 0 0 0 618.786 75.172 Z M 539.551 37.451 A 29.29 29.29 0 0 0 537.426 37.373 A 27.022 27.022 0 0 0 534.327 37.549 L 534.327 39.258 A 12.915 12.915 0 0 0 534.354 40.041 Q 534.401 40.814 534.532 41.885 A 60.128 60.128 0 0 0 534.669 42.92 A 182.341 182.341 0 0 0 535.047 45.484 A 241.015 241.015 0 0 0 535.499 48.291 A 237.409 237.409 0 0 1 536.031 51.666 Q 536.866 57.233 536.866 59.522 Q 536.866 61.55 536.679 63.064 A 14.988 14.988 0 0 1 536.475 64.307 Q 543.848 62.451 550.001 55.811 A 33.565 33.565 0 0 0 553.321 51.611 Q 554.586 51.524 555.032 52.002 A 0.848 0.848 0 0 1 555.128 52.124 A 2.435 2.435 0 0 1 555.478 52.988 A 2.306 2.306 0 0 1 555.518 53.418 A 1.86 1.86 0 0 1 555.468 53.793 Q 555.327 54.445 554.789 55.788 A 48.339 48.339 0 0 1 554.395 56.738 A 17.072 17.072 0 0 1 553.495 58.52 Q 552.458 60.33 550.713 62.618 A 64.934 64.934 0 0 1 550.123 63.379 A 33.683 33.683 0 0 1 544.801 68.731 A 40.252 40.252 0 0 1 542.286 70.606 A 41.555 41.555 0 0 1 525.048 77.322 A 54.747 54.747 0 0 1 516.798 77.979 Q 515.751 78.053 513.988 78.071 A 115.553 115.553 0 0 1 512.842 78.076 A 11 11 0 0 1 510.298 77.76 Q 509.167 77.491 507.95 76.993 A 20.522 20.522 0 0 1 507.13 76.636 A 15.857 15.857 0 0 1 501.807 72.705 A 17.798 17.798 0 0 1 497.587 63.621 A 24.644 24.644 0 0 1 497.266 59.57 A 5.502 5.502 0 0 1 497.861 57.19 Q 498.743 55.35 500.933 53.295 A 28.554 28.554 0 0 1 502.296 52.1 A 26.866 26.866 0 0 1 504.331 50.567 A 23.218 23.218 0 0 1 505.128 50.049 A 38.21 38.21 0 0 1 512.611 41.848 A 50.645 50.645 0 0 1 519.019 37.354 A 44.886 44.886 0 0 1 525.581 34.094 Q 529.28 32.642 532.765 32.189 A 24.194 24.194 0 0 1 535.889 31.983 Q 538.721 31.983 539.796 33.545 A 2.83 2.83 0 0 1 540.282 34.675 Q 540.477 35.738 539.815 36.995 A 6.738 6.738 0 0 1 539.551 37.451 Z M 588.526 37.451 A 29.29 29.29 0 0 0 586.401 37.373 A 27.022 27.022 0 0 0 583.301 37.549 L 583.301 39.258 A 12.915 12.915 0 0 0 583.328 40.041 Q 583.376 40.814 583.507 41.885 A 60.128 60.128 0 0 0 583.643 42.92 A 182.341 182.341 0 0 0 584.022 45.484 A 241.015 241.015 0 0 0 584.473 48.291 A 237.409 237.409 0 0 1 585.006 51.666 Q 585.841 57.233 585.841 59.522 Q 585.841 61.55 585.653 63.064 A 14.988 14.988 0 0 1 585.45 64.307 Q 592.823 62.451 598.975 55.811 A 33.565 33.565 0 0 0 602.296 51.611 Q 603.56 51.524 604.007 52.002 A 0.848 0.848 0 0 1 604.102 52.124 A 2.435 2.435 0 0 1 604.453 52.988 A 2.306 2.306 0 0 1 604.493 53.418 A 1.86 1.86 0 0 1 604.443 53.793 Q 604.302 54.445 603.764 55.788 A 48.339 48.339 0 0 1 603.37 56.738 A 17.072 17.072 0 0 1 602.47 58.52 Q 601.432 60.33 599.687 62.618 A 64.934 64.934 0 0 1 599.097 63.379 A 33.683 33.683 0 0 1 593.775 68.731 A 40.252 40.252 0 0 1 591.26 70.606 A 41.555 41.555 0 0 1 574.023 77.322 A 54.747 54.747 0 0 1 565.772 77.979 Q 564.725 78.053 562.963 78.071 A 115.553 115.553 0 0 1 561.817 78.076 A 11 11 0 0 1 559.273 77.76 Q 558.141 77.491 556.925 76.993 A 20.522 20.522 0 0 1 556.104 76.636 A 15.857 15.857 0 0 1 550.782 72.705 A 17.798 17.798 0 0 1 546.561 63.621 A 24.644 24.644 0 0 1 546.241 59.57 A 5.502 5.502 0 0 1 546.835 57.19 Q 547.717 55.35 549.908 53.295 A 28.554 28.554 0 0 1 551.27 52.1 A 26.866 26.866 0 0 1 553.306 50.567 A 23.218 23.218 0 0 1 554.102 50.049 A 38.21 38.21 0 0 1 561.585 41.848 A 50.645 50.645 0 0 1 567.994 37.354 A 44.886 44.886 0 0 1 574.556 34.094 Q 578.254 32.642 581.739 32.189 A 24.194 24.194 0 0 1 584.864 31.983 Q 587.696 31.983 588.77 33.545 A 2.83 2.83 0 0 1 589.257 34.675 Q 589.451 35.738 588.79 36.995 A 6.738 6.738 0 0 1 588.526 37.451 Z M 123.386 69.839 A 10.204 10.204 0 0 0 124.122 72.119 A 9.4 9.4 0 0 0 130.505 77.605 A 14.818 14.818 0 0 0 134.376 78.076 A 23.921 23.921 0 0 0 141.237 77.068 A 28.475 28.475 0 0 0 148.341 73.779 Q 151.368 71.875 153.931 69.434 A 54.826 54.826 0 0 0 155.178 68.208 A 47.351 47.351 0 0 0 158.497 64.478 A 36.857 36.857 0 0 0 158.763 64.139 Q 159.694 62.941 160.631 61.537 A 60.482 60.482 0 0 0 162.525 58.496 A 38.438 38.438 0 0 0 162.653 58.276 Q 164.038 55.87 164.413 54.389 A 4.018 4.018 0 0 0 164.551 53.418 A 2.855 2.855 0 0 0 164.518 52.971 Q 164.296 51.571 162.576 51.602 A 4.582 4.582 0 0 0 162.354 51.611 A 34.282 34.282 0 0 1 161.497 52.832 A 29.775 29.775 0 0 1 155.421 59.033 A 23.929 23.929 0 0 1 154.541 59.647 A 20.692 20.692 0 0 1 151.343 61.401 A 10.685 10.685 0 0 1 150.886 61.588 A 11.159 11.159 0 0 1 146.876 62.305 A 6.694 6.694 0 0 1 146.727 62.303 A 5.296 5.296 0 0 1 142.872 60.62 A 6.984 6.984 0 0 1 142.516 60.219 A 5.247 5.247 0 0 1 141.26 56.812 A 14.63 14.63 0 0 1 141.316 55.54 A 16.733 16.733 0 0 1 141.895 52.442 A 25.509 25.509 0 0 1 143.339 48.433 Q 144.66 45.524 146.793 42.533 A 53.424 53.424 0 0 1 151.221 37.158 A 1.903 1.903 0 0 0 151.153 37.078 Q 150.82 36.706 149.97 36.082 A 27.586 27.586 0 0 0 149.39 35.669 A 7.735 7.735 0 0 0 148.674 35.224 Q 148.225 34.98 147.805 34.843 A 3.312 3.312 0 0 0 146.778 34.668 Q 144.62 34.668 140.548 38.103 A 53.188 53.188 0 0 0 138.233 40.186 A 57.926 57.926 0 0 0 135.917 42.552 A 72.546 72.546 0 0 0 132.911 46.021 A 62.941 62.941 0 0 0 128.052 52.857 Q 125.88 56.397 124.488 59.961 A 22.029 22.029 0 0 0 123.574 62.85 A 16.65 16.65 0 0 0 123.096 66.724 A 18.746 18.746 0 0 0 123.114 67.556 Q 123.169 68.777 123.386 69.839 Z M 711.276 69.839 A 10.204 10.204 0 0 0 712.012 72.119 A 9.4 9.4 0 0 0 718.395 77.605 A 14.818 14.818 0 0 0 722.266 78.076 A 23.921 23.921 0 0 0 729.128 77.068 A 28.475 28.475 0 0 0 736.231 73.779 Q 739.258 71.875 741.822 69.434 A 54.826 54.826 0 0 0 743.069 68.208 A 47.351 47.351 0 0 0 746.387 64.478 A 36.857 36.857 0 0 0 746.653 64.139 Q 747.585 62.941 748.521 61.537 A 60.482 60.482 0 0 0 750.416 58.496 A 38.438 38.438 0 0 0 750.543 58.276 Q 751.929 55.87 752.303 54.389 A 4.018 4.018 0 0 0 752.442 53.418 A 2.855 2.855 0 0 0 752.409 52.971 Q 752.187 51.571 750.466 51.602 A 4.582 4.582 0 0 0 750.245 51.611 A 34.282 34.282 0 0 1 749.388 52.832 A 29.775 29.775 0 0 1 743.311 59.033 A 23.929 23.929 0 0 1 742.432 59.647 A 20.692 20.692 0 0 1 739.234 61.401 A 10.685 10.685 0 0 1 738.776 61.588 A 11.159 11.159 0 0 1 734.766 62.305 A 6.694 6.694 0 0 1 734.618 62.303 A 5.296 5.296 0 0 1 730.762 60.62 A 6.984 6.984 0 0 1 730.407 60.219 A 5.247 5.247 0 0 1 729.151 56.812 A 14.63 14.63 0 0 1 729.207 55.54 A 16.733 16.733 0 0 1 729.786 52.442 A 25.509 25.509 0 0 1 731.23 48.433 Q 732.551 45.524 734.683 42.533 A 53.424 53.424 0 0 1 739.112 37.158 A 1.903 1.903 0 0 0 739.043 37.078 Q 738.711 36.706 737.861 36.082 A 27.586 27.586 0 0 0 737.281 35.669 A 7.735 7.735 0 0 0 736.565 35.224 Q 736.116 34.98 735.695 34.843 A 3.312 3.312 0 0 0 734.669 34.668 Q 732.511 34.668 728.438 38.103 A 53.188 53.188 0 0 0 726.124 40.186 A 57.926 57.926 0 0 0 723.807 42.552 A 72.546 72.546 0 0 0 720.801 46.021 A 62.941 62.941 0 0 0 715.943 52.857 Q 713.77 56.397 712.379 59.961 A 22.029 22.029 0 0 0 711.465 62.85 A 16.65 16.65 0 0 0 710.987 66.724 A 18.746 18.746 0 0 0 711.005 67.556 Q 711.059 68.777 711.276 69.839 Z M 366.47 61.61 A 8.263 8.263 0 0 0 366.895 61.621 Q 373.181 61.621 382.271 49.002 A 102.893 102.893 0 0 0 383.594 47.119 Q 388.038 40.625 391.895 32.813 Q 388.706 32.141 384.597 32.047 A 59.614 59.614 0 0 0 383.228 32.031 A 25.16 25.16 0 0 0 373.731 33.862 A 27.061 27.061 0 0 0 369.581 35.944 A 20.698 20.698 0 0 0 366.212 38.526 A 19.184 19.184 0 0 0 361.865 44.652 A 17.937 17.937 0 0 0 360.401 51.904 Q 360.401 61.298 366.47 61.61 Z M 214.241 62.227 A 6.672 6.672 0 0 0 215.284 62.305 A 8.454 8.454 0 0 0 218.89 61.406 Q 222.818 59.55 227.589 53.858 A 125.244 125.244 0 0 0 231.517 48.927 A 97.821 97.821 0 0 0 234.156 45.264 Q 236.964 41.162 238.428 39.014 A 45.46 45.46 0 0 0 229.36 39.944 Q 223.606 41.164 219.087 43.98 A 28.111 28.111 0 0 0 218.165 44.58 Q 210.548 49.756 210.548 56.641 Q 210.548 61.643 214.241 62.227 Z M 459.261 62.227 A 6.672 6.672 0 0 0 460.303 62.305 A 8.454 8.454 0 0 0 463.909 61.406 Q 467.837 59.55 472.608 53.858 A 125.244 125.244 0 0 0 476.537 48.927 A 97.821 97.821 0 0 0 479.175 45.264 Q 481.983 41.162 483.448 39.014 A 45.46 45.46 0 0 0 474.379 39.944 Q 468.626 41.164 464.106 43.98 A 28.111 28.111 0 0 0 463.184 44.58 Q 455.567 49.756 455.567 56.641 Q 455.567 61.643 459.261 62.227 Z M 614.681 62.227 A 6.672 6.672 0 0 0 615.723 62.305 A 8.454 8.454 0 0 0 619.329 61.406 Q 623.257 59.55 628.028 53.858 A 125.244 125.244 0 0 0 631.956 48.927 A 97.821 97.821 0 0 0 634.595 45.264 Q 637.403 41.162 638.868 39.014 A 45.46 45.46 0 0 0 629.799 39.944 Q 624.046 41.164 619.526 43.98 A 28.111 28.111 0 0 0 618.604 44.58 Q 610.987 49.756 610.987 56.641 Q 610.987 61.643 614.681 62.227 Z M 174.171 47.461 A 53.573 53.573 0 0 0 186.545 36.919 A 50.329 50.329 0 0 0 187.989 35.156 Q 193.702 27.881 193.702 22.315 A 10.46 10.46 0 0 0 193.614 20.909 Q 193.396 19.307 192.637 18.428 A 3.014 3.014 0 0 0 192.53 18.311 A 1.115 1.115 0 0 0 192.116 18.026 Q 191.766 17.881 191.235 17.872 A 4.196 4.196 0 0 0 191.163 17.871 A 2.195 2.195 0 0 0 190.552 17.97 Q 189.692 18.221 188.428 19.116 A 16.393 16.393 0 0 0 186.872 20.379 Q 186.112 21.071 185.335 21.923 A 29.507 29.507 0 0 0 184.815 22.51 A 34.098 34.098 0 0 0 182.808 25.086 A 44.878 44.878 0 0 0 181.177 27.564 A 53.994 53.994 0 0 0 177.93 33.74 A 53.634 53.634 0 0 0 175.625 39.995 Q 174.617 43.404 174.259 46.563 A 32.006 32.006 0 0 0 174.171 47.461 Z M 514.991 60.156 Q 516.065 60.986 517.383 60.986 A 3.619 3.619 0 0 0 519.002 60.591 A 5.259 5.259 0 0 0 519.971 59.961 A 9.163 9.163 0 0 0 521.258 58.679 A 12.564 12.564 0 0 0 522.291 57.227 A 18.966 18.966 0 0 0 523.394 55.134 A 24.656 24.656 0 0 0 524.146 53.272 A 54.347 54.347 0 0 0 525.547 48.736 A 59.179 59.179 0 0 0 525.587 48.584 Q 526.661 44.483 527.735 38.867 A 39.848 39.848 0 0 0 513.135 46.924 A 32.028 32.028 0 0 0 510.946 49.079 A 26.544 26.544 0 0 0 509.815 50.391 A 30.763 30.763 0 0 0 510.915 54.006 Q 512.413 57.963 514.722 59.935 A 8.894 8.894 0 0 0 514.991 60.156 Z M 563.966 60.156 Q 565.04 60.986 566.358 60.986 A 3.619 3.619 0 0 0 567.977 60.591 A 5.259 5.259 0 0 0 568.946 59.961 A 9.163 9.163 0 0 0 570.233 58.679 A 12.564 12.564 0 0 0 571.265 57.227 A 18.966 18.966 0 0 0 572.369 55.134 A 24.656 24.656 0 0 0 573.121 53.272 A 54.347 54.347 0 0 0 574.521 48.736 A 59.179 59.179 0 0 0 574.561 48.584 Q 575.635 44.483 576.71 38.867 A 39.848 39.848 0 0 0 562.11 46.924 A 32.028 32.028 0 0 0 559.92 49.079 A 26.544 26.544 0 0 0 558.79 50.391 A 30.763 30.763 0 0 0 559.89 54.006 Q 561.387 57.963 563.696 59.935 A 8.894 8.894 0 0 0 563.966 60.156 Z M 157.687 25.349 A 18.484 18.484 0 0 0 161.719 23.901 A 13.503 13.503 0 0 0 162.709 23.355 A 11.213 11.213 0 0 0 165.089 21.436 A 4.53 4.53 0 0 0 165.547 20.857 Q 166.073 20.068 166.294 19.029 A 7.889 7.889 0 0 0 166.456 17.383 A 5.567 5.567 0 0 0 165.588 14.376 A 7.487 7.487 0 0 0 164.234 12.793 Q 162.012 10.791 157.154 10.791 A 17 17 0 0 0 155.095 10.913 A 13.092 13.092 0 0 0 148.829 13.33 A 9.305 9.305 0 0 0 148.624 13.483 A 7.956 7.956 0 0 0 146.363 16.162 A 6.529 6.529 0 0 0 146.183 16.541 Q 145.508 18.089 145.508 20.215 A 4.493 4.493 0 0 0 146.591 23.152 A 6.881 6.881 0 0 0 147.852 24.317 A 7.592 7.592 0 0 0 148.336 24.641 A 8.323 8.323 0 0 0 150.294 25.513 A 9.256 9.256 0 0 0 151.746 25.824 A 12.147 12.147 0 0 0 153.37 25.928 Q 154.438 25.928 155.744 25.728 A 25.775 25.775 0 0 0 157.398 25.415 A 20.527 20.527 0 0 0 157.687 25.349 Z M 745.577 25.349 A 18.484 18.484 0 0 0 749.61 23.901 A 13.503 13.503 0 0 0 750.6 23.355 A 11.213 11.213 0 0 0 752.979 21.436 A 4.53 4.53 0 0 0 753.437 20.857 Q 753.963 20.068 754.185 19.029 A 7.889 7.889 0 0 0 754.346 17.383 A 5.567 5.567 0 0 0 753.478 14.376 A 7.487 7.487 0 0 0 752.125 12.793 Q 749.903 10.791 745.045 10.791 A 17 17 0 0 0 742.986 10.913 A 13.092 13.092 0 0 0 736.719 13.33 A 9.305 9.305 0 0 0 736.515 13.483 A 7.956 7.956 0 0 0 734.254 16.162 A 6.529 6.529 0 0 0 734.074 16.541 Q 733.399 18.089 733.399 20.215 A 4.493 4.493 0 0 0 734.482 23.152 A 6.881 6.881 0 0 0 735.743 24.317 A 7.592 7.592 0 0 0 736.227 24.641 A 8.323 8.323 0 0 0 738.184 25.513 A 9.256 9.256 0 0 0 739.637 25.824 A 12.147 12.147 0 0 0 741.26 25.928 Q 742.329 25.928 743.635 25.728 A 25.775 25.775 0 0 0 745.289 25.415 A 20.527 20.527 0 0 0 745.577 25.349 Z";

  return (
    <div className="container">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="item stroke-slate-700 dark:drop-shadow-[0_0_0.75rem_rgba(224,242,254,1)] dark:stroke-stone-200 "
      >
        <motion.path
          d={svg_d}
          variants={icon}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
    </div>
  );
}

export default NameBrand;
