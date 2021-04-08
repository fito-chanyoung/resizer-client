import React from "react";
import "../css/addimages.css";
import { Link } from "react-router-dom";
export interface ImageAdderProps {
  image: Array<object>;
  imageSetstates: any;
  uploadToggler: Function;
}

export const ImageUploaderBtn: React.FC<ImageAdderProps> = ({
  image,
  uploadToggler,
}) => {
  const handler = () => (image.length >= 1 ? uploadToggler(true) : "");
  return (
    <Link to="/upload" className="button-addimage" onClick={handler}>
      Add Images
    </Link>
  );
};
