"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = process.env.PORT || 3000;
exports.DB_URL = process.env.dburl || 'mongodb://localhost:27017/rcdb';
exports.mongoConfig = {
    useNewUrlParser: true,
    authSource: 'rcdb',
    user: 'rc',
    pass: 'rc',
};
exports.default = exports.PORT;
