// TODO: Create Sequelize connector from models folder and import in to connect to postgres server. 

import express from 'express';
//import routes from './routes/index.js';
import sequelize from './config/connection.js';
import dotenv from 'dotenv';
dotenv.config();



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  console.log(`Connected to database successfully.`);
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});


