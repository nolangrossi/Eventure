// TODO: Create Sequelize connector from models folder and import in to connect to postgres server.

import sequelize from "./config/connection.js";
import dotenv from "dotenv";
import express from "express";
import { SignUprouter } from './routes/api/signupUser.js';

const app = express();
dotenv.config();

// Middleware (remove bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

app.use('/api', SignUprouter);  // Attach all routes correctly

// Connect to the database before starting the server
sequelize.sync().then(() => {
  console.log(`Connected to database successfully.`);
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});

