
// TypeScript definitions for Gmail webhook notifications
export interface MessageNotification {
  email: string;
  historyId: string;
  labelIds: string[];
  messages: {
    id: string;
    threadId: string;
    snippet: string;
    headers: {
      name: string;
      value: string;
    }[];
  }[];
}

export interface HistoryNotification {
  email: string;
  historyId: string;
  labels: string[];
  changes: {
    type: string;
    messages: {
      id: string;
      threadId: string;
    }[];
  }[];
}

export interface WebhookPayload {
  notification: {
    message: MessageNotification;
    history: HistoryNotification;
    type: 'message' | 'history';
  };
}
