"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedUsers = void 0;
const index_js_1 = require("../models/index.js");
const seedUsers = async () => {
    try {
        await index_js_1.user.bulkCreate([
            {
                username: "Paul",
                email: "PAUL@example.com",
                password: "securePass123",
            },
            {
                username: "Jae",
                email: "JAE@example.com",
                password: "myPassword456",
            },
            {
                username: "Jessica",
                email: "Jessica@example.com",
                password: "pass789!",
            },
            {
                username: "Jennifer",
                email: "Jennifer@example.com",
                password: "superSecurePass!",
            },
        ], { individualHooks: true });
        console.log("Users seeded successfully!");
    }
    catch (error) {
        console.error("Error seeding users:", error);
    }
};
exports.seedUsers = seedUsers;
