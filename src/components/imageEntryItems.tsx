import React, { useState } from "react";
import "../css/imageEntryItems.css";
export interface ImageProps {
  title: string;
  sizes: number;
  src: string;
}

export interface EntryProps {
  image: ImageProps;
}
export const ImageEntryItems: React.FC<EntryProps> = ({ image }) => {
  const [dimensions, setDimensionStates] = useState({ height: 0, width: 0 });
  // const fileSize = (size: number) => {
  //   if (size === 0) return "0 Bytes";
  //   const k = 1024;
  //   const sizes: Array<string> = ["Bytes", "KB", "MB", "GB", "TB"];
  //   const i = Math.floor(Math.log(size) / Math.log(k));
  //   return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  // };
  // console.log(image);
  function onImgLoad({ target }: any) {
    setDimensionStates({
      height: target.naturalHeight,
      width: target.naturalWidth,
    });
  }
  return (
    <div className="card-container-inner">
      <div className="card-img-container">
        <img src={image.src} className="card" onLoad={onImgLoad} />
      </div>
      <div className="card-desc">
        <div className="card-title">
          {image.title.length > 20
            ? image.title.slice(0, 20) + "..."
            : image.title}
        </div>
        <div className="card-size">
          {dimensions.height} X {dimensions.width}
        </div>
      </div>
    </div>
  );
};
