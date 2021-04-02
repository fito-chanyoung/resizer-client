"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("./css/App.css");
const react_1 = __importDefault(require("react"));
const nav_1 = require("./components/nav");
const imageUploader_1 = require("./components/imageUploader");
const App = () => {
    const [isLogin, isLoginSetstate] = react_1.default.useState(false);
    const [isPixel, isPixelSetState] = react_1.default.useState(false);
    const [option, optionSetStates] = react_1.default.useState({});
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(nav_1.Nav, { isLogin: isLogin }),
        react_1.default.createElement(imageUploader_1.ImageUploader, { isPixel: isPixel, option: option, optionHandler: optionSetStates, methodToggler: isPixelSetState })));
};
exports.App = App;
//# sourceMappingURL=App.js.map