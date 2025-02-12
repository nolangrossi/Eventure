import dotenv from 'dotenv';
dotenv.config();
import { apiRouter } from './routes/api/index.js';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3001;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientBuildPath = path.resolve(__dirname, '../../client/dist');

// Serve static files from the React app
app.use(express.static(clientBuildPath));
app.use(express.json());
app.use('/api', apiRouter);

// Catch-all route to serve index.html for any requests that don't match a static file
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});





