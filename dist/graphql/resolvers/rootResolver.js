"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userResolver_1 = __importDefault(require("./userResolver"));
var roomResolver_1 = __importDefault(require("./roomResolver"));
exports.userResolvers = {
    Query: {
        users: userResolver_1.default.allUsersQueryResolver,
        user: userResolver_1.default.findUserByIdResolver,
        rooms: roomResolver_1.default.allRoomsQueryResolver,
        room: roomResolver_1.default.findRoomByIdResolver,
    },
};
exports.default = exports.userResolvers;
