import React from "react";
import { ImageProps } from "./imageEntryItems";
import "../css/addImgBtn.css";

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export interface modalProps {
  images: Array<ImageProps>;

  readAndAppend: Function;
  validateFile: Function;
}

export const AddImageBtn: React.FC<modalProps> = ({
  images,
  readAndAppend,
  validateFile,
}) => {
  let submitHnadler: any = function (e: HTMLInputEvent) {
    if (e.target.files)
      for (const n of e.target.files) {
        if (validateFile(n)) readAndAppend(n);
      }
  };
  return images.length > 0 ? (
    <div className="addimgbtn-container">
      <div className="indicator">{images.length}</div>
      <form>
        <label>
          <input
            type="file"
            className="addbtn"
            onChange={submitHnadler}
            multiple
          />
          <img src="../public/plus.png" className="img-container" />
        </label>
      </form>
    </div>
  ) : (
    <div>
      <form>
        <label>
          <input
            type="file"
            multiple
            onChange={submitHnadler}
            className="home-addbtn-container"
          />
          Image Upload
        </label>
      </form>
    </div>
  );
};
