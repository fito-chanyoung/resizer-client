import React, { useEffect } from "react";
import axios from "axios";
import { ImageProps } from "../components/imageEntryItems";

import "../css/uploadPage.css";

export interface uploaderProps {
  images: Array<ImageProps>;
  isUploadEndSetstate: Function;
  transformedImagesSetstates: Function;
}

export const Uploader: React.FC<uploaderProps> = ({
  images,
  transformedImagesSetstates,
  isUploadEndSetstate,
}) => {
  // useEffect(() => {
  //   axios
  //     .post("server api location", images)
  //     .then((response) => response.data)
  //     .then((array) => {
  //       isUploadEndSetstate(true);
  //       transformedImagesSetstates(array);
  //     });
  // });
  return (
    <div className="fixed-container">
      <div className="waiting-anime"></div>
    </div>
  );
};
