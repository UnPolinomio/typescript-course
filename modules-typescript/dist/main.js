"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __importDefault(require("./models/Point"));
var Color_1 = __importDefault(require("./models/Color"));
var origin = new Point_1.default(0, 0, Color_1.default.blue);
var userPoint = new Point_1.default(10, 10, Color_1.default.red);
console.log("Distance between oring and the point is:\n" + origin.distanceTo(userPoint));
