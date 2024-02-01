import { Message } from "./types";

export const getCurrentTimestamp = () => {
  return new Date().getTime();
};

export const getMessageDateTime = (message: Message) => {
  if (message.timestamp) {
    return new Date(message.timestamp).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
  }
};
