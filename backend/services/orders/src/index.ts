import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.send('Orders service is running');
});

app.listen(port, () => {
  console.log(`Orders service listening at http://localhost:${port}`);
});
