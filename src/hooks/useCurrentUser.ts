import { Avatar, User } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const useCurrentUser = () => {
  const searchParams = useSearchParams();
  const user: User = useMemo(
    () => ({
      name: searchParams.get("name") as string,
      age: parseInt(searchParams.get("age")!) as number,
      avatar: searchParams.get("avatar") as Avatar,
    }),
    [searchParams]
  );
  return user;
};

export default useCurrentUser;
