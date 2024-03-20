"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserImg() {
  const { user } = useKindeBrowserClient();

  return (
    <Avatar>
      {user?.picture ? (
        <AvatarImage src={user.picture} />
      ) : (
        <AvatarFallback>{user?.given_name}</AvatarFallback>
      )}
    </Avatar>
  );
}
