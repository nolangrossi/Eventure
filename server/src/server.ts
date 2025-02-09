import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Request, Response } from "express";
import Nylas from "nylas";

const nylasConfig = {
  clientId: process.env.NYLAS_CLIENT_ID,
  callbackUri: "http://localhost:3001/login", // The redirect URI after successful login
  apiKey: process.env.NYLAS_API_KEY,
  apiUri: process.env.NYLAS_API_URI,
};

const nylas = new Nylas({
  apiKey: nylasConfig.apiKey,
  apiUri: nylasConfig.apiUri,
});

const app = express();
const port = 3001;

app.get("/nylas/auth", (_req, res) => {
  try {
    const authUrl = nylas.auth.urlForOAuth2({
      clientId: nylasConfig.clientId,
      redirectUri: nylasConfig.callbackUri,
    });

    res.json({ authUrl }); // Send the auth URL back to the client
  } catch (error) {
    console.error("Error generating Nylas auth URL:", error);
    res.status(500).json({ error: "Failed to generate Nylas auth URL" });
  }
});


app.get("/oauth/exchange", async (req: Request, res: Response): Promise<any> => {
  console.log("Received callback from Nylas");

  const code = req.query.code as string | undefined;
  if (!code) {
    return res.status(400).json({ error: "No authorization code provided" });
  }

  try {
    const response = await nylas.auth.exchangeCodeForToken({
      clientSecret: process.env.NYLAS_API_KEY!,
      clientId: process.env.NYLAS_CLIENT_ID!,
      redirectUri: process.env.NYLAS_CALLBACK_URI!,
      code,
    });

    res.status(200).json({
      success: true,
      message: "OAuth2 flow completed successfully",
      access_token: response.accessToken,
    });
  } catch (error) {
    console.error("Error exchanging code for token:", error);
    res.status(500).json({
      success: false,
      error: "Failed to exchange code for token",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




