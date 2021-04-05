import React from "react";
import "../css/imageEntryItems.css";
export interface ImageProps {
  height: number;
  title: string;
  sizes: number;
  src: string;
}

export interface EntryProps {
  image: ImageProps;
}
export const ImageEntryItems: React.FC<EntryProps> = ({ image }) => {
  // const fileSize = (size: number) => {
  //   if (size === 0) return "0 Bytes";
  //   const k = 1024;
  //   const sizes: Array<string> = ["Bytes", "KB", "MB", "GB", "TB"];
  //   const i = Math.floor(Math.log(size) / Math.log(k));
  //   return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  // };
  // console.log(image);

  return (
    <div className="card-container">
      <img src={image.src} className="card" />
      <div role="img" title={image.title}>
        {image.title.length > 20
          ? image.title.slice(0, 20) + "..."
          : image.title}
      </div>
    </div>
  );
};
