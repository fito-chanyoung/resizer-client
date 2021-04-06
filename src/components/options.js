"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
const react_1 = __importDefault(require("react"));
const addImgBtn_1 = require("./addImgBtn");
require("../css/option.css");
const optionToggler_1 = require("./optionToggler");
const Options = ({ option, isPixel, optionHandler, images, readAndAppend, validateFile, }) => {
    let widthChange = (e) => {
        optionHandler(Object.assign(Object.assign({}, option), { width: e.target.value }));
    };
    let heightChange = (e) => {
        optionHandler(Object.assign(Object.assign({}, option), { height: e.target.value }));
    };
    let ratioChange = (e) => {
        optionHandler(Object.assign(Object.assign({}, option), { aspectRatio: e.target.value }));
    };
    let englareChange = (e) => {
        optionHandler(Object.assign(Object.assign({}, option), { doNotEnglare: e.target.value }));
    };
    return (react_1.default.createElement("div", { className: "option" },
        react_1.default.createElement(addImgBtn_1.AddImageBtn, { images: images, readAndAppend: readAndAppend, validateFile: validateFile }),
        react_1.default.createElement(optionToggler_1.OptionToggler, null),
        react_1.default.createElement("h1", null, "Resize Options"),
        isPixel === true ? (react_1.default.createElement("div", null,
            option.multiple ? (react_1.default.createElement("h3", null, "RESIZE ALL IMAGES TO MAXIMUM SIZE OF")) : (react_1.default.createElement("h3", null, "RESIZE ALL IMAGES TO A EXACT SIZE OF")),
            react_1.default.createElement("form", null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", null, "Width (px)"),
                    react_1.default.createElement("input", { type: "number", className: "option-input", onChange: widthChange, value: option.width })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", null, "Height (px)"),
                    react_1.default.createElement("input", { type: "number", className: "option-input", onChange: heightChange, value: option.height })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("input", { type: "checkbox", onChange: ratioChange }),
                    react_1.default.createElement("label", null, "Maintain aspect ratio")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("input", { type: "checkbox", onChange: englareChange }),
                    react_1.default.createElement("label", null, "Do not enlarge if smaller"))))) : (react_1.default.createElement("div", null))));
};
exports.Options = Options;
//# sourceMappingURL=options.js.map