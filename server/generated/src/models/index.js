"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.event = exports.user = exports.rsvp = void 0;
const connection_js_1 = __importDefault(require("../config/connection.js"));
exports.sequelize = connection_js_1.default;
const rsvp_js_1 = require("./rsvp.js");
const user_js_1 = require("./user.js");
const event_js_1 = require("./event.js");
const rsvp = (0, rsvp_js_1.RsvpFactory)(connection_js_1.default);
exports.rsvp = rsvp;
const user = (0, user_js_1.UserFactory)(connection_js_1.default);
exports.user = user;
const event = (0, event_js_1.EventFactory)(connection_js_1.default);
exports.event = event;
