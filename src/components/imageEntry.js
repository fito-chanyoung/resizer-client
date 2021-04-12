"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageEntryList = void 0;
const react_1 = __importDefault(require("react"));
const imageEntryItems_1 = require("./imageEntryItems");
require("../css/listEntry.css");
const ImageEntryList = ({ images }) => {
    //let newImgArr = [];
    // for (let i = 0; i < images.length; i = i + 5) {
    //   newImgArr.push(images.slice(i, i + 5));
    // }
    let counter = -1;
    return (react_1.default.createElement("div", { className: "card-container-wrapper" }, images.map((array, i) => (react_1.default.createElement("div", { className: "card-container" },
        react_1.default.createElement(imageEntryItems_1.ImageEntryItems, { image: array, key: i }))))));
};
exports.ImageEntryList = ImageEntryList;
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
//# sourceMappingURL=imageEntry.js.map