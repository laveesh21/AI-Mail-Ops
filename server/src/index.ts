import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello, world! Welcome to your TypeScript server.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
