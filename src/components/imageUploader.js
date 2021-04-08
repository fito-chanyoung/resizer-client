"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploader = void 0;
const react_1 = __importDefault(require("react"));
require("../css/imageUploader.css");
const addImages_1 = require("./addImages");
const imageEntry_1 = require("./imageEntry");
const addImgBtn_1 = require("./addImgBtn");
const options_1 = require("./options");
const ImageUploader = ({ option, isPixel, images, imageSetstates, optionHandler, uploadToggler, }) => {
    let tmpArr = [];
    function defaultPreventer(e) {
        e.preventDefault();
    }
    function onDragOver(e) {
        e.preventDefault();
        let target = document.querySelector(".blind");
        let style = target.style;
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
    function readAndAppend(file, targetNumber) {
        // Make sure `file.name` matches our extensions criteria
        let reader = new FileReader();
        reader.addEventListener("load", function () {
            let img = new Image();
            let that = this;
            img.onload = function () {
                let image = {
                    title: file.name,
                    sizes: file.size,
                    src: that.result,
                };
                // images.push(image);
                // if (option.width === 0)
                //   optionHandler({ ...option, width: img.width, height: img.height });
                // imageSetstates([...images]);
                tmpArr.push(image);
                if (tmpArr.length === targetNumber) {
                    if (option.multiple === false && images.length + targetNumber >= 2)
                        optionHandler(Object.assign(Object.assign({}, option), { multiple: true, width: option.width === 0 ? img.width : option.width, height: option.height === 0 ? img.height : option.height }));
                    else {
                        optionHandler(Object.assign(Object.assign({}, option), { width: option.width === 0 ? img.width : option.width, height: option.height === 0 ? img.height : option.height }));
                    }
                    imageSetstates([...images].concat(tmpArr.slice(0, tmpArr.length)));
                }
            };
            img.src = this.result;
        }, false);
        reader.readAsDataURL(file);
    }
    function imageAddFunc(e) {
        e.preventDefault();
        let target = document.querySelector(".blind");
        let style = target.style;
        style.setProperty("display", "none");
        if (e.dataTransfer) {
            let count = e.dataTransfer.files.length;
            for (const n of e.dataTransfer.files) {
                if (validateFile(n))
                    readAndAppend(n, count);
                else
                    count--;
            }
        }
    }
    const validateFile = (file) => {
        //const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        const validTypes = ["image/png"];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        else if (images.length !== 0 &&
            images.filter((index) => index.title === file.name).length > 0) {
            return false;
        }
        return true;
    };
    return (react_1.default.createElement("div", { className: "upload-container", onDragOver: defaultPreventer, onDragEnter: onDragOver, onDragLeave: defaultPreventer, onDrop: imageAddFunc },
        react_1.default.createElement("div", { className: "blind" }, "drop item!"),
        images.length === 0 ? (react_1.default.createElement("div", { className: "img-viewer" },
            react_1.default.createElement("div", { className: "uploader-desc" },
                "Resizer\uB294 \uC774\uBBF8\uC9C0 \uC0AC\uC774\uC988\uB97C \uC218\uC815\uD558\uB294 \uC6F9\uC0AC\uC774\uD2B8\uC785\uB2C8\uB2E4.",
                react_1.default.createElement("br", null),
                "\uD604\uC7AC\uB294 png \uD30C\uC77C\uB9CC \uC218\uC815\uAC00\uB2A5\uD558\uBA70 \uCD94\uD6C4 \uBC94\uC704\uB97C \uD655\uB300\uD560 \uC608\uC815\uC785\uB2C8\uB2E4. ",
                react_1.default.createElement("br", null),
                "\uC544\uB798 \uBC84\uD2BC \uD639\uC740 \uC774\uBBF8\uC9C0\uB97C \uB4DC\uB798\uADF8 & \uB4DC\uB86D\uD558\uC138\uC694",
                react_1.default.createElement(addImgBtn_1.AddImageBtn, { images: images, readAndAppend: readAndAppend, validateFile: validateFile })),
            react_1.default.createElement(addImages_1.ImageUploaderBtn, { image: images, imageSetstates: imageSetstates, uploadToggler: uploadToggler }))) : (react_1.default.createElement("div", { className: "img-viewer view-70" },
            react_1.default.createElement(imageEntry_1.ImageEntryList, { images: images }),
            react_1.default.createElement(addImages_1.ImageUploaderBtn, { image: images, imageSetstates: imageSetstates, uploadToggler: uploadToggler }),
            react_1.default.createElement(options_1.Options, { option: option, isPixel: isPixel, images: images, optionHandler: optionHandler, readAndAppend: readAndAppend, validateFile: validateFile })))));
};
exports.ImageUploader = ImageUploader;
//# sourceMappingURL=imageUploader.js.map