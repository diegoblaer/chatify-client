"use client";

import Avatar from "@/components/common/Avatar";
import Typography from "@/components/common/Typography";
import { getMessageDateTime } from "@/utils/date";
import { Message } from "@/utils/types";

interface MessageEventProps {
  message: Message;
}

const MessageEvent = ({ message }: MessageEventProps) => {
  return (
    <div className={`flex flex-col gap-2 ${message.fromMe ? "self-end" : ""}`}>
      <div className="flex gap-2 items-center">
        <Avatar avatar={message.user.avatar} size="xsmall" />
        <Typography variant="xsmall" className="font-semibold">
          {message.user.name}
        </Typography>
      </div>
      <div
        className={`rounded-sm p-3 w-fit ${
          message.fromMe ? "bg-ice-blue" : "bg-light-gray"
        }`}
      >
        <Typography variant="xsmall">{message.text}</Typography>
      </div>
      <Typography variant="xsmall">{getMessageDateTime(message)}</Typography>
    </div>
  );
};

export default MessageEvent;
