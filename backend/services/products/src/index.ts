import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Products service is running');
});

app.listen(port, () => {
  console.log(`Products service listening at http://localhost:${port}`);
});
