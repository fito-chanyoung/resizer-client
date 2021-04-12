import React from "react";
import { ImageEntryItems, ImageProps } from "./imageEntryItems";
import "../css/listEntry.css";
export interface ListProps {
  images: Array<ImageProps>;
}
export const ImageEntryList: React.FC<ListProps> = ({ images }) => {
  //let newImgArr = [];

  // for (let i = 0; i < images.length; i = i + 5) {
  //   newImgArr.push(images.slice(i, i + 5));
  // }
  let counter: number = -1;
  return (
    <div className="card-container-wrapper">
      {images.map((array, i) => (
        <div className="card-container">
          <ImageEntryItems image={array} key={i} />
        </div>
      ))}
    </div>
  );
};
/**
 *     <div className="card-container-wrapper">
      {newImgArr.map((array, i) => (
        <div className="card-container" key={i}>
          {array.map((image, j) => {
            counter++;
            console.log(counter);
            return <ImageEntryItems image={image} key={i + j} />;
          })}
        </div>
      ))}
    </div>
 */
