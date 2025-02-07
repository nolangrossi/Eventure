//import { calendar } from '@googleapis/calendar';
import { OAuth2Client } from "google-auth-library";
import fs from "fs";

// Load credentials.json
const credentials = JSON.parse(fs.readFileSync("../credentials.json", "utf-8"));

const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;

// Create OAuth2 client (Fix: Use OAuth2Client instead of OAuth2)
const oAuth2Client = new OAuth2Client(client_id, client_secret, redirect_uris[0]);

// Generate Auth URL
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: ["https://www.googleapis.com/auth/calendar"],
});

console.log("Authorize this app by visiting:", authUrl);

