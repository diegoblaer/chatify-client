"use client";

import { ChatEvent, ConnectionStatusChange, Message } from "@/utils/types";
import { useEffect, useRef } from "react";
import ConnectionStatusChangeEvent from "./ConnectionStatusChangeEvent";
import MessageEvent from "./MessageEvent";

interface ChatHistoryProps {
  chatEvents: ChatEvent[];
}

const ChatHistory = ({ chatEvents }: ChatHistoryProps) => {
  const bottomElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomElementRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatEvents]);

  return (
    <div className="grow flex flex-col p-6 gap-8 overflow-auto">
      {chatEvents.map((chatEvent, i) => {
        if (chatEvent.type === "message")
          return <MessageEvent key={i} message={chatEvent.event as Message} />;

        return (
          <ConnectionStatusChangeEvent
            key={i}
            connectionStatusChange={chatEvent.event as ConnectionStatusChange}
          />
        );
      })}
      <div className="-mt-8" ref={bottomElementRef} />
    </div>
  );
};

export default ChatHistory;
