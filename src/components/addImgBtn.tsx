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
    if (e.target.files) {
      let count: number = e.target.files.length;
      for (const n of e.target.files) {
        if (validateFile(n)) readAndAppend(n, count);
        else count--;
      }
    }
  };
  return images.length > 0 ? (
    <div className="addimgbtn-container">
      <div className="indicator">
        <span>{images.length}</span>
      </div>
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
    <div className="flex justify-center">
      <form>
        <label className="btn-before-add">
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
