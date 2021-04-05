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
    return (react_1.default.createElement("div", { className: "card-container" }, images.map((image, i) => (react_1.default.createElement(imageEntryItems_1.ImageEntryItems, { image: image, key: i })))));
};
exports.ImageEntryList = ImageEntryList;
//# sourceMappingURL=imageEntry.js.map