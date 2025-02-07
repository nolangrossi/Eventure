"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketmasterRouter = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const router = express_1.default.Router();
exports.ticketmasterRouter = router;
dotenv_1.default.config();
router.get('/keyword', async (req, _res) => {
    const { keyword } = req.body;
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&apikey=${process.env.API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
    }
    catch (error) {
        console.error(error);
    }
});
router.get('/city', async (req, _res) => {
    const { city } = req.body;
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&apikey=${process.env.API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
    }
    catch (error) {
        console.error(error);
    }
});
