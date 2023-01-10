import React from "react";

const Play = ({ ...others }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 26 26"
      fill="#FFFFFF"
      xmlns="http://www.w3.org/2000/svg"
      {...others}
    >
      <path d="M3 1V25L23 13L3 1Z" />
    </svg>
  );
};

export default Play;
