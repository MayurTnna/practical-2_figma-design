import React from "react";
import "../slider/CustomArrow.scss";

const CustomArrow = ({ className, style, onClick, imageUrl }) => {
  return (
    <img
      src={imageUrl}
      className={className}
      onClick={onClick}
      alt="customarrow"
    />
  );
};

export default CustomArrow;
