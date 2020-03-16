"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwOrReturnValue = function (value, errorMessage) {
    if (!value)
        throw new Error(errorMessage);
    else
        return value;
};
exports.default = exports.throwOrReturnValue;
