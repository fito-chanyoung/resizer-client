import React from "react";
import { ImageEntryItems, ImageProps } from "./imageEntryItems";

export interface ListProps {
  images: Array<ImageProps>;
}
export const ImageEntryList: React.FC<ListProps> = ({ images }) => {
  return (
    <div className="card-container">
      {images.map((image, i) => (
        <ImageEntryItems image={image} key={i} />
      ))}
    </div>
  );
};
