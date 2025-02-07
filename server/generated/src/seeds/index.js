"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rsvp_seed_js_1 = require("./rsvp-seed.js");
const user_seed_js_1 = require("./user-seed.js");
const connection_js_1 = __importDefault(require("../config/connection.js"));
const events_seed_js_1 = require("./events-seed.js");
const seedAll = async () => {
    console.log(process.env.DB_PASSWORD);
    try {
        await connection_js_1.default.sync();
        console.log('\n----- DATABASE SYNCED -----\n');
        await (0, rsvp_seed_js_1.seedRsvp)();
        console.log('\n----- RSVPs SEEDED -----\n');
        await (0, events_seed_js_1.seedEvents)();
        console.log('\n----- Events SEEDED -----\n');
        await (0, user_seed_js_1.seedUsers)();
        console.log('\n----- Users SEEDED -----\n');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};
seedAll();
