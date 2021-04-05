import React from "react";
import "../css/imageUploader.css";
import { ImageAdder } from "./addImages";
import { ImageEntryList } from "./imageEntry";
import { ImageProps } from "./imageEntryItems";
import { AddImageBtn } from "./addImgBtn";

export interface ImageUploaderProps {
  option: object;
  isPixel: boolean;
  optionHandler: any;
  methodToggler: any;
}

export const ImageUploader: React.FC<ImageUploaderProps> = (args) => {
  const [images, imageSetstates] = React.useState<Array<ImageProps>>([]);

  function defaultPreventer(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function readAndAppend(file: File) {
    // Make sure `file.name` matches our extensions criteria

    let reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        let img = new Image();
        img.src = this.result as string;
        console.log(file);
        let image: ImageProps = {
          title: file.name,
          sizes: file.size,
          src: this.result as string,
        };

        images.push(image);
        imageSetstates([...images]);
      },
      false
    );

    reader.readAsDataURL(file);
  }

  function imageAddFunc(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();

    if (e.dataTransfer)
      for (const n of e.dataTransfer.files) {
        if (validateFile(n)) readAndAppend(n);
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
      onDragEnter={defaultPreventer}
      onDragLeave={defaultPreventer}
      onDrop={imageAddFunc}
    >
      {images.length === 0 ? (
        <div>
          <div className="uploader-desc">
            Resizer는 이미지 사이즈를 수정하는 웹사이트입니다.
            <br />
            현재는 png 파일만 수정가능하며 추후 범위를 확대할 예정입니다. <br />{" "}
            아래 버튼 혹은 이미지를 드래그 & 드롭하세요{" "}
          </div>
          <AddImageBtn
            images={images}
            readAndAppend={readAndAppend}
            validateFile={validateFile}
          />
          <ImageAdder image={images} imageSetstates={imageSetstates} />
        </div>
      ) : (
        <div>
          <ImageEntryList images={images} />
          <AddImageBtn
            images={images}
            readAndAppend={readAndAppend}
            validateFile={validateFile}
          />
          <ImageAdder image={images} imageSetstates={imageSetstates} />
        </div>
      )}
    </div>
  );
};
