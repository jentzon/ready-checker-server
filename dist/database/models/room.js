"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var errors_1 = require("../../helpers/errors");
var readyStatusSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
    },
    ready: {
        type: Boolean,
        unique: false,
    },
    ETA: {
        type: Number,
        unique: false,
    },
});
var readyCheckSchema = new mongoose_1.Schema({
    startedBy: {
        type: String,
        unique: true,
    },
    active: {
        type: Boolean,
        unique: false,
    },
    readyStatus: {
        type: [readyStatusSchema],
        unique: false,
    },
});
var roomSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        unique: false,
    },
    created: {
        type: String,
        unique: false,
    },
    members: {
        type: [String],
        unique: false,
    },
    pendingMembers: {
        type: [String],
        unique: false,
    },
    admins: {
        type: [String],
        unique: false,
    },
    rc: {
        type: readyCheckSchema,
        unique: false,
    },
});
var Room = mongoose_1.default.model('Room', roomSchema);
exports.findAllRooms = function () { return Room.find()
    .then(function (data) { return data; })
    .catch(function (error) { throw error; }); };
exports.findRoomById = function (id) { return Room.findOne({ id: id })
    .then(function (data) { return errors_1.throwOrReturnValue(data, 'Could not find room with matching property.'); })
    .catch(function (error) { throw error; }); };
exports.default = Room;
