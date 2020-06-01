"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Coordinate_1 = __importDefault(require("./Coordinate"));
var Point = (function (_super) {
    __extends(Point, _super);
    function Point(x, y, color) {
        var _this = _super.call(this, x, y) || this;
        _this.color = color;
        return _this;
    }
    Point.getDistance = function (pointA, pointB) {
        return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));
    };
    Point.prototype.distanceTo = function (point) {
        return Point.getDistance(this, point);
    };
    return Point;
}(Coordinate_1.default));
exports.default = Point;
