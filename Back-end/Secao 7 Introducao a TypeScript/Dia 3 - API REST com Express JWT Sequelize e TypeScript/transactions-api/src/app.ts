import express, { Request, Response } from 'express';
import transactionsRouter from './routers/transactions.router';
import transactionsController from './controllers/transactions.controller';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

transactionsRouter.get('/transactions', transactionsController.list);

app.use(transactionsRouter);

export default app;
