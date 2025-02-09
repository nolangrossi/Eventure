import { Router } from 'express';
import { ticketmasterRouter } from './ticketmaster.js';


const router = Router();

router.use('/search', ticketmasterRouter);

export {router as apiRouter};
