"use client";
import Typography from "@/components/common/Typography";
import ChatHeader from "@/components/feature/chat/ChatHeader";
import ChatHistory from "@/components/feature/chat/ChatHistory";
import ChatMessageForm from "@/components/feature/chat/ChatMessageForm";
import ConnectedUsersList from "@/components/feature/chat/ConnectedUsersList";
import useChat from "@/hooks/useChat";

export default function Chat() {
  const { sendMessage, chatEvents, connectedUsers } = useChat();

  return (
    <div className="bg-white rounded w-full h-full max-w-[1200px] shadow-md grid md:grid-cols-5 grow  overflow-auto">
      <div className="bg-light-purple h-full flex-col overflow-auto md:flex hidden">
        <Typography
          variant="xsmall"
          as="div"
          className="py-4 text-center text-light-gray bg-dark-purple font-semibold"
        >
          CONNECTED USERS
        </Typography>
        <div className="grow">
          <ConnectedUsersList connectedUsers={connectedUsers} />
        </div>
      </div>
      <div className="md:col-span-4 h-full flex flex-col overflow-hidden ">
        <ChatHeader connectedUsers={connectedUsers} />
        <ChatHistory chatEvents={chatEvents} />
        <ChatMessageForm onMessageSubmit={sendMessage} />
      </div>
    </div>
  );
}
