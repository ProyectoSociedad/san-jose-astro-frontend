
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const BuildingGridIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 20 18" {...props}><path fill={fill} d="M20 18H0v-2h1V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5h2v10h1zm-5-2h2V8h-6v8h2v-6h2zm0-10V2H3v14h6V6zM5 8h2v2H5zm0 4h2v2H5zm0-8h2v2H5z"/></svg>

      );
      