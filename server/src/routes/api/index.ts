import { Router } from 'express';
import { ticketmasterRouter } from './ticketmaster.js';
import { SignUprouter } from './signupUser.js';
import authroutes from './auth-routes.js'; // Import login handler
// import apiRoutes from './auth-routes.js';
import { authenticateToken } from '../../middleware/auth.js'
const router = Router();

router.use(SignUprouter);

// router.use('/login', login);
// router.use('/auth', authenticateToken, login);
router.use('/auth',authenticateToken, authroutes)
router.use('/search', ticketmasterRouter);

export default router;
