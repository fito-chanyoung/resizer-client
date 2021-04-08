"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploaderBtn = void 0;
const react_1 = __importDefault(require("react"));
require("../css/addimages.css");
const react_router_dom_1 = require("react-router-dom");
const ImageUploaderBtn = ({ image, uploadToggler, }) => {
    const handler = () => (image.length >= 1 ? uploadToggler(true) : "");
    return (react_1.default.createElement(react_router_dom_1.Link, { to: "/upload", className: "button-addimage", onClick: handler }, "Add Images"));
};
exports.ImageUploaderBtn = ImageUploaderBtn;
//# sourceMappingURL=addImages.js.map