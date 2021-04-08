"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Route_1 = require("./Route");
require("../css/Nav.css");
const Nav = ({}) => {
    const [isLogin, isLoginSetstate] = react_1.default.useState(false);
    const [isUpload, isUploadSetstate] = react_1.default.useState(false);
    const [isUploadEnd, isUploadEndSetstate] = react_1.default.useState(false);
    const [isPixel, isPixelSetState] = react_1.default.useState(true);
    const [images, imageSetstates] = react_1.default.useState([]);
    const [transformedImages, transformedImagesSetstates] = react_1.default.useState([]);
    const [option, optionSetStates] = react_1.default.useState({
        width: 0,
        height: 0,
        aspectRatio: true,
        doNotEnglare: true,
        percentage: 75,
        manualPercentage: false,
        multiple: false,
    });
    return (react_1.default.createElement("nav", { className: "navbar" },
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement("div", { id: "navigator", className: "box-shadow" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "logo align-center" }, "logo"),
                react_1.default.createElement("div", { className: "menu right align-center height100 " },
                    isLogin ? (react_1.default.createElement(react_router_dom_1.Link, { to: "/logout", className: "right order0 width20 desktop" },
                        react_1.default.createElement("div", null, "\uB85C\uADF8\uC544\uC6C3"))) : (react_1.default.createElement(react_router_dom_1.Link, { to: "/login", className: "right order0 width20 desktop " },
                        react_1.default.createElement("div", null, "\uB85C\uADF8\uC778"))),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/signup", className: "right order1 width20 desktop " },
                        react_1.default.createElement("div", null, "\uAC00\uC785\uD558\uAE30")),
                    react_1.default.createElement("div", { className: "modal mobile box-shadow" },
                        react_1.default.createElement("div", null, "\uBAA8\uB2EC\uCC3D"))))),
        react_1.default.createElement(Route_1.Routes, { isLogin: isLogin, images: images, imageSetstates: imageSetstates, isPixel: isPixel, option: option, optionHandler: optionSetStates, uploadToggler: isUploadSetstate, transformedImagesSetstates: transformedImagesSetstates, isUploadEndSetstate: isUploadEndSetstate })));
};
exports.Nav = Nav;
//# sourceMappingURL=nav.js.map