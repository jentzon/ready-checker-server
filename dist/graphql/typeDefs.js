"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
exports.typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: String!\n    name: String!\n    nick: String\n    joined: String\n    mail: String\n  }\n\n  type ReadyStatus {\n    id: String\n    ready: Boolean\n    ETA: Int\n  }\n\n  type ReadyCheck {\n    startedBy: String!\n    active: Boolean\n    readyStatus: [ReadyStatus]\n    created: String\n    ttl: Int\n  }\n\n  type ReadyRoom {\n    id: String!\n    name: String!\n    created: String!\n    members: [String!]!\n    pendingMembers: [String!]!\n    admins: [String!]!\n    rc: ReadyCheck\n  }\n\n  type Query {\n    users: [User]\n    user(id: String): User\n    rooms: [ReadyRoom]\n    room(id: String): ReadyRoom\n  }\n"], ["\n  type User {\n    id: String!\n    name: String!\n    nick: String\n    joined: String\n    mail: String\n  }\n\n  type ReadyStatus {\n    id: String\n    ready: Boolean\n    ETA: Int\n  }\n\n  type ReadyCheck {\n    startedBy: String!\n    active: Boolean\n    readyStatus: [ReadyStatus]\n    created: String\n    ttl: Int\n  }\n\n  type ReadyRoom {\n    id: String!\n    name: String!\n    created: String!\n    members: [String!]!\n    pendingMembers: [String!]!\n    admins: [String!]!\n    rc: ReadyCheck\n  }\n\n  type Query {\n    users: [User]\n    user(id: String): User\n    rooms: [ReadyRoom]\n    room(id: String): ReadyRoom\n  }\n"])));
exports.default = exports.typeDefs;
var templateObject_1;
