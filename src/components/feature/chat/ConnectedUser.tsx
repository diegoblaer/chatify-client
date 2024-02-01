"use client";

import Avatar from "@/components/common/Avatar";
import Typography from "@/components/common/Typography";
import { User } from "@/utils/types";

interface ConnectedUserProps {
  user: User;
}

const ConnectedUser = ({ user }: ConnectedUserProps) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar avatar={user.avatar} size="small" />
      <Typography variant="small" className="text-white font-semibold">
        {user.name} ({user.age})
      </Typography>
    </div>
  );
};

export default ConnectedUser;
