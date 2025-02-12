# Eventure

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [License](#license)
  * [Questions](#questions)
  
  ## Description
  Eventure is a full-stack web application designed for event enthusiasts who want to easily discover and track local events. Users can browse upcoming events, RSVP events and save it to their favorites, and manage their saved events with ease. Google Calendar and Ticketmaster APIs was integrated to allow the Eventure application to provide a real-time event-tracking experience with a modern, user-friendly interface. Whether you're looking for concerts, conferences, or local gatherings, Eventure makes it effortless to find and attend events near you.

  ## Installation
  To successfully run this application, these are the following installation requirements: 
  * Node.js
  * React (Vite)
  * PostgreSQL
  * React Icons
  * Express.js
  * Sequelize
  * JWT Authentication (jsonwebtoken)
  * bcrypt
  * dotenv
  * React-router 

  ## Usage 
  Here is an example screenshot and video of the Eventure App:

  ![Eventure-App](./client/src/assets/homepage-render.jpg)
  
  ## Contributing
  The source of contributors I have used in this application:
  * [nolangrossi](https://github.com/nolangrossi/)
  * [jutalexa2024](https://github.com/jutalexa2024)
  * [Jesuscatalan](https://github.com/Jesuscatalan)
  * [jbarry89](https://github.com/jbarry89/)
  
  ## Test 
  Navigate to the filepath of where the code is saved. Before running the program, you must copy and paste the `.env.EXAMPLE` file with the code `DB_NAME='kanban_db'`,  `DB_USER=`, `DB_PASSWORD=`, and `JWT_SECRET_KEY=`. Then rename the file as`.env` in the server folder. Copy and paste the `.env.EXAMPLE` file in the client folder and rename the file as`.env`. In the `.env` content that's in the client folder, type the localhost URL `VITE_API_URL=`.
  
  Type the code below in the terminal, running each line of code separately.

  ```bash
  npm install

  ```

  **Run the Application:**

  ``` bash 
  cd server
  npm run dev

  ``` 
  Open a new Terminal and navigate to project folder:

  ``` bash
  cd client 
  npm run dev

  ``` 

  ## License
  This project is Licensed under the MIT License.
  
  ## Questions
  Feel Free to contact any of the [contributors](#contributing) listed above for any additional questions.
 