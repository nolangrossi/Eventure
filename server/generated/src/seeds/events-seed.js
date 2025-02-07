"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedEvents = void 0;
const index_js_1 = require("../models/index.js");
const seedEvents = async () => {
    try {
        await index_js_1.event.bulkCreate([
            {
                event_name: "Tech Conference 2025",
                event_lat: 37.7749,
                event_lon: -122.4194,
                event_price: 100,
                category_id: 1,
                event_date: 20250215,
                event_time: 1400,
            },
            {
                event_name: "Music Festival",
                event_lat: 34.0522,
                event_lon: -118.2437,
                event_price: 50,
                category_id: 2,
                event_date: 20250610,
                event_time: 1800,
            },
            {
                event_name: "Startup Pitch Night",
                event_lat: 40.7128,
                event_lon: -74.0060,
                event_price: 20,
                category_id: 3,
                event_date: 20250405,
                event_time: 1900,
            },
            {
                event_name: "AI Workshop",
                event_lat: 30.2672,
                event_lon: -97.7431,
                event_price: 75,
                category_id: 4,
                event_date: 20250320,
                event_time: 1300,
            },
        ], { individualHooks: true });
        console.log("Events seeded successfully!");
    }
    catch (error) {
        console.error("Error seeding events:", error);
    }
};
exports.seedEvents = seedEvents;
