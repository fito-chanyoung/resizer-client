import React from "react";
import "../css/imageUploader.css";
import { ImageAdder } from "./addImages";
import { ImageEntryList } from "./imageEntry";
import { ImageProps } from "./imageEntryItems";
import { AddImageBtn } from "./addImgBtn";
import { Options, option } from "./options";

export interface ImageUploaderProps {
  option: option;
  isPixel: boolean;
  optionHandler: Function;
  methodToggler: Function;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  option,
  isPixel,
  optionHandler,
  methodToggler,
}) => {
  const [images, imageSetstates] = React.useState<Array<ImageProps>>([]);

  let tmpArr: Array<ImageProps> = [];
  function defaultPreventer(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }
  function onDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    let target: HTMLElement = document.querySelector(".blind") as HTMLElement;

    let style: any = target.style;

    style.setProperty("justify-content", "center", "important");
    style.setProperty("align-items", "center", "important");
    style.setProperty("width", "100%");
    style.setProperty("height", "100%");
    style.setProperty("position", "absolute");
    style.setProperty("background-color", "rgba(0, 0, 0, 0.6)");
    style.setProperty("z-index", 10);
    style.setProperty("color", "white");
    style.setProperty("display", "flex");
    style.setProperty("position", "fixed");
    style.setProperty("font-size", "-webkit-xxx-large");
  }

  function readAndAppend(file: File, targetNumber: number) {
    // Make sure `file.name` matches our extensions criteria
    console.log(file);
    let reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        let img = new Image();
        let that: any = this;

        img.onload = function () {
          let image: ImageProps = {
            title: file.name,
            sizes: file.size,
            src: that.result as string,
          };

          // images.push(image);
          // if (option.width === 0)
          //   optionHandler({ ...option, width: img.width, height: img.height });
          // imageSetstates([...images]);
          tmpArr.push(image);

          if (tmpArr.length === targetNumber) {
            if (option.multiple === false && images.length + targetNumber >= 2)
              optionHandler({
                ...option,
                multiple: true,
                width: option.width === 0 ? img.width : option.width,
                height: option.height === 0 ? img.height : option.height,
              });
            else {
              optionHandler({
                ...option,
                width: option.width === 0 ? img.width : option.width,
                height: option.height === 0 ? img.height : option.height,
              });
            }
            imageSetstates([...images].concat(tmpArr.slice(0, tmpArr.length)));
          }
        };
        img.src = this.result as string;
      },
      false
    );

    reader.readAsDataURL(file);
  }

  function imageAddFunc(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    let target: HTMLElement = document.querySelector(".blind") as HTMLElement;

    let style: any = target.style;

    style.setProperty("display", "none");
    if (e.dataTransfer) {
      let count: number = e.dataTransfer.files.length;
      for (const n of e.dataTransfer.files) {
        if (validateFile(n)) readAndAppend(n, count);
        else count--;
      }
    }
  }
  const validateFile = (file: File) => {
    //const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
    const validTypes: Array<string> = ["image/png"];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    } else if (
      images.length !== 0 &&
      images.filter((index) => index.title === file.name).length > 0
    ) {
      return false;
    }
    return true;
  };

  return (
    <div
      className="upload-container"
      onDragOver={defaultPreventer}
      onDragEnter={onDragOver}
      onDragLeave={defaultPreventer}
      onDrop={imageAddFunc}
    >
      <div className="blind">drop item!</div>
      {images.length === 0 ? (
        <div className="img-viewer">
          <div className="uploader-desc">
            Resizer는 이미지 사이즈를 수정하는 웹사이트입니다.
            <br />
            현재는 png 파일만 수정가능하며 추후 범위를 확대할 예정입니다. <br />
            아래 버튼 혹은 이미지를 드래그 & 드롭하세요
            <AddImageBtn
              images={images}
              readAndAppend={readAndAppend}
              validateFile={validateFile}
            />
          </div>
          <ImageAdder image={images} imageSetstates={imageSetstates} />
        </div>
      ) : (
        <div className="img-viewer view-70">
          <ImageEntryList images={images} />
          <ImageAdder image={images} imageSetstates={imageSetstates} />

          <Options
            option={option}
            isPixel={isPixel}
            images={images}
            optionHandler={optionHandler}
            readAndAppend={readAndAppend}
            validateFile={validateFile}
          />
        </div>
      )}
    </div>
  );
};
