import config from "@/utils/config";
import { SocketEvents } from "@/utils/constants";
import { getCurrentTimestamp } from "@/utils/date";
import { Message, User } from "@/utils/types";
import { useEffect } from "react";
import { Socket, io } from "socket.io-client";
import useCurrentUser from "./useCurrentUser";

interface useSocketProps {
  onNewMessage: (message: Message) => void;
  onUserConnection: (user: User, connectedUsers: User[]) => void;
  onUserDisconnection: (user: User, connectedUsers: User[]) => void;
  onSocketConnection: (socket: Socket) => void;
}

const useSocket = ({
  onNewMessage,
  onUserConnection,
  onSocketConnection,
  onUserDisconnection,
}: useSocketProps) => {
  const currentUser = useCurrentUser();

  useEffect(() => {
    const socket = io(config.socketServerUrl);
    console.log(config.socketServerUrl);

    socket.emit(SocketEvents.JOIN, currentUser);

    socket.on(SocketEvents.CONNECT, () => {
      onSocketConnection(socket);
    });

    socket.on(
      SocketEvents.NEW_MESSAGE,
      ({ text, user }: { text: Message["text"]; user: User }) => {
        onNewMessage({
          text,
          user,
          fromMe: user.id === socket.id,
          timestamp: getCurrentTimestamp(),
        });
      }
    );

    socket.on(
      SocketEvents.USER_CONNECTED,
      ({ user, connectedUsers }: { user: User; connectedUsers: User[] }) => {
        onUserConnection(user, connectedUsers);
      }
    );

    socket.on(
      SocketEvents.USER_DISCONNECTED,
      ({ user, connectedUsers }: { user: User; connectedUsers: User[] }) => {
        onUserDisconnection(user, connectedUsers);
      }
    );

    return () => {
      socket.disconnect();
    };
  }, [
    currentUser,
    onNewMessage,
    onUserConnection,
    onSocketConnection,
    onUserDisconnection,
  ]);
};

export default useSocket;
