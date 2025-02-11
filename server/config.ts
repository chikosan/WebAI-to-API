
import * as dotenv from 'dotenv';

dotenv.config();

export const Config = {
  port: parseInt(process.env.PORT || '3000', 10),
  webhookSecret: process.env.WEBHOOK_SECRET || '',
  webhookUrl: process.env.WEBHOOK_URL || '',
};
