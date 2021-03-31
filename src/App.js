"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const react_1 = __importDefault(require("react"));
const counter_1 = __importDefault(require("./components/counter"));
const react_hot_loader_1 = require("react-hot-loader");
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("header", { className: "App-header" },
            react_1.default.createElement("p", null,
                "Edit ",
                react_1.default.createElement("code", null, "src/App.js"),
                " and save to reload."),
            react_1.default.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" },
                "Learn React",
                react_1.default.createElement(counter_1.default, { name: "song" })))));
}
exports.default = react_hot_loader_1.hot(module)(App);
//# sourceMappingURL=App.js.map