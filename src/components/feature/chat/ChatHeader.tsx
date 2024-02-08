"use client";

import Typography from "@/components/common/Typography";
import { User } from "@/utils/types";

interface ChatHeaderProps {
  connectedUsers: User[];
}

const ChatHeader = ({ connectedUsers }: ChatHeaderProps) => {
  return (
    <div className="w-full py-2 bg-light-purple block md:hidden">
      <Typography
        variant="small"
        className="text-white text-center block font-semibold"
      >
        {connectedUsers.length} Connected Users
      </Typography>
    </div>
  );
};

export default ChatHeader;
