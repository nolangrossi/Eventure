import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import { apiRouter } from './routes/api/index.js'; // Import your routes

const app = express();
const PORT = process.env.PORT || 3001;
const clientBuildPath = path.resolve(__dirname, '../../client/dist');

app.use(express.json());

// Use your API routes
app.use('/api', apiRouter);

// Serve static files from the React app
app.use(express.static(clientBuildPath));

// Catch-all route to serve index.html for any requests that don't match a static file or API route
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// Basic error handling middleware
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
