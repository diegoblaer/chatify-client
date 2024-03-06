import { SocketEvents } from "@/utils/constants";
import { ChatEvent, Message, User } from "@/utils/types";
import { useCallback, useState } from "react";
import { Socket } from "socket.io-client";
import useCurrentUser from "./useCurrentUser";
import useSocket from "./useSocket";

const useChat = () => {
  const [connectedUsers, setConnectedUsers] = useState<User[]>([]);
  const [socket, setSocket] = useState<Socket | undefined>();
  const [chatEvents, setChatEvents] = useState<ChatEvent[]>([]);
  const currentUser = useCurrentUser();

  const onNewMessage = useCallback((message: Message) => {
    setChatEvents((prevEvents) => [
      ...prevEvents,
      {
        event: message,
        type: "message",
      },
    ]);
  }, []);

  const onUserConnection = useCallback((user: User, connectedUsers: User[]) => {
    setConnectedUsers(connectedUsers);
    setChatEvents((prevEvents) => [
      ...prevEvents,
      {
        event: { user, type: "connection" },
        type: "connectionStatusChange",
      },
    ]);
  }, []);

  const onUserDisconnection = useCallback(
    (user: User, connectedUsers: User[]) => {
      setConnectedUsers(connectedUsers);
      setChatEvents((prevEvents) => [
        ...prevEvents,
        {
          event: { user, type: "disconnection" },
          type: "connectionStatusChange",
        },
      ]);
    },
    []
  );

  const onSocketConnection = useCallback((socket: Socket) => {
    setSocket(socket);
  }, []);

  useSocket({
    onNewMessage,
    onUserConnection,
    onUserDisconnection,
    onSocketConnection,
  });

  const sendMessage = (text: Message["text"]) => {
    socket?.emit(SocketEvents.NEW_MESSAGE, text);
  };

  return {
    sendMessage,
    currentUser: { ...currentUser, id: socket?.id },
    connectedUsers,
    chatEvents,
    connected: socket?.connected,
  };
};

export default useChat;
