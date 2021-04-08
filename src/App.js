"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("./css/App.css");
const react_1 = __importDefault(require("react"));
const nav_1 = require("./components/nav");
const App = () => {
    // let test: React.MouseEventHandler<HTMLDivElement> = function (
    //   e: React.MouseEvent<HTMLDivElement, MouseEvent>
    // ) {
    //   e.preventDefault();
    //   let target: string[] = ["2020.jpg", "egg.png"];
    //   target.forEach((index) => {
    //     fetch(
    //       `https://testuploadcli.s3.ap-northeast-2.amazonaws.com/images/${index}`
    //     )
    //       .then((response) => response.blob())
    //       .then((blob) => {
    //         const url = window.URL.createObjectURL(new Blob([blob]));
    //         const link = document.createElement("a");
    //         link.href = url;
    //         console.log(blob);
    //         link.setAttribute("download", `${index}`);
    //         // Append to html link element page
    //         // Start download
    //         link.click();
    //         // Clean up and remove the link
    //       });
    //   });
    //};
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(nav_1.Nav, null)));
};
exports.App = App;
//# sourceMappingURL=App.js.map