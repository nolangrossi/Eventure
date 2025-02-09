// import { Request, Response, Router } from "express";
// import Nylas from "nylas";
// import dotenv from "dotenv";
// require("dotenv").config();

// dotenv.config();
// const router = Router();

// const nylasConfig = {
//   clientId: process.env.NYLAS_CLIENT_ID as string,
//   callbackUri: process.env.NYLAS_CALLBACK_URI as string,
//   apiKey: process.env.NYLAS_API_KEY as string,
//   apiUri: process.env.NYLAS_API_URI as string,
// };

// const nylas = new Nylas({
//   apiKey: nylasConfig.apiKey,
//   apiUri: nylasConfig.apiUri,
// });

// // Route to generate the authentication URL
// router.get("/nylas/auth", (_req, res) => {
//   const authUrl = nylas.auth.urlForOAuth2({
//     clientId: nylasConfig.clientId,
//     redirectUri: nylasConfig.callbackUri,
//   });
//   console.log("NYLAS_CLIENT_ID:", nylasConfig.clientId);
//   console.log("NYLAS_CALLBACK_URI:", nylasConfig.callbackUri);

//   res.json({ authUrl });
// });

// // OAuth callback route
// router.get("/oauth/exchange", async (req: Request, res: Response): Promise<any> => {
//   try {
//     console.log("Received callback from Nylas");

//     const code: string | undefined = req.query.code as string | undefined;
    
//     if (!code) {
//       return res.status(400).json({ error: "No valid authorization code returned from Nylas" });
//     }

//     const response = await nylas.auth.exchangeCodeForToken({
//       clientSecret: nylasConfig.apiKey, 
//       clientId: nylasConfig.clientId,
//       redirectUri: nylasConfig.callbackUri,
//       code,
//     });
    
//     const { grantId } = response;
//     console.log("Nylas Grant ID:", grantId);

//     return res.json({
//       message: "OAuth2 flow completed successfully",
//       grantId,
//     });
//   } catch (error) {
//     console.error("Error in OAuth exchange:", error);
//     return res.status(500).json({ error: "Failed to exchange authorization code for token" });
//   }
// });

// export default router;
