"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uploader = void 0;
const react_1 = __importDefault(require("react"));
require("../css/uploadPage.css");
const Uploader = ({ images, transformedImagesSetstates, isUploadEndSetstate, }) => {
    // useEffect(() => {
    //   axios
    //     .post("server api location", images)
    //     .then((response) => response.data)
    //     .then((array) => {
    //       isUploadEndSetstate(true);
    //       transformedImagesSetstates(array);
    //     });
    // });
    return (react_1.default.createElement("div", { className: "fixed-container" },
        react_1.default.createElement("div", { className: "waiting-anime" })));
};
exports.Uploader = Uploader;
//# sourceMappingURL=upload.js.map