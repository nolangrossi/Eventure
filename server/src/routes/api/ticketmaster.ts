import express from 'express';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';

const router = express.Router();
dotenv.config();

router.get('/ticketmaster', async (req: Request, res: Response) => {
  console.log('Ticketmaster route accessed');

  // Extract query parameters from the request
  const { keyword, location } = req.query;
  console.log("Keyword:", keyword, "Location:", location);
  console.log("API Key:", process.env.API_KEY);

  // Construct the API URL dynamically
  const params = new URLSearchParams({
    apikey: process.env.API_KEY || "",
    page: "0", // Default page
  });

  if (keyword) params.append("keyword", keyword as string);
  if (location) params.append("city", location as string); // Use city filter dynamically

  const url = `https://app.ticketmaster.com/discovery/v2/events.json?${params.toString()}`;
  console.log("Constructed URL:", url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log("Response JSON:", json);
    res.send(json);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

export { router as ticketmasterRouter };
