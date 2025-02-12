import { Router } from 'express';
import { ticketmasterRouter } from './ticketmaster.js';
import { SignUprouter } from './signupUser.js';

const router = Router();

router.use(SignUprouter);

router.use('/search', ticketmasterRouter);

export default router;
