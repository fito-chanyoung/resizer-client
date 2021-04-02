import React from "react";
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
  let name: string = "";
  let size: string = "";

  const fileSize = (size: number) => {
    if (size === 0) return "0 Bytes";
    const k = 1024;
    const sizes: Array<string> = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  console.log(image);

  return (
    <div className="card-container">
      <img src={image.src} />
      <div>{image.title}</div>
    </div>
  );
};
