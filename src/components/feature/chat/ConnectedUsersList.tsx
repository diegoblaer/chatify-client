"use client";

import { User } from "@/utils/types";
import ConnectedUser from "./ConnectedUser";

interface ConnectedUsersListProps {
  connectedUsers: User[];
}

const ConnectedUsersList = ({ connectedUsers }: ConnectedUsersListProps) => {
  return (
    <div className="flex flex-col px-4 py-2 gap-3 overflow-auto h-full">
      {connectedUsers.map((user) => (
        <ConnectedUser key={user.id} user={user} />
      ))}
    </div>
  );
};

export default ConnectedUsersList;
