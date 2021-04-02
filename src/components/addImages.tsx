import React from "react";
import "../css/addimages.css";

export interface ImageAdderProps {
  image: Array<object>;
  imageSetstates: any;
}

export const ImageAdder: React.FC<ImageAdderProps> = (args) => {
  const handler = () => {
    args.imageSetstates([...args.image, { test: 1 }]);
  };
  return (
    <div className="button-addimage" onClick={handler}>
      Add Images
    </div>
  );
};
