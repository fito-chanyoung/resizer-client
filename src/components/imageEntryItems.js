"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageEntryItems = void 0;
const react_1 = __importDefault(require("react"));
require("../css/imageEntryItems.css");
const ImageEntryItems = ({ image }) => {
    // const fileSize = (size: number) => {
    //   if (size === 0) return "0 Bytes";
    //   const k = 1024;
    //   const sizes: Array<string> = ["Bytes", "KB", "MB", "GB", "TB"];
    //   const i = Math.floor(Math.log(size) / Math.log(k));
    //   return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    // };
    // console.log(image);
    return (react_1.default.createElement("div", { className: "card-container" },
        react_1.default.createElement("img", { src: image.src, className: "card" }),
        react_1.default.createElement("div", null, image.title.length > 20
            ? image.title.slice(0, 20) + "..."
            : image.title)));
};
exports.ImageEntryItems = ImageEntryItems;
//# sourceMappingURL=imageEntryItems.js.map