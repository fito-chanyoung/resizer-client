"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageEntryItems = void 0;
const react_1 = __importStar(require("react"));
require("../css/imageEntryItems.css");
const ImageEntryItems = ({ image }) => {
    const [dimensions, setDimensionStates] = react_1.useState({ height: 0, width: 0 });
    // const fileSize = (size: number) => {
    //   if (size === 0) return "0 Bytes";
    //   const k = 1024;
    //   const sizes: Array<string> = ["Bytes", "KB", "MB", "GB", "TB"];
    //   const i = Math.floor(Math.log(size) / Math.log(k));
    //   return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    // };
    // console.log(image);
    function onImgLoad({ target }) {
        setDimensionStates({
            height: target.naturalHeight,
            width: target.naturalWidth,
        });
    }
    return (react_1.default.createElement("div", { className: "card-container-inner" },
        react_1.default.createElement("div", { className: "card-img-container" },
            react_1.default.createElement("img", { src: image.src, className: "card", onLoad: onImgLoad })),
        react_1.default.createElement("div", { className: "card-desc" },
            react_1.default.createElement("div", { className: "card-title" }, image.title.length > 20
                ? image.title.slice(0, 20) + "..."
                : image.title),
            react_1.default.createElement("div", { className: "card-size" },
                dimensions.height,
                " X ",
                dimensions.width))));
};
exports.ImageEntryItems = ImageEntryItems;
//# sourceMappingURL=imageEntryItems.js.map