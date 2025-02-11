
# Gmail Webhook Server

A production-ready Express server for handling Gmail API push notifications.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file using the example:
   ```bash
   cp .env.example .env
   ```
4. Configure your environment variables

## Configuration

The server uses the following environment variables:

- `PORT`: Server port (default: 3000)
- `WEBHOOK_SECRET`: Secret key for webhook authentication
- `WEBHOOK_URL`: URL where notifications will be sent

## Running the Server

```bash
npm start
```

## Testing

1. Expose your server to the internet using ngrok:
   ```bash
   ngrok http ${PORT}
   ```
2. Configure your Gmail webhook with the ngrok URL:
   ```
   https://your-ngrok-url.ngrok.io/webhook
   ```

## Security

- Webhook requests are authenticated using JWT verification
- All requests are logged using Morgan
- Proper error handling and 500 responses

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
