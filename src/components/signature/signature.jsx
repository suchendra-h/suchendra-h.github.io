import "./signature.css";

function Signature(props) {
  return (
    <div className="flex items-center w-full h-screen">
      <svg
        width={props.width ?? 801}
        height={props.height ?? 600}
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto max-w-[80%] stroke-black stroke-[7] drop-shadow-lg dark:stroke-sky-100"
      >
        <path
          id="signature"
          d="M47.0441 240.111C52.7158 232.132 59.9136 224.324 67.389 218.444C73.4258 213.696 84.4294 204 92.0779 204C108.095 204 122.335 216.095 136.677 222.136C143.408 224.97 150.98 228.529 155.212 219.889C158.962 212.232 155.871 209.046 149.058 214.673C131.146 229.465 120.204 255.911 108.803 276.543C95.5856 300.46 82.8747 322.424 63.5517 340.901C58.8949 345.354 54.1004 349.231 48.4198 351.895C42.0259 354.893 46.3795 342.213 47.3337 339.617C57.6043 311.676 84.4688 298.065 108.73 290.185C138.486 280.521 169.832 279.58 200.391 274.778C215.83 272.351 231.06 268.475 244.845 260.012C254.14 254.306 263.509 248.211 272.285 241.555C275.138 239.392 279.71 235.627 280.249 231.444C281.365 222.793 260.559 233.192 258.312 234.654C239.569 246.851 223.816 262.438 212.844 283.444C204.839 298.769 195.563 316.974 192.716 334.642C192.486 336.068 190.315 343.604 193.585 342.024C202.563 337.687 210.894 331.571 219.505 326.457C232.631 318.66 246.221 311.832 259.615 304.629C265.053 301.705 271.138 296.654 276.919 294.518C278.06 294.097 274.631 305.264 274.385 306.154C271.245 317.524 266.206 327.638 261.787 338.413C259.442 344.133 259.309 345.962 264.249 341.703C274.352 332.994 283.289 322.747 293.789 314.58C301.762 308.378 316.079 293.168 324.921 302.543C336.019 314.308 347.477 317.95 362.787 317.95C375.776 317.95 387.797 315.676 400.364 312.333C404.942 311.115 416.737 305.273 421.215 309.685C429.781 318.124 440.244 319.187 451.624 317.308C458.567 316.162 465.464 314.336 472.258 312.413C477.723 310.867 477.259 310.851 479.861 315.383C483.301 321.375 488.949 338.166 496.947 338.333C506.567 338.534 516.262 334.512 524.749 329.987C541.028 321.31 557.722 313.175 573.693 303.827C578.748 300.868 582.938 297.592 586.942 293.154C587.757 292.251 584.452 294.63 584.046 295.08C573 307.324 562.432 320.263 551.031 332.234C535.457 348.588 520.37 365.496 505.201 382.308C501.818 386.057 498.317 389.73 495.065 393.623C494.212 394.644 493.871 397.535 492.748 396.913C491.228 396.071 496.85 387.098 497.382 386.321C504.94 375.287 512.678 366.011 523.301 358.395C552.437 337.508 581.654 325.333 616.555 325.333C633.264 325.333 649.988 328.984 666.657 330.148C697.53 332.303 725.89 323.634 756 316.666"
        />
      </svg>
    </div>
  );
}

export default Signature;
