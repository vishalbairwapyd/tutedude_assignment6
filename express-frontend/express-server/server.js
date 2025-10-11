// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// ✅ Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Read API_URL from .env or environment
const API_URL = process.env.API_URL || 'http://localhost:5000';

// ✅ Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// ✅ Create a virtual config.js file dynamically
// This sends the API_URL value to the browser
app.get('/config.js', (req, res) => {
  res.type('application/javascript');
  res.send(`window.API_URL = '${API_URL}';`);
});

// ✅ Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'form.html'));
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Express server running on http://localhost:${PORT}`);
  console.log(`🔗 API_URL: ${API_URL}`);
});
