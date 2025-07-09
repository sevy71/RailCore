// server.js
import express from 'express';
import feedbackHandler from './api/feedback.js'; // adjust path if needed

const app = express();
app.use(express.json());

// Mount your existing feedback function
app.post('/api/feedback', feedbackHandler);

const port = 3001;
app.listen(port, () => {
  console.log(`⚡️ Feedback API listening on http://localhost:${port}`);
});