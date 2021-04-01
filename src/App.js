"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("./css/App.css");
const react_1 = __importStar(require("react"));
const nav_1 = require("./components/nav");
const App = () => {
    const [isLogin, isLoginSetstate] = react_1.useState(false);
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(nav_1.Nav, { isLogin: isLogin }),
        react_1.default.createElement("div", { className: "App-header" },
            react_1.default.createElement("p", null,
                "Edit ",
                react_1.default.createElement("code", null, "src/App.js"),
                " and save to reload."),
            react_1.default.createElement("img", { src: "./logo512.png", className: "App-logo" }),
            react_1.default.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
};
exports.App = App;
//# sourceMappingURL=App.js.map