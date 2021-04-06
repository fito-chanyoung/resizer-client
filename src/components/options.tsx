import React from "react";
import { ImageProps } from "./imageEntryItems";
import { AddImageBtn } from "./addImgBtn";
import "../css/option.css";
import { OptionToggler } from "./optionToggler";
export interface optionStates {
  option: option;
  isPixel: boolean;
  images: Array<ImageProps>;
  optionHandler: Function;
  readAndAppend: Function;
  validateFile: Function;
}

export interface option {
  width: number;
  height: number;
  aspectRatio: boolean;
  doNotEnglare: boolean;
  manualPercentage: boolean;
  percentage: number;
  multiple: false;
}

export const Options: React.FC<optionStates> = ({
  option,
  isPixel,
  optionHandler,
  images,
  readAndAppend,
  validateFile,
}) => {
  let widthChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    optionHandler({ ...option, width: e.target.value });
  };
  let heightChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    optionHandler({ ...option, height: e.target.value });
  };
  let ratioChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    optionHandler({ ...option, aspectRatio: e.target.value });
  };
  let englareChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    optionHandler({ ...option, doNotEnglare: e.target.value });
  };
  return (
    <div className="option">
      <AddImageBtn
        images={images}
        readAndAppend={readAndAppend}
        validateFile={validateFile}
      />
      <OptionToggler />
      <h1>Resize Options</h1>
      {isPixel === true ? (
        <div>
          {option.multiple ? (
            <h3>RESIZE ALL IMAGES TO MAXIMUM SIZE OF</h3>
          ) : (
            <h3>RESIZE ALL IMAGES TO A EXACT SIZE OF</h3>
          )}
          <form>
            <div>
              <label>Width (px)</label>
              <input
                type="number"
                className="option-input"
                onChange={widthChange}
                value={option.width}
              />
            </div>
            <div>
              <label>Height (px)</label>
              <input
                type="number"
                className="option-input"
                onChange={heightChange}
                value={option.height}
              />
            </div>
            <div>
              <input type="checkbox" onChange={ratioChange} />
              <label>Maintain aspect ratio</label>
            </div>
            <div>
              <input type="checkbox" onChange={englareChange} />
              <label>Do not enlarge if smaller</label>
            </div>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
