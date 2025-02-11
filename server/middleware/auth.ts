
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { Config } from './config';

export const authenticateWebhook = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const secret = Config.webhookSecret;
    const token = req.get('X-Goog-Signature') || '';

    if (!secret || !token) {
      throw new Error('Missing authentication credentials');
    }

    const decoded = jwt.verify(token, secret);
    req.webhook = decoded;
    next();
  } catch (error) {
    console.error('Authentication failed:', error);
    res.status(401).json({ error: 'Invalid webhook signature' });
  }
};
