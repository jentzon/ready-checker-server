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
var userSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        unique: false,
    },
    nick: {
        type: String,
        unique: true,
    },
    joined: {
        type: String,
        unique: false,
    },
    mail: {
        type: String,
        unique: true,
    },
});
var User = mongoose_1.default.model('User', userSchema);
exports.findAllUsers = function () { return User.find()
    .then(function (data) { return data; })
    .catch(function (error) { throw error; }); };
exports.findById = function (id) { return User.findOne({ id: id })
    .then(function (data) { return errors_1.throwOrReturnValue(data, 'Could not find user with matching property.'); })
    .catch(function (error) { throw error; }); };
exports.findByNick = function (nick) { return User.findOne({ nick: nick })
    .then(function (data) { return errors_1.throwOrReturnValue(data, 'Could not find user with matching property.'); })
    .catch(function (error) { throw error; }); };
exports.findByMail = function (mail) { return User.findOne({ mail: mail })
    .then(function (data) { return errors_1.throwOrReturnValue(data, 'Could not find user with matching property.'); })
    .catch(function (error) { throw error; }); };
exports.addUser = function (user) {
    var newUser = new User(user);
    newUser.save()
        .then()
        .catch(function (error) { throw error; });
};
exports.default = User;
