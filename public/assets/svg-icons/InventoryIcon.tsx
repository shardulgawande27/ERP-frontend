import React from "react";

const InventoryIcon = ({ size = "32", color = "black" }) => {
  console.log("color>>>>>>>>>>>", color);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.6665 5.2512H5.9177L5.91779 2H2.66659L2.6665 5.2512ZM3.69053 3.02405H4.89375V4.22727H3.69053V3.02405Z"
        fill={color}
      />
      <path d="M7.15918 2H13.3288V3.02402H7.15918V2Z" fill={color} />
      <path d="M7.15918 4.2272H12.0872V5.25123H7.15918V4.2272Z" fill={color} />
      <path
        d="M2.6665 9.70559H5.9177L5.91779 6.4544H2.66659L2.6665 9.70559ZM3.69053 7.47837H4.89375V8.68159H3.69053V7.47837Z"
        fill={color}
      />
      <path d="M7.15918 6.4544H13.3288V7.47842H7.15918V6.4544Z" fill={color} />
      <path d="M7.15918 8.6816H12.0872V9.70562H7.15918V8.6816Z" fill={color} />
      <path
        d="M2.6665 14.16H5.9177L5.91779 10.9088H2.66659L2.6665 14.16ZM3.69053 11.9328H4.89375V13.136H3.69053V11.9328Z"
        fill={color}
      />
      <path
        d="M7.15918 10.9088H13.3288V11.9328H7.15918V10.9088Z"
        fill={color}
      />
      <path d="M7.15918 13.136H12.0872V14.16H7.15918V13.136Z" fill={color} />
    </svg>
  );
};

export default InventoryIcon;
