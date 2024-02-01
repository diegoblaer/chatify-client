"use client";

import { User } from "@/utils/types";
import ConnectedUser from "./ConnectedUser";

interface ConnectedUsersListProps {
  items: User[];
}

const ConnectedUsersList = ({ items }: ConnectedUsersListProps) => {
  return (
    <div className="flex flex-col px-4 py-2 gap-3 overflow-auto h-full">
      {items.map((user) => (
        <ConnectedUser key={user.id} user={user} />
      ))}
    </div>
  );
};

export default ConnectedUsersList;
