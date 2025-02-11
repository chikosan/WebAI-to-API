
import * as express from 'express';
import { WebhookPayload } from '../types';
import { Config } from '../config';

const router = express.Router();

router.post('/', async (req: express.Request, res: express.Response) => {
  try {
    const payload: WebhookPayload = req.body;
    
    if (!payload.notification) {
      return res.status(400).json({ error: 'Missing notification payload' });
    }

    // Process notification based on type
    switch (payload.notification.type) {
      case 'message':
        handleMessageNotification(payload.notification.message);
        break;
      case 'history':
        handleHistoryNotification(payload.notification.history);
        break;
      default:
        console.warn('Unknown notification type:', payload.notification.type);
        break;
    }

    res.status(200).json({ status: 'Webhook received successfully' });
  } catch (error) {
    console.error('Webhook processing failed:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

function handleMessageNotification(notification: WebhookPayload['notification']['message']) {
  console.log('New message notification:', notification);
  // Implement your message handling logic here
}

function handleHistoryNotification(notification: WebhookPayload['notification']['history']) {
  console.log('History notification:', notification);
  // Implement your history handling logic here
}

export default router;
