"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var constants_1 = require("../config/constants");
var user_1 = __importDefault(require("./models/user"));
var models = { User: user_1.default };
exports.connection = function () { return mongoose_1.default.connect(constants_1.DB_URL, constants_1.mongoConfig); };
exports.default = models;
