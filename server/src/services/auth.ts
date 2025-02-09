// import Nylas from "nylas";
// import dotenv from 'dotenv';
// import express from 'express';

// const app = express();
// dotenv.config();


// const nylasConfig = {
//   clientId: import.meta.env.VITE_NYLAS_CLIENT_ID,
//   callbackUri: 'http://localhost:3001/oauth/exchange',
//   apiKey: import.meta.env.VITE_NYLAS_API_KEY, 
//   apiUri: import.meta.env.VITE_NYLAS_API_URI,
// };

// const nylas = new Nylas({
//   apiKey: nylasConfig.apiKey,
//   apiUri: nylasConfig.apiUri,
// });


// app.get("/nylas/auth", (_req, res) => {
//   const authUrl = nylas.auth.urlForOAuth2({
//     clientId: nylasConfig.clientId,
//     redirectUri: nylasConfig.callbackUri,
//   });

//   res.json({ authUrl });
// });

// app.get("/oauth/exchange", async (req, res) => {
//     console.log("Received callback from Nylas");
  
//     const code = req.query.code as string; // Explicitly cast to string
  
//     if (!code) {
//       res.status(400).send("No authorization code returned from Nylas");
//       return;
//     }
  
//     try {
//       const response = await nylas.auth.exchangeCodeForToken({
//         clientSecret: nylasConfig.apiKey,
//         clientId: nylasConfig.clientId, 
//         redirectUri: nylasConfig.callbackUri, 
//         code, // Now correctly typed as a string
//       });
  
//       const { grantId } = response;
//       console.log(grantId);
  
//       res.json({
//         message: "OAuth2 flow completed successfully for grant ID: " + grantId,
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Failed to exchange authorization code for token");
//     }
//   });

  // Route to create an event on a calendar
// app.get("/nylas/create-event", async (req, res) => {
//   try {
//     const grantId = fetchUserGrantIdFromYourDb() // This is an example, you'll have to write this
//     const calendarId = "primary";

//     // Schedule the event to start in 5 minutes and end in 35 minutes
//     const now = new Date();
//     const startTime = new Date(now.getTime());
//     startTime.setMinutes(now.getMinutes() + 5);
//     const endTime = new Date(now.getTime());
//     endTime.setMinutes(now.getMinutes() + 35);

//     const newEvent = await nylas.events.create({
//       identifier: grantId,
//       queryParams: {
//         calendarId,
//       },
//       requestBody: {
//         title: "Your event title here",
//         when: {
//           startTime: Math.floor(startTime.getTime() / 1000), // Time in Unix timestamp format (in seconds)
//           endTime: Math.floor(endTime.getTime() / 1000),
//         },
//       },
//     });

//     res.json(newEvent);
//   } catch (error) {
//     console.error("Error creating event:", error);
//   }
// });   

// function fetchUserGrantIdFromYourDb() {
//   throw new Error("Function not implemented.");
// }
