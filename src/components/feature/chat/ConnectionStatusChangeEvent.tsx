"use client";

import Avatar from "@/components/common/Avatar";
import Typography from "@/components/common/Typography";
import { ConnectionStatusChange } from "@/utils/types";

interface ConnectionStatusChangeEventProps {
  connectionStatusChange: ConnectionStatusChange;
}

const ConnectionStatusChangeEvent = ({
  connectionStatusChange: { user, type },
}: ConnectionStatusChangeEventProps) => {
  return (
    <div className="relative w-full border-b border-b-light-gray flex items-center justify-center">
      <div className="flex px-4 -my-6 gap-2 bg-white">
        <Avatar size="xsmall" avatar="astronaut" />
        <Typography variant="xsmall">
          {user.name} ({user.age}) has{" "}
          {type === "connection" ? "joined" : "left"} the chat
        </Typography>
      </div>
    </div>
  );
};

export default ConnectionStatusChangeEvent;
