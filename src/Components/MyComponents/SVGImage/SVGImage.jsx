import React from "react";

const SVGImage = ({ svg_src, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {svg_src}
    </div>
  );
};

export default SVGImage;
