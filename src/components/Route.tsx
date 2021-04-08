import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ImageUploader } from "./imageUploader";
import { option } from "./options";
import { ImageProps } from "./imageEntryItems";
import { Uploader } from "../pages/upload";

import "../css/Nav.css";

export interface routeProps {
  isLogin: boolean;
  option: option;
  images: Array<ImageProps>;
  isPixel: boolean;
  imageSetstates: Function;
  optionHandler: Function;
  uploadToggler: Function;
  transformedImagesSetstates: Function;
  isUploadEndSetstate: Function;
}

export const Routes: React.FC<routeProps> = ({
  isLogin,
  images,
  imageSetstates,
  isPixel,
  option,
  optionHandler,
  uploadToggler,
  transformedImagesSetstates,
  isUploadEndSetstate,
}) => {
  return (
    <Router>
      <Route exact path="/">
        <ImageUploader
          images={images}
          imageSetstates={imageSetstates}
          isPixel={isPixel}
          option={option}
          optionHandler={optionHandler}
          uploadToggler={uploadToggler}
        />
      </Route>
      <Route exact path="/upload">
        <Uploader
          images={images}
          isUploadEndSetstate={isUploadEndSetstate}
          transformedImagesSetstates={transformedImagesSetstates}
        />
      </Route>
    </Router>
  );
};
