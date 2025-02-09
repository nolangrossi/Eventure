import { Router } from 'express';
import  { apiRouter } from './api/index.js';
const router = Router();

router.use('/', apiRouter);

router.get('/', (_req, _res) => {
    console.log('index route');
});

export {router as indexRouter};