"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Counter = (props) => {
    const { name } = props;
    return react_1.default.createElement("p", null, name);
};
exports.default = Counter;
//# sourceMappingURL=counter.js.map