"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticketmaster_js_1 = require("./ticketmaster.js");
const router = (0, express_1.Router)();
router.use('/search', ticketmaster_js_1.ticketmasterRouter);
exports.default = router;
