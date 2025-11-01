import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Users service is running');
});

app.listen(port, () => {
  console.log(`Users service listening at http://localhost:${port}`);
});
