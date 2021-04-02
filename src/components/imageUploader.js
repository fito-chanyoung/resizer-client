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
const ImageUploader = (args) => {
    const [images, imageSetstates] = react_1.default.useState([]);
    function defaultPreventer(e) {
        e.preventDefault();
    }
    function readAndAppend(file) {
        // Make sure `file.name` matches our extensions criteria
        let reader = new FileReader();
        reader.addEventListener("load", function () {
            let image = {
                height: 100,
                title: file.name,
                sizes: file.size,
                src: this.result,
            };
            imageSetstates([...images, image]);
        }, false);
        reader.readAsDataURL(file);
    }
    function imageAddFunc(e) {
        let fileReader = new FileReader();
        fileReader.addEventListener("load", function () { });
        e.preventDefault();
        let files;
        files = e.dataTransfer.files;
        for (const n in files) {
            console.log(files[n]);
            if (typeof files[n] === "object" && validateFile(files[n])) {
                readAndAppend(files[n]);
            }
        }
    }
    const validateFile = (file) => {
        //const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        const validTypes = ["image/png"];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    };
    return (react_1.default.createElement("div", { className: "upload-container", onDragOver: defaultPreventer, onDragEnter: defaultPreventer, onDragLeave: defaultPreventer, onDrop: imageAddFunc }, images.length === 0 ? (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "uploader-desc" },
            "Resizer\uB294 \uC774\uBBF8\uC9C0 \uC0AC\uC774\uC988\uB97C \uC218\uC815\uD558\uB294 \uC6F9\uC0AC\uC774\uD2B8\uC785\uB2C8\uB2E4.",
            react_1.default.createElement("br", null),
            "\uD604\uC7AC\uB294 png \uD30C\uC77C\uB9CC \uC218\uC815\uAC00\uB2A5\uD558\uBA70 \uCD94\uD6C4 \uBC94\uC704\uB97C \uD655\uB300\uD560 \uC608\uC815\uC785\uB2C8\uB2E4. ",
            react_1.default.createElement("br", null),
            " ",
            "\uC544\uB798 \uBC84\uD2BC \uD639\uC740 \uC774\uBBF8\uC9C0\uB97C \uB4DC\uB798\uADF8 & \uB4DC\uB86D\uD558\uC138\uC694",
            " "),
        react_1.default.createElement(addImages_1.ImageAdder, { image: images, imageSetstates: imageSetstates }))) : (react_1.default.createElement("div", null,
        react_1.default.createElement(imageEntry_1.ImageEntryList, { images: images }),
        react_1.default.createElement(addImages_1.ImageAdder, { image: images, imageSetstates: imageSetstates })))));
};
exports.ImageUploader = ImageUploader;
//# sourceMappingURL=imageUploader.js.map