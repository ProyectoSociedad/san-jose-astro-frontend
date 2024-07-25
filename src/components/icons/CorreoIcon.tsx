import React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  fill?: string;
}

export const CorreoIcon = ({
  size = "1em",
  fill = "currentColor",
  ...props
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={fill}
    {...props}
    stroke="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
  >
    <path
      stroke="none"
      d="M64 112c-8.8 0-16 7.2-16 16v22.1l172.5 141.6c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16zM48 212.2V384c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
    />
  </svg>
);
