"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionToggler = void 0;
const react_1 = __importDefault(require("react"));
require("../css/optionToggler.css");
let toggleOption = function () {
    let target = document.querySelector(".option");
    target.style.width === "0px"
        ? (target.style.width = "300px")
        : (target.style.width = "0px");
};
const OptionToggler = () => {
    return (react_1.default.createElement("div", { className: "option-toggler" },
        react_1.default.createElement("img", { src: "../public/plus.png", className: "img-container", onClick: toggleOption })));
};
exports.OptionToggler = OptionToggler;
//# sourceMappingURL=optionToggler.js.map