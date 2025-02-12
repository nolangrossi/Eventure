import express from 'express';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';

const router = express.Router();
dotenv.config();

router.get('/ticketmaster', async (req: Request, res: Response) => {
  console.log('Ticketmaster route accessed');

  // Extract query parameters from the request
  const { keyword, city, page } = req.query;
  console.log("Keyword:", keyword, "Location:", city);

  // Construct the API URL dynamically
  const params = new URLSearchParams({
    apikey: process.env.API_KEY || "",
  });

  if (keyword) params.append("keyword", keyword as string);
  if (city) params.append("city", city as string); // Use city filter dynamically
  if (page) params.append('page', page as string);

  const url = `https://app.ticketmaster.com/discovery/v2/events.json?${params.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    res.json(json); // Ensure the response is sent as JSON
    console.log("Data Sent!");
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

export { router as ticketmasterRouter };
