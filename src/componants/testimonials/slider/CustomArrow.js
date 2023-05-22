import React from "react";
import "../slider/CustomArrow.scss";

const CustomArrow = ({ className, onClick, imageUrl }) => {
  return (
    <img
      src={imageUrl}
      className={className}
      onClick={onClick}
      alt=""
    />
  );
};

export default CustomArrow;
