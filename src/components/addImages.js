"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageAdder = void 0;
const react_1 = __importDefault(require("react"));
require("../css/addimages.css");
const ImageAdder = (args) => {
    const handler = () => {
        args.imageSetstates([...args.image, { test: 1 }]);
    };
    return (react_1.default.createElement("div", { className: "button-addimage", onClick: handler }, "Add Images"));
};
exports.ImageAdder = ImageAdder;
//# sourceMappingURL=addImages.js.map