"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const imageUploader_1 = require("./imageUploader");
const upload_1 = require("../pages/upload");
require("../css/Nav.css");
const Routes = ({ isLogin, images, imageSetstates, isPixel, option, optionHandler, uploadToggler, transformedImagesSetstates, isUploadEndSetstate, }) => {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
            react_1.default.createElement(imageUploader_1.ImageUploader, { images: images, imageSetstates: imageSetstates, isPixel: isPixel, option: option, optionHandler: optionHandler, uploadToggler: uploadToggler })),
        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/upload" },
            react_1.default.createElement(upload_1.Uploader, { images: images, isUploadEndSetstate: isUploadEndSetstate, transformedImagesSetstates: transformedImagesSetstates }))));
};
exports.Routes = Routes;
//# sourceMappingURL=Route.js.map