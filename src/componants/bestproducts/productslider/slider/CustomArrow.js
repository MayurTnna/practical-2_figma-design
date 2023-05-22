import React from "react";

const CustomArrow = ({ className, style, onClick, imageUrl }) => {
  return <img src={imageUrl} className={className} onClick={onClick} alt="" />;
};

export default CustomArrow;
