import express from 'express';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';

const router = express.Router();
dotenv.config();

router.get('/ticketmaster', async (req: Request, res: Response) => {
  console.log('ticketmaster route');
  const { keyword, location } = req.query;
  console.log("Keyword:", keyword, "Location:", location);
  console.log("API Key:", process.env.API_KEY);

  const url = `https://app.ticketmaster.com/discovery/v2/events.json?&page=0&city=detroit&apikey=${process.env.API_KEY}`;
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