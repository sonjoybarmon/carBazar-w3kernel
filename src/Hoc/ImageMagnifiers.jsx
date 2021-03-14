import React from "react";
import { GlassMagnifier } from "react-image-magnifiers";

const ImageMagnifiers = ({ src }) => {
  return (
    <GlassMagnifier
      // largeImageSrc={image}
      imageSrc={src}
      imageAlt="car image"
      allowOverflow
      Shape="circle"
      MagnifierSize="30%"
      BorderSize="5"
      BorderColor="rgba(255,255,255,.5)"
      // style={{ width: "100%" }}
    />
  );
};

export default ImageMagnifiers;
