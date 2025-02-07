"use strict";
// TODO: Create Sequelize connector from models folder and import in to connect to postgres server. 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import routes from './routes/index.js';
const connection_js_1 = __importDefault(require("./config/connection.js"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// TODO: Connect to the database before starting the Express.js server
connection_js_1.default.sync().then(() => {
    console.log(`Connected to database successfully.`);
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});
