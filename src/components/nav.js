"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("../css/Nav.css");
const Nav = ({ isLogin }) => {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", { id: "navigator" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "logo align-center" }, "logo"),
            react_1.default.createElement("div", { className: "menu right align-center height100" },
                isLogin ? (react_1.default.createElement(react_router_dom_1.Link, { to: "/logout", className: "right order0 width20 desktop" },
                    react_1.default.createElement("div", null, "\uB85C\uADF8\uC544\uC6C3"))) : (react_1.default.createElement(react_router_dom_1.Link, { to: "/login", className: "right order0 width20 desktop" },
                    react_1.default.createElement("div", null, "\uB85C\uADF8\uC778"))),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/signup", className: "right order1 width20 desktop" },
                    react_1.default.createElement("div", null, "\uAC00\uC785\uD558\uAE30")),
                react_1.default.createElement("div", { className: "modal mobile" },
                    react_1.default.createElement("div", null, "\uBAA8\uB2EC\uCC3D"))))));
};
exports.Nav = Nav;
//# sourceMappingURL=nav.js.map