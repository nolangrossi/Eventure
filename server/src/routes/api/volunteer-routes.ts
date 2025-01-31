import express from 'express';
import type { Request, Response } from 'express';
import { Volunteer } from '../models/index.js';

const router = express.Router();

// GET /volunteers - Get all volunteers
router.get('/', async (_req: Request, res: Response) => {
  // TODO: Update code to return all Volunteers
});

// GET /volunteers/:id - Get a volunteer by ID
router.get('/:id', async (req: Request, res: Response) => {
  // TODO: Update code to return one Volunteer based on ID
});

// POST /volunteers - Create a new volunteer
router.post('/', async (req: Request, res: Response) => {
  // TODO: Update code to create a Volunteer
});

// PUT /volunteers/:id - Update a volunteer by ID
router.put('/:id', async (req: Request, res: Response) => {
  // TODO: Update code to retrieve one Volunteer based on id and username and return an updated Volunteer object
});

// DELETE /volunteers/:id - Delete a volunteer by ID
router.delete('/:id', async (req: Request, res: Response) => {
  // TODO: Update code to delete Volunteer based on ID
});

export { router as volunteerRouter };
