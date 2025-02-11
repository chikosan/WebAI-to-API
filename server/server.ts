
import * as express from 'express';
import * as morgan from 'morgan';
import { Config } from './config';
import { authenticateWebhook } from './middleware/auth';
import webhookRouter from './routes/webhook';

const app = express();

// Middleware
app.use(morgan('combined'));
app.use(express.json());

// Routes
app.use('/webhook', authenticateWebhook, webhookRouter);

// Error handling
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(Config.port, () => {
  console.log(`Server running on port ${Config.port}`);
});
