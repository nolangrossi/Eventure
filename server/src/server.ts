
// TODO: Create Sequelize connector from models folder and import in to connect to postgres server.

import sequelize from "./config/connection.js";
import express from "express";
import router from "./routes/api/index.js";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
dotenv.config();

// Middleware (remove bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientBuildPath = path.resolve(__dirname, '../../client/dist');

const PORT = process.env.PORT || 3001;

app.use(express.static('../client/dist'));


app.use("/api",router);  // React server has its own ports and app has its own port

app.get('*', (_req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});
// Connect to the database before starting the server
sequelize.sync().then(() => {
  console.log(`Connected to database successfully.`);
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});

