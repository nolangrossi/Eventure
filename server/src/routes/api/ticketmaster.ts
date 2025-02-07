import express from 'express';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';

const router = express.Router();
dotenv.config();

router.get('/keyword', async (req: Request, _res: Response) => {
    const { keyword } = req.body
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&apikey=${process.env.API_KEY}`;
    try {
        const  response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error);
    }
});
router.get('/city', async (req: Request, _res: Response) => {
  const { city } = req.body
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&apikey=${process.env.API_KEY}`;
  try {
      const  response = await fetch(url);
      if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
  } catch (error) {
      console.error(error);
  }
});
// _embedded.events[n].name
// _embedded.events[n].url
// _embedded.events[n].images[0].url
// _embedded.events[n].dates.start.localDate
// _embedded.events[n].priceRanges.min
// _embedded.events[n].priceRanges.max
export { router as ticketmasterRouter };